import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../img/tv.svg"
import { FaSearch } from 'react-icons/fa';
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import cn from "classnames"

const Header = ( {bgImg = false}) => {
  const [scroll, setScroll] = useState(false);
  const [show,setShow] = useState(false);
  const headerRef = useRef()
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
      if(bgImg){
        if(window.scrollY > 50 ){
          headerRef.current.classList.remove("md:bg-transparent")
          headerRef.current.classList.add("md:bg-white")
        }else{
          headerRef.current.classList.remove("md:bg-white")
          headerRef.current.classList.add("md:bg-transparent")
        }
      }
    });
  },[])
 
  


  return (
    <header ref={headerRef} className={cn({"bg-white  top-0 left-0 w-full z-10":true,
                            "md:bg-transparent fixed shadow-lg":bgImg,
                            "sticky border-b border-gray-300":!bgImg
                            }) }>
        <nav className='py-4 text-white border-gray-300 '>
          <div className='flex items-center  h-[60px] container md:px-0 px-3 mx-auto justify-between'>
            <Link to="/" className={`flex w-1/3 text-center items-center gap-2 text-2xl font-semibold text-red-700 ${ bgImg ?'md:text-white' : 'md:text-red-700'} ${scroll && 'md:text-red-700'}`}>
              <img src={logo} alt=""/>
               MovieBox
            </Link>
              <div className=" w-2/3 justify-between items-center lg:flex hidden">
                <div className={`w-[520px] h-9 relative` }>
                  <input type='text' className={` ${ bgImg ? 'md:text-white' : 'md:text-black'} ${scroll && 'md:text-black'}   w-full bg-transparent peer focus:ring-red-500 focus:border-red-500 block shadow-sm sm:text-sm border-gray-300 rounded-md`}/>
                  <FaSearch className={`text-gray-300 absolute top-0 right-0 -translate-x-3 translate-y-3 peer-focus:text-red-500`} />
                </div>
                <button className='w-[114px] h-[45px]  inline-flex justify-center items-center px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>Sign in</button>
                
              </div>
              <div className={`flex lg:hidden text-3xl text-gray-500`}>
                <button onClick={()=>setShow(!show)}>{!show ? <AiOutlineMenu /> : <AiOutlineClose /> }</button>
              </div>
              {/* Mobil Menü */}
             

          </div>
        </nav>
        <div className={`${show ? 'flex' : 'hidden'} transition  duration-500 relative mx-2 my-3 flex-col space-y-4`}>
         <div>
            <input type='text' className={`${scroll && 'text-black'} w-full bg-transparent peer focus:ring-red-500 focus:border-red-500 block shadow-sm sm:text-sm border-gray-300 rounded-md`}/>
            <FaSearch className={`${scroll && 'text-gray-300'} absolute top-0 right-0 -translate-x-3 translate-y-3 peer-focus:text-red-500`} />     
          </div>
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"> Sign in</button>   
        </div>
    </header>
  )
}

export default Header