import ListSlider from '../components/ListSlider';
import React, { useEffect } from 'react'
import { FaFacebookSquare, FaInstagram, FaTwitter } from 'react-icons/fa'
import { SiImdb } from 'react-icons/si'
import Header from '../components/Header'
import { useDispatch,useSelector } from 'react-redux';
import { fetchMovieDetail } from '../store/movies'
import { Link } from 'react-router-dom';


function Person() {
    const {cast} =useSelector(state => state.movies.detail)
    const dispatch = useDispatch()
   useEffect(()=>{
    dispatch(fetchMovieDetail("299536"))
   },[]) 
  return (
    <>
    <Header />
    <div className='container mx-auto py-10 px-7 flex gap-5 flex-col md:flex-row'>
        <section className='md:w-1/4 w-full '>
            <div className='w-full flex justify-center'>
                <div className='md:h-[450px] md:block relative md:w-full w-[156px] h-[156px] rounded-lg'>
                    <img src="https://www.themoviedb.org/t/p/w300_and_h450_bestv2/1d415X6XP9KXSKDAbDTsf8WwZO6.jpg" alt=""
                    className='w-full min-w-full h-full border-0 outline-none block rounded-lg'/>
                </div>
            </div>
            
            <div className='mt-8 w-full'>
            
                <div className='flex flex-col gap-3 justify-center items-center md:justify-start md:items-start'>
                    <h2 className='w-full font-bold text-black text-4xl md:hidden block text-center'>
                            <a href="">Tom Holland</a>
                    </h2>
                    <div className='flex gap-3'>
                    <a href="" className=''>
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
                            <p>Acting</p>
                        </div>
                        <div className=''>
                            <h6 className='font-semibold'>Known Credits</h6>
                            <p>42</p>
                        </div>
                        <div className=''>
                            <h6 className='font-semibold'>Gender</h6>
                            <p>Male</p>
                        </div>
                        <div className=''>
                            <h6 className='font-semibold'>Birthday</h6>
                            <p>1996-06-01 (26 years old)</p>
                        </div>
                        <div className=''>
                            <h6 className='font-semibold'>Place of Birth</h6>
                            <p>Surrey, England, UK</p>
                        </div>
                    </div>
                    <div className=''>
                        <h6 className='font-semibold'>Also Known As</h6>
                        <ul className='space-y-2'>
                            <li>Thomas Stanley Holland</li>
                            <li>Том Холланд</li>
                            <li>トム・ホランド</li>
                            <li>톰 홀랜드</li>
                            <li>توم هولاند</li>
                            <li>ทอม ฮอลแลนด์</li>
                            <li>汤姆·赫兰德</li>
                            <li>Τομ Χόλαντ</li>
                            <li>Том Голланд</li>
                            <li>湯姆·霍蘭德</li>
                            <li>טום הולנד</li>
                            <li>תומאס סטנלי הולנד</li>
                            <li>Nhện Đệ Tam</li>
                        </ul>
                    </div>
                </div>
            </div>

        </section>
        <section className='md:w-3/4 w-full'>
            <h2 className='w-full font-bold text-black text-4xl md:block hidden'>
                <Link to={""}>Tom Holland</Link>
            </h2>
            <div className='mt-8'>
                <h3 className='font-semibold text-xl mb-2'>Biography</h3>
                <p className='leading-relaxed text-left'>Thomas "Tom" Stanley Holland is an English actor and dancer. He is best known for playing Peter Parker / Spider-Man in the Marvel Cinematic Universe and has appeared as the character in six films: Captain America: Civil War (2016), Spider-Man: Homecoming (2017), Avengers: Infinity War (2018), Avengers: Endgame (2019), Spider-Man: Far From Home (2019), and Spider-Man: No Way Home (2021). He is also known for playing the title role in Billy Elliot the Musical at the Victoria Palace Theatre, London, as well as for starring in the 2012 film The Impossible.</p>
            </div>
            <div className='w-full mt-8'>
                <ListSlider title='Known For' data={cast} />
            </div>
        </section>
    </div>
    </>
  )
}

export default Person