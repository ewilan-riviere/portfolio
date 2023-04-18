interface Options {
  date?: Intl.DateTimeFormatOptions
  time?: Intl.DateTimeFormatOptions
}

export function useUtils() {
  const date = (
    date: string | Date | undefined,
    type: 'full' | 'date' | 'time' = 'date',
    options: Options = {
      date: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      },
      time: {
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
      },
    },
  ) => {
    if (!date)
      return undefined

    const d = new Date(date)

    const { locale } = useI18n()
    const userLang = locale.value

    let opts: Intl.DateTimeFormatOptions = {
      timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    }

    switch (type) {
      case 'full':
        opts = {
          ...opts,
          ...options.date,
          ...options.time,
        }
        break

      case 'date':
        opts = {
          ...opts,
          ...options.date,
        }
        break

      case 'time':
        opts = {
          ...opts,
          ...options.time,
        }
        break

      default:
        break
    }

    return d.toLocaleString(userLang, opts)
  }

  return {
    date,
  }
}
