import React from 'react'
import Navbar from './Components/Navbar'
import Marquee from './Components/Marquee'
import Details from './Components/Details'
import Image from './Components/Image'


const App = () => {
  return (
    <div className='w-full min-h-screen bg-zinc-900  text-zinc-200'>

      <Navbar />
      < Marquee />
      <Details />
     < Image />
    </div>
  )
}

export default App