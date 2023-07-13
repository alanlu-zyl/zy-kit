module.exports = {
  'package.json': ['prettier --write'],
  '{!(package)*.json,*.code-snippets,.!(browserslist|npm)*rc}': ['prettier --write--parser json'],
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.vue': ['eslint --fix', 'prettier --write', 'stylelint --fix'],
  '*.{css,scss,postcss,less,html}': ['stylelint --fix', 'prettier --write'],
  '*.{md,mdx}': ['markdownlint-cli2-fix'],
}
