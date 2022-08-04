import React, {  useEffect, useRef, useState } from 'react'
import Header from '../components/Header'
import { prominent } from 'color.js'
import IconButton from '../components/IconButton';
import { AiFillHeart, AiFillStar } from 'react-icons/ai';
import { FaBookmark, FaListUl } from 'react-icons/fa';
import { BsPlayFill } from 'react-icons/bs';
import { CircularProgressbar,buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import { useDispatch,useSelector } from 'react-redux';
import {  fetchMovieDetail, fetchTvDetail } from '../store/movies';
import { useParams } from 'react-router-dom';
import imdb from '../img/imdb.svg'


export default function Detail  () {
  const scroll = useRef()
  const after = useRef()
  const [gradient,setGradient] = useState('');
  const [mobil,setMobil] = useState(false);
  const [w, setW] = useState(window.innerWidth)
  const {type,id} = useParams()
  const dispatch = useDispatch()
  const {data,loading,error,cast} =useSelector(state => state.movies.detail)
  useEffect(()=>{
        switch (type) {
          case "movie":
            dispatch(fetchMovieDetail(id))
            break;
          default:
            break;
        }
        
      },[])
  useEffect(()=>{
    switch (type) {
      case "movie":
        dispatch(fetchMovieDetail(id))
        break;
      case "tv":
        dispatch(fetchTvDetail(id))
        break;
      default:
        break;
    }
       
  },[id])

   
    
 
  
  data && prominent(`https://image.tmdb.org/t/p/w1280/${data.backdrop_path}`, { amount: 2 }).then(color => {
    setGradient(`linear-gradient(to right, rgb(${color[0][0]}, ${color[0][1]}, ${color[0][2]}) 150px, rgba(${color[1][0]}, ${color[1][1]}, ${color[1][2]}, 0.84) 100%)`)
  })
  
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
    <Header />
    {data ? <section className='w-full h-auto'>
      <div className='h-full w-full md:border ' 
      style={{  backgroundImage: "url(" + `https://image.tmdb.org/t/p/w1280/${data.backdrop_path}` + ")",backgroundPosition: !mobil && "right -200px top",
      backgroundSize: mobil ? "contain" : "cover",backgroundRepeat: "no-repeat"}}>
      <div className='flex justify-center flex-wrap w-full h-full' style={{backgroundImage:!mobil && gradient}}>
        <div className='md:px-10  py-8 w-full max-w-[1440px]'>
          <div className='flex md:flex-nowrap flex-wrap w-full'>
               <div className='md:w-[300px] md:min-w-[300px] md:h-[450px] block ' >
                  <div className='md:w-full md:h-full'>
                    <img className='ml-3 md:ml-0 md:w-full md:min-w-full md:max-w-full md:h-full md:min-h-full md:max-h-full w-[calc(((100vw/2.222222)-40px)/1.5)] max-w-[calc(((100vw/2.222222)-40px)/1.5)] min-w-[calc(((100vw/2.222222)-40px)/1.5)] h-[calc((100vw/2.222222)-40px)] min-h[calc((100vw/2.222222)-40px)] ' src={`https://image.tmdb.org/t/p/original/${data.poster_path}`} alt="" />
                  </div>
              </div>
              <div className='flex text-white mt-14 w-full  md:mt-0' style={{backgroundImage:mobil && gradient}}>
                  <div className='md:pl-10 px-5 py-3 md:px-0 md:py-0  flex flex-wrap content-center items-center gap-7'>
                    <div className='w-full  text-white '>
                      <h1 className='text-4xl font-bold'>{data.original_title || data.name}</h1>
                      {data.genres.map((category,key)=>{
                       let length = data.genres.length
                        return (
                          <span key={key}>{category.name}{length-1 === key ? " " : " - " }</span>
                        )
                      })}
                      
                    </div>
                    {!mobil ? <ul className='flex flex-col md:flex-row gap-5 w-full items-center'>
                      <li className='flex items-center h-17 gap-2'>
                         <div className='w-16 h-16 duration-300 hover:scale-125'>
                          
                         <CircularProgressbar  value={data.vote_average.toFixed(1)*10} text={`${data.vote_average.toFixed(1)*10}%`} background backgroundPadding={6} 
                          styles={buildStyles({
                              backgroundColor: "#081c22",
                              textColor: "#fff",
                              pathColor: "#21d07a",
                              trailColor: "transparent",
                              textSize :'24px'
                            })}
                          />
                         </div>
                         <div className='font-bold'> User <br />Score</div>
                      </li>
                      <li> <IconButton><FaListUl /></IconButton></li>
                      <li> <IconButton><AiFillHeart /></IconButton></li>
                      <li> <IconButton><FaBookmark /> </IconButton></li>
                      <li> <IconButton> <AiFillStar /> </IconButton></li>
                      {data.video && <li > <a href="www.youtube.com" className='flex items-center text-center text-lg font-bold'><BsPlayFill className='mr-1' />  Play Trailer</a></li>}
                    </ul> : 
                    <div className='w-full flex flex-col gap-5'>
                       <div className='w-full flex justify-around'>
                          <div className='flex items-center justify-between h-17 gap-2'>
                            <div className='w-16 h-16 duration-300 hover:scale-125'>
                              <CircularProgressbar  value={86} text={`${86}%`} background backgroundPadding={6} 
                                styles={buildStyles({
                                    backgroundColor: "#081c22",
                                    textColor: "#fff",
                                    pathColor: "#21d07a",
                                    trailColor: "transparent",
                                    textSize :'24px'
                                  })}
                                />
                              </div>
                              <div className='font-bold'> User <br />Score</div>
                          </div>
                          {data.video && <a href="" className='flex items-center text-center text-lg font-bold'><BsPlayFill className='mr-1' />  Play Trailer</a>}
                       </div>
                       <div className='flex justify-around w-full'>
                        <IconButton><FaListUl /></IconButton>
                        <IconButton><AiFillHeart /></IconButton>
                        <IconButton><FaBookmark /> </IconButton>
                        <IconButton> <AiFillStar /> </IconButton>
                       </div>
                    </div>
                    }
                    {data.imdb_id && <div className='mt-3'>
                      <a href={`https://www.imdb.com/title/${data.imdb_id}`} target="_blank">
                        <img src={imdb} alt=""  width={50} height={50}/>
                      </a>
                    </div>}
                    <div className='text-white w-full'>
                      <h4 className='opacity-70 italic text-lg font-normal'>{data.tagline}</h4>
                      <h2 className='text-lg font-bold my-2'>Overview</h2>
                      <p>{data.overview}</p>

                      <ol className='flex w-full mt-7'>
                        <li className='w-1/3'>
                          <p className='font-bold'>Matt Duffer</p>
                          <p>Creator</p>
                        </li>
                        <li>
                        <p className='font-bold'>Ross Duffer</p>
                          <p>Creator</p>
                        </li>
                      </ol>
                    
                    </div>
                    
                  </div>
              </div> 
          </div>

        </div>
      </div>

      </div>
    </section> : "loading"}
    <section className='w-full h-auto my-10'>
      <div className="container mx-auto">
        <div className='md:w-3/4 md:max-w-3/4 w-full px-2'>
          <div>
            <h2 className='font-semibold text-2xl'>Series Cast</h2>
          </div>
          <div className='mt-3 relative'>
            <ul ref={scroll} className="flex gap-3 scrollbar  relative overflow-x-scroll overflow-y-hidden pb-3 ">
              {cast && cast.slice(0,12).map((c)=>{
                return(
                  <li>
                  <div className="w-[140px] m-w-[140px] min-h-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                      <a href="#" className='m-w-[138px] w-[138px] h-[175px]  block'>
                          <img className="rounded-t-lg h-full w-full" src={`https://image.tmdb.org/t/p/original/${c.profile_path}`} alt="" />
                      </a>
                      <div className="py-3 px-3">
                          <a href="#">
                              <h5 className="mb-2 text-base font-bold tracking-tight text-gray-900 dark:text-white">{c.name}</h5>
                          </a>
                          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{c.character}</p>
                          
                      </div>
                  </div>
                </li>
                )
              })}
              
              
            </ul>
            <span ref={after} className='ease-in-out w-16 h-full absolute top-0 right-0 bg-shadow-img will-change-scroll pointer-events-none'></span>
          </div>
          
        </div>
         <div className='mt-4 md:px-0 px-2 pb-20'>
            <a href="" className='font-semibold text-lg'> Full Cast & Crew</a>
        </div>                   
      </div>
    </section>

    </>
  )
}
