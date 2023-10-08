import type { H3Event } from 'h3'

export function getJson<T>(json: object): T {
  const data: T = JSON.parse(JSON.stringify(json))

  return data
}

export function sortByDate(a: any, b: any) {
  const dateA = new Date(a.dateBegin).getTime()
  const dateB = new Date(b.dateBegin).getTime()

  return dateA > dateB ? 1 : -1
}

function sortByKey(array: any[], key: string) {
  return array.sort((a, b) => {
    const x = a[key]
    const y = b[key]
    return ((x < y) ? -1 : ((x > y) ? 1 : 0))
  })
}

function shuffle<T>(a: any[]): T[] {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

export function queryBuilder<T>(event: H3Event, data: T[]): T[] {
  if (!event.node.req.url)
    return []

  const config = useRuntimeConfig()

  const url = `${config.public.siteUrl}${event.node.req.url}`
  const params = new URL(url).searchParams

  for (const query of params.keys()) {
    const value = params.get(query)
    if (!value)
      continue

    const isFilter = query.startsWith('filter')
    const isSort = query.startsWith('sort')
    const isLimit = query.startsWith('limit')
    const isShuffle = query.startsWith('shuffle')
    const isOther = !isFilter && !isSort && !isLimit && !isShuffle

    let qvalue: string | undefined | boolean = value
    if (value === 'true' || value === 'false')
      value === 'true' ? (qvalue = true) : (qvalue = false)

    if (isFilter) {
      const type = query.split('[')[1].split(']')[0]
      data = data.filter((item: any) => item[type] === qvalue)
    }

    if (isSort) {
      let reverse = false
      if (typeof qvalue === 'string' && qvalue.startsWith('-')) {
        reverse = true
        qvalue = qvalue.replace('-', '')
      }

      data = sortByKey(data, qvalue as string)
      if (reverse)
        data.reverse()
    }

    if (isLimit)
      data = data.slice(0, Number(qvalue))

    if (isShuffle)
      data = shuffle(data)

    if (isOther)
      data = data.filter((item: any) => item[query] === qvalue)
  }

  return data
}

export function queryParams(event: H3Event): URLSearchParams | undefined {
  if (!event.node.req.url)
    return

  const config = useRuntimeConfig()
  const url = `${config.public.siteUrl}${event.node.req.url}`

  const params = new URL(url).searchParams
  return params
}
