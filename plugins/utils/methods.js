export const limitLength = (string, length = 150) => {
  if (string !== null && string !== undefined && string.length > length) {
    string = string.substring(0, length)
    string = string.trim()
    return `${string}...`
  } else {
    return string
  }
}

export const getHostname = (url) => {
  return new URL(url).hostname
}

export const removeHttp = (url) => {
  return url.replace(/(^\w+:|^)\/\//, '')
}
