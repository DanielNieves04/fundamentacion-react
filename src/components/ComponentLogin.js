import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/styleLogin.css'

export const ComponentLogin = () => {

  const navigate = useNavigate();

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación si es necesario
    navigate('/');
  };

  return (
    <div className='bodyLogin'>
        <h3>Inicio de sesión</h3>
        <input type="text" placeholder="Usuario" className="inputField" />
        <input type="password" placeholder="Contraseña" className="inputField" />
        <button onClick={handleLogin} className="loginButton">Ingresar</button>
        <a href="/register" className="registerLink">Registrar</a>
    </div>
  )
}
