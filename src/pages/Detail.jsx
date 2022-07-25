import React, {  useState } from 'react'
import Header from '../components/Header'
import { prominent } from 'color.js'

export default function Detail  () {
  
  const [gradient,setGradient] = useState('');
  
  prominent('https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg', { amount: 2 }).then(color => {
    setGradient(`linear-gradient(to right, rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]}) 150px, rgba(${color[1][0]}, ${color[1][1]}, ${color[1][2]}, 0.84) 100%)`)
  })
  
  

  
  return (
    <>
    <Header />
    <section className='h-[700px] w-full'>
      <div className='h-full w-full border ' 
      style={{backgroundImage:"url(" + "https://image.tmdb.org/t/p/w1280/56v2KjBlU4XaOv9rVYEQypROD7P.jpg" + ")",backgroundPosition:"right -200px top",
      backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
      <div className='flex justify-center flex-wrap w-full h-full' style={{backgroundImage:gradient}}></div>

      </div>
    </section>
    </>
  )
}
