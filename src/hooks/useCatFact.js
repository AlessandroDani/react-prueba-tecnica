import { useEffect, useState } from 'react'
import { catRandomFact } from '../logic/facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    catRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
