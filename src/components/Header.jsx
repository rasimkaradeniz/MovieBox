import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../img/tv.svg"
import { FaSearch } from 'react-icons/fa';

const Header = () => {
  const [scroll, setScroll] = useState(false);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY > 50);
  });


  return (
    <header className={ `${scroll ?'bg-white' : 'bg-transparent'} shadow-lg fixed top-0 left-0 w-full` }>
        <nav className='py-4 text-white border-gray-300 '>
          <div className='flex items-center justify-between h-[60px] container mx-auto'>
            <Link to="/" className={`flex text-center items-center gap-2 text-2xl font-semibold ${scroll && 'text-red-700'}`}>
              <img src={logo} alt=""/>
               MovieBox
            </Link>
              <div className="w-[520px] h-9 relative">
              <input type='text' className={`${scroll && 'text-black'} w-full  outline-none px-3 py-1.5 bg-transparent border-2 rounded text-base font-normal leading-6 focus:border-sky-400 peer`}/>
              <FaSearch className='absolute top-0 right-0 -translate-x-3 translate-y-3 peer-focus:text-sky-400' />

              </div>
              <button className='w-[114px] h-[30px]  mt-1 rounded bg-red-600 font-medium text-white text-sm hover:bg-red-700'>Sign in</button>
          </div>
        </nav>
    </header>
  )
}

export default Header