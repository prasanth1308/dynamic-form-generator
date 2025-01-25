/**
 * Project: Dynamic Form Generator
 * File: eslint.config.js
 * Description: Configuration file for ESLint, a tool for identifying and reporting on patterns in JavaScript.
 * Author: Prasanth Ravi
 * Created On: January 24, 2025
 * Version: 1.0.0
 *
 * License: Unlicensed
 * Note: This configuration sets up ESLint to work with a React and TypeScript project.
 */

import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
