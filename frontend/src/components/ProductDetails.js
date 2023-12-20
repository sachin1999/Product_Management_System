import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom';
import QRCode from 'qrcode.react';
import print from '../assets/print.png'
import check from '../assets/check.png'
import { saveAs } from 'file-saver';
const ProductDetails = () => {
  const navigate = useNavigate();
    const {state} = useLocation();
    const data = state;
    const [barcode,setBarcode] = useState({
            name: '',
            category: '',
            description: '',
            id: '',
            manufacturer_name: '',
            quantity: 0,
            photo: null
    });
    const imageUrl = URL.createObjectURL(data.photo);
  
    useEffect(() => {
      setBarcode(data);
    }, [barcode]);

  const handlePrint = () => {
    // Use browser print functionality
    window.print();
  };
  const saveQRCode = () => {
    const canvas = document.getElementById('qrcode');
    canvas.toBlob((blob) => {
      saveAs(blob, 'qrcode.png');
    });
  };
  const saveChanges = () =>{
    navigate(`/update-product/?id=${data.id}`, { state: barcode.photo});
  }
  const exitHandler = () =>{
    navigate(`/dashboard`)
  }
  return (
    <div className='bg-gray-300 h-[100vh]'>
      <div className=' flex justify-between items-center p-4 '>
        <h3 className='text-center flex-grow font-bold text-l' >Barcode</h3>
        <button className='rounded border bg-blue-600 text-sm text-white font-semibold h-10 w-20 ml-2' onClick={exitHandler}>Exit</button>
      </div>
      <div className='flex align items-center justify-center mt-4 mb-4 bg-gray-200 w-5/6 mx-auto border rounded-md'>
        <img src={check} alt='check' height='40px' width='50px'/>
        <h2>Successfully Added Product</h2>
      </div>
      <div className='bg-gray-200 mx-4 border rounded-md  my-3 flex'>
      <img className='h-32 mt-4 ml-4 mr-10 rounded-md border object-cover bg-gray-200 ' src={imageUrl} alt='product'></img>
      <div className='ml-10'>
      <div className=' mt-4 flex text-l font-bold mb-1'>{data.name}</div>
      <div className='text-l font-semibold mb-1'>{data.description}</div>
      <div className='flex flex-col justify-around bg-gra-100 border rounded-md'>
       <div className='flex'>
       <div className='text-l text-blue-600 font-semibold'>Manufacture:</div>
       <div className='ml-4'>{data.manufacturer_name}</div>
       </div>
       <div className='flex'>
       <div className='text-l text-blue-600 font-semibold'>ProductId:</div>
       <div className='ml-4'> {data.id}</div>
       </div>
       <div className='flex'>
       <div className='text-l text-blue-600 font-semibold'>Quantity:</div>
       <div className='ml-4'>{data.quantity}</div>
       </div>
       <div className='flex'>
       <div className='text-l text-blue-600 font-semibold'>Category:</div>
       <div className='ml-4'>{data.category}</div>
       </div>
        </div>
       </div>
       </div>
      
       { barcode && <div className='bg-gray-200 mx-4 flex my-2 border rounded-md items-center justify-center'>
        <QRCode id='qrcode' value={JSON.stringify(barcode)} />
       </div>}
       <div className='flex justify-between mx-4'>
       <div className='rounded border bg-blue-600 text-l font-semibold h-8 w-20 flex object-cover'>
        <img src={print} alt='print'/>
        <button className='text-white' onClick={handlePrint}>Print</button>
       </div>
       <div>
       <button className='rounded border bg-blue-600 text-sm text-white font-semibold h-10 w-20' onClick={saveQRCode}>Save QR</button>
       </div>
       <div>
        <button className='rounded border bg-blue-600 text-sm text-white font-semibold h-10 w-20' onClick={saveChanges}>Edit Details</button>
       </div>
       </div>
       </div>
  )
}

export default ProductDetails