module.exports = {
  root: true,
  env: {
    browser: true,
    es2022: true,
    node: true,
  },
  extends: ['next/core-web-vitals', 'plugin:tailwindcss/recommended', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  plugins: ['@typescript-eslint', 'tailwindcss', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
    react: {
      version: '18.3',
    },
    tailwindcss: {
      config: 'tailwind.config.ts',
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/prop-types': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'jsx-a11y/click-events-have-key-events': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/consistent-type-imports': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-duplicates': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unescaped-entities': 'off',
    'react/button-has-type': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/no-danger': 'warn',
    'jsx-a11y/no-redundant-roles': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'warn',
    'tailwindcss/enforces-shorthand': 'warn',
    'tailwindcss/migration-from-tailwind-2': 'warn',
    'tailwindcss/no-unnecessary-arbitrary-value': 'warn',
    'no-console': 'warn',
    'arrow-body-style': 'off',
    'consistent-return': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'import/no-mutable-exports': 'off',
    'prefer-template': 'off',
  },
  overrides: [
    {
      files: ['**/*.config.*', '**/*.setup.*'],
      rules: {
        'import/no-extraneous-dependencies': 'off',
      },
    },
  ],
};
