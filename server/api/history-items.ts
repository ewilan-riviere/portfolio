import json from '~~/assets/data/history.json'
import { getJson, sortByDate } from '~~/utils/methods'

export default defineEventHandler(() => {
  const data = getJson<HistoryItem[]>(json).filter(
    (item: HistoryItem) => !item.isDraft
  )
  data.sort(sortByDate)
  data.reverse()

  return data
})
