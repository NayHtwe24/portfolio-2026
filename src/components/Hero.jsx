import { Typography, Button, Row, Col } from 'antd';
import { MdEmail, MdLocationOn } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useThemeMode } from '../context/ThemeContext';
import { profile } from '../data/profile';
import profileImage from '../images/profile.jpeg';

const { Title, Paragraph } = Typography;

export default function Hero() {
  const { isDark } = useThemeMode();

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: isDark
          ? 'linear-gradient(135deg, #0d0d1a 0%, #1a1a2e 50%, #0f3460 100%)'
          : 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 60%, #3b82f6 100%)',
        padding: '120px 24px 80px',
      }}
    >
      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', width: 600, height: 600, borderRadius: '50%',
        background: 'rgba(99,102,241,0.12)', filter: 'blur(100px)',
        top: -150, right: -100, pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', width: 400, height: 400, borderRadius: '50%',
        background: 'rgba(59,130,246,0.1)', filter: 'blur(80px)',
        bottom: -80, left: -80, pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <Row align="middle" gutter={[48, 48]}>

          {/* Left: Text */}
          <Col xs={{ span: 24, order: 2 }} lg={{ span: 14, order: 1 }}>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 16px', borderRadius: 20,
              background: 'rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.2)',
              marginBottom: 24,
            }}>
              <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.9)', fontWeight: 500, letterSpacing: 0.5 }}>
                👋 Hello, I'm
              </span>
            </div>

            <Title style={{
              color: '#fff',
              margin: 0,
              fontSize: 'clamp(38px, 5vw, 62px)',
              lineHeight: 1.1,
              fontWeight: 800,
              letterSpacing: -1,
            }}>
              {profile.name}
            </Title>

            <div style={{
              fontSize: 'clamp(18px, 2.5vw, 26px)',
              color: 'rgba(255,255,255,0.8)',
              fontWeight: 400,
              marginTop: 14,
              marginBottom: 18,
            }}>
              {profile.title}
            </div>

            <Paragraph style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: 16,
              lineHeight: 1.8,
              marginBottom: 14,
              maxWidth: 520,
            }}>
              {profile.subtitle}
            </Paragraph>

            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 6,
              color: 'rgba(255,255,255,0.55)',
              fontSize: 14,
              marginBottom: 40,
            }}>
              <MdLocationOn size={15} />
              {profile.location}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button
                size="large"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                style={{
                  background: '#fff',
                  color: '#1d4ed8',
                  border: 'none',
                  fontWeight: 600,
                  height: 52,
                  paddingInline: 32,
                  borderRadius: 26,
                  fontSize: 15,
                  display: 'flex', alignItems: 'center', gap: 8,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
                }}
              >
                <MdEmail size={18} /> Get in Touch
              </Button>
              <Button
                size="large"
                href={profile.github}
                target="_blank"
                style={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.35)',
                  background: 'rgba(255,255,255,0.08)',
                  height: 52,
                  paddingInline: 28,
                  borderRadius: 26,
                  fontSize: 15,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}
              >
                <FaGithub size={18} /> GitHub
              </Button>
              <Button
                size="large"
                href={profile.linkedin}
                target="_blank"
                style={{
                  color: '#fff',
                  borderColor: 'rgba(255,255,255,0.35)',
                  background: 'rgba(255,255,255,0.08)',
                  height: 52,
                  paddingInline: 28,
                  borderRadius: 26,
                  fontSize: 15,
                  display: 'flex', alignItems: 'center', gap: 8,
                }}
              >
                <FaLinkedinIn size={18} /> LinkedIn
              </Button>
            </div>
          </Col>

          {/* Right: Photo */}
          <Col xs={{ span: 24, order: 1 }} lg={{ span: 10, order: 2 }} style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              {/* Outer dashed ring */}
              <div style={{
                position: 'absolute', inset: -28,
                borderRadius: '50%',
                border: '1px dashed rgba(255,255,255,0.2)',
              }} />
              {/* Inner ring */}
              <div style={{
                position: 'absolute', inset: -10,
                borderRadius: '50%',
                border: '2px solid rgba(255,255,255,0.15)',
              }} />
              {/* Photo */}
              <div style={{
                width: 270,
                height: 270,
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid rgba(255,255,255,0.45)',
                boxShadow: '0 24px 60px rgba(0,0,0,0.45), 0 0 0 10px rgba(255,255,255,0.04)',
              }}>
                <img
                  src={profileImage}
                  alt={profile.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              {/* Floating badge: Years */}
              <div style={{
                position: 'absolute', bottom: 16, left: -52,
                background: isDark ? '#1e293b' : '#fff',
                borderRadius: 14,
                padding: '10px 16px',
                boxShadow: '0 8px 28px rgba(0,0,0,0.3)',
              }}>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#3b82f6', lineHeight: 1 }}>10+</div>
                <div style={{ fontSize: 11, color: '#6b7280', marginTop: 3, fontWeight: 500 }}>Years Exp.</div>
              </div>

              {/* Floating badge: AI/ML */}
              <div style={{
                position: 'absolute', top: 16, right: -58,
                background: isDark ? '#1e293b' : '#fff',
                borderRadius: 14,
                padding: '10px 16px',
                boxShadow: '0 8px 28px rgba(0,0,0,0.3)',
              }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#8b5cf6', lineHeight: 1.2 }}>AI / ML</div>
                <div style={{ fontSize: 11, color: '#6b7280', marginTop: 3, fontWeight: 500 }}>Engineer</div>
              </div>
            </div>
          </Col>

        </Row>
      </div>
    </section>
  );
}
