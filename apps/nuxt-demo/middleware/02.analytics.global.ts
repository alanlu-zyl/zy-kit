export default defineNuxtRouteMiddleware((to, _from) => {
  try {
    if (to.params.id === '1') {
      // 中止導航，並顯示可選的錯誤訊息。
      return abortNavigation('Insufficient permissions.')
    }

    // if (Math.random() > 0.5) {
    //   return navigateTo('/haha')
    // }
  } catch (err) {
    return abortNavigation(err as string)
  }
})
