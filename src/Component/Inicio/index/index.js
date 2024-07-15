import React, { useState, useEffect } from 'react';
import Loading from "../Loading/Loading";
import Footer from '../../footer/Footer';
import Login from '../Login/Login';

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
      <div className="flex-grow flex">
        {/* Div para el lado izquierdo (oculto en pantallas <= 790px) */}
        <div className="hidden lg:flex lg:w-1/2 bg-red-600 justify-center items-center">
          <span className="text-white text-lg">Izquierda</span>
        </div>
        {/* Div para el lado derecho (visible en todas las pantallas) */}
        <div className="w-full lg:w-1/2 bg-black flex justify-center items-center">
          <span className="text-white text-lg"><Login /></span>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
