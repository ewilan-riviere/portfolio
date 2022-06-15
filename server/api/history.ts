import json from "~~/assets/data/history.json"
import { getJson } from "~~/utils/methods"

export default defineEventHandler(() => {
  const data = getJson<History[]>(json).filter((item: History) => !item.isDraft)
  const sortFunction = (a: History, b: History) => {
    const dateA = new Date(a.dateBegin).getTime()
    const dateB = new Date(b.dateBegin).getTime()

    return dateA > dateB ? 1 : -1
  }
  data.sort(sortFunction)
  data.reverse()

  return data
})
