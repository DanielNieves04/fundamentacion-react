import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../styles/styleInicio.css'
import {ComponentProjectList} from './ComponentProjectList'
import {ComponentProjectNew} from './ComponentProjectNew'

export const ComponentInicio = () => {

    const [visibleDiv, setVisibleDiv] = useState('ver');

    const handleItemClick = (item) => {
        setVisibleDiv(item);
    };

  return (
    <div className='container'>
      <div className='header'>
        <h1>GESTOR DE FUNDAMENTACIÓN DE PROYECTOS</h1>
      </div>
      <div className='body'>
        <div className='menu'>
          <button onClick={() => handleItemClick('crear')}>Crear Proyecto</button>
          <button onClick={() => handleItemClick('ver')}>Ver Proyectos</button>
          <Link to="/login">
            <button className='bottomButton'>Iniciar Sesión</button>
          </Link>
        </div>
        <div className='actions'>
            {visibleDiv === 'ver' && <ComponentProjectList />}
            {visibleDiv === 'crear' && <ComponentProjectNew />}
        </div>
      </div>
    </div>
  )
}
