# zy-kit

## 環境建置

根據您的專案需求，您可以使用這些工具來提高代碼品質、加速開發和測試過程，以及提供更好的開發體驗。您可以根據每個工具的官方文檔和配置指南，進一步了解如何在您的專案中使用它們。

### 代碼風格和格式化

* [EditorConfig](https://editorconfig.org/): 用於設定和維護跨不同編輯器和 IDE 的一致性代碼編寫風格。您可以使用 EditorConfig 來統一縮進、換行符等風格設定，確保整個團隊在代碼編寫上保持一致性。
* [Prettier](https://prettier.io/): 一個自動美化代碼的工具，它可以根據預定的風格規範自動格式化您的代碼。您可以配置不同的代碼風格和格式化選項，以確保代碼的一致性和可讀性。

### 靜態代碼分析

* [ESLint](https://eslint.org/): 用於 JavaScript 和 TypeScript 的靜態代碼分析工具。ESLint 可以檢查代碼中的錯誤、風格問題和潛在的問題，並提供配置選項來定製檢查規則。
* [Stylelint](https://stylelint.io/): 用於檢查 CSS、Sass、Less 和 Scss 等樣式表的工具。它可以驗證代碼中的風格和錯誤，並提供配置選項來符合您的樣式表寫作風格。
* [Markdownlint](https://github.com/DavidAnson/markdownlint): 用於檢查和糾正 Markdown 文件中的錯誤和風格問題的工具。Markdownlint 可以確保文件的一致性和可讀性，並提供配置選項來符合您的寫作風格。

### Git 相關

* [simple-git-hooks](https://www.npmjs.com/package/simple-git-hooks): 用於處理 Git 鉤子（hooks）的工具。您可以使用 simple-git-hooks 來自定義在 Git 操作（如提交、推送）之前或之後執行的腳本。
* [lint-staged](https://www.npmjs.com/package/lint-staged): 用於在 Git 提交前運行指定腳本（如代碼檢查工具）的工具。lint-staged 可以幫助您在提交之前自動檢查代碼風格和品質。
* [Commitlint](https://commitlint.js.org/#/): 用於驗證 Git 提交消息的格式和風格的工具。Commitlint 可以確保提交消息的一致性和可讀性，並提供配置選項來符合您的提交消息慣例。
* [cz-git](https://cz-git.qbb.sh/zh/): 工程性更強，羽量級，高度自定義，輸出標準格式的 Commitizen 適配器和 CLI。

### 建構工具

* [Vite](https://vitejs.dev/): 一個現代化的前端開發工具和建構工具。Vite 提供了快速的開發體驗和優化的生產環境，並基於 ES 模組瀏覽器提供即時編譯的功能。Vite 可以幫助您快速啟動項目、支援熱模組替換，並提供零配置的開發環境。

* tsup
* bumpp

### 測試工具

* [Vitest](https://vitest.dev/): Vitest 是 Vite 的測試工具，專注於提供一個簡單且快速的測試環境。它基於 Jest 框架，可以用於編寫和運行自動化測試。Vitest 與 Vite 緊密集成，提供了一個簡潔的 API 來編寫測試用例。

### JavaScript

* [TypeScript](https://www.typescriptlang.org/): 一種靜態類型的 JavaScript 語言。TypeScript 可以提供更強大的開發工具和更嚴格的代碼檢查，幫助您在開發過程中捕捉錯誤並提供更好的代碼註解和文檔。

### CSS

* [SCSS](https://sass-lang.com/): 一種 CSS 預處理器，提供了更多功能和語法，使得 CSS 開發更加便捷和模塊化。
* [PostCSS](https://postcss.org/): 一個用於轉換 CSS 的工具，它可以讓您使用 JavaScript 生態系統中的插件來擴展和自動化處理 CSS。

---

```bash
# Nuxi commands

npx nuxi add [--cwd] [--force] <TEMPLATE> <NAME>          # generates a component, composable, layout, plugin, page, middleware or api function.
npx nuxi analyze [--log-level] [rootDir]                  # builds Nuxt and analyzes the production bundle (experimental).
npx nuxi build-module [--stub] [rootDir]                  # runs @nuxt/module-builder to generate dist directory within your rootDir that contains the full build for your nuxt-module.
npx nuxi build [--prerender] [--dotenv] [--log-level] [rootDir] # creates a .output directory with all your application, server and dependencies ready for production.
npx nuxi clean|cleanup [rootDir]                          # removes common generated Nuxt files and caches
npx nuxi dev [rootDir] [--dotenv] [--log-level] [--clipboard] [--open, -o] [--no-clear] [--port, -p] [--host, -h] [--https] [--ssl-cert] [--ssl-key]                                  # starts a development server with hot module replacement
npx nuxi devtools enable|disable [rootDir]                # will install the Nuxt DevTools globally, and also enable it within the particular project you are using
npx nuxi info [rootDir]                                   # logs information about the current or specified Nuxt project.
npx nuxi init|create [--verbose|-v] [--template,-t] [dir] # initializes a fresh Nuxt project using unjs/giget.
npx nuxi prepare [--log-level] [rootDir]                  # creates a .nuxt directory in your application and generates types.
npx nuxi preview [rootDir] [--dotenv]                     # starts a server to preview your Nuxt application after running the build command.
npx nuxi typecheck [--log-level] [rootDir]                # runs vue-tsc to check types throughout your app.
npx nuxi upgrade [--force|-f]                             # upgrades Nuxt 3 to the latest version.
```

```js
// Composables
useAppConfig()       // Access the reactive app config defined in the project.
useAsyncData()       // Within your pages, components, and plugins you can use useAsyncData to get access to data that resolve asynchronously.
useCookie()          // Within your pages, components, and plugins, you can use useCookie, an SSR-friendly composable to rewrite cookies.
useError()           // Returns the global Nuxt error that is being handled, and it is available on both the client and server.
useFetch()           // Provides a convenient wrapper around useAsyncData and $fetch. It automatically generates a key on URL and fetch options, provides type hints for request url based on server routes, and infers API response type.
useHeadSafe()        // A wrapper around the useHead composable that restricts the input only to allow safe values.
useHead()            // Allows you to manage your head tags in a programmatic and reactive way
useHydration()       // Allows full control of the hydration cycle to set and receive data from the server.
useLazyAsyncData()   // Provides a wrapper around useAsyncData that triggers navigation before the handler is resolved
useLazyFetch()       // Provides a wrapper around useFetch that triggers navigation before the handler is resolved.
useNuxtApp()         // Provides a way to access shared runtime context of Nuxt, which is available on both client and server side.
useNuxtData()        // Gives you access to the current cached value of useAsyncData, useLazyAsyncData, useFetch, and lazyFetch with explicitly provided key.
useRequestEvent()    // Within your pages, components, and plugins, you can use useRequestEvent to access the ng request. In the browser, useRequestEvent will return undefined.
useRequestHeaders()  // Access the incoming request headers within your pages, components, and plugins. In the browser, uestHeaders will return an empty object.
useRouter()          // Returns the router instance and must be called in a setup function, plugin, or route middleware.
useRuntimeConfig()   // Expose config variables within your app.
useState()           // An SSR-friendly ref replacement. Its value will be preserved after server-side rendering and shaross all components using a unique key.
useRoute()           // Returns the current route and must be called in a setup function, plugin, or route middleware.
```

```js
// Nuxt utils
$fetch()                     // helper for making HTTP requests within your Vue app or API routes.
abortNavigation()            // prevents navigation from taking place and throws an error if one is set as a parameter.
addRouteMiddleware()         // dynamically add route middleware in your Nuxt application.
clearError()                 // clear all errors and redirect the user if redirection defined
clearNuxtData()              // delete cached data, error status and pending promises of useAsyncData and useFetch.
createError()                // create an error object with additional metadata. It is usable in both the Vue and Nitro portions of your app, and is meant to be thrown.
defineNuxtComponent()        // helper function for defining type safe Vue components using options API similar to defineComponent().
defineNuxtRouteMiddleware()  // create named route middleware
definePageMeta()             // a compiler macro that you can use to set metadata for your page components
navigateTo()                 // a router helper function that allows programmatically navigating users through your Nuxt application.
onBeforeRouteLeave()         // adds a navigation guard that triggers whenever the component for the current location is about to be left.
onBeforeRouteUpdate()        // adds a navigation guard that triggers whenever the component for the current location is about to be updated.
onNuxtReady()                // allows running a callback after your app has finished initializing. It is ideal for running code that should not block the initial rendering of your app.
prefetchComponents()         // manually prefetch individual components that have been registered globally in your Nuxt app. (By default Nuxt registers these as async components.) You must use the Pascal-cased version of the component name.
preloadComponents()          // manually preload individual components that have been registered globally in your Nuxt app. (By default Nuxt registers these as async components.)
preloadRouteComponents()     // manually preload individual pages in your Nuxt app.
refreshNuxtData()            // re-fetches all data from the server and updates the page as well as invalidates the cache of useAsyncData, useLazyAsyncData, useFetch and useLazyFetch.
reloadNuxtApp()              // perform a hard reload of your app, re-requesting a page and its dependencies from the server.
setPageLayout()              // allows you to dynamically change the layout of a page.
setReponseStatus()           // sets the statusCode (and optionally the statusMessage) of the response.
showError()                  // provides a quick and simple way to show a full-screen error page if needed.
updateAppConfig()            // updates app config using deep assignment.
```

## Apps

## Docs

## Packages
