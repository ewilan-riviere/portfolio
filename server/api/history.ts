import json from "~~/assets/data/history.json"
import { getJson, sortByDate } from "~~/utils/methods"

export default defineEventHandler(() => {
  const data = getJson<History[]>(json).filter((item: History) => !item.isDraft)
  data.sort(sortByDate)
  data.reverse()

  return data
})
