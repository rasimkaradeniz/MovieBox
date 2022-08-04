import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import {useSelector} from "react-redux"
import moment from 'moment';
import speakingurl from "speakingurl"
import imdb from '../img/imdb.svg'


function Card({item,type}) {
  const {data} = useSelector(state =>state.movies.genres)
  const genrestv = useSelector(state =>state.movies.genrestv)
  const [genreData,setGenreData] =useState([])
  useEffect(()=>{
    switch (type) {
      case "movie":
        setGenreData(data)
        break;
      case "tv":
          setGenreData(genrestv.data)
          break;
      default:
        break;
    }
  },[])
  return (
    <Link to={`/detail/${type}/${item.id}-${speakingurl(item.original_title)}`} className="snap-center">
    <div className="relative w-full md:w-[250px]  md:block flex flex-col snap-center justify-start items-start">
        <img className="relative peer w-full   md:h-[375px]" src={`https://image.tmdb.org/t/p/original/${item.poster_path}`} alt="card" />
        <div className="flex flex-col gap-3">
            <h6 className="text-xs text-gray-400 mt-3 font-bold ">{moment(item.release_date).format("LL")}</h6>
            <h3 className="text-lg leading-6 font-bold text-gray-900">{item.original_title || item.name}</h3>
            <span className="text-gray-900 font-semibold flex gap-3"><img src={imdb} alt="" /> {item.vote_average.toFixed(1)}/10</span>
            <div>

            {
             (item.genre_ids && genreData) && item.genre_ids.map((category,key)=>{
              let length = item.genre_ids.length
              let categoryName = genreData && genreData.filter(genre => genre.id === category)
              return(
              <span key={key} className='font-bold text-gray-400 text-base'>{categoryName[0]?.name}{length-1 === key ? " " : "," }</span>
              )
            }
          )
             
            }
            </div>
            
        </div>
    </div>
    </Link>
  )
}

export default Card