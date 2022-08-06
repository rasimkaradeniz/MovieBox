import React, { useEffect, useState } from 'react'
import { BsCardImage } from 'react-icons/bs';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import NasaImage from '../img/login.jpg';



 const CheckImage = ({imgurl,...props}) => {
    const [loadingImg, setLoadingImg] = useState(true);
    const [isValid, setIsValid] = useState(null);
    useEffect(()=>{
        fetch(imgurl).then(res=>{
        setIsValid(res.status === 200)
        setLoadingImg(false)})
    },[])
    if (loadingImg || !isValid) {
        return  <div className="w-full h-full grid place-items-center"><BsCardImage className=' text-5xl' /></div>;
      }
    
      // return the image with the provided value
      return <LazyLoadImage src={imgurl} effect="blur"  {...props}  />;
}
export default CheckImage