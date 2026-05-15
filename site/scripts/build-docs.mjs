import {readFileSync, writeFileSync, existsSync, readdirSync, mkdirSync, rmSync, statSync} from 'node:fs';
import {join, dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import yaml from 'js-yaml';

const REQUIRED_META_FIELDS = ['title', 'client', 'duration_days', 'duration_hours'];

export function buildDocs({coursesDir, outDir}) {
  rmSync(outDir, {recursive: true, force: true});
  mkdirSync(outDir, {recursive: true});

  const slugs = readdirSync(coursesDir).filter((name) => {
    const full = join(coursesDir, name);
    return statSync(full).isDirectory() && existsSync(join(full, 'meta.yml'));
  });

  for (const slug of slugs) {
    const dir = join(coursesDir, slug);
    const meta = loadMeta(join(dir, 'meta.yml'), slug);

    const adjusted = join(dir, 'proposal-adjusted.md');
    const original = join(dir, 'proposal-original.md');
    const proposalPath = existsSync(adjusted) ? adjusted : existsSync(original) ? original : null;

    if (!proposalPath) {
      console.warn(`[build-docs] skipping ${slug}: no proposal file`);
      continue;
    }

    const proposalBody = stripFrontmatter(readFileSync(proposalPath, 'utf8'));

    let body = proposalBody.trimEnd() + '\n';
    const outlinePath = join(dir, 'outline.md');
    if (existsSync(outlinePath)) {
      const outlineBody = stripFrontmatter(readFileSync(outlinePath, 'utf8'));
      body += '\n\n## Course Outline\n\n' + outlineBody.trimEnd() + '\n';
    }

    const frontmatter = renderFrontmatter({
      title: meta.title,
      description: `${meta.client} · ${meta.duration_days}d / ${meta.duration_hours}h`,
      slug: `/${slug}`,
    });

    writeFileSync(join(outDir, `${slug}.md`), frontmatter + '\n' + body);
    console.log(`[build-docs] wrote ${slug}.md (source: ${proposalPath === adjusted ? 'adjusted' : 'original'})`);
  }
}

function loadMeta(path, slug) {
  let parsed;
  try {
    parsed = yaml.load(readFileSync(path, 'utf8'));
  } catch (err) {
    throw new Error(`Failed to parse meta.yml for ${slug}: ${err.message}`);
  }
  if (!parsed || typeof parsed !== 'object') {
    throw new Error(`Empty or invalid meta.yml for ${slug}`);
  }
  for (const field of REQUIRED_META_FIELDS) {
    if (parsed[field] == null) {
      throw new Error(`meta.yml for ${slug} missing required field: ${field}`);
    }
  }
  return parsed;
}

function stripFrontmatter(text) {
  if (!text.startsWith('---\n')) return text;
  const end = text.indexOf('\n---', 4);
  if (end === -1) return text;
  return text.slice(end + 4).replace(/^\n+/, '');
}

function renderFrontmatter(fields) {
  const lines = ['---'];
  for (const [k, v] of Object.entries(fields)) {
    if (k === 'slug') {
      lines.push(`${k}: ${v}`);
    } else {
      lines.push(`${k}: "${String(v).replace(/"/g, '\\"')}"`);
    }
  }
  lines.push('sidebar_class_name: hidden');
  lines.push('---');
  return lines.join('\n');
}

const isMain = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const here = dirname(fileURLToPath(import.meta.url));
  const repoRoot = resolve(here, '..', '..');
  buildDocs({
    coursesDir: join(repoRoot, 'courses'),
    outDir: join(repoRoot, 'site', 'docs'),
  });
}
