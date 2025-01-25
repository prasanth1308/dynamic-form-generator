/**
 * Project: Dynamic Form Generator
 * File: themeSlice.ts
 * Description: Redux slice for managing the theme state.
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This file contains the Redux slice for managing the theme state.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type ThemeMode = 'light' | 'dark' | 'system';

interface ThemeState {
  mode: ThemeMode;
}

// Function to get the system theme (light or dark)
const getSystemTheme = (): 'light' | 'dark' => 
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

// Function to get the saved theme mode from local storage
const getSavedThemeMode = (): ThemeMode => {
  const savedMode = localStorage.getItem('themeMode') as ThemeMode | null;
  return savedMode || 'system';
};

// Initial state with the saved theme mode or default to 'system'
const initialState: ThemeState = {
  mode: getSavedThemeMode()
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
      localStorage.setItem('themeMode', action.payload); // Save the theme mode to local storage
    },
    getSystemTheme: (state) => {
      state.mode = getSystemTheme();
    }
  }
});

export const { setThemeMode } = themeSlice.actions;
export { getSystemTheme };
export default themeSlice.reducer;
