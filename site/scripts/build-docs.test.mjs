import {test} from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, mkdirSync, writeFileSync, readFileSync, existsSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {buildDocs} from './build-docs.mjs';

function setupRepo() {
  const root = mkdtempSync(join(tmpdir(), 'tp-test-'));
  const coursesDir = join(root, 'courses');
  const outDir = join(root, 'site', 'docs');
  mkdirSync(coursesDir, {recursive: true});
  return {root, coursesDir, outDir};
}

function makeCourse(coursesDir, slug, files) {
  const dir = join(coursesDir, slug);
  mkdirSync(dir, {recursive: true});
  for (const [name, body] of Object.entries(files)) {
    writeFileSync(join(dir, name), body);
  }
  return dir;
}

const baseMeta = (slug) => `slug: ${slug}
title: "Test ${slug}"
client: "Acme"
source: self
status: draft
duration_days: 1
duration_hours: 8
classification: "Digital Skills"
prepared_for: "Some date"
created: 2026-01-01
updated: 2026-01-01
`;

test('picks adjusted when both adjusted and original exist', () => {
  const {coursesDir, outDir} = setupRepo();
  makeCourse(coursesDir, 'foo', {
    'meta.yml': baseMeta('foo'),
    'proposal-original.md': '# original body\n',
    'proposal-adjusted.md': '# adjusted body\n',
  });

  buildDocs({coursesDir, outDir});

  const out = readFileSync(join(outDir, 'foo.md'), 'utf8');
  assert.match(out, /adjusted body/);
  assert.doesNotMatch(out, /original body/);
});

test('picks original when only original exists', () => {
  const {coursesDir, outDir} = setupRepo();
  makeCourse(coursesDir, 'foo', {
    'meta.yml': baseMeta('foo'),
    'proposal-original.md': '# original body\n',
  });

  buildDocs({coursesDir, outDir});

  const out = readFileSync(join(outDir, 'foo.md'), 'utf8');
  assert.match(out, /original body/);
});

test('appends outline section when outline.md exists', () => {
  const {coursesDir, outDir} = setupRepo();
  makeCourse(coursesDir, 'foo', {
    'meta.yml': baseMeta('foo'),
    'proposal-original.md': '# proposal body\n',
    'outline.md': '# outline body\n',
  });

  buildDocs({coursesDir, outDir});

  const out = readFileSync(join(outDir, 'foo.md'), 'utf8');
  assert.match(out, /proposal body/);
  assert.match(out, /## Course Outline/);
  assert.match(out, /outline body/);
});

test('emits frontmatter with title, description, slug, hidden sidebar', () => {
  const {coursesDir, outDir} = setupRepo();
  makeCourse(coursesDir, 'foo', {
    'meta.yml': baseMeta('foo'),
    'proposal-original.md': '# body\n',
  });

  buildDocs({coursesDir, outDir});

  const out = readFileSync(join(outDir, 'foo.md'), 'utf8');
  assert.match(out, /^---\n/);
  assert.match(out, /title: "Test foo"/);
  assert.match(out, /description: "Acme · 1d \/ 8h"/);
  assert.match(out, /slug: \/foo/);
  assert.match(out, /sidebar_class_name: hidden/);
});

test('ignores adjustment-notes.md entirely', () => {
  const {coursesDir, outDir} = setupRepo();
  makeCourse(coursesDir, 'foo', {
    'meta.yml': baseMeta('foo'),
    'proposal-adjusted.md': '# adjusted body\n',
    'adjustment-notes.md': '# SECRET internal notes\n',
  });

  buildDocs({coursesDir, outDir});

  const out = readFileSync(join(outDir, 'foo.md'), 'utf8');
  assert.doesNotMatch(out, /SECRET/);
  assert.doesNotMatch(out, /internal notes/);
});

test('skips course with neither proposal file (no output, no throw)', () => {
  const {coursesDir, outDir} = setupRepo();
  makeCourse(coursesDir, 'foo', {
    'meta.yml': baseMeta('foo'),
  });

  buildDocs({coursesDir, outDir});

  assert.equal(existsSync(join(outDir, 'foo.md')), false);
});

test('throws on malformed meta.yml', () => {
  const {coursesDir, outDir} = setupRepo();
  makeCourse(coursesDir, 'foo', {
    'meta.yml': 'this is: : not: valid: yaml',
    'proposal-original.md': '# body\n',
  });

  assert.throws(() => buildDocs({coursesDir, outDir}), /foo/);
});
