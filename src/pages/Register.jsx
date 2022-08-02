import React from 'react'
import google from '../img/google.svg'
import facebook from '../img/Facebook.svg'
import apple from '../img/Apple.svg'
import Input from '../components/Input'
import { useDispatch } from 'react-redux'
import { nanoid } from 'nanoid'
import { addUsers } from '../store/users'
import {Formik, Form} from "formik";
import {RegisterSchema} from "../validation";



const Register = () => {
   const dispatch = useDispatch();
   const handleSubmit = async (values, actions) =>{
    
        const user = {
            id : nanoid(),
            email : values.email,
            password : values.password
        }
      await dispatch(addUsers(user))
          
   }
 

  return (
    <div className='w-full h-full'>
        <div className='h-full max-w-[450px] flex flex-col justify-center items-center mx-auto md:px-0 px-4'>
            <div className='flex flex-col text-center'>
                    <h2 className='text-[52px] font-medium leading-[62px] mb-3 text-[#333333]'>Register</h2>
                    <p className='text-[#828282] font-normal text-base'>Enter your credential to access your account.</p>
            </div>
            <div className='flex flex-col gap-3 mt-4 md:w-auto w-full'>
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
            <div className="flex items-center my-5 md:my-10 w-full">
                <div className="h-px bg-gray-300 flex-1"/>
                <span className="px-4 text-[13px] text-[#D9D9D9] font-semibold">Or</span>
                <div className="h-px bg-gray-300 flex-1"/>
		    </div>
            <Formik         
                          initialValues={{ email: '', password: '' }}  
                          validationSchema={RegisterSchema}
                           onSubmit={handleSubmit}
       
     >
       {({isSubmitting,isValid, dirty}) => (
            
            <Form className='w-full'  >
                <div className='flex flex-col gap-y-4 w-full'>
                    <Input id="email" type='email' label="Email address" name="email"/>
                    <Input id="sifre" type="password" label="Password" name="password"/>
                </div>
                
                <button type='submit' disabled={!isValid || !dirty || isSubmitting} className='w-full bg-[#2F80ED] py-4 text-white mt-6 rounded-md font-medium text-xl   disabled:bg-[#2F80ED]/10' >
                    Register
                </button>
            </Form>
            
            )}
            </Formik>

        </div>
        
    </div>
  )
}

export default Register
