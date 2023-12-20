import React, { useEffect, useState } from 'react'
import arrow from '../assets/arrow.png'
import axios from 'axios';
import sample from '../assets/sample.webp';
import sample2 from '../assets/sample2.webp';
const OrderDetail = () => {
    const [data,setData] = useState({});
    
    const backHandler = () =>{
        window.history.back();
    }
    const getDetail=async()=>{
        try{
            const data = await axios.get("/api/v1/product/get-product")
            console.log(typeof(data));
            console.log(data.data.products);
            setData(data);
        }
        catch(error){
            console.log(error)
        }
    }
    useEffect(()=>{
        getDetail();
    },[])
  return (
    <div className='bg-gray-200 h-[100vh] relative flex flex-col'>
            <div className=' bg-gray-100 rounded-lg mx-2 mt-2 flex'>
            <img className='cursor-pointer' onClick={backHandler} src={arrow} alt='arrow'/>
            <div className='text-center text-2xl font-bold mx-auto'>Orders</div>
            </div>
            <div className='bg-gray-300 h-[90vh]'>
            <div className='bg-gray-100 h-[22vh] rounded-md mt-8 mx-5 relative flex flex-row'>
                <div>
                    <img className=' mt-2 h-[20vh] w-[25vw] rounded-lg ml-4' src={sample} alt='product'/></div>
                <div className='flex flex-col'>
                <div className='text-l mx-auto font-bold mt-2'>H3DKZ-F Timer Relay Output || Make : Omron</div>
                <div className='mx-auto text-gray-600 ml-6'>Omron H3DKZ-F Timer Repeat Cycle, Twin Timer Time Delay Relay SPDT (1 Form C) 0.1 Sec ~ 1200 Hrs Delay 5A @ 250VAC DIN Rail.</div>
                <div className='flex flex-row mt-2'>
                    <div className='flex flex-row mx-8'>
                      <div className='text-blue-600 gap-3 mr-2'> Price:</div>
                      <div className=''>1,250</div>
                    </div>
                    <div className='flex flex-row'>
                      <div className='text-blue-600 mr-1'> Customer Name:</div>
                      <div className='mr-10'>Sachin Gupta</div>
                    </div>
                    <div className='font-bold text-sm rounded-xl bg-gray-200'> 12 pieces</div>
                </div>
                <div className=' flex flex-row  justify-evenly my-auto'>
                    <button className='bg-blue-600 rounded-lg text-white py-2 px-2 text-sm font-bold'>Order Again</button>
                    <button className='bg-blue-600 rounded-lg text-white py-2 px-2 text-sm font-bold'>View Details</button>
                </div>
                </div>
                </div>
                
            <div className='bg-gray-100 h-[22vh] rounded-md mt-8 mx-5 relative flex flex-row'>
            <div>
                    <img className=' mt-2 h-[20vh] w-[25vw] rounded-lg ml-4' src={sample} alt='product'/></div>
                <div className='flex flex-col'>
                <div className='text-l mx-auto font-bold mt-2'>H3DKZ-F Timer Relay Output || Make : Omron</div>
                <div className='mx-auto text-gray-600 ml-6'>Omron H3DKZ-F Timer Repeat Cycle, Twin Timer Time Delay Relay SPDT (1 Form C) 0.1 Sec ~ 1200 Hrs Delay 5A @ 250VAC DIN Rail.</div>
                <div className='flex flex-row mt-2'>
                    <div className='flex flex-row mx-8'>
                      <div className='text-blue-600 gap-3 mr-2'> Price:</div>
                      <div className=''>1,250</div>
                    </div>
                    <div className='flex flex-row'>
                      <div className='text-blue-600 mr-1'> Customer Name:</div>
                      <div className='mr-10'>Sachin Gupta</div>
                    </div>
                    <div className='font-bold text-sm rounded-xl bg-gray-200'> 12 pieces</div>
                </div>
                <div className=' flex flex-row  justify-evenly my-auto'>
                    <button className='bg-blue-600 rounded-lg text-white py-2 px-2 text-sm font-bold'>Order Again</button>
                    <button className='bg-blue-600 rounded-lg text-white py-2 px-2 text-sm font-bold'>View Details</button>
                </div>
                </div>
            </div>
            <div className='bg-gray-100 h-[22vh] rounded-md mt-8 mx-5 relative flex flex-row'>
            <div>
                    <img className=' mt-2 h-[20vh] w-[25vw] rounded-lg ml-4' src={sample} alt='product'/></div>
                <div className='flex flex-col'>
                <div className='text-l mx-auto font-bold mt-2'>H3DKZ-F Timer Relay Output || Make : Omron</div>
                <div className='mx-auto text-gray-600 ml-6'>Omron H3DKZ-F Timer Repeat Cycle, Twin Timer Time Delay Relay SPDT (1 Form C) 0.1 Sec ~ 1200 Hrs Delay 5A @ 250VAC DIN Rail.</div>
                <div className='flex flex-row mt-2'>
                    <div className='flex flex-row mx-8'>
                      <div className='text-blue-600 gap-3 mr-2'> Price:</div>
                      <div className=''>1,250</div>
                    </div>
                    <div className='flex flex-row'>
                      <div className='text-blue-600 mr-1'> Customer Name:</div>
                      <div className='mr-10'>Sachin Gupta</div>
                    </div>
                    <div className='font-bold text-sm rounded-xl bg-gray-200'> 12 pieces</div>
                </div>
                <div className=' flex flex-row  justify-evenly my-auto'>
                    <button className='bg-blue-600 rounded-lg text-white py-2 px-2 text-sm font-bold'>Order Again</button>
                    <button className='bg-blue-600 rounded-lg text-white py-2 px-2 text-sm font-bold'>View Details</button>
                </div>
                </div>
            </div>
            </div>
    </div>
  )
}

export default OrderDetail