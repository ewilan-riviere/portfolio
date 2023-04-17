interface Options {

}

export function useUtils() {
  const date = (
    date: string | Date | undefined,
    type: 'full' | 'date' | 'time' = 'date',
    options: Options = {},
  ) => {
    if (!date)
      return undefined

    const d = new Date(date)

    let userLang = 'en'
    if (process.client)
      userLang = navigator.language

    const dateOpts: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }

    const timeOpts: Intl.DateTimeFormatOptions = {
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    }

    let opts: Intl.DateTimeFormatOptions = {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }

    switch (type) {
      case 'full':
        opts = {
          ...opts,
          ...dateOpts,
          ...timeOpts,
        }
        break

      case 'date':
        opts = {
          ...opts,
          ...dateOpts,
        }
        break

      case 'time':
        opts = {
          ...opts,
          ...timeOpts,
        }
        break

      default:
        break
    }

    if (options && Object.keys(options).length)
      opts = options

    return d.toLocaleString(userLang, opts)
  }

  return {
    date,
  }
}
