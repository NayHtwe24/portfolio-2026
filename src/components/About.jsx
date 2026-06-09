import { Typography, Row, Col, Card } from 'antd';
import { MdWork, MdCode, MdCloud, MdSmartToy } from 'react-icons/md';
import { useThemeMode } from '../context/ThemeContext';
import { profile } from '../data/profile';

const { Title, Paragraph } = Typography;

const stats = [
  { icon: <MdCode size={26} />, value: '10+', label: 'Years Experience', color: '#3b82f6' },
  { icon: <MdWork size={26} />, value: '10+', label: 'Projects Delivered', color: '#8b5cf6' },
  { icon: <MdCloud size={26} />, value: 'AWS & GCP', label: 'Cloud Platforms', color: '#10b981' },
  { icon: <MdSmartToy size={26} />, value: 'AI / ML', label: 'Specialization', color: '#f59e0b' },
];

export default function About() {
  const { isDark } = useThemeMode();
  const primary = isDark ? '#60a5fa' : '#1d4ed8';

  return (
    <section id="about" style={{ padding: '100px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
        About Me
      </Title>
      <div style={{
        width: 48, height: 4,
        background: `linear-gradient(90deg, ${primary}, #8b5cf6)`,
        margin: '0 auto 64px', borderRadius: 2,
      }} />

      <Row gutter={[64, 40]} align="middle">
        <Col xs={24} lg={14}>
          <Title level={3} style={{ marginBottom: 16, fontWeight: 700 }}>
            Passionate about building intelligent software
          </Title>
          <Paragraph style={{
            fontSize: 16,
            lineHeight: 1.85,
            color: isDark ? '#9ca3af' : '#4b5563',
            marginBottom: 28,
          }}>
            {profile.about}
          </Paragraph>
          <div style={{
            padding: '16px 20px',
            borderLeft: `3px solid ${primary}`,
            background: isDark ? 'rgba(96,165,250,0.06)' : 'rgba(29,78,216,0.04)',
            borderRadius: '0 12px 12px 0',
            color: isDark ? '#93c5fd' : '#1d4ed8',
            fontSize: 15,
            fontStyle: 'italic',
            lineHeight: 1.7,
          }}>
            "From designing robust backend APIs to crafting intuitive frontend experiences — I build end-to-end."
          </div>
        </Col>

        <Col xs={24} lg={10}>
          <Row gutter={[16, 16]}>
            {stats.map((stat) => (
              <Col xs={12} key={stat.label}>
                <Card
                  hoverable
                  style={{
                    textAlign: 'center',
                    borderRadius: 20,
                    border: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'}`,
                    background: isDark ? '#1e1e2e' : '#fff',
                    padding: '8px 0',
                  }}
                >
                  <div style={{
                    width: 52, height: 52, borderRadius: '50%',
                    background: `${stat.color}18`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 12px',
                    color: stat.color,
                  }}>
                    {stat.icon}
                  </div>
                  <div style={{ fontSize: 21, fontWeight: 800, color: stat.color, lineHeight: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ fontSize: 12, color: isDark ? '#6b7280' : '#9ca3af', marginTop: 6, fontWeight: 500 }}>
                    {stat.label}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </section>
  );
}
