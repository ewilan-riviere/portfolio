import { getJson, queryBuilder } from '../api'
import type { HistoryItem } from '~/types'
import json from '~/assets/data/work-items.json'

export default defineEventHandler((event) => {
  const data = getJson<HistoryItem[]>(json)
  data.forEach((item) => {
    item.icon = `history/${item.slug}` as SvgName
    if (item.dateEnd)
      item.isFinished = new Date(item.dateEnd) < new Date()
  })

  return queryBuilder<HistoryItem>(event, data)
})
