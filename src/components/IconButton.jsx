import React from 'react'

function IconButton({children}) {
  return (
    <button className='w-11 h-11 rounded-full bg-blue-900 box-border flex items-center justify-center hover:bg-blue-700'>{children}</button>
  )
}

export default IconButton