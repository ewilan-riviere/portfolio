export const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
}

export const sortByDate = (a: any, b: any) => {
  const dateA = new Date(a.dateBegin).getTime()
  const dateB = new Date(b.dateBegin).getTime()

  return dateA > dateB ? 1 : -1
}
