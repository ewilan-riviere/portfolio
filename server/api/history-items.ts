import { getJson, queryBuilder } from '../api'
import type { HistoryItem } from '~~/types/history-item'
import json from '~~/assets/data/history.json'
import type { IconType } from '~~/.nuxt/svg-transformer'

export default defineEventHandler((event) => {
  const data = getJson<HistoryItem[]>(json)
  data.forEach((item) => {
    item.icon = `history/${item.slug}` as IconType
    if (item.dateEnd)
      item.isFinished = new Date(item.dateEnd) < new Date()
  })

  return queryBuilder<HistoryItem>(event, data)
})
