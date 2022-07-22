import React from 'react'
import { AiOutlineRight,AiOutlineLeft } from 'react-icons/ai';
import Card from '../components/Card';

const Home = () => {
  return (
    <>
    <section className="bg-red-500">
      <div className=" w-full h-[600px] bg-cover bg-hero-pattern">
      </div>
    </section>
    <section className="pt-20 mx-24">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-black text-4xl font-bold">Featured Movies</h2>
          <button className="flex items-center font-bold gap-2 text-red-700 text-lg  hover:underline hover:text-red-800">See more <AiOutlineRight/> </button>
          
        </div>
        <div className="w-full">
            
            <div className="mt-14 grid grid-cols-4 gap-4">
            <Card />
            <Card />
            <Card />
            <Card />
            </div>
            
          </div>    
    </section>
    <section className="pt-20 mx-24">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-black text-4xl font-bold">New Arriwal</h2>
          <button className="flex items-center font-bold gap-2 text-red-700 text-lg  hover:underline hover:text-red-800">See more <AiOutlineRight/> </button>
        </div>    
    </section>
    <section className="pt-20 mx-24">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-black text-4xl font-bold">Exclusive Video</h2>
          <button className="flex items-center font-bold gap-2 text-red-700 text-lg  hover:underline hover:text-red-800">See more <AiOutlineRight/> </button>
        </div>    
    </section>
    <section className="pt-20 mx-24">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-black text-4xl font-bold">Featured Casts</h2>
          <button className="flex items-center font-bold gap-2 text-red-700 text-lg  hover:underline hover:text-red-800">See more <AiOutlineRight/> </button>
        </div>    
    </section>
     
    </>
  )
}

export default Home