import React, { useState } from "react";
import { BsFillEyeFill, BsFillEyeSlashFill, BsFillLockFill, BsPerson, BsEnvelope } from "react-icons/bs";
import bateicon from '../Login/img/saludobeisbol.png';

const RegisterUser = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [userData, setUserData] = useState({
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState({
    fullName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
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

    let newError = { ...error };

    switch (name) {
      case 'fullName':
        newError.fullName = value ? '' : 'Debes digitar tu nombre';
        break;
      case 'username':
        newError.username = value ? '' : 'Debes digitar tus apellidos';
        break;
      case 'email':
        if (!value) {
          newError.email = 'Debes digitar un correo electrónico';
        } else if (!validateEmail(value)) {
          newError.email = 'El correo electrónico debe ser válido';
        } else {
          newError.email = '';
        }
        break;
      case 'password':
        if (!value) {
          newError.password = 'Debes digitar una contraseña';
        } else if (!validatePassword(value)) {
          newError.password = 'La contraseña debe tener al menos 8 caracteres, una mayúscula, un número y un carácter especial';
        } else {
          newError.password = '';
        }
        break;
      case 'confirmPassword':
        newError.confirmPassword = value === userData.password ? '' : 'Las contraseñas no coinciden';
        break;
      default:
        break;
    }

    setError(newError);
  };

  const handleRegister = async () => {
    const { fullName, username, email, password, confirmPassword } = userData;

    if (!fullName || !username || !email || !password || !confirmPassword) {
      return;
    }

    if (error.fullName || error.username || error.email || error.password || error.confirmPassword) {
      return;
    }

    setError({
      fullName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    alert('Registro exitoso');
    // Aquí puedes agregar la lógica adicional para el registro
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md p-6 border border-red-500 max-w-[450px]">
      <h1 className="text-red-700 text-4xl font-bold border-b-2 border-red-900">Registro Atletico</h1>
      <div className="text-black flex m-2 max-w-[450px] text-justify">
        Regístrate ahora y sé parte de la familia del béisbol y sóftbol <img src={bateicon} alt="Saludo bate" className="w-6 h-6 ml-2" />
      </div>
      
      <div className="container flex bg-black border-r-4 m-1 w-80 h-10 items-center rounded-lg shadow-xl">
        <div className="flex items-center rounded-full bg-black p-2 border-gray-500 ml-2 w-full">
          <BsPerson className="w-5 h-5 text-red-500" />
          <input
            name="fullName"
            className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3"
            placeholder="Nombres"
            value={userData.fullName}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {error.fullName && <div className="text-red-500 mb-3 w-80 h-6 text-sm text-justify">{error.fullName}</div>}

      <div className="container flex bg-black border-r-4 m-1 w-80 h-10 items-center rounded-lg shadow-xl">
        <div className="flex items-center rounded-full bg-black p-2 border-gray-500 ml-2 w-full">
          <BsPerson className="w-5 h-5 text-red-500" />
          <input
            name="username"
            className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3"
            placeholder="Apellidos"
            value={userData.username}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {error.username && <div className="text-red-500 mb-3 w-80 h-6 text-sm text-justify">{error.username}</div>}

      <div className="container flex bg-black border-r-4 m-1 w-80 h-10 items-center rounded-lg shadow-xl">
        <div className="flex items-center rounded-full bg-black p-2 border-gray-500 ml-2 w-full">
          <BsEnvelope className="w-5 h-5 text-red-500" />
          <input
            name="email"
            type="email"
            className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3"
            placeholder="Correo Electrónico"
            value={userData.email}
            onChange={handleInputChange}
          />
        </div>
      </div>
      {error.email && <div className="text-red-500 mb-3 w-80 h-6 text-sm text-justify">{error.email}</div>}

      <div className="container flex bg-black border-r-4 m-1 w-80 h-10 items-center rounded-lg shadow-xl">
        <div className="flex items-center rounded-full bg-black p-2 ml-2 w-full">
          <BsFillLockFill className="w-5 h-5 text-red-500" />
          <input
            name="password"
            type={showPassword ? 'text' : 'password'}
            className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3 mr-3"
            placeholder="Contraseña"
            value={userData.password}
            onChange={handleInputChange}
          />
          <div className="cursor-pointer" onClick={togglePasswordVisibility}>
            {showPassword ? <BsFillEyeSlashFill className="w-5 h-5 text-red-500 ml-5" /> : <BsFillEyeFill className="w-5 h-5 text-red-500" />}
          </div>
        </div>
      </div>
      {error.password && <div className="text-red-500 mb-3 w-80 h-6 text-sm text-justify">{error.password}</div>}

      <div className="container flex bg-black border-r-4 m-1 w-80 h-10 items-center rounded-lg shadow-xl">
        <div className="flex items-center rounded-full bg-black p-2 ml-2 w-full">
          <BsFillLockFill className="w-5 h-5 text-red-500" />
          <input
            name="confirmPassword"
            type={showConfirmPassword ? 'text' : 'password'}
            className="w-full h-5 bg-transparent border-none focus:outline-none text-white ml-3 mr-3"
            placeholder="Confirmar Contraseña"
            value={userData.confirmPassword}
            onChange={handleInputChange}
          />
          <div className="cursor-pointer" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <BsFillEyeSlashFill className="w-5 h-5 text-red-500 ml-5" /> : <BsFillEyeFill className="w-5 h-5 text-red-500" />}
          </div>
        </div>
      </div>
      {error.confirmPassword && <div className="text-red-500 mb-3 w-80 h-6 text-sm text-justify">{error.confirmPassword}</div>}

      <div className="m-3 w-60 h-10 items-center text-center justify-center">
        <button
          type="button"
          onClick={handleRegister}
          className="bg-black text-red-500 border-red-500 border-r-2 w-28 h-10 rounded-full hover:bg-red-900 hover:text-white"
        >
          Registrar
        </button>
      </div>
    </div>
  );
};

export default RegisterUser;
