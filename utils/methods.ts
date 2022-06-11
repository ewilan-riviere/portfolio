export const getJson = <T>(json: object): T => {
  const data: T = JSON.parse(JSON.stringify(json))

  return data
}
