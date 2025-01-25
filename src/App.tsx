/**
 * Project: Dynamic Form Generator
 * File: App.tsx
 * Description: Main application component that includes the layout and dynamic form.
 * Author: Prasanth Ravi
 * Created On: January 24, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This file sets up the main layout and integrates the JSON schema editor and dynamic form components.
 */

import React, { useEffect } from 'react';
import { Layout, Row, Col, ConfigProvider, theme } from 'antd';
import { UserOutlined } from "@ant-design/icons";
import JSONSchemaEditor from './components/JSONSchemaEditor';
import DynamicForm from './components/DynamicForm';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './store';
import { setThemeMode, getSystemTheme } from './store/themeSlice';
import ThemeSwitcher from './components/ThemeSwitcher';
import './index.css';

const { Header, Content, Footer } = Layout;
const { darkAlgorithm, defaultAlgorithm } = theme;

const App: React.FC = () => {

  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  useEffect(() => {
    const systemThemeListener = (e: MediaQueryListEvent) => {
      if (themeMode === 'system') {
        dispatch(setThemeMode(e.matches ? 'dark' : 'light'));
      }
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', systemThemeListener);

    return () => {
      mediaQuery.removeEventListener('change', systemThemeListener);
    };
  }, [themeMode, dispatch]);

  const getThemeAlgorithm = () => {
    if (themeMode === 'dark' || (themeMode === 'system' && getSystemTheme() === 'dark')) {
      return darkAlgorithm;
    }
    return defaultAlgorithm;
  };


  return (
    <ConfigProvider
      theme={{
        algorithm: getThemeAlgorithm(),
        components: {
          Layout: {
            headerBackground: getThemeAlgorithm() === darkAlgorithm ? '#001529' : '#f0f2f5',
            footerBackground: getThemeAlgorithm() === darkAlgorithm ? '#001529' : '#f0f2f5'
          }
        }
      }}
    >
      <Layout>
        <Header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            position: "sticky",
            top: 0,
            zIndex: 1,
            width: "100%",
            backgroundColor: '#001529',
            color: 'white',
            height: 64,
          }}>
          <div style={{ color: "white", fontSize: "20px" }}>Dynamic Form Generator</div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <ThemeSwitcher />
            <div style={{ color: "white" }}>Welcome, User</div>
            <UserOutlined style={{ color: "white", fontSize: "20px" }} />
          </div>
        </Header>
        <Content style={{ padding: "24px", minHeight: "calc(100vh - 134px)" }}>
          <Row gutter={16}>
            <Col span={8}>
              <JSONSchemaEditor />
            </Col>
            <Col span={16}>
              <DynamicForm />
            </Col>
          </Row>
        </Content>
        <Footer style={{ textAlign: "center", height: 64 }}>
          Dynamic Form Generator ©{new Date().getFullYear()}
        </Footer>
      </Layout>
    </ConfigProvider>
  );
};

export default App;
