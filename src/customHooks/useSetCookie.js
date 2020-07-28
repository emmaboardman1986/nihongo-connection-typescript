export const useSetCookies = (cookieName, cookieValue) => {
  document.cookie = `${cookieName}=${cookieValue}; expires=Fri, 31 Dec 9999 23:59:59 GMT`
}
