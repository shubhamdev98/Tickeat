import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import prettier from 'eslint-plugin-prettier'
import { defineConfig } from 'eslint/config'

// Flat config combining JS, TypeScript and React sensible defaults,
// plus a few project-specific stylistic rules and Prettier integration.
export default defineConfig([
  // JavaScript recommended rules
  {
    files: ['**/*.{js,mjs,cjs,jsx}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: { globals: globals.node },
  },

  // TypeScript recommended rules (flat-style provided by typescript-eslint)
  tseslint.configs.recommended,

  // React plugin recommended rules (flat)
  react.configs?.flat?.recommended ?? react.configs?.recommended,

  // Project-level overrides and stylistic rules
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    rules: {
      // Don't enforce stylistic rules here; Prettier handles formatting.
      // Keep a few functional and safety rules.
      'no-console': [1, { allow: ['warn', 'error'] }],

      // TS-specific: let the TS compiler handle some checks; enforce unused vars but allow _prefix.
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],

      // React hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Disable rule for new JSX transform (React in scope not required)
      'react/react-in-jsx-scope': 'off',

      // Integrate Prettier as warning to surface formatting issues (optional)
      'prettier/prettier': [1],
    },
    plugins: { 'react-hooks': reactHooks, prettier: prettier, react: react },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
    settings: {
      react: { version: 'detect' },
    },
  },
])
