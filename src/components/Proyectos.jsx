import React from 'react'
import {
    Link
  } from "react-router-dom";
  import '../styles/Proyectos.css';
  import Group13 from '../assets/img/Group13.svg'
  import navbar from '../assets/img/navbar.svg'
const Proyectos = () => {
    return (
        <div>
            <div className="proyect">
            <div className="global-header">
                
                <div className="nombreLogo" data-aos="slide-left"
                data-aos-duration="1000">  
                
                <Link to="/">
                <img className="logoNombre" src={Group13} alt="" />
             
               </Link>
                </div>
            </div> 

            <div className="global-nav">
                
                <div className="navEgg_svg" data-aos="slide-left"
            data-aos-duration="1000">
                    
                   
                    <img className="navbarImagen" src={navbar} alt="" />
                 
                   
                    </div>
                </div>
                <div className="global-lines">
                
                <div className="linesLateralProyect" data-aos="fade-left"data-aos-duration="2000"> </div>

                 <div className="linesLateralDosProyect" data-aos="fade-left"data-aos-duration="1000"> </div>
          <div className="linesLateralTresProyect" data-aos="fade-left"
               
               data-aos-duration="1000">
              
          </div>
</div>




                
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
