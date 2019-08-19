export default () => {
  if (process.browser) {
    return window.location.pathname.substr(1)
  } else {
    return null
  }
}