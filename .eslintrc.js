module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  ignorePatterns: ['coverage/'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:jest/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:storybook/recommended',
    'prettier', // Make sure this is always the last element in the array.
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    project: './tsconfig.json',
    sourceType: 'module',
  },
  plugins: [
    'import',
    'jest',
    'jsx-a11y',
    'prettier',
    'promise',
    'react',
    'react-hooks',
    'simple-import-sort',
    '@typescript-eslint',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  rules: {
    'comma-dangle': 'off',
    'eol-last': ['error', 'always'],
    'no-console': [
      'error',
      {
        allow: ['warn', 'error'],
      },
    ],
    'require-await': 'error',
    'import/no-unresolved': 'error',
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          ['index', 'sibling', 'parent', 'internal'],
        ],
        'newlines-between': 'always',
      },
    ],
    'jest/expect-expect': [
      'error',
      {
        assertFunctionNames: [
          'expect',
          '**.should',
          '**.contains',
          '**.get',
          '**.and',
          'cy.*',
        ],
      },
    ],
    'jest/valid-expect-in-promise': 'off',
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'es5',
        endOfLine: 'auto',
      },
    ],
    'react/button-has-type': 'error',
    'react/destructuring-assignment': 'error',
    'react/display-name': 'off',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'error',
    'react/no-array-index-key': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-unused-state': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/self-closing-comp': 'error',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        ignoreRestSiblings: true,
      },
    ],
    'no-template-curly-in-string': 'warn',
    'no-implicit-coercion': 'warn',
    'no-else-return': 'warn',
    curly: 'error',
    // eqeqeq: 'error',
  },
  overrides: [
    {
      files: ['cypress/**/*.ts'],
      rules: {
        '@typescript-eslint/no-namespace': 'off',
      },
    },
  ],
};
