import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Navigate} from "react-router-dom"
import image from '../assets/gallery.png'
const CreateProduct = () => {
  const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        id: '',
        manufacturer_name: '',
        description: '',
        quantity: 0,
        category: 'New Stock',
        photo: null, // Added for image upload
      });
      const [imagePreview, setImagePreview] = useState(null);
      const handleChange = (e) => {
        const { name, value, type } = e.target;
    
        // Handle file input separately
        if (type === 'file') {
          setFormData((prevData) => ({ ...prevData, [name]: e.target.files[0] }));
          const previewURL = URL.createObjectURL(e.target.files[0]);
          setImagePreview(previewURL);
        } else {
          setFormData((prevData) => ({ ...prevData, [name]: value }));
        }
      };
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const formDataToSend = new FormData();
    
          // Append form data to FormData object
          for (const key in formData) {
            formDataToSend.append(key, formData[key]);
          }
    
          // Send form data (including image) to the backend
          const response = await axios.post('/api/v1/product/create-product', formDataToSend, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
          
          // Handle successful response
          console.log('Product added successfully:', response.data);
          navigate(`/product-detail`,{ state: formData });
        } catch (error) {
          // Handle errors
          console.error('Error adding product:', error.message);
        }
      };
  return (
    <div className='w-full'>
    <div className='text-center text-3xl font-bold underline'>Add Product</div>
    <form className='text-center font-xl mt-5 ' onSubmit={handleSubmit} >
    <div className='h-40 relative mx-auto max-w-sm'>
    <label className='cursor-pointer flex items-center justify-center gap-1 p-2 border rounded-2xl text-xl text-gray-500'>
        <input className='hidden' type="file" multiple name="photo" accept="image/*" onChange={handleChange} 
        />
    {
            imagePreview !==null && (
                <img className='rounded-2xl h-30 w-28' src={ URL.createObjectURL(formData.photo)} alt="Product Preview"  />
              )
        }
            {imagePreview ===null && (
            <img src={image} alt="product add " />
            )}
        
      </label>
      </div>
      
      <label className='block uppercase tracking-wide text-gray-700 text-l font-bold mb-1'>
        Name:
        <input className='appearance-none block w-5/6 mx-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        type="text" name="name" value={formData.name} onChange={handleChange} required />
      </label>
      <br />

      <label className='block uppercase tracking-wide text-gray-700 text-l font-bold '>
        Product ID:
        <input className='appearance-none block w-5/6 mx-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
         type="text" name="id" value={formData.id} onChange={handleChange} required />
      </label>
      <br />

      <label className='block uppercase tracking-wide text-gray-700 text-l font-bold'>
        Manufacturer Name:
        <input className='appearance-none block w-5/6 mx-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500' 
        type="text" name="manufacturer_name" value={formData.manufacturer_name} onChange={handleChange} required />
      </label>
      <br />

      <label className='block uppercase tracking-wide text-gray-700 text-l font-bold'>
        Product Description:
        <input className='appearance-none block w-5/6 mx-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
         type="text" name="description" value={formData.description} onChange={handleChange} required />
      </label>
      <br />

      <label className='block uppercase tracking-wide text-gray-700 text-l font-bold'>
        Product Quantity:
        <input className='appearance-none block w-5/6 mx-auto bg-gray-200 text-gray-700 border border-gray-200 rounded py-1.5 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
         type="number" name="quantity" value={formData.quantity} onChange={handleChange} required />
      </label>
      <br />

      <label className='block uppercase tracking-wide text-gray-700 text-l font-bold'>
        Category:
        <select className='gap-2 mx-4' name="category" value={formData.category} onChange={handleChange}>
          <option  value="New Stock">New Stock</option>
          <option value="Dead Stock">Dead Stock</option>
        </select>
      </label>
      <br />

      <button className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer 
         rounded-md font-bold text-white text-lg w-[100px] h-[30px] mx-auto my-4' type="submit">Create Product
          
        </button>
    </form>
    </div>
  )
}

export default CreateProduct