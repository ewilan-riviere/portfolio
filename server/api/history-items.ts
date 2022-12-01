import { getJson, queryBuilder } from '../api'
import json from '~~/assets/data/history.json'

export default defineEventHandler((event) => {
  const data = getJson<HistoryItem[]>(json)
  data.forEach((item) => {
    if (item.dateEnd)
      item.isFinished = item.dateEnd < new Date()
  })

  return queryBuilder<HistoryItem>(event, data)
})
