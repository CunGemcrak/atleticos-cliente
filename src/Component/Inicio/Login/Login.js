import React, { useState } from 'react';
import { BsPerson, BsFillEyeFill, BsFillEyeSlashFill, BsFillLockFill } from 'react-icons/bs'; // Importa los iconos de usuario y ojo desde react-icons

import bateicon from './img/saludobeisbol.png';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [userData, setUserData] = useState({
    user: '',
    pass: ''
  });
  const [error, setError] = useState({
    user: '',
    pass: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    // Validar los campos a medida que se escriben
    if (name === 'user') {
      if (!validateEmail(value)) {
        setError((prevError) => ({
          ...prevError,
          user: 'El usuario debe ser un correo electrónico válido'
        }));
      } else {
        setError((prevError) => ({ ...prevError, user: '' }));
      }
    }

    if (name === 'pass') {
      if (!validatePassword(value)) {
        setError((prevError) => ({
          ...prevError,
          pass: 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial'
        }));
      } else {
        setError((prevError) => ({ ...prevError, pass: '' }));
      }
    }
  };

  const handleValidar = () => {
    const { user, pass } = userData;

    if (!user) {
      setError((prevError) => ({ ...prevError, user: 'Debes digitar un usuario' }));
      return;
    }

    if (!pass) {
      setError((prevError) => ({ ...prevError, pass: 'Debes digitar una contraseña' }));
      return;
    }

    if (!error.user && !error.pass) {
      alert('Validación exitosa');
      // Aquí puedes agregar la lógica adicional para el login
    }
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
          <input
            name="user"
            className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3"
            value={userData.user}
            onChange={handleInputChange}
            placeholder="Correo electrónico"
          />
        </div>
      </div>
      {error.user && <div className="text-red-500 mb-3 w-80 h-6 text-sm text-justify">{error.user}</div>}
      <div className="container flex bg-black border-r-4 m-3 w-80 h-10 items-center rounded-lg shadow-xl">
        <div className="flex items-center rounded-full bg-black p-2 ml-2 w-full">
          <BsFillLockFill className="w-5 h-5 text-red-500" />
          <input
            name="pass"
            type={showPassword ? 'text' : 'password'}
            className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3 mr-3"
            value={userData.pass}
            onChange={handleInputChange}
            placeholder="Contraseña"
          />
          <div className="cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <BsFillEyeSlashFill className="w-5 h-5 text-red-500 ml-5" /> : <BsFillEyeFill className="w-5 h-5 text-red-500" />}
          </div>
        </div>
      </div>
      {error.pass && <div className="text-red-500 mb-3 w-80 h-6 text-sm text-justify">{error.pass}</div>}
      <div className="flex text-opacity-70 items-center text-black text-center justify-center hover:underline hover:text-red-950 cursor-pointer font-bold p-2 ml-2 w-full">
        ¿Olvidaste la contraseña?
      </div>
      <div className="m-3 w-60 h-10 items-center text-center justify-center">
        <button
          type="button"
          onClick={handleValidar}
          className="bg-black text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900 shadow-xl"
        >
          Enviar
        </button>
      </div>
      <div className="flex items-center justify-center space-x-4"></div>
    </div>
  );
};

export default Login;
