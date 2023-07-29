import { getJson, queryBuilder } from '../api'
import type { HistoryItem } from '~~/types'
import json from '~~/assets/data/education-items.json'
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
