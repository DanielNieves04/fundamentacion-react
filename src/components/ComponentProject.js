import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/styleProject.css';

export const ComponentProject = () => {
  return (
    <div className='projectContainer'>
      <div className='projectHeader'>
        <h2>Nombre: <span>Proyecto de Software Uno</span></h2>
        <p>Problema: <span>El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo "Contenido aquí, contenido aquí".</span></p>
      </div>
      <div className='buttons'>
        <button>+ Agregar Criterio</button>
        <button>+ Agregar Alternativa</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Fundamentación</th>
            <th>Alternativa 1</th>
            <th>Alternativa 2</th>
            <th>Alternativa 3</th>
            <th>Alternativa 4</th>
            <th>Argumentación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Criterio 1</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Criterio 2</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Criterio 3</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
            <td>+</td>
          </tr>
          <tr>
            <td>Valor Total</td>
            <td>....</td>
            <td>....</td>
            <td>....</td>
            <td>....</td>
            <td>+</td>
          </tr>
        </tbody>
      </table>
      <div className='footer'>
        <Link to="/">
          <button>Ir a Inicio</button>
        </Link>
      </div>
    </div>
  )
}
