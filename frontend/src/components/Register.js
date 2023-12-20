import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";

const Register = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const registerHandler = async() =>{
      //console.log(email, password)
      await axios.post("/api/v1/auth/register", {
        name: name, email: email, password: password}).then(navigate('/'))
    }
  return (
    <div className='bg-gray-300 h-[100vh] flex flex-col'>
        <div className='text-center mt-40 text-xl font-bold text-gray-700 font-serif'>Register
        </div>
        <div className='h-1 bg-gray-500 w-1/12 item-center rounded-md mb-2 mx-auto '></div>
        <div className='flex flex-col bg-gray-100 rounded-md border mx-auto mb-auto w-2/6 h-3/6  shadow-sm transition-transform transform hover:shadow-lg hover:scale-102 '>
          <form className='my-3 flex flex-col' >
          <label className='flex flex-col'>
                <div className='mt-6 text-center font-semibold font-serif text-gray-500 mb-2'>Name</div>
                <input className='border shadow-md mb-4 outline-gray-500 w-4/6 mx-auto rounded-md' type='name' id='name' name='name' onChange={event => setName(event.target.value)} required></input>
            </label>
            <label className='flex flex-col'>
                <div className='mt-4 text-center font-semibold font-serif text-gray-500 mb-2'>Email</div>
                <input className='border shadow-md mb-4 outline-gray-500 w-4/6 mx-auto rounded-md' type='email' id='email' name='email' onChange={event => setEmail(event.target.value)} required></input>
            </label>
            <label className='flex flex-col mb-4'>
                <div className='mt-4 text-center font-semibold font-serif text-gray-500 mb-2'>Password</div>
                <input className='border shadow-md outline-gray-500 w-4/6 mx-auto rounded-md' type='password' id='password' name='password' onChange={event => setPassword(event.target.value)} required></input>
            </label>
            <button type='submit' className='mt-4
              mx-auto rounded border bg-blue-600  text-sm text-white font-semibold h-10 w-20 ' onClick={registerHandler}>Register</button>
          </form>
       </div>
    </div>
  )
}

export default Register