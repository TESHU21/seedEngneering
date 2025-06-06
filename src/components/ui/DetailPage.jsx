import React from 'react';
import DevelopmentImage from "../../assets/our services/Development.svg"
import { useNavigate } from 'react-router-dom';



const DetailPage = () => {
  const navigate=useNavigate()
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-50 to-indigo-100 font-sans">
    

        <p className="text-xl text-gray-600 mb-8">
          The Detail Page you're looking for is currently under active development.
          We're working hard to bring you an incredible experience!
        </p>

        <img
          src={DevelopmentImage}
          alt="Page under development"
          className=" w-[500px] h-[400px] rounded-lg shadow-lg mb-8 max-w-full " // mx-auto centers the image
         
        />

        <p className="text-lg text-gray-700 mb-4">
          Please check back soon for updates. We appreciate your patience!
        </p>

        <button
          onClick={() => navigate("/")} // Replace with actual navigation logic
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer"
        >
          Go Back
        </button>
      </div>
   
  );
};

export default DetailPage; 
