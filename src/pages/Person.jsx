import React, { useEffect } from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiImdb } from 'react-icons/si'
import Header from '../components/Header'
import { useDispatch,useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchCast, fetchPersonDetail } from '../store/person';
import CastSlider from '../components/CastSlider';
import { BsCardImage } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';




function Person() {
    const {data,error,loading} = useSelector(state=> state.person.detail)
    const cast = useSelector(state => state.person.cast)
    const dispatch = useDispatch()
    const {id} = useParams()
    
    

    useEffect(()=>{
        dispatch(fetchPersonDetail(id))
        dispatch(fetchCast(id))
        
    },[]) 
    useEffect(()=>{
        dispatch(fetchPersonDetail(id))
        dispatch(fetchCast(id))
    },[id])

    const age = (date) =>{
         const today = new Date()
         const birthDay = new Date(date)
         const a = today.getFullYear() - birthDay.getFullYear()
         return a
    }


    
   
  return (
    <>
    <Header />
    {!loading && 
        <div className='container mx-auto py-10 px-7 flex gap-5 flex-col md:flex-row'>
        <section className='md:w-1/4 w-full '>
            <div className='w-full flex justify-center'>
                <div className='md:h-[450px] md:block relative md:w-full w-[156px] h-[156px] rounded-lg'>
                     {data.profile_path ?<LazyLoadImage src={`https://image.tmdb.org/t/p/original/${data.profile_path}`} effect="blur" className='w-[156px] h-[156px] min-w-full  border-0 outline-none block rounded-lg md:h-[450px] md:w-full'  />:
                                                                         <div className="w-full h-full grid place-items-center"><BsCardImage className=' text-5xl' /></div>
                                                                        }
                </div>
            </div>
            
            <div className='mt-8 w-full'>
            
                <div className='flex flex-col gap-3 justify-center items-center md:justify-start md:items-start'>
                    <h2 className='w-full font-bold text-black text-4xl md:hidden block text-center'>
                            <a href="">{data.name}</a>
                    </h2>
                    <div className='flex gap-3'>
                    <a href={`https://www.imdb.com/name/${data.imdb_id}/`} className=''>
                        <SiImdb className='w-full h-full text-4xl hover:text-yellow-400' />
                    </a>
                    <a href="" className=''>
                        <FaFacebookSquare className='w-full h-full text-4xl hover:text-blue-600' />
                    </a>
                    <a href="" className=''>
                        <FaInstagram className='w-full h-full text-4xl hover:text-rose-500' />
                    </a>
                    <a href="" className=''>
                        <FaTwitter className='w-full h-full text-4xl hover:text-cyan-400' />
                    </a>
                    </div>
                </div>
                <div className='mt-8 flex flex-col gap-2'>
                    <h2 className='font-semibold text-xl '>Personal Info</h2>
                    <div className='grid grid-cols-2 gap-2 md:block '>
                        <div className=''>
                            <h6 className='font-semibold'>Known For</h6>
                            <p>{data.known_for_department}</p>
                        </div>
                        
                        <div className=''>
                            <h6 className='font-semibold'>Gender</h6>
                            <p>{data.gender === 2 ? "Erkek" : "Kadın"}</p>
                        </div>
                        <div className=''>
                            <h6 className='font-semibold'>Birthday</h6>
                            <p>{data.birthday} ({age(data.birthday)} years old)</p>
                        </div>
                        <div className=''>
                            <h6 className='font-semibold'>Place of Birth</h6>
                            <p>{data.place_of_birth}</p>
                        </div>
                    </div>
                    <div className=''>
                        <h6 className='font-semibold'>Also Known As</h6>
                        <ul className='space-y-2 md:flex md:flex-col grid grid-cols-2'>
                           { data.also_known_as && data.also_known_as.map((asknow,key)=>{
                                return(
                                    <li key={key}>{asknow}</li>
                                )
                           })}
                            
                        </ul>
                    </div>
                </div>
            </div>

        </section>
        <section className='md:w-3/4 w-full'>
            <h2 className='w-full font-bold text-black text-4xl md:block hidden'>
                <Link to={""}>{data.name}</Link>
            </h2>
            <div className='mt-8'>
                <h3 className='font-semibold text-xl mb-2'>Biography</h3>
                <p className='leading-relaxed text-left'>{data.biography}</p>
            </div>
            <div className='w-full mt-8'>
                {<CastSlider title='Known For' data={cast.data} />}
            </div>
        </section>
    </div>
    }
    </>
  )
}

export default Person