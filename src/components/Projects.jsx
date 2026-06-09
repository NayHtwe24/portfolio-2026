import { Typography, Row, Col, Card, Tag } from 'antd';
import { MdLock, MdOpenInNew } from 'react-icons/md';
import { useThemeMode } from '../context/ThemeContext';
import { projects } from '../data/profile';

const { Title, Paragraph } = Typography;

export default function Projects() {
  const { isDark } = useThemeMode();
  const primary = isDark ? '#8ab4f8' : '#1a73e8';

  return (
    <section id="projects" style={{ padding: '80px 24px', background: isDark ? '#292a2d' : '#fff' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
          Projects
        </Title>
        <div style={{ width: 60, height: 4, background: primary, margin: '0 auto 40px', borderRadius: 2 }} />

        <Row gutter={[24, 24]}>
          {projects.map((project) => (
            <Col xs={24} sm={12} lg={8} key={project.title}>
              <Card
                hoverable
                style={{
                  height: '100%',
                  borderRadius: 16,
                  borderTop: `4px solid ${project.color}`,
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      background: isDark ? `${project.color}20` : `${project.color}14`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 18,
                      fontWeight: 700,
                      color: project.color,
                    }}
                  >
                    {project.title.charAt(0)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 4,
                          padding: '3px 10px',
                          borderRadius: 20,
                          background: isDark ? `${project.color}20` : `${project.color}14`,
                          color: project.color,
                          fontSize: 11,
                          fontWeight: 500,
                          textDecoration: 'none',
                        }}
                      >
                        <MdOpenInNew size={11} />
                        Visit
                      </a>
                    )}
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                        padding: '3px 10px',
                        borderRadius: 20,
                        background: isDark ? 'rgba(255,255,255,0.06)' : '#f1f3f4',
                        color: isDark ? '#9aa0a6' : '#5f6368',
                        fontSize: 11,
                        fontWeight: 500,
                      }}
                    >
                      <MdLock size={11} />
                      Private
                    </div>
                  </div>
                </div>
                <Title level={4} style={{ marginTop: 0 }}>{project.title}</Title>
                <Paragraph style={{ color: isDark ? '#9aa0a6' : '#5f6368' }}>{project.description}</Paragraph>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                  {project.tags.map((tag) => (
                    <Tag
                      key={tag}
                      style={{
                        margin: 0,
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
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
}
