import React from 'react'
import './Home.css'
import { Gif } from '../../components/atoms/Gif'
import gatito from '../../assets/images/gifs/gatito.gif'
import spongeBob from '../../assets/images/gifs/spongeBob.gif'
import stewie from '../../assets/images/gifs/stewie.gif'

function Home() {

  return (
    <div className="container">
      <Gif route={gatito} alt={'gatito'} />
      <Gif route={stewie} alt={'stewie'} />
      <Gif route={spongeBob} alt={'bob esponja enfadado'} />
    </div>
  )
}

export default Home
