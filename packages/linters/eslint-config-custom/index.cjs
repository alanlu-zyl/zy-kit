module.exports = {
  extends: ['turbo', '@antfu', 'prettier'],
  rules: {
    'no-console': 'off',
    'antfu/if-newline': 'off',
  },
  ignorePatterns: ['node_modules', '.output', '.nuxt', '.nitro', '.cache', 'dist', 'coverage'],
}
