import { Layout, Menu, Button, Drawer } from 'antd';
import { MdMenu, MdLightMode, MdDarkMode } from 'react-icons/md';
import { useState } from 'react';
import { useThemeMode } from '../context/ThemeContext';

const { Header } = Layout;

const menuItems = [
  { key: 'about', label: 'About' },
  { key: 'skills', label: 'Skills' },
  { key: 'experience', label: 'Experience' },
  { key: 'projects', label: 'Projects' },
  { key: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { isDark, toggle } = useThemeMode();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setDrawerOpen(false);
  };

  return (
    <Header
      style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '0 24px',
        boxShadow: isDark
          ? '0 1px 3px rgba(0,0,0,0.3)'
          : '0 1px 3px rgba(0,0,0,0.08)',
        background: isDark ? '#292a2d' : '#fff',
      }}
    >
      <div
        style={{
          fontWeight: 700,
          fontSize: 20,
          cursor: 'pointer',
          color: isDark ? '#8ab4f8' : '#1a73e8',
          background: isDark ? 'rgba(138,180,248,0.12)' : '#e8f0fe',
          width: 40,
          height: 40,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        N
      </div>

      <div style={{ display: 'flex', alignItems: 'center', flex: 1, justifyContent: 'flex-end' }}>
        <Menu
          mode="horizontal"
          selectable={false}
          items={menuItems.map((item) => ({
            ...item,
            onClick: () => scrollTo(item.key),
          }))}
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            borderBottom: 'none',
            background: 'transparent',
          }}
          className="desktop-menu"
        />

        <Button
          type="text"
          onClick={toggle}
          icon={isDark ? <MdLightMode size={20} /> : <MdDarkMode size={20} />}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 40,
            height: 40,
            borderRadius: '50%',
            color: isDark ? '#fdd663' : '#5f6368',
            marginLeft: 8,
          }}
        />

        <Button
          type="text"
          icon={<MdMenu size={24} />}
          className="mobile-menu-btn"
          onClick={() => setDrawerOpen(true)}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        />
      </div>

      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        styles={{ header: { borderBottom: 'none' } }}
      >
        <Menu
          mode="vertical"
          selectable={false}
          items={menuItems.map((item) => ({
            ...item,
            onClick: () => scrollTo(item.key),
          }))}
          style={{ borderInlineEnd: 'none' }}
        />
      </Drawer>
    </Header>
  );
}
