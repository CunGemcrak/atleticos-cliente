import React from 'react';
import iconocorazon from './img/corazon.png';

const Footer = () => {
  return (
    <div className="bg-black text-white px-4 border-t-2">
      <ul className="flex flex-col sm:flex-row items-center justify-center sm:justify-between w-full space-y-2 sm:space-y-0 sm:space-x-4">
        <li className="font-bold text-lg sm:border-b-2 sm:border-white">ATLETICOS</li>
        <li className="text-sm flex items-center">
          Hecho con el <img src={iconocorazon} alt='Logo Corazon' className='w-5 m-2'/> Atletioco | copyright © 2024
        </li>
        <li className="text-sm flex flex-col items-center">
          ¿Cualquier inquietud consulta? a <span className="text-red-500 font-bold italic">labc.1021@gmail.com</span>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
