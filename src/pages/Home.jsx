import React, { useEffect } from 'react'
import Arrival from '../components/Arriwal';
import Features from '../components/Features';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { fetchGenres } from '../store/movies';

export default function Home()  {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchGenres())
  },[])
  
  
   
  return (
    <>
    <Header bgImg={true} />
    <section >
      <div className=" w-full h-[600px] bg-cover bg-center md:bg-top	 bg-hero-pattern">
      </div>
    </section>
    <div className='max-w-[1280px] mx-auto space-y-10 mt-10'>
      <Features />
      
      
    </div>
     
    </>
  )
}

