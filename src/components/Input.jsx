import React from 'react'
import {useField} from "formik";


const Input = ({id,label, type = 'text', ...props}) => {
  const [field, meta, helpers] = useField(props)

  return (
    <div className='relative form-floating'>
        <input  id={id} type={type} name='email' placeholder={label} className='form-control w-full block border rounded placeholder:text-transparent cursor-pointer border-gray-300 peer h-[calc(3.5rem+2px)]  focus:pt-[1.625rem] focus:pb-[0.625rem]' {...props} {...field}/>
        <label htmlFor={id} className='cursor-pointer w-full h-full absolute top-0 left-0 origin-top-left px-4 py-3 border border-transparent transition-opacity 
       peer-focus:opacity-60 peer-focus:scale-[0.85] peer-focus:-translate-y-1  '>{label}</label>
    </div>
  )
}

export default Input