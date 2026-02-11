import { Typography, Button, Space, Flex } from 'antd';
import { MdEmail, MdArrowForward } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useThemeMode } from '../context/ThemeContext';
import { profile } from '../data/profile';

const { Title, Paragraph } = Typography;

export default function Hero() {
  const { isDark } = useThemeMode();

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark
          ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)'
          : 'linear-gradient(135deg, #174ea6 0%, #1a73e8 50%, #4285f4 100%)',
        padding: '120px 24px 80px',
      }}
    >
      <Flex vertical align="center" style={{ maxWidth: 700, textAlign: 'center' }}>
        <div
          style={{
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 32,
            border: '3px solid rgba(255,255,255,0.3)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ fontSize: 48, fontWeight: 700, color: '#fff' }}>NH</span>
        </div>
        <Title style={{ color: '#fff', margin: 0, fontSize: 42 }}>
          {profile.name}
        </Title>
        <Title level={3} style={{ color: 'rgba(255,255,255,0.9)', fontWeight: 400, marginTop: 8 }}>
          {profile.title}
        </Title>
        <Paragraph style={{ color: 'rgba(255,255,255,0.75)', fontSize: 18, marginBottom: 36 }}>
          {profile.subtitle}
        </Paragraph>
        <Space size="middle" wrap style={{ justifyContent: 'center' }}>
          <Button
            type="primary"
            size="large"
            icon={<MdEmail size={18} />}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            style={{
              background: '#fff',
              color: isDark ? '#0f3460' : '#1a73e8',
              border: 'none',
              fontWeight: 500,
              height: 48,
              paddingInline: 28,
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            Get in Touch <MdArrowForward size={16} />
          </Button>
          <Button
            size="large"
            icon={<FaGithub size={18} />}
            href={profile.github}
            target="_blank"
            style={{
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.4)',
              background: 'rgba(255,255,255,0.1)',
              fontWeight: 500,
              height: 48,
              paddingInline: 28,
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            GitHub
          </Button>
          <Button
            size="large"
            icon={<FaLinkedinIn size={18} />}
            href={profile.linkedin}
            target="_blank"
            style={{
              color: '#fff',
              borderColor: 'rgba(255,255,255,0.4)',
              background: 'rgba(255,255,255,0.1)',
              fontWeight: 500,
              height: 48,
              paddingInline: 28,
              borderRadius: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
            }}
          >
            LinkedIn
          </Button>
        </Space>
      </Flex>
    </section>
  );
}
