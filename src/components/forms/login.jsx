
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const BACKEND_URL = 'http://localhost:8000/api/login'
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit =async data => {
    try{

      const response =await axios.post(BACKEND_URL,data);
      if(response.status === 200){
        alert('logged in');
        console.log(response.data.Authorization.token)
        navigate('/');
      }
    }catch(error){
      alert('data not valide')
      console.log('data not valide')

    }
  };

  
  return (
    <div
      className="min-h-screen flex items-center justify-center" // توسيط الفورم
      style={{
        background:
          "linear-gradient(180deg, #0F3556 10%, #3C587D 28%, #8C7D60 57%, #AC9E7D 76%, #747B64 100%)",
        width:"1700px",
      }}
    >
      <header className="text-4xl font-serif font-bold text-[#0A2B4A] italic mb-8">
        Your <span className="text-gold">Compass</span>
      </header>
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <p className="mb-4 text-gray-600">Add your details below to get back into the app</p>
        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="email">
              Email address
            </label>
            <input
              type="email"
              id="email"
              placeholder="e.g. abc@gmail.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-black"
              
              {...register("email",{required:true})}
            />

          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-gray-700" htmlFor="password">
              Password
            </label>
    <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold text-black"
              
              {...register("password",{required:true})}
            />
          </div>

          <div className="text-right text-sm">
            <Link to="/forget_password">
              <a href="#"  className="text-blue-800 hover:underline forget_password">
                Forget Password ?
              </a>
            </Link>
          </div>

          <Link to="/admin">
            <button
              type="submit"
              className="w-full bg-[#0f3556] text-white font-semibold py-2 rounded-md hover:bg-[#0d2d49] transition login_button"
            >
              Log in
            </button>
          </Link>
        </form>

        <p className="text-sm text-gray-600 mt-6">
          Don't have an account?
          <Link to="/create_signup" className="text-blue-800 font-medium hover:underline ml-1 create_account">
            Create an account
          </Link>
        </p>

      </div>
    </div>
  );
}
