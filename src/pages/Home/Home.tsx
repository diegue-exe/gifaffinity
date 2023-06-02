import React from 'react'
import spongeBob from '../../assets/images/gifs/spongeBob.gif'
import stewie from '../../assets/images/gifs/stewie.gif'

function Home() {
  return (
    <div>
      <img src={spongeBob} alt="bob esponja enfadado" />
      <img src={stewie} alt="gatito" />
      <img
        src="https://media.tenor.com/oeMHiLW62hAAAAAC/pretty-please-kitty-softpaws.gif"
        alt="stewie"
      />
    </div>
  )
}

export default Home
