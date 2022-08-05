import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import speakingurl from "speakingurl"

const ListSlider = ({title,data,type="series"}) => {
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
                
                return(
                  <li key={key}>
                  <div className="w-[140px] m-w-[140px] min-h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <Link to={`/profile/${c.id}-${speakingurl(c.name)}`} className='m-w-[138px] w-[138px] h-[175px]  block'>
                          <img className="rounded-t-lg h-full w-full" src={`https://image.tmdb.org/t/p/original/${c.profile_path}`} alt="" />
                      </Link>
                      <div className="py-3 px-3">
                          <Link to={`/profile/${c.id}-${speakingurl(c.name)}`}>
                              <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{c.name}</h5>
                          </Link>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{c.character}</p>
                          
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

export default ListSlider