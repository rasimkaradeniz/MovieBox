import React from 'react'
import Card from '../components/Card';
import Title from './Title';
import {features} from '../store'
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


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
        <section className='container lg:px-0 px-10'>
            <Title title="New Arrivals" />
            <div  className="mx-auto my-4 "> 
            <Slider {...settings} >

            {features.map((feature)=><Card item={feature}/>)}
                
            </Slider>
        </div>
    </section>
    )
}