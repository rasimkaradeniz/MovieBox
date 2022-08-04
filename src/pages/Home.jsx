import React, { useEffect } from 'react'
import Features from '../components/Features';
import Header from '../components/Header';
import { useDispatch } from 'react-redux';
import { fetchGenres, fetchTvGenres } from '../store/movies';
import TV from '../components/Tv';

export default function Home()  {
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchGenres())
    dispatch(fetchTvGenres())
  },[])
  
  
   
  return (
    <>
    <Header bgImg={true} />
    <section >
      <div className=" w-full h-[600px] bg-cover bg-center md:bg-top	 bg-hero-pattern">
      </div>
    </section>
    <div className='md:max-w-[1240px] max-w-full w-full mx-auto space-y-10 mt-10'>
      <Features />
      <TV />
      
    </div>
     
    </>
  )
}

