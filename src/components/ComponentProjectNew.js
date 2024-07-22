import React from 'react'
import '../styles/styleProjectNew.css'

export const ComponentProjectNew = () => {
  return (
    <div className='projectNew'>
        <h3>Crear un Nuevo Proyecto</h3>
        <textarea type="text" placeholder="Nombre Del Proyecto" className="inputField" />
        <textarea type="text" placeholder="Descripción Del Problema" className="inputField" />
        <div className='criterioAlternativa'>
            <div className='alternativa'>
                <h5>Alternativas</h5>
                <ul>
                    <li>Alternativa 1  <span className="deleteIcon">✏️</span></li>
                    <li>Alternativa 2  <span className="deleteIcon">✏️</span></li>
                    <li>Alternativa 3  <span className="deleteIcon">✏️</span></li>
                    <li>Alternativa 4  <span className="deleteIcon">✏️</span></li>
                    <li className='agregar'>+Agregar</li>
                </ul>
            </div>
            <div className='criterio'>
                <h5>Criterios</h5>
                <ul>
                    <li>Criterio 1  <span className="deleteIcon">✏️</span></li>
                    <li>Criterio 2  <span className="deleteIcon">✏️</span></li>
                    <li>Criterio 3  <span className="deleteIcon">✏️</span></li>
                    <li className='agregar'>+Agregar</li>
                </ul>
            </div>
        </div>
        <div className='boton'>
        <button>Crear Proyecto</button>
        </div>
    </div>
  )
}
