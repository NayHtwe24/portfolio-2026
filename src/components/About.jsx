import { Typography, Row, Col, Card, Statistic } from 'antd';
import { MdWork, MdCode, MdCloud, MdSmartToy } from 'react-icons/md';
import { useThemeMode } from '../context/ThemeContext';
import { profile } from '../data/profile';

const { Title, Paragraph } = Typography;

const stats = [
  { icon: <MdCode size={32} />, value: '10+', label: 'Years Experience' },
  { icon: <MdWork size={32} />, value: '10+', label: 'Projects Delivered' },
  { icon: <MdCloud size={32} />, value: 'AWS & GCP', label: 'Cloud Platforms' },
  { icon: <MdSmartToy size={32} />, value: 'AI/ML', label: 'Specialization' },
];

export default function About() {
  const { isDark } = useThemeMode();
  const primary = isDark ? '#8ab4f8' : '#1a73e8';

  return (
    <section id="about" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
        About Me
      </Title>
      <div style={{ width: 60, height: 4, background: primary, margin: '0 auto 40px', borderRadius: 2 }} />

      <Paragraph style={{ fontSize: 16, lineHeight: 1.8, textAlign: 'center', maxWidth: 800, margin: '0 auto 48px', color: isDark ? '#9aa0a6' : '#5f6368' }}>
        {profile.about}
      </Paragraph>

      <Row gutter={[24, 24]}>
        {stats.map((stat) => (
          <Col xs={12} sm={6} key={stat.label}>
            <Card hoverable style={{ textAlign: 'center', borderRadius: 16, height: '100%' }}>
              <div style={{ color: primary, marginBottom: 8, display: 'flex', justifyContent: 'center' }}>{stat.icon}</div>
              <Statistic title={stat.label} value={stat.value} valueStyle={{ fontSize: 20, fontWeight: 600 }} />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
