import gsap, { Circ } from 'gsap/all';
import React, { useEffect, useRef,} from 'react'

const Image = () => {
  const img = useRef((null))
   
    //mousemove function
    useEffect(()=>{
        window.addEventListener("mousemove",function(e){
if(e.clientX < window.innerWidth/2){
 var val = gsap.utils.mapRange(0,window.innerWidth/2, 0,1,e.clientX);
  
const lerp = (x, y, a) => x * (1 - a) + y * a;
let move = lerp(-200,0,val);
gsap.to(img.current,{
  x:move+"px",
  ease:Circ,
  duration: 1.5
})
}else{
  var val = gsap.utils.mapRange(window.innerWidth/2,window.innerWidth, 1,0,e.clientX);
  
const lerp = (x, y, a) => x * (1 - a) + y * a;
let move = lerp(200,0,val);
gsap.to(img.current,{
  x:move+"px",
  ease:Circ,
  duration: 1.5
})
  
}
            // console.log(e.clientX,e.clientY)

            //setMove({top:e.clientY+"px", left:e.clientX+"px"})
        })
    })
  return (

    <div>
        <img ref={img} className='fixed  left-[55%] top-1/2    -translate-x-[50%] -translate-y-[50%]  ' src="https://a.storyblok.com/f/133769/758x1134/002f93a9b3/exo-ape-contact.jpg/m/337x504/filters:format(jpeg):quality(90)" alt="" />
    </div>
  )
}

export default Image
//motion.img initial={{top:move.top, left: move.left  }} animate= {{top:move.top,left:move.left}}  transition={{ease:[0.25, 1, 0.5, 1], duration:2}}
