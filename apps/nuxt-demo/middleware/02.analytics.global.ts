export default defineNuxtRouteMiddleware((to, _from) => {
  if (to.params.id === '1') {
    // 中止導航，並顯示可選的錯誤訊息。
    return abortNavigation('Insufficient permissions.')
  }
  // In a real app you would probably not redirect every route to `/`
  // however it is important to check `to.path` before redirecting or you
  // might get an infinite redirect loop
  // if (to.path !== '/') {
  //   return navigateTo('/')
  // }

  try {
    /* code that might throw an error */
  } catch (err) {
    return abortNavigation(err as string)
  }
})
