export default {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'perf', 'test', 'chore'],
    ],
    'subject-case': [0, 'never', []],
    'header-max-length': [0], // Disable max length check
    'type-case': [0], // Disable type case check
  },
};
