import json from '~~/assets/data/history.json'
import { useUtils } from '~~/composables/useUtils'
const { getJson, sortByDate } = useUtils()

export default defineEventHandler(() => {
  const data = getJson<HistoryItem[]>(json).filter(
    (item: HistoryItem) => !item.isDraft
  )
  data.sort(sortByDate)
  data.reverse()

  return data
})
