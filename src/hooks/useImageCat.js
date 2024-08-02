import { useState, useEffect } from 'react'

const CAT_ENDPOINT_IMG = 'https://cataas.com/cat/says/'

export function useImage ({ fact }) {
  const [img, setImg] = useState()

  useEffect(() => {
    if (!fact) return
    const firstThreeWords = fact.split(' ').slice(0, 3).join(' ')
    fetch(CAT_ENDPOINT_IMG + `${firstThreeWords}`)
      .then(res => res.blob())
      .then(data => {
        const objectUrl = URL.createObjectURL(data)
        setImg(objectUrl)
      })
  }, [fact])
  return { img }
}
