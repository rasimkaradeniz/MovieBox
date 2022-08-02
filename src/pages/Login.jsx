
import React from 'react'
import Input from '../components/Input'
import google from '../img/google.svg'
import facebook from '../img/Facebook.svg'
import apple from '../img/Apple.svg'
import { Link } from 'react-router-dom'
import {Formik, Form} from "formik";
import {LoginSchema} from "../validation";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';



export default function Login() {
    const handleSubmit = async(values) =>{
       await console.log(values)
    }
  const photo =require(`../img/login.jpg`)
  return (
    <div className='md:grid  md:grid-cols-5 h-full'>
        <div className='h-full z-10 col-span-3 flex justify-center flex-col mx-auto md:px-0 px-4'>
            <div className='flex flex-col text-center'>
                    <h2 className='text-[52px] font-medium leading-[62px] mb-3 text-[#333333]'>Login</h2>
                    <p className='text-[#828282] font-normal text-base'>Enter your credential to access your account.</p>
            </div>
            <div className='flex flex-col gap-3 mt-4'>
                    <button className='  text-center w-full border rounded-md text-[#333333] flex item-center justify-center md:px-[111px] hover:shadow-md '>
                        <img src={google} alt="" />     
                        <span className='text-center my-auto'>Login with Google</span>
                    </button>
                    <button className='bg-[#1877F2] text-white text-center w-full border rounded-md  flex item-center justify-center md:px-[111px] hover:shadow-md '>
                        <img src={facebook} alt="" />     
                        <span className='text-center my-auto'>Login with Facebook</span>
                    </button>
                    <button className='bg-black  h-[50px] text-center w-full border rounded-md text-white flex item-center justify-center md:px-[111px] hover:shadow-md '>
                        <img src={apple} alt="" width={24} height={24} className="my-auto mr-5"/>     
                        <span className='text-center my-auto '>Login with Apple</span>
                    </button>
            </div>
            <div className="flex items-center my-12 ">
                <div className="h-px bg-gray-300 flex-1"/>
                <span className="px-4 text-[13px] text-[#D9D9D9] font-semibold">Or</span>
                <div className="h-px bg-gray-300 flex-1"/>
		    </div>
            <Formik         
                          initialValues={{ email: '', password: '' }}  
                          validationSchema={LoginSchema}
                           onSubmit={handleSubmit}
       
     >
       {({isSubmitting,isValid, dirty}) => (
        <Form className='w-full'  >
            <div className='flex flex-col gap-y-7 w-full'>
                <Input id="email" name="email" type='email' label="Email address" />
                <Input id="sifre" name="password" type="password" label="Password" />
            </div>
            <button className='text-[#2F80ED] text-right mt-3'>Forgot Password?</button>
            <button type='submit' disabled={ !isValid || !dirty || isSubmitting} className='w-full bg-[#2F80ED] py-4 text-white mt-12 rounded-md font-medium text-xl disabled:bg-[#2F80ED]/10'>
                Login
            </button>
            <p className='mt-4 text-center text-[#4F4F4F]'>Don’t have an account? <Link to={"/register"} className='text-black font-semibold'>Register here.</Link> </p>
            </Form>
             
             )}
             </Formik>

        </div>
        <div  className='h-full w-full hidden md:block col-span-2'>
            <div className='h-full object-cover'>
            <LazyLoadImage src={photo}  effect="blur" height={"100%"} style={{objectFit:"cover",height:"100%"}}  />
            </div>
                
        </div>
    </div>
  )
}

