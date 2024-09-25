import './App.css'
import { useCatImage } from './hooks/useCatImage.js'
import { useCatFact } from './hooks/useCatFact.js'
import { Image } from './Components/Image.jsx'
import { Fact } from './Components/Fact.jsx'

export function App () {
  const { fact, fetchFact, loading } = useCatFact()
  const { imageUrl, loading: loadingImage } = useCatImage({ fact })

  const handleClick = async () => {
    fetchFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>

      <button onClick={handleClick}>Get new fact</button>

      <Fact fact={fact} loading={loading} />
      <Image
        url={imageUrl}
        alt={`Image extracted using the first three words for ${fact}`}
        loading={loadingImage || loading}
      />
    </main>
  )
}
