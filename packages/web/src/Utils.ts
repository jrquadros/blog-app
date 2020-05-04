export const IsAuth = (): boolean => {
  return !!localStorage.getItem('token')
}
