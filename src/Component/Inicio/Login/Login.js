import React from 'react';
import { BsPerson, BsFillEyeFill, BsFillEyeSlashFill, BsFillLockFill } from 'react-icons/bs'; // Importa los iconos de usuario y ojo desde react-icons

import bateicon from './img/saludobeisbol.png';

const Login = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 border border-red-500 lg:w-100">
      <h1 className="text-red-700 text-4xl font-bold border-b-2 border-red-900">ATLETICOS</h1>
      <div className="text-black flex m-10">
        Que bueno que regresaste <img src={bateicon} alt="Saludo bate" className="w-6 h-6 ml-2" />
      </div>
      <div className="container flex bg-black border-r-4 m-3 w-80 h-10 items-center rounded-lg shadow-xl">
        <div className="flex items-center rounded-full bg-black p-2 border-gray-500 ml-2 w-full">
          <BsPerson className="w-5 h-5 text-red-500" /> 
          <input className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3" placeholder="Username" />
        </div>
      </div>
      <div className="container flex bg-black border-r-4 m-3 w-80 h-10 items-center rounded-lg shadow-xl">
        <div className="flex items-center rounded-full bg-black p-2 ml-2 w-full">
          <BsFillLockFill className="w-5 h-5 text-red-500" />
          <input type={showPassword ? 'text' : 'password'} className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3 mr-3"
            placeholder="Password"
          />
          <div className="cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <BsFillEyeSlashFill className="w-5 h-5 text-red-500 ml-5" /> : <BsFillEyeFill className="w-5 h-5 text-red-500" />}
          </div>
        </div>
      </div>
      <div className="flex text-opacity-70 items-center text-black text-center justify-center hover:text-red-950 cursor-pointer font-bold p-2 ml-2 w-full">
        ¿Olvidaste la contraseña?
      </div>
      <div className="m-3 w-60 h-10 items-center text-center justify-center">
        <button type="button" className="bg-black text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 shadow-xl">Enviar</button>
      </div>

      <div className=" my-4 text-black cursor-pointer">Regístrate dando clic aqui, o con</div>

      <div className="flex items-center justify-center space-x-4">
       

        <span className="h-7 w-7 fill-[#ea4335] cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512">
            <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
          </svg>
        </span>
      </div>
    </div>
  );
}

export default Login;
