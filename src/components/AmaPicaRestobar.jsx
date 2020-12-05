import React from 'react'
import fondoProyectos from '../assets/img/fondoProyectos.jpg'
import '../styles/AmaPicaRestobar.css';
import {
    Link
  } from "react-router-dom";
const AmaPicaRestobar = () => {
    return (
        <div>
             <div className="container">
            <div className="contenedor">

            <img className="img-ts img-thumbnail" src={fondoProyectos} alt="" />
            
            </div>
            <div className="escrito">
            <h1 >aqui vamos a escribir los proyevctos Ama PIca Restobar</h1>
            </div>
            
            
            </div>
            <Link to="/"className="btn btn-dark">
                   Inicio
               </Link>
            <Link to="/proyectos"className="btn btn-dark">
                   Proyectos
               </Link>
        </div>
    )
}

export default AmaPicaRestobar
