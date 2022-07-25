import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';
import Arrival from '../components/Arriwal';
import Features from '../components/Features';
import Header from '../components/Header';





export default function Home()  {
  


  return (
    <>
    <Header bgImg={true} />
    <section >
      <div className=" w-full h-[600px] bg-cover bg-center md:bg-top	 bg-hero-pattern">
      </div>
    </section>
    <div className='container mx-auto space-y-10 mt-10'>
      <Features />
      <Arrival />
      <section className="">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-black text-4xl font-bold">Exclusive Video</h2>
            <button className="flex items-center font-bold gap-2 text-red-700 text-lg  hover:underline hover:text-red-800">See more <AiOutlineRight/> </button>
          </div>    
      </section>
      <section className="">
          <div className="w-full flex items-center justify-between">
            <h2 className="text-black text-4xl font-bold">Featured Casts</h2>
            <button className="flex items-center font-bold gap-2 text-red-700 text-lg  hover:underline hover:text-red-800">See more <AiOutlineRight/> </button>
          </div>    
      </section>
    </div>
     
    </>
  )
}

