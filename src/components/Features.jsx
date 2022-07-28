import React from 'react'
import Card from '../components/Card';
import Title from './Title';
import {features} from '../store'
import Slider from "react-slick";
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';


function NextButton ({ onClick, className }) {
	return (
		<button className={`${className} `} onClick={onClick}>
			<AiOutlineRight size={22}
/>
		</button>
	)
}
function PrevButton ({ onClick, className }) {
	return (
		<button className={`${className} !`} onClick={onClick}>
			<AiOutlineLeft size={22} />
		</button>
	)
}


export default function Features (){
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
        <section className='container md:px-0 px-10'>
            <Title title="Features" />
            <div  className="mx-auto my-4 "> 
            <Slider {...settings} className="flex gap-x-2">

            {features.map((feature)=><Card item={feature}/>)}
                
            </Slider>
        </div>
    </section>
    )
}