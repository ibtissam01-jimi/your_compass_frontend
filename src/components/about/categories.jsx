import axios from "axios";
import { useEffect, useState } from "react";

export default function ExperienceGrid() {

const [categories,setCategories] = useState([]);
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
      <div className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {categories.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden shadow-lg group h-80 cursor-pointer"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h2 className="text-white text-2xl font-semibold text-center px-2">{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  