import React, { useEffect, useState } from 'react'
import './Home.css'
import { Gif } from '../../components/atoms/Gif'

type Gif = {
  id: string
  url: string
  name: string
}

function Home() {
  const [gifs, setGifs] = useState<Gif[]>([])

  useEffect(() => {
    const getGifs = async () => {
      const response = await fetch('https://mis-gifs.com/gifs')
      const gifsResponse: Gif[] = await response.json()
      setGifs(gifsResponse)
    }
    getGifs()
  }, [])
console.log(gifs)
  return (
    <div className="container">
      {gifs.map((gif) => (
        <Gif route={gif.url} alt={gif.name}/>
      ))}
    </div>
  )
}

export default Home
