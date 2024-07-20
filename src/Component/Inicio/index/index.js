import React, { useState, useEffect } from 'react';
import Loading from "../Loading/Loading";
import Footer from '../../footer/Footer';
import Login from '../Login/Login';
import RegisterUser from '../RegisterUser/RegisterUser';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the timeout as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading && <Loading />}
      <div className="flex-grow flex flex-col lg:flex-row ">
        {/* Div para el lado izquierdo (visible en todas las pantallas) */}
        <div className="w-full lg:w-1/2 bg-red-600 flex justify-center items-center">
          <span className="text-white text-lg mt-20 mb-20"><RegisterUser/></span>
        </div>
        {/* Div para el lado derecho (visible en todas las pantallas) */}
        <div className="w-full lg:w-1/2 bg-black flex justify-center items-center">
          <span className="text-white text-lg mt-20 mb-20"><Login /></span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
