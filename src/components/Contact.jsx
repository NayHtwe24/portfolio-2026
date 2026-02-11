import { useState } from 'react';
import { Typography, Form, Input, Button, Row, Col, Card, message } from 'antd';
import { MdEmail, MdLocationOn, MdSend } from 'react-icons/md';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { useThemeMode } from '../context/ThemeContext';
import { profile } from '../data/profile';

const { Title, Paragraph, Text, Link } = Typography;
const { TextArea } = Input;

// TODO: Replace these with your actual EmailJS credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

const contactInfo = [
  { icon: <MdEmail size={20} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: <MdLocationOn size={20} />, label: 'Location', value: profile.location },
  { icon: <FaGithub size={20} />, label: 'GitHub', value: 'NayHtwe24', href: profile.github },
  { icon: <FaLinkedinIn size={20} />, label: 'LinkedIn', value: 'Nay Htwe Hlaing', href: profile.linkedin },
];

export default function Contact() {
  const [form] = Form.useForm();
  const [sending, setSending] = useState(false);
  const { isDark } = useThemeMode();
  const primary = isDark ? '#8ab4f8' : '#1a73e8';

  const handleSubmit = async (values) => {
    setSending(true);
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: values.name,
          from_email: values.email,
          subject: values.subject || 'Portfolio Contact',
          message: values.message,
        },
        EMAILJS_PUBLIC_KEY,
      );
      message.success('Message sent successfully! I will get back to you soon.');
      form.resetFields();
    } catch {
      message.error('Failed to send message. Please try emailing me directly.');
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" style={{ padding: '80px 24px', maxWidth: 1100, margin: '0 auto' }}>
      <Title level={2} style={{ textAlign: 'center', marginBottom: 16 }}>
        Get in Touch
      </Title>
      <div style={{ width: 60, height: 4, background: primary, margin: '0 auto 40px', borderRadius: 2 }} />

      <Row gutter={[32, 32]}>
        <Col xs={24} md={10}>
          <Title level={4}>Contact Information</Title>
          <Paragraph style={{ color: isDark ? '#9aa0a6' : '#5f6368', marginBottom: 24 }}>
            Feel free to reach out for collaborations, opportunities, or just to say hello.
          </Paragraph>
          {contactInfo.map((info) => (
            <div key={info.label} style={{ display: 'flex', alignItems: 'center', marginBottom: 20 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  background: isDark ? 'rgba(138,180,248,0.12)' : '#e8f0fe',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 14,
                  color: primary,
                }}
              >
                {info.icon}
              </div>
              <div>
                <Text type="secondary" style={{ fontSize: 12 }}>{info.label}</Text>
                <br />
                {info.href ? (
                  <Link href={info.href} target="_blank">{info.value}</Link>
                ) : (
                  <Text>{info.value}</Text>
                )}
              </div>
            </div>
          ))}
        </Col>

        <Col xs={24} md={14}>
          <Card style={{ borderRadius: 16 }}>
            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Row gutter={16}>
                <Col xs={24} sm={12}>
                  <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please enter your name' }]}>
                    <Input placeholder="Your name" size="large" />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12}>
                  <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please enter a valid email' }]}>
                    <Input placeholder="your@email.com" size="large" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item name="subject" label="Subject">
                <Input placeholder="What's this about?" size="large" />
              </Form.Item>
              <Form.Item name="message" label="Message" rules={[{ required: true, message: 'Please enter a message' }]}>
                <TextArea rows={4} placeholder="Tell me about your project or idea..." size="large" style={{ borderRadius: 12 }} />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  block
                  loading={sending}
                  style={{
                    height: 48,
                    borderRadius: 24,
                    fontWeight: 500,
                    fontSize: 16,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8,
                  }}
                >
                  {sending ? 'Sending...' : <><MdSend size={18} /> Send Message</>}
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </section>
  );
}
