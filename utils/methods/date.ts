export const date = (date?: any) => {
  if (!date) {
    return ""
  }
  const formatDate = new Date(date)

  let userLang = "en"
  if (process.client) {
    userLang = navigator.language
  }

  return formatDate.toLocaleString(userLang, {
    year: "numeric",
    month: "long",
  })
}

export const checkIfDateIsSuperiorToToday = (date?: any) => {
  if (!date) {
    return false
  }
  const today = new Date()
  const dateToCheck = new Date(date)

  return dateToCheck > today
}
