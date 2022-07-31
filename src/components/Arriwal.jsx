import React from 'react'
import Card from '../components/Card';
import Title from './Title';
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { useSelector } from 'react-redux';


function NextButton ({ onClick, className }) {
	return (
		<button className={`${className} `} onClick={onClick}>
			<AiOutlineRight size={22} />
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`${className} `} onClick={onClick}>
			<AiOutlineLeft size={22} />
		</button>
	)
}


export default function Arrival (){
	const features = useSelector((state) => state.movies.list)

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
					slidesToShow: 2
				}
			},
			{
				breakpoint: 640,
				settings: {
					slidesToShow: 1
				}
			}
		]
	};
  
    return(
        <section className='max-w-[1240px] lg:px-0 px-10'>
            <Title title="New Arrivals" />
            <div  className="mx-auto my-4 "> 
            <Slider {...settings} >

            {features.map((feature)=><Card item={feature}/>)}
                
            </Slider>
        </div>
    </section>
    )
}