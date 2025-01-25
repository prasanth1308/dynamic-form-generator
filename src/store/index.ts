/**
 * Project: Dynamic Form Generator
 * File: index.ts
 * Description: Entry point for the Redux store configuration.
 * Author: Prasanth Ravi
 * Created On: January 25, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This file sets up and exports the Redux store for the application.
 */

import { configureStore } from '@reduxjs/toolkit';
import formSchemaReducer from './formSchemaSlice';
import themeReducer from './themeSlice';

export const store = configureStore({
  reducer: {
    formSchema: formSchemaReducer,
    theme: themeReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;