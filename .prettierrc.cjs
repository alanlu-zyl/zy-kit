module.exports = {
  // 單個參數箭頭函式是否要使用小括號（always:始終顯示;avoid:省略括號。默認:always)
  arrowParens: 'always',
  // 開始標籤的右尖括號是否跟隨在最後一行屬性末尾，默認為false
  bracketSameLine: false,
  // 物件字面量的括號之間是否加上空格（true - 範例: { foo: bar } ; false - 範例: {foo:bar}）
  bracketSpacing: true,
  // 是否格式化一些文件中嵌入的程式碼片段的風格（auto|off;默認auto）
  embeddedLanguageFormatting: 'auto',
  // 指定 HTML 檔案的空格敏感度 (css|strict|ignore;默認css)
  htmlWhitespaceSensitivity: 'strict',
  // 當檔案已經被 Prettier 格式化之後，是否在檔案頂部插入一個特殊的 @format 標記，默認false
  insertPragma: false,
  // 在 JSX 中使用單引號替代雙引號，默認false
  jsxSingleQuote: false,
  // 每行最多字元數量，超出換行（默認80）
  // printWidth: 80,
  // 超出打印寬度 (always | never | preserve )
  proseWrap: 'preserve',
  // 物件屬性是否使用引號（as-needed | consistent | preserve;默認as-needed:物件的屬性需要加引號才添加）
  quoteProps: 'as-needed',
  // 是否只格式化包含特定註解（@prettier| @format）的檔案，默認false
  requirePragma: false,
  // 結尾添加分號
  semi: false,
  // 使用單引號（true:單引號;false:雙引號）
  singleQuote: true,
  // 縮排空格數量，默認2個空格
  // tabWidth: 2,
  // 元素末尾是否加上逗號，默認es5: 在 ES5 中的物件、陣列等會加上逗號，在 TypeScript 中的 type 後不加逗號
  trailingComma: 'es5',
  // 指定縮排方式，空格或tab，默認false，即使用空格
  useTabs: false,
  // Vue 檔案中是否縮排 <style> 和 <script> 標籤，默認false
  vueIndentScriptAndStyle: false,
}
