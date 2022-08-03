import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from 'react-icons/fa';
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import cn from "classnames"
import { useDispatch,useSelector } from "react-redux";
import { searchMovie } from "../store/movies";
import speakingurl from "speakingurl"
import moment from 'moment';

const Header = ( {bgImg = false}) => {
  const [scroll, setScroll] = useState(false);
  const [show,setShow] = useState(false);
  const [query,setQuery] = useState("")
  const headerRef = useRef()
  const {data,error,loading} = useSelector(state => state.movies.search)
  const dispatch = useDispatch()
  useEffect(()=>{
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
      if(bgImg){
        if(window.scrollY > 50 ){
          headerRef.current?.classList.remove("md:bg-transparent")
          headerRef.current?.classList.add("md:bg-white")
        }else{
          headerRef.current?.classList.remove("md:bg-white")
          headerRef.current?.classList.add("md:bg-transparent")
        }
      }
    });
  },[])
 
  const search = (e) =>{
    setQuery(e.target.value)
    dispatch(searchMovie(query))
  } 


  return (
    <header ref={headerRef} className={cn({"bg-white  top-0 left-0 w-full z-10":true,
                            "md:bg-transparent fixed shadow-lg":bgImg,
                            "sticky border-b border-gray-300":!bgImg
                            }) }>
        <nav className='py-4 text-white border-gray-300 '>
          <div className='flex items-center  h-[60px] container md:px-0 px-3 mx-auto justify-between'>
            <Link to="/" className={`flex w-1/3 text-center items-center gap-2 text-2xl font-semibold text-[#2F80ED] ${ bgImg ?'md:text-white' : 'md:text-[#2F80ED]'} ${scroll && 'md:text-[#2F80ED]'}`}>
                  <BiMoviePlay />
               MovieBox
            </Link>
              <div className=" w-2/3 justify-between items-center lg:flex hidden ">
                <div className={`w-[520px] h-9 relative` }>
                  <input value={query} onChange={search} type='text' className={` ${ bgImg ? 'md:text-white' : 'md:text-black'} ${scroll && 'md:text-black'}   w-full bg-transparent  focus:ring-[#2F80ED] focus:border-[#2F80ED] block shadow-sm sm:text-sm border-gray-300 rounded-md peer`}/>
                  <FaSearch className={`text-gray-300 absolute top-0 right-0 -translate-x-3 translate-y-3 w-4 h-4 peer-focus:text-[#2F80ED]`} />
                  <div className="bg-white text-black  absolute top-full left-0 max-h-[350px] overflow-y-scroll   z-50 w-full mt-[2px] rounded-b-md scrollbar snap-x ">
                  {!loading ? data.map((d)=>{
                      let media = ""
                      switch (d.media_type) {
                        case "movie":
                          media = "Movie"
                          break;
                        case "tv":
                            media = "TV Series"
                            break;
                        case "person":
                          media = "Actor"
                          break;
                        default:
                          break;
                      }
                      return(
                        <Link key={d.id} to={`/detail/${d.id}-${speakingurl(d.original_title || d.name)}`} className="relative snap-center">
                        <div className="px-[20px] py-[18px] flex gap-3 relative hover:before:content-[''] hover:before:w-2 hover:before:h-[100] hover:before:bg-[#6F32F1] hover:before:-ml-[20px] hover:before:rounded-r-md">
                          <figure className="w-[50px] h-auto">
                          <img src={`https://image.tmdb.org/t/p/original/${d.poster_path || d.profile_path}`} alt="" className="rounded h-full"  />
                          <figcaption className="hidden">{d.original_title || d.name}.</figcaption>
                          </figure>
                         <div className="flex flex-col">
                          <h2 className="font-semibold text-lg"> {d.original_title || d.name}</h2>
                          <span className="font-semibold text-sm text-[#888888]">{media}</span>
                          <span className="font-semibold text-sm text-[#888888] mt-auto">{d.first_air_date && moment(d.first_air_date).format("LL") || d.release_date && moment(d.release_date).format("LL") }</span>
                         </div>
                        </div>
                        </Link>
                      )
                    }) : <h1 className="p-10 text-center h-full w-full">Loading...</h1>}
                    </div>
                </div>
                <Link to={'/login'} className='w-[114px] h-[45px]  inline-flex justify-center items-center px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2F80ED] hover:bg-[#2F80ED]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F80ED]/80'>Sign in</Link>
                
              </div>
              <div className={`flex lg:hidden text-3xl text-gray-500`}>
                <button onClick={()=>setShow(!show)}>{!show ? <AiOutlineMenu /> : <AiOutlineClose /> }</button>
              </div>
              {/* Mobil Menü */}
             

          </div>
        </nav>
        <div className={`${show ? 'flex' : 'hidden'} transition  duration-500 relative px-4 my-3 flex-col space-y-4`}>
         <div>
            <input type='text' className={`${scroll && 'text-black'} w-full bg-transparent peer px-3 focus:ring-[#2F80ED] focus:border-[#2F80ED] block shadow-sm sm:text-sm border-gray-300 rounded-md`}/>
            <FaSearch className={`${scroll && 'text-gray-300'} absolute top-0 right-3 -translate-x-3 translate-y-3 peer-focus:text-[#2F80ED]`} />     
          </div>
          <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-[#2F80ED] hover:bg-[#2F80ED]/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2F80ED]/80"> Sign in</button>   
        </div>
    </header>
  )
}

export default Header