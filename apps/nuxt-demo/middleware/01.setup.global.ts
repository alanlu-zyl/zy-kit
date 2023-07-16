/* eslint-disable n/prefer-global/process */
/* eslint-disable no-useless-return */

export default defineNuxtRouteMiddleware((_to, _form) => {
  // skip middleware on server
  if (process.server) return
  // skip middleware on client side entirely
  if (process.client) return
  // or only skip middleware on initial client load
  const nuxtApp = useNuxtApp()
  if (process.client && nuxtApp.isHydrating && nuxtApp.payload.serverRendered) return

  // return abortNavigation() // 停止當前導航
  // return abortNavigation(error) // 拒絕目前導航並顯示錯誤
  // return navigateTo('/')
  // return navigateTo({ path: '/' })
  // return navigateTo('/', { redirectCode: 301 })
})
