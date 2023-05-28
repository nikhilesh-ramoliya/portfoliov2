import React from 'react'
import Header from '../../components/Header/Header'

function Home() {
  return (
    <div className='home' id='home'><Header home={true} active="home" /></div>
  )
}

export default Home