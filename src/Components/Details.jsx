import React from 'react'

const Details = () => {
  return (
    <div className=' w-full py-10 px-40  mt-16 flex justify-between'>
       <div className='left'>
       <h1 className='font-light text-xl'>Ready for lift-off? Ping, tweet, message or poke <br /> — and we will get back as soon as possible.</h1>
       <div className='linksofbtm   mt-12 '>
       <a  className=' block font-regular mt-3 text-lg' href="#">hello@exoape.com</a>
        <a className=' block font-regular mt-1 text-lg' href="#">+91-12345689</a>
       </div>
       </div>

<div className='right'>
    <h4 className='font-light text-xl' >Willem II Singel 8 <br /> 6041 HS,Roermond <br /> The Netherlands</h4>
    <a className=' block font-light mt-10 text-xl'  href="#">views on map</a>
</div>

       </div>
       


     
      
  )
}

export default Details