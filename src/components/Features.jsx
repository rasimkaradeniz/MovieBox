import React from 'react'
import Card from '../components/Card';

import { Swiper, SwiperSlide  } from 'swiper/react';
import  { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import Title from './Title';
import {features} from '../store'



export default function Features (){
    return(
        <section className='container-sm'>
            <Title title="Features" />
            <div  className="mx-auto my-4"> 
            <Swiper
        
                    modules={[Autoplay]}
                    autoplay={{delay:3000}}
                    spaceBetween={50}
                    slidesPerView={4}
                    scrollbar={{ draggable: true }}
            >
            {features.map((feature)=>

                    <SwiperSlide><Card item={feature}/></SwiperSlide>
                
            )}
           
            
            </Swiper>
        </div>
    </section>
    )
}