/**
 * Project: Dynamic Form Generator
 * File: vitest.config.ts
 * Description: Configuration file for Vite test runner.
 * Author: Prasanth Ravi
 * Created On: January 27, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This configuration sets up Vite to work with a React project.
 */

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './setupTests.ts',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    extensions: ['.js', '.ts', '.tsx'],
  },
});
