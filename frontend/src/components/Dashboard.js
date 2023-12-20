import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from "react-router-dom";
import axios from 'axios';
import plus from "../assets/plus.png"
import exit from '../assets/logout.png'
const Dashboard = () => {
  const navigate = useNavigate();
  const {state} = useLocation();
  const email = state;
  const [name,setName] = useState("");
  const getData = async() =>{
    try{
      const {data} = await axios.get(`/api/v1/auth/get-detail/${email}`);
      setName(data.userData.name);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
      getData();
  },[])
  const createHandler = () =>{
    navigate('/create-product');
}
  const orderHandler = () => {
    navigate('/order-detail')
  }
  const logoutHandler = () =>{
    navigate('/');
  } 
  return (
    <div className='bg-gray-200 h-[100vh] relative flex flex-col '>
      <div className='bg-gray-100 rounded-lg mx-2 mt-2 flex'>
        <div className='text-center text-2xl font-bold mx-auto'>Made 2 Automate</div>
        <img className='cursor-pointer p-1' onClick={logoutHandler} src={exit} alt='exit'/>
        </div>
      <div className='bg-gray-300 h-[90vh]'>
        <div className='flex justify-between'>
          <div className='bg-gray-100 h-[20vh] w-[12vw] rounded-lg mt-6 ml-8 flex flex-col'>
            <div className='text-center text-7xl text-blue-700 font-extrabold mt-2'>112</div>
            <div className='text-center text-xl font-bold mt-5'>Total Orders</div>
          </div>
          <div className='bg-gray-100 h-[20vh] w-[12vw] rounded-lg mt-6'>
            <div className='text-center text-7xl text-red-400 font-extrabold mt-2'>152</div>
            <div className='text-center text-xl font-bold mt-5'>New Stocks</div>
          </div>
          <div className='bg-gray-100 h-[20vh] w-[12vw] rounded-lg mt-6'>
            <div className='text-center text-7xl text-gray-400 font-extrabold mt-2'>100</div>
            <div className='text-center text-xl font-bold mt-5'>Dead Stocks</div>
          </div>
          <div className='bg-gray-100 h-[20vh] w-[12vw] rounded-lg mt-6'>
            <div className='text-center text-7xl text-green-800 font-extrabold mt-2'>25</div>
            <div className='text-center text-xl font-bold mt-5'>Total Leads</div>
          </div>
          <div className='bg-gray-100 h-[20vh] w-[12vw] rounded-lg mt-6 mr-8'>
          <div className='text-center text-4xl text-green-500 font-extrabold mt-6 mb-3'>1,11,200</div>
            <div className='text-center text-xl font-bold mt-8'>Total Revenue</div>
          </div>
        </div>
        <div className='bg-gray-100 h-[38vh] rounded-md mt-8 mx-5 relative flex flex-col'>
            <div className='flex flex-col'>
              <div className='font-semibold ml-6 mt-3 text-lg'>Total Orders</div>
              <div className='text-sm ml-6 mb-2 text-gray-600'>A summary of your orders</div>
            </div>
            <div className='flex flex-row mb-3'>
            <div className='h-full bg-blue-500 w-1 rounded-lg ml-5 mr-3'></div>
            <div className='flex flex-col'>
              <div className='font-semibold font-mono'>IR Sensor</div>
              <div className='text-gray-600 text-sm'>Product Description here this one is really long and it goes over maybe</div>
              <div className='flex flex-row text-sm'>
                <div className='text-gray-600'>Quantity</div>
                <div className='text-blue-400 font-semibold mx-3'>120</div>
                <div className='text-gray-600'>Pieces</div>
              </div>
            </div>
            </div>
            <div className='flex flex-row mb-3'>
            <div className='h-full bg-blue-500 w-1 rounded-lg ml-5 mr-3'></div>
            <div className='flex flex-col'>
              <div className='font-semibold font-mono'>Metal Sensor</div>
              <div className='text-gray-600 text-sm'>Task Description here this one is really long and it goes over maybe? And give it two lines</div>
              <div className='flex flex-row text-sm'>
                <div className='text-gray-600'>Quantity</div>
                <div className='text-blue-400 font-semibold mx-3'>120</div>
                <div className='text-gray-600'>Pieces</div>
              </div>
            </div>
            </div>
            <div className='absolute top-0 right-0  mr-3 mt-3'>
              <button className='text-white bg-blue-500 rounded-md px-3 py-2 font-semibold' onClick={orderHandler}>View All</button>
            </div>
        </div>
        <div className='bg-gray-100 h-[22vh] rounded-md mt-8 mx-5 relative flex flex-col'>
        <div className='flex flex-col'>
              <div className='font-semibold ml-6 mt-3 text-lg'>Total Leads</div>
              <div className='text-sm ml-6 mb-2 text-gray-600'>A summary of your leads received</div>
            </div>
            <div className='flex flex-row mb-3'>
            <div className='h-full bg-blue-500 w-1 rounded-lg ml-5 mr-3'></div>
            <div className='flex flex-col'>
              <div className='font-semibold font-mono'>{name}</div>
              <div className='text-gray-600 text-sm'>I need a metal sensor. Is it available?? Please contact me</div>
              <div className='flex flex-row text-sm'>
                <div className='text-gray-600'>Quantity</div>
                <div className='text-blue-400 font-semibold mx-3'>120</div>
                <div className='text-gray-600'>Pieces</div>
              </div>
            </div>
            </div>
            <div className='absolute top-0 right-0  mr-3'>
              <div className='flex flex-col relative mb-5'>
               <div className='absolute top-0 right-0'>
                      <button className='text-white bg-blue-500 rounded-md font-semibold py-2 px-3'>View All</button>
               </div>
                <div className='flex flex-row my-10 mr-5'>
                <div className='text-sm text-blue-500 mr-2 '>Contact Details: </div>
                <div className='font-semibold pb-3'>123456789</div>
                </div>
                
              </div>
            </div>
        </div>
      </div>
      
      <label className='absolute bottom-0 right-0 py-2 mr-1 mb-1 rounded border bg-blue-500 object-cover text-xs font-semibold flex w-1/12 text-white '>
        <img className='rounded-full ml-1 object-cover' src={plus} alt='plus' height='25' width='25'/>
       <button className='ml-2'  onClick={createHandler}>Create Product</button>
      </label>
    </div>
  )
}

export default Dashboard