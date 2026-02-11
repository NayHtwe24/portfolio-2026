import { Typography, Row, Col, Card, Tag } from 'antd';
import { useThemeMode } from '../context/ThemeContext';
import { skills } from '../data/profile';

const { Title } = Typography;

export default function Skills() {
  const { isDark } = useThemeMode();
  const primary = isDark ? '#8ab4f8' : '#1a73e8';

  return (
    <section id="skills" style={{ padding: '80px 24px', background: isDark ? '#292a2d' : '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
          Skills & Expertise
        </Title>
        <div style={{ width: 60, height: 4, background: primary, margin: '0 auto 40px', borderRadius: 2 }} />

        <Row gutter={[24, 24]}>
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <Col xs={24} sm={12} lg={8} key={skill.title}>
                <Card hoverable style={{ height: '100%', borderRadius: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: isDark ? `${skill.color}20` : `${skill.color}14`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: 12,
                      }}
                    >
                      <Icon size={24} style={{ color: skill.color }} />
                    </div>
                    <Title level={4} style={{ margin: 0 }}>{skill.title}</Title>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {skill.items.map((item) => (
                      <Tag
                        key={item}
                        style={{
                          margin: 0,
                          borderRadius: 20,
                          padding: '4px 14px',
                          background: isDark ? `${skill.color}18` : `${skill.color}10`,
                          color: skill.color,
                          border: isDark ? `1px solid ${skill.color}40` : `1px solid ${skill.color}30`,
                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </Tag>
                    ))}
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </section>
  );
}
