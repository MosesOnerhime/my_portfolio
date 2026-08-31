import { ImageResponse } from 'next/og';
import { getProject } from '../../data/projects';

export const alt = 'Project case study by Moses Onerhime';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);

  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: '#131313',
        color: '#fffdf8',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#aeb8c0' }}>
        <span>RUNO.DEV</span><span>CASE STUDY</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <span style={{ fontSize: 25, color: '#aeb8c0', textTransform: 'uppercase', letterSpacing: 3 }}>{project?.label ?? 'Selected work'}</span>
        <span style={{ fontSize: 92, fontWeight: 800, letterSpacing: -5, lineHeight: 0.95 }}>{project?.title ?? 'Project'}</span>
        <span style={{ fontSize: 28, color: '#d8d6d0' }}>Moses Onerhime</span>
      </div>
    </div>,
    size,
  );
}
