import { Layout, Typography, Space } from 'antd';
import { MdEmail } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { useThemeMode } from '../context/ThemeContext';
import { profile } from '../data/profile';

const { Text } = Typography;

const socialLinks = [
  { icon: <FaGithub size={20} />, href: profile.github },
  { icon: <FaLinkedinIn size={20} />, href: profile.linkedin },
  { icon: <MdEmail size={20} />, href: `mailto:${profile.email}` },
];

export default function Footer() {
  const { isDark } = useThemeMode();

  return (
    <Layout.Footer
      style={{
        textAlign: 'center',
        background: isDark ? '#171717' : '#202124',
        padding: '32px 24px',
      }}
    >
      <Space size="middle" style={{ marginBottom: 16 }}>
        {socialLinks.map((link, i) => (
          <a
            key={i}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.08)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.7)',
              transition: 'background 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.16)'}
            onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
          >
            {link.icon}
          </a>
        ))}
      </Space>
      <br />
      <Text style={{ color: 'rgba(255,255,255,0.45)' }}>
        &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
      </Text>
    </Layout.Footer>
  );
}
