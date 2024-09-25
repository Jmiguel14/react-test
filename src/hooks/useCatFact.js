import { useState, useEffect } from 'react'
import { getRandomFact } from '../services/facts.js'

export function useCatFact () {
  const [fact, setFact] = useState()
  const [loading, setLoading] = useState(false)

  const fetchFact = async () => {
    try {
      setLoading(true)
      const newFact = await getRandomFact()
      setFact(newFact)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  // para recuperar la cita al cargar la página
  useEffect(() => {
    fetchFact()
  }, [])

  return { fact, fetchFact, loading }
}
