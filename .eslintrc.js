module.exports = {
  ignorePatterns: ['/*.*'],  // ignore top-level files
  env: {
    'jest/globals': true
  },
  overrides: [
    {
      files: ['app/**/styles.ts'],
      rules: {'i18next/no-literal-string': ['off']}
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    'project': ['./tsconfig.json'],
    tsconfigRootDir: __dirname,   // ensure ESLint finds tsconfig in nested dirs
  },
  plugins: [
    'eslint-plugin-react',
    '@typescript-eslint',
    'i18next',
    'jest',
    'jsx-a11y',
    'styled-components-a11y',
  ],
  extends: [
    'eslint:recommended',
    'plugin:jest/recommended',
    'plugin:jest/style',
    'plugin:jsx-a11y/strict',
    'plugin:styled-components-a11y/strict',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
  ],
  rules: {
    // When adding any new linting rules please follow the by-Alphabetical order already established.
    //ESLint-basic rules
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', '1tbs', {'allowSingleLine': true}],
    'indent': ['error', 2, {"SwitchCase": 1}],
    'linebreak-style': 1,
    'max-len': ['warn', { 'code': 120 }],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'warn',
    'no-restricted-imports': ['error', {
      'patterns': ['../../*']
    }],
    'no-var': 'error',
    'no-trailing-spaces': 'warn',
    'object-shorthand': ['error', 'always'],
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false}],
    'prettier/prettier': 0,
    'prefer-const': 'error',
    'prefer-spread': 'error',
    'quotes': ['error', 'single'],
    'semi': [2, 'always'],
    //@Typescript rules
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/no-shadow': 'error',
    '@typescript-eslint/no-unnecessary-boolean-literal-compare': 'error',
    '@typescript-eslint/no-unsafe-assignment': 'warn',
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    // i18next rules
    'i18next/no-literal-string': [
      'error',
      {
        'markupOnly': true,
        'validateTemplate': true,
        'ignoreAttribute': ['as', 'to', 'path'],
      }
    ],
    // Jest rules
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'error',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
    // @jsx-a11y rules
    // RULES reference: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/main/docs/rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/html-has-lang': 'warn',
    'jsx-a11y/no-noninteractive-element-interactions': [
      'warn',
      {
        handlers: [
          'onClick',
          'onMouseDown',
          'onMouseUp',
          'onKeyPress',
          'onKeyDown',
          'onKeyUp',
        ],
      },
    ]
  }
};