import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';

function Title({title}) {
  return (
    <div className="w-full flex items-center justify-between">
                <h2 className="text-black text-4xl font-bold">{title}</h2>
                <button className="flex items-center font-bold gap-2 text-red-700 text-lg  hover:underline hover:text-red-800">See more <AiOutlineRight/> </button>
    </div>
  )
}

export default Title