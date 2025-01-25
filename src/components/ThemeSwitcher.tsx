/**
 * Project: Dynamic Form Generator
 * File: ThemeSwitcher.tsx
 * Description: Component to switch between different themes (light, dark, system).
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This code is designed for an interview task and demonstrates the ability to create
 *       a dynamic form generator using React, Redux, and TypeScript.
 */

import React from 'react';
import { Select } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { setThemeMode } from '../store/themeSlice';
import { 
  LaptopOutlined, 
  SunOutlined, 
  MoonOutlined 
} from '@ant-design/icons';

const ThemeSwitcher: React.FC = () => {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state: RootState) => state.theme.mode);

  const themeOptions = [
    { value: 'system', label: 'System', icon: <LaptopOutlined /> },
    { value: 'light', label: 'Light', icon: <SunOutlined /> },
    { value: 'dark', label: 'Dark', icon: <MoonOutlined /> }
  ];

  return (
    <Select
      style={{ width: 120 }}
      value={currentTheme}
      onChange={(value) => dispatch(setThemeMode(value))}
      options={themeOptions.map(option => ({
        value: option.value,
        label: (
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {option.icon}
            {option.label}
          </div>
        )
      }))}
    />
  );
};

export default ThemeSwitcher;
