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

const getSystemTheme = (): 'light' | 'dark' => 
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

const initialState: ThemeState = {
  mode: 'system'
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setThemeMode: (state, action: PayloadAction<ThemeMode>) => {
      state.mode = action.payload;
    }
  }
});

export const { setThemeMode } = themeSlice.actions;
export { getSystemTheme };
export default themeSlice.reducer;
