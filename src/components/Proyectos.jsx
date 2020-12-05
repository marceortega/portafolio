import React from 'react'
import {
    Link
  } from "react-router-dom";
  import '../styles/Proyectos.css';
const Proyectos = () => {
    return (
        <div>
            <div className="container">
            <Link to="/"className="btn btn-dark">
                   Inicio
               </Link>
               <Link to="/proyectosComidaParaTodos"className="btn btn-dark">
                   comida para todos
               </Link>
               <Link to="/proyectosRedSocial"className="btn btn-dark">
                   red social
               </Link>
               <Link to="/proyectosAmaPicaRestobar"className="btn btn-dark">
                   Ama Pica Restobar
               </Link>
            </div>
           
               
        </div>
        
    )
}

export default Proyectos
