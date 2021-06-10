export const limitLength = (string, length = 150) => {
  if (string !== null && string !== undefined && string.length > length) {
    string = string.substring(0, length)
    string = string.trim()
    return `${string}...`
  } else {
    return string
  }
}

export const getLanguage = (slug) => {
  const available = [
    {
      slug: 'fr',
      label: 'French'
    },
    {
      slug: 'en',
      label: 'English'
    }
  ]

  const language = available.find(lang => lang.slug === slug)
  if (language) {
    return language.label
  }
}

export const getLanguageFlag = (slug) => {
  const available = [
    {
      slug: 'fr',
      id: 'fr',
      label: 'French'
    },
    {
      slug: 'en',
      id: 'gb',
      label: 'English'
    }
  ]

  const language = available.find(lang => lang.slug === slug)
  if (language) {
    const lang = language.id
    return `https://www.countryflags.io/${lang}/flat/32.png`
  }
}

export const getAuthors = (authors) => {
  let authorsToString = ''
  authors.forEach((author, authorId) => {
    authorsToString += `${author.name}`
    if (authors.length > 1 && authorId !== authors.length - 1) {
      authorsToString += ' & '
    }
  })
  return authorsToString
}

export const getHostname = (url) => {
  return new URL(url).hostname
}

export const containsObject = (obj, list) => {
  let i
  for (i = 0; i < list.length; i++) {
    if (list[i] === obj) {
      return true
    }
  }

  return false
}

export const objectIsEmpty = (obj) => {
  return obj && Object.keys(obj).length === 0 && obj.constructor === Object
}
