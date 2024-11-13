import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}']},
  {languageOptions: { globals: globals.browser }},
  {rules: {
      'semi': ['error', 'always'],                 // Enforce semicolons
      'quotes': ['error', 'single'],               // Enforce single quotes
      'no-unused-vars': ['warn'],                  // Warn on unused variables
      'react/react-in-jsx-scope': 'off'            // Turn off React in-scope rule for JSX
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
];