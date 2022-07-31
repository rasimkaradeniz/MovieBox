import React from 'react'
import { BsFillSuitHeartFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Card({item}) {
  const photo =require(`../img/${item.img}`)
  return (
    <Link to="/detail" className="snap-center">
    <div className="relative w-full md:w-[250px]  md:block flex flex-col snap-center justify-start items-start">
        <img className="relative peer w-full   md:h-[375px]" src={photo} alt="card" />
        <div className="flex flex-col gap-3">
            <h6 className="text-xs text-gray-400 mt-3 font-bold ">{item.country}, {item.date}</h6>
            <h3 className="text-lg leading-6 font-bold text-gray-900">{item.name}</h3>
            <span className="text-gray-900 font-semibold">{item.imdb}</span>
            <div>

            {
              item.Category.map((category,key)=>{
                  let length = item.Category.length

                  return(
                  <span key={key} className='font-bold text-gray-400 text-base'>{category}{length-1 === key ? " " : "," }</span>
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