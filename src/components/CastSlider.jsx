import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import speakingurl from "speakingurl"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { BsCardImage } from 'react-icons/bs';


const CastSlider = ({title,data}) => {
    const scroll = useRef()
    const after = useRef()
    const [w, setW] = useState(window.innerWidth)
    const [mobil,setMobil] = useState(false);
    useEffect(()=>{
        if(scroll && scroll.current){
          scroll.current.addEventListener("scroll", () => {
            if(scroll.current.scrollLeft >40){
              after.current.style.opacity = "0"
            }else{
              after.current.style.opacity = "100"
            }
          });
        }
        if(w < 768){
          setMobil(true)
        }
      },[])
      window.addEventListener('resize',function(){
        setW(window.innerWidth);
        if(w < 768){
          setMobil(true)
        }else{
          setMobil(false)
        }
      })
  return (
    <>
    <div>
            <h2 className='font-semibold text-2xl'>{title}</h2>
          </div>
          <div className='mt-3 relative'>
            <ul ref={scroll} className="flex gap-3 scrollbar  relative overflow-x-scroll overflow-y-hidden pb-3 ">
              {data && data.slice(0,12).map((c,key)=>{
                 let type = c.first_air_date ? "tv" : "movie"   
                return(
                  <li key={key}>
                  <div className="w-[130px] max-w-[190px] min-h-full bg-trasparent rounded-lg  ">
                      <Link to={`/detail/${type}/${c.id}-${speakingurl(c.title)}`} className='max-w-[190px] w-[130px] h-[195px]  block'>
                          {c.backdrop_path ? <LazyLoadImage src={`https://image.tmdb.org/t/p/w150_and_h225_bestv2/${c.backdrop_path}`}  effect="blur"  className='rounded-lg h-full w-full'  />:
                                                    <div className="w-full h-full grid place-items-center"><BsCardImage className=' text-5xl' /></div>
                                                  }
                          
                      </Link>
                      <div className="py-3 px-3">
                          <Link to={`/detail/${type}/${c.id}-${speakingurl(c.title)}`}>
                              <h5 className="mb-2 text-sm  tracking-tight text-gray-900 dark:text-white text-center">{c.title}</h5>
                          </Link>
                          
                          
                      </div>
                  </div>
                </li>
                )
              })}
              
              
            </ul>
            <span ref={after} className='ease-in-out w-16 h-full absolute top-0 right-0 bg-shadow-img will-change-scroll pointer-events-none'></span>
          </div>
    </>
  )
}

export default CastSlider