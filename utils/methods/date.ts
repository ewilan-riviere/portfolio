export const date = (date?: Date) => {
  if (!date) {
    return ""
  }
  date = new Date(date)

  let userLang = "en"

  if (process.client) {
    userLang = navigator.language
  }

  return date.toLocaleString(userLang, {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
