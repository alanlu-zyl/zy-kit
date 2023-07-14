module.exports = {
  extends: ['@antfu', 'turbo', 'prettier'],
  rules: {
    'no-console': 'off',
    'antfu/if-newline': 'off',
  },
  ignorePatterns: ['node_modules', '.output', '.nuxt', '.nitro', '.cache', 'dist', 'coverage'],
}
