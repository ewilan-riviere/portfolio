import { getJson, sortByDate } from '../api'
import json from '~~/assets/data/history.json'

export default defineEventHandler(() => {
  const data = getJson<HistoryItem[]>(json).filter(
    (item: HistoryItem) => !item.isDraft
  )
  data.sort(sortByDate)
  data.reverse()

  return data
})
