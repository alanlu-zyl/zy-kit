module.exports = {
  extends: ['turbo', '@antfu', 'prettier'],
  rules: {
    'no-console': 'off',
    'antfu/if-newline': 'off',
    'n/prefer-global/process': 'off',
  },
  ignorePatterns: ['node_modules', '.output', '.nuxt', '.nitro', '.cache', 'dist', 'coverage'],
}
