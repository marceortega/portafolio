import React from 'react'
import {
    Link
  } from "react-router-dom";
import '../styles/SobreMiDescription.css'
const SobreMiDescription = () => {
    return (
        <div className="contenedorPrincipal">
             <div className="polloFondo"></div>
            <p>aqui va la descripcion escrita1</p>
            <Link to="/"className="btn btn-dark">
                   Inicio
               </Link>
               <Link to="/yo"className="btn btn-dark">
                   yo
               </Link>
               <div className="contenidoUno">
               <div className="marcoUno"></div>
               <div className="textUno"> <p>sobre mi...soy uan persona cla cla bla bla me gusta mucho aprender...y sobre todo crear y blabla...y otras bla blas...y estupendo que estes leyendo esto, porque ya entendiste como entrar con el pollo...es una idea que se me ocurrio, solamente pensando en la musica...pero soy muy visual...</p></div>
               </div>
               
        </div>
    )
}

export default SobreMiDescription
