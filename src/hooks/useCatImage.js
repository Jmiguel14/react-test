import { useEffect, useState } from 'react'
import { getCatSayingDataFn } from '../services/cats'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageUrl] = useState()
  const [loading, setLoading] = useState(false)

  // para recuperar la imagen cada vez que tenemos una cita nueva
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    const getCatSayingData = async () => {
      setLoading(true)
      try {
        const data = await getCatSayingDataFn({ word: threeFirstWords })
        const { _id } = data
        const url = `/cat/${_id}/says/${threeFirstWords}`
        setImageUrl(url)
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }

    getCatSayingData()
  }, [fact])

  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}`, loading }
}
