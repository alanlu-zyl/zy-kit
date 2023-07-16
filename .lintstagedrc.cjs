module.exports = {
  'package.json': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist|npm)*rc}': ['prettier --write--parser json'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.vue': ['eslint --fix', 'stylelint --fix', 'prettier --write'],
  '*.{css,scss,postcss,less,html}': ['stylelint --fix', 'prettier --write'],
  '*.{md,mdx}': ['markdownlint-cli2-fix'],
}
