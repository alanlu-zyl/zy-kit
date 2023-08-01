export const useUserStore = defineStore('user', () => {
  const isLoggedIn = useState('isLoggedIn', () => false)

  return { isLoggedIn }
})
