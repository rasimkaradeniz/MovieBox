import React, { useState } from 'react'
import google from '../img/google.svg'
import facebook from '../img/Facebook.svg'
import apple from '../img/Apple.svg'
import Input from '../components/Input'
import { useDispatch,useSelector } from 'react-redux'
import { nanoid } from 'nanoid'
import { addUsers } from '../store/users'
import { useNavigate } from 'react-router-dom'

const Register = () => {
   const dispatch = useDispatch();
   const [email,setEmail] = useState('');
   const [password,setPassword] = useState(''); 
   const {users} = useSelector(state => state.users)
   const navigate = useNavigate()
   const handleSubmit = (e) =>{
    e.preventDefault()
    const user = {
        id : nanoid(),
        email : email,
        password : password
    }
    const request = dispatch(addUsers(user))
    navigate("/login")
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
            <form className='w-full' onSubmit={handleSubmit} >
            <div className='flex flex-col gap-y-4 w-full'>
                <Input id="email" type='email' label="Email address" req="true" onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <Input id="sifre"  type="password" label="Password"  req="true" onChange={(e)=>setPassword(e.target.value)} value={password}/>
            </div>
            <button type='submit' className='w-full bg-[#2F80ED] py-4 text-white mt-6 rounded-md font-medium text-xl hover:shadow-lg'>
                Register
            </button>
            </form>
        </div>
        
    </div>
  )
}

export default Register
