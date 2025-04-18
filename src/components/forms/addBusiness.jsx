import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from "react-router-dom";

const BusinessForm = () => {
  const [categories,setCategories] = useState([]);
  const [cities,setCities] = useState([]);
  const token = localStorage.getItem('token');


  const {register,handleSubmit,formState: { errors },} = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const BACKEND_URL='http://localhost:8000/api/new_submission';
    console.log(token)
    const config = {
      headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`,
      }
  }
    console.log(data);
    const response = await axios.post(BACKEND_URL, data,config);
    try {
      if (response.status === 200) {
        alert('we receive your submissions we will review it in next days');
      }
    } catch (error) {
      alert("data not valid");
      console.log("data not valid");
    }
  };

  useEffect(()=>{
    const fetchCities =()=>{
      
      const BACKEND_URL='http://localhost:8000/api/cities';
      axios.get(BACKEND_URL)
      .then((response)=>{
        console.log(response.data)
        setCities(response.data)
      })
    }
    fetchCities();
  },[])
    useEffect(()=>{
      const fetchCategories =()=>{
        const BACKEND_URL='http://localhost:8000/api/categories';
  
        axios.get(BACKEND_URL)
        .then((response)=>{
          console.log(response.data)
          setCategories(response.data)
        })

        
      }
      
      fetchCategories();
    },[])


  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/formbuss.jpg")',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}
        className="bg-[#1B1F26] bg-opacity-0 p-8 md:p-12 rounded-lg w-full max-w-3xl text-white space-y-6"
        style={{
          backgroundColor: 'rgba(29, 35, 39, 0.6)', 
        }}
      >
        <h1
          className="text-4xl font-light text-center"
          style={{
            fontFamily: "'Beau Rivage', cursive",
            color: '#FFFFFF',
            fontSize: '2.6rem',
          }}
        >
          Your{' '}
          <span
            className="font-medium"
            style={{
              fontFamily: "'Beau Rivage', cursive",
              color: '#F8DDAC',
              fontSize: '2.6rem',
            }}
          >
            Compass
          </span>
        </h1>
        <h2 className="text-xl font-semibold text-center">Add your business</h2>

        {/* Business Name */}
        <div>
          <label className="block text-sm capitalize">Business Name</label>
          <input {...register('name')}
            type="text"
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
            placeholder="Enter business name"
          />
        </div>

        {/* Category */}
        <div>
          <label className="block text-sm capitalize">Select Category</label>
          <select {...register('category_id')}
            className="w-full p-2 rounded border border-gray-400 text-black"
          >
            
            {categories.map((item)=>(
              <option value={item.id}>{item.name}</option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm capitalize">Business Description</label>
          <textarea {...register('description')}
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
            placeholder="Description"
            rows="3"
          ></textarea>
        </div>

        {/* Business Picture */}
        <div>
          <label className="block text-sm capitalize">Business Picture</label>
          <input
            type="file"
            className="w-full p-2 rounded bg-transparent text-white"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-sm capitalize">Address</label>
          <input {...register('address')}
            type="text"
            className="w-full p-2 rounded mb-2 border border-gray-400 bg-transparent text-white"
            placeholder="Street address"
          />
          <div className="flex space-x-2">
          <select {...register('city_id')} className="w-1/2 p-2 rounded border border-gray-400 bg-transparent text-black">
          
          {cities.map((item)=>(
              <option value={item.id}>{item.name}</option>
            ))}
            </select>
            <select className="w-1/2 p-2 rounded border border-gray-400 bg-transparent text-white">
              <option>Morocco</option>
            </select>
          </div>
        </div>

        {/* Business Contact */}
        <div>
          <h3 className="font-semibold mt-4 capitalize">Business Contact</h3>
          <input {...register('website')}
            type="website"
            className="w-full p-2 rounded mb-2 border border-gray-400 bg-transparent text-white"
            placeholder="Business Website"
          />
          <input {...register('email')}
            type="email"
            className="w-full p-2 rounded mb-2 border border-gray-400 bg-transparent text-white"
            placeholder="Email Address"
          />
          <input {...register('phone_number')}
            type="tel"
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
            placeholder="Phone number"
          />
        </div>

        {/* Manager Contact
        <div>
          <h3 className="font-semibold mt-4 capitalize">Manager Contact</h3>
          <input
            type="email"
            className="w-full p-2 rounded mb-2 border border-gray-400 bg-transparent text-white"
            placeholder="Email"
          />
          <input
            type="tel"
            className="w-full p-2 rounded border border-gray-400 bg-transparent text-white"
            placeholder="Mobile"
          />
        </div> */}

        {/* Buttons */}
        <div className="flex justify-between mt-6">
          {/* Cancel button wrapped in a Link component */}
          <Link to="/your-cancel-destination" className="px-4 py-3 w-64 bg-white text-[#CAB284] rounded hover:bg-gray-200">
            Cancel
          </Link>
          {/* Submit button */}
          <button
            type="submit"
            className="px-4 py-3 w-64 bg-yellow-400 text-white rounded hover:bg-yellow-500"
          >
            Submit
          </button>
        </div>

      </form>
    </div>
  );
};

export default BusinessForm;
