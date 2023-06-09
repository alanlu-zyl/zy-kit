module.exports = {
  '{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.{css,scss,postcss,less,html}': ['stylelint --fix', 'prettier --write'],
  '*.{md,mdx}': ['markdownlint-cli2-fix'],
}
