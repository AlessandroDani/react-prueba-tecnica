import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_IMG = 'https://cataas.com/cat/says/'

export function App () {
  const [fact, setFact] = useState()
  const [img, setImg] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
        const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
        fetch(CAT_ENDPOINT_IMG + `${firstThreeWords}`)
          .then(res => res.blob())
          .then(data => {
            const objectUrl = URL.createObjectURL(data)
            setImg(objectUrl)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {img && <img src={img} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
