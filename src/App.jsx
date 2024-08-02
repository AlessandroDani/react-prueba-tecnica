import './App.css'
import { useImage } from './hooks/useImageCat'
import { useCatFact } from './hooks/useCatFact'

export function App () {
  const { fact, refreshFact } = useCatFact()
  const { img } = useImage({ fact })

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {img && <img src={img} alt={`Image extracted using the first three words for ${fact}`} />}
    </main>
  )
}
