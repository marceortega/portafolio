import React from 'react'
import {
    Link
  } from "react-router-dom";
  import '../styles/SobreMi.css'

const SobreMi = () => {
    return (
        <div className="contenedorPrincipal">
            <div className="polloFondo"></div>
            <Link to="/"className="btn btn-dark">
                   Inicio
               </Link>
             <div className="marcoTres">
             <Link to="/sobreMi"className="btn btn-dark">
                   click here
               </Link>
             </div>
        </div>
       
    )
}

export default SobreMi
