import { ConfigProvider, Layout, FloatButton } from 'antd';
import { MdKeyboardArrowUp } from 'react-icons/md';
import { useThemeMode } from './context/ThemeContext';
import { lightTheme, darkTheme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles.css';

export default function App() {
  const { isDark } = useThemeMode();

  return (
    <ConfigProvider theme={isDark ? darkTheme : lightTheme}>
      <Layout style={{ background: isDark ? '#202124' : '#f8f9fa' }}>
        <Navbar />
        <Layout.Content>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Contact />
        </Layout.Content>
        <Footer />
        <FloatButton.BackTop icon={<MdKeyboardArrowUp size={20} />} />
      </Layout>
    </ConfigProvider>
  );
}
