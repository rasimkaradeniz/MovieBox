import React from 'react'
import logo from "../img/st.jpg"
import { BsFillSuitHeartFill } from 'react-icons/bs';

function Card() {
  return (
    <div className="relative w-[250px] max-w-[250px]">
        <img className="relative peer" src={logo} alt="card" />
        <div className="absolute top-0 translate-y-5 w-full justify-between px-4 hidden peer-hover:flex">
            <div className="bg-gray-400/50 text-xs font-bold px-1 py-2 rounded-xl">TV SERIES</div>
            <div className="bg-gray-400/50 text-xs font-bold px-1 py-2 rounded-full"><BsFillSuitHeartFill className='text-lg' /></div>
        </div>
        <div className="flex flex-col gap-3">
            <h6 className="text-xs text-gray-400 mt-3 font-bold ">USA, 2016 - Current</h6>
            <h3 className="text-lg font-bold text-gray-900">Stranger Things</h3>
            <span className="text-gray-900 font-semibold">86.0 / 100</span>
            <span className='font-bold text-gray-400 text-base'>Action, Adventure, Horror</span>
        </div>
    </div>
  )
}

export default Card