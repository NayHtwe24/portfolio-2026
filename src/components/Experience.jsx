import { Typography, Timeline, Tag, Card } from 'antd';
import { MdAccessTime, MdLocationOn } from 'react-icons/md';
import { useThemeMode } from '../context/ThemeContext';
import { experience } from '../data/profile';

const { Title, Paragraph, Text } = Typography;

export default function Experience() {
  const { isDark } = useThemeMode();
  const primary = isDark ? '#8ab4f8' : '#1a73e8';

  return (
    <section id="experience" style={{ padding: '80px 24px', maxWidth: 900, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
        Experience
      </Title>
      <div style={{ width: 60, height: 4, background: primary, margin: '0 auto 40px', borderRadius: 2 }} />

      <Timeline
        mode="left"
        items={experience.map((exp) => ({
          dot: <MdAccessTime size={18} style={{ color: primary }} />,
          color: primary,
          children: (
            <Card style={{ marginBottom: 16, borderRadius: 16 }}>
              <Tag
                style={{
                  borderRadius: 20,
                  padding: '2px 12px',
                  background: isDark ? 'rgba(138,180,248,0.12)' : '#e8f0fe',
                  color: primary,
                  border: 'none',
                  fontWeight: 500,
                  marginBottom: 8,
                }}
              >
                {exp.period}
              </Tag>
              <Title level={4} style={{ margin: '8px 0 4px' }}>{exp.role}</Title>
              <Text strong style={{ color: primary, fontSize: 16 }}>{exp.company}</Text>
              {exp.location && (
                <div style={{ marginTop: 4, display: 'flex', alignItems: 'center', gap: 4 }}>
                  <MdLocationOn size={14} style={{ color: isDark ? '#9aa0a6' : '#5f6368' }} />
                  <Text type="secondary" style={{ fontSize: 13 }}>{exp.location}</Text>
                </div>
              )}
              <Paragraph style={{ marginTop: 12, color: isDark ? '#9aa0a6' : '#5f6368' }}>
                {exp.description}
              </Paragraph>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                {exp.tags.map((tag) => (
                  <Tag
                    key={tag}
                    style={{
                      borderRadius: 20,
                      padding: '2px 12px',
                      background: isDark ? '#3c4043' : '#f1f3f4',
                      color: isDark ? '#e8eaed' : '#3c4043',
                      border: 'none',
                    }}
                  >
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
          ),
        }))}
      />
    </section>
  );
}
