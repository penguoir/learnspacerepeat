export default () => {
  if (process.browser) {
    return window.location.hash.substr(1)
  } else {
    return null
  }
}