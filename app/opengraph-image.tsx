import { ImageResponse } from 'next/og';

export const alt = 'Moses Onerhime, software developer, game developer, AI engineer, and video editor';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        background: '#f5f4f0',
        color: '#131313',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24, fontWeight: 700 }}>
        <span>RUNO.DEV</span><span style={{ color: '#465d70' }}>PORTFOLIO</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
        <span style={{ fontSize: 112, fontWeight: 800, letterSpacing: -7, lineHeight: 0.85 }}>Moses<br />Onerhime.</span>
        <span style={{ fontSize: 27, color: '#484742' }}>Software, web, game, and AI developer. Video editor and creative director.</span>
      </div>
    </div>,
    size,
  );
}
