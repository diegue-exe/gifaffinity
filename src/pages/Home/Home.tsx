import React, { useEffect, useState } from 'react'
import './Home.css'

function Home() {
  const [greeting, setGreeting] = useState('')

  const getGreeting = async () => {
    const res = await fetch('/hello')
    const hello = await res.json()
    setGreeting(hello.text)
  }

  useEffect(() => {
    getGreeting()
  }, [])

  return <div>{greeting}</div>
}

export default Home
