import React from 'react'
import { AiOutlineRight } from 'react-icons/ai';

function Title({title}) {
  return (
    <div className="w-full flex items-center justify-between">
                <h2 className="text-black text-4xl font-bold">{title}</h2>
    </div>
  )
}

export default Title