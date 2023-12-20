import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const navigate = useNavigate();
    const loginHandler = async (e) =>{
        //console.log(email, password)
        e.preventDefault();
       try{
        const res=await axios.post("/api/v1/auth/login", {
          email: email, password: password
        })
            if(res.data.success === true){
              navigate('/dashboard',{state : email})
          }
       }
       catch(error){
        console.log(error)
        alert('Wrong Credentials');
       }
    }
    const registerHandler = () =>{
        navigate('/register')
    }
  return (
    <div className='bg-gray-300 h-[100vh] flex flex-col'>
        <div className='text-center mt-40 text-xl font-bold text-gray-700 font-serif'>Login
        </div>
        <div className='h-1 bg-gray-500 w-1/12 item-center rounded-md mb-2 mx-auto '></div>
        <div className='flex flex-col bg-gray-100 rounded-md border mx-auto mb-auto w-2/6 h-3/6  shadow-sm transition-transform transform hover:shadow-lg hover:scale-102 '>
          <form className='my-3 flex flex-col' onSubmit={loginHandler} >
            <label className='flex flex-col'>
                <div className='mt-8 text-center font-semibold font-serif text-gray-500 mb-2'>Email</div>
                <input className='border shadow-md mb-4 outline-gray-500 w-4/6 mx-auto rounded-md' type='email' id='email' name='email' onChange={event => setEmail(event.target.value)}></input>
            </label>
            <label className='flex flex-col mb-4'>
                <div className='mt-4 text-center font-semibold font-serif text-gray-500 mb-2'>Password</div>
                <input className='border shadow-md outline-gray-500 w-4/6 mx-auto rounded-md' type='password' id='password' name='password' onChange={event => setPassword(event.target.value)} required></input>
            </label>
            <button type='submit' className='mt-8
              mx-auto rounded border bg-blue-600  text-sm text-white font-semibold h-10 w-20 '>Login </button>
          </form>
          <div className='flex mx-auto'>
            <div className='text-base mr-2'>Don't have an account</div>
            <div>
                <button className=' text-red-500 underline text-sm font-semibold' onClick={registerHandler}>Create Account</button>
            </div>
          </div>
       </div>
    </div>
    
  )
}

export default Login