import React from 'react'
import fondoProyectos from '../assets/img/fondoProyectos.jpg'
import '../styles/ComidaParaTodos.css';
import {
    Link
  } from "react-router-dom";
const ComidaParaTodos = () => {
    return (
        <div>
            <div className="container">
            <div className="contenedor">

            <img className="img-ts img-thumbnail" src={fondoProyectos} alt="" />
            
            </div>
            <div className="escrito">
            <h1 >aqui vamos a escribir los proyevctos comida para todos</h1>
            </div>
            
            </div>
            <Link to="/proyectos"className="btn btn-dark">
                   Proyectos
               </Link>
               <Link to="/"className="btn btn-dark">
                   Inicio
               </Link>
        </div>
    )
}

export default ComidaParaTodos
