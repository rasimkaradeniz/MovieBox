import React from 'react'
import logo from "../img/st.jpg"
import { BsFillSuitHeartFill } from 'react-icons/bs';

function Card({item}) {
  const photo =require(`../img/${item.img}`)
  return (
    <div className="relative ">
        <img className="relative items-center" src={photo} alt="card" />
        <div className="absolute top-0 translate-y-4 w-full justify-between px-4 hidden peer-hover:flex">
            <div className="bg-gray-400/50 text-xs font-bold w-[74px] h-[22px] grid place-items-center px-[8px] py-[3px] rounded-xl">TV SERIES</div>
            <div className="bg-[#F3F4F6]/50 text-xs font-bold w-[30px] h-[30px] grid place-items-center rounded-full"><BsFillSuitHeartFill className='text-lg text-[#D1D5DB]' /></div>
        </div>
        <div className="flex flex-col gap-3">
            <h6 className="text-xs text-gray-400 mt-3 font-bold ">{item.country}, {item.date}</h6>
            <h3 className="text-lg font-bold text-gray-900">{item.name}</h3>
            <span className="text-gray-900 font-semibold">{item.imdb}</span>
            <div>

            {
              item.Category.map((category,key)=>{
                  let length = item.Category.length

                  return(
                  <span key={key} className='font-bold text-gray-400 text-base'>{category}{length-1 == key ? " " : "," }</span>
                  )
                }
              )
            }
            </div>
            
        </div>
    </div>
  )
}

export default Card