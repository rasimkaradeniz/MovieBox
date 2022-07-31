import React, { useEffect } from 'react'
import Arrival from '../components/Arriwal';
import Features from '../components/Features';
import Header from '../components/Header';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPopuler } from '../store/movies';



export default function Home()  {
  
  const {data,error,loading} = useSelector(state =>state.movies.popular)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchPopuler())
    
  },[])
  
  console.log(data)
   
  return (
    <>
    <Header bgImg={true} />
    <section >
      <div className=" w-full h-[600px] bg-cover bg-center md:bg-top	 bg-hero-pattern">
      </div>
    </section>
    <div className='max-w-[1280px] mx-auto space-y-10 mt-10'>
      <Features />
      <Arrival />
      
    </div>
     
    </>
  )
}

