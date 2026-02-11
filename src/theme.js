import { theme as antTheme } from 'antd';

const shared = {
  borderRadius: 24,
  borderRadiusLG: 28,
  borderRadiusSM: 16,
  fontFamily: "'Google Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  controlHeight: 40,
  controlHeightLG: 48,
};

const sharedComponents = {
  Button: {
    borderRadius: 20,
    borderRadiusLG: 24,
    borderRadiusSM: 16,
    controlHeight: 40,
    controlHeightLG: 48,
    fontWeight: 500,
  },
  Card: {
    borderRadiusLG: 16,
  },
  Input: {
    borderRadius: 12,
    borderRadiusLG: 16,
  },
  Tag: {
    borderRadiusSM: 20,
  },
  Menu: {
    itemBorderRadius: 20,
  },
};

export const lightTheme = {
  algorithm: antTheme.defaultAlgorithm,
  token: {
    ...shared,
    colorPrimary: '#1a73e8',
    colorSuccess: '#34a853',
    colorWarning: '#fbbc04',
    colorError: '#ea4335',
    colorBgContainer: '#ffffff',
    colorBgLayout: '#f8f9fa',
    colorText: '#202124',
    colorTextSecondary: '#5f6368',
  },
  components: {
    ...sharedComponents,
    Layout: {
      headerBg: '#ffffff',
      bodyBg: '#f8f9fa',
      footerBg: '#202124',
    },
  },
};

export const darkTheme = {
  algorithm: antTheme.darkAlgorithm,
  token: {
    ...shared,
    colorPrimary: '#8ab4f8',
    colorSuccess: '#81c995',
    colorWarning: '#fdd663',
    colorError: '#f28b82',
    colorBgContainer: '#292a2d',
    colorBgLayout: '#202124',
    colorText: '#e8eaed',
    colorTextSecondary: '#9aa0a6',
  },
  components: {
    ...sharedComponents,
    Layout: {
      headerBg: '#292a2d',
      bodyBg: '#202124',
      footerBg: '#171717',
    },
  },
};
