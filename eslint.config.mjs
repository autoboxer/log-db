import globals from 'globals';
import js from '@eslint/js';


export default [
  { languageOptions: { globals: globals.nodeBuiltin } },
  {
    plugins: js.configs.recommended,
    files: [ 'src/**/*.mjs', 'tests/**/*.mjs' ],
    rules: {
      'array-bracket-spacing': [ 'error', 'always', { 'objectsInArrays': false, 'arraysInArrays': false } ],
      'arrow-spacing': 'error',
      'block-spacing': 'error',
      'brace-style': 'error',
      'comma-dangle': [ 'error', 'never' ],
      'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
      'eol-last': [ 'error', 'always' ],
      'indent': [ 'error', 2 ],
      'key-spacing': [ 'error', { 'beforeColon': false, 'afterColon': true, 'mode': 'strict' } ],
      'keyword-spacing': [ 'error', { 'before': true, 'after': true } ],
      'line-comment-position': [ 'error', { 'position': 'above' } ],
      'max-len': [ 'error', { 'code': 120 } ],
      'no-extra-parens': 'error',
      'no-extra-semi': 'error',
      'no-floating-decimal': 'error',
      'no-mixed-operators': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'no-var': 'error',
      'no-console': [ 'error', { 'allow': [ 'warn', 'error' ] } ],
      'no-use-before-define': [ 'error', { 'functions': false } ],
      'prefer-const': [ 'error', { 'destructuring': 'all', 'ignoreReadBeforeAssign': false } ],
      'rest-spread-spacing': [ 'error' ],
      'quotes': [ 'error', 'single' ],
      'semi': [ 'error', 'always' ],
      'spaced-comment': [ 'error', 'always' ],
      'space-in-parens': ['error', 'always', { 'exceptions': ['{}', '[]', '()', 'empty'] }],
      'template-curly-spacing': [ 'error', 'always' ],
      'template-tag-spacing': 'error'
    }
  },
  {
    'files': [ 'tests/**/*.mjs' ],
    'plugins': [ 'jest' ],
    'env': {
      'jest/globals': true
    },
    'extends': [ 'plugin:jest/recommended' ],
    'rules': {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error'
    }
  }
 ];