export const getCatSayingDataFn = async ({ word }) => {
  const response = await fetch(`https://cataas.com/cat/says/${word}?size=50&color=red&json=true`)
  return response.json()
}
