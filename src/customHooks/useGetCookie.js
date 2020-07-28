export const useGetCookie = cookieName => {
  if (typeof document != "undefined") {
    var value = `; ${document.cookie}`
    var parts = value.split(`; ${cookieName}=`)
    if (parts.length === 2) {
      var foundValue = parts.pop().split(";").shift()
      return foundValue === "true" ? true : false
    } else {
      return false
    }
  }
}
