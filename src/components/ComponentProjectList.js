import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styleProjectList.css'

export const ComponentProjectList = () => {
  return (
    <div className='projectList'>
        <h3>Lista de Proyectos</h3>
        <ul>
          <Link className='link' to="/proyecto"> 
            <li>Proyecto de Software Uno <span className="deleteIcon">🗑️</span></li>
            <li>Proyecto de Software Dos <span className="deleteIcon">🗑️</span></li>
            <li>Proyecto de Software Tres <span className="deleteIcon">🗑️</span></li>
            <li>Proyecto de Software Cuatro <span className="deleteIcon">🗑️</span></li>
            <li>Proyecto de Software Seis <span className="deleteIcon">🗑️</span></li>
          </Link>
        </ul>
    </div>
  )
}
