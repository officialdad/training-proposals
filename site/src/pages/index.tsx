import Layout from '@theme/Layout';

export default function Home(): JSX.Element {
  return (
    <Layout title="Training Proposals" description="Per-course shareable proposals">
      <main style={{padding: '4rem 1rem', maxWidth: 640, margin: '0 auto'}}>
        <h1>Training Proposals</h1>
        <p>
          This site hosts individual training proposals at unlisted URLs.
          If someone shared a link with you, open it directly. There is no
          index of courses here.
        </p>
      </main>
    </Layout>
  );
}
