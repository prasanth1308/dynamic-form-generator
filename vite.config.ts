/**
 * Project: Dynamic Form Generator
 * File: vite.config.ts
 * Description: Configuration file for Vite, a build tool for modern web projects.
 * Author: Prasanth Ravi
 * Created On: January 24, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This configuration sets up Vite to work with a React project.
 */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
})
