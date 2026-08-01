import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get('title') || 'The Aqua Retreat at Godrej Park World';
    const subtitle = searchParams.get('subtitle') || 'Hinjewadi Phase 1, Pune';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#15181E', // luxury-dark
            backgroundImage: 'linear-gradient(to bottom, #15181E, #0d1015)',
            fontFamily: 'sans-serif',
          }}
        >
          {/* Subtle Decorative Elements */}
          <div
            style={{
              position: 'absolute',
              top: '-10%',
              left: '-10%',
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle, rgba(0, 168, 142, 0.15) 0%, rgba(21, 24, 30, 0) 70%)', // emerald-aqua glow
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-10%',
              right: '-10%',
              width: '50%',
              height: '50%',
              background: 'radial-gradient(circle, rgba(0, 168, 142, 0.15) 0%, rgba(21, 24, 30, 0) 70%)',
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '40px 80px',
              textAlign: 'center',
              zIndex: 10,
            }}
          >
            <h2
              style={{
                color: '#00A88E', // emerald-aqua
                fontSize: 32,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                marginBottom: 20,
                fontWeight: 600,
              }}
            >
              Godrej Properties Pune
            </h2>
            <h1
              style={{
                color: '#FAFAFA',
                fontSize: 72,
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: 30,
                maxWidth: '900px',
              }}
            >
              {title}
            </h1>
            <p
              style={{
                color: '#A0A0A0',
                fontSize: 36,
                fontWeight: 400,
              }}
            >
              {subtitle}
            </p>
          </div>
          
          <div
            style={{
              position: 'absolute',
              bottom: 40,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              width: '80%',
              paddingTop: 30,
            }}
          >
            <span style={{ color: '#FAFAFA', fontSize: 24, letterSpacing: '0.1em' }}>
              godrejaquaretreat.godrejparkworld.com
            </span>
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e: any) {
    console.error(e);
    return new Response('Failed to generate image', { status: 500 });
  }
}
