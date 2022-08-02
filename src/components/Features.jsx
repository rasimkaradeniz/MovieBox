import React, { useEffect } from 'react'
import Card from '../components/Card';
import Title from './Title';
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPopuler } from '../store/movies';


function NextButton ({ onClick, className }) {
	return (
		<button className={`${className} `} onClick={onClick}>
			<AiOutlineRight size={24}
/>
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`${className} !`} onClick={onClick}>
			<AiOutlineLeft size={24} />
		</button>
	)
}


export default function Features (){
	const {data,error,loading} = useSelector(state =>state.movies.popular)
	const dispatch = useDispatch()
	useEffect(()=>{
		dispatch(fetchPopuler())
	},[])
	
    const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		nextArrow: <NextButton />,
		prevArrow: <PrevButton />,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 2,
                    className: "center"
				}
			},
			{
				breakpoint: 640,
				settings: {
                    className: "center",
					slidesToShow: 1
				}
			}
		]
	};
  
    return(
   
	
		 <section className='max-w-[1240px]  md:px-0 px-10'>
				<Title title="Features" />
				<div  className="mx-auto my-4 "> 
				{ loading ? "loading...":
				<Slider {...settings} >
					{ data && data.map((movie)=><Card key={movie.id} item={movie}/>)}
					</Slider>
				} 	
			</div>
		</section>
	
	

	
    )
}