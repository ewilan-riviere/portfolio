export const getJson = <T>(json: object): T => {
  const data: T = JSON.parse(JSON.stringify(json))

  return data
}

export const sortByDate = (a: any, b: any) => {
  const dateA = new Date(a.dateBegin).getTime()
  const dateB = new Date(b.dateBegin).getTime()

  return dateA > dateB ? 1 : -1
}
