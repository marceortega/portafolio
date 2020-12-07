import React from 'react'
import '../styles/ComidaParaTodos.css';
import {
    Link
  } from "react-router-dom";
  import Group13 from '../assets/img/Group13.svg'
  import navbar from '../assets/img/navbar.svg'
  import sociales from '../assets/img/sociales.svg'
  import tituloCPT from '../assets/img/tituloCPT.svg'
  import fondoProyectos from '../assets/img/fondoProyectos.jpg'
import filtroFondoProyectos from '../assets/img/filtroFondoProyectos.svg'
import footProyectos from '../assets/img/footProyectos.svg';
import sraComidaParaTodos from '../assets/img/sraComidaParaTodos.png';
import TecnoCpt from '../assets/img/TecnoCpt.svg';
import comidaparatodos1 from '../assets/img/comidaparatodos1.png'
import comidaparatodos2 from '../assets/img/comidaparatodos2.png'
import comidaparatodos3 from '../assets/img/comidaparatodos3.png'
import comidaparatodos4 from '../assets/img/comidaparatodos4.png'
const ComidaParaTodos = () => {
    return (
        <div>
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

            <div className="layout-main">
                <div className="parrallax-background" >
                    <div className="parrallax-background_image" style={{ backgroundImage: `url(${filtroFondoProyectos})`,opacity:"1", backgroundPositionY:"0rem"}}></div>
                    <div className="parrallax-background_image_filtro" style={{ backgroundImage: `url(${fondoProyectos})`,opacity:"1", backgroundPositionY:"0rem"}}></div>
                </div>


                

                      
               
           
<div className="titulo_CPT">  
<div className="tituloCpt"  data-aos="slide-left"
                        data-aos-duration="2000">
                            <img className="TituloCptImagen" src={tituloCPT} alt="" />
                            

                         </div>
               <p className="parrafoInicioCpt" data-aos="slide-left"
                        data-aos-duration="2000">COMIDA PARA TODOS es una fundación que se dedica a combatir la escasez de alimentos en la población. 
                   Este proyecto de rediseño de su página web, lo realizamos con un equipo interdisciplinario, 
                   en donde la investigación UX fue muy importante. </p>
              
                   <div className="tituloCpt"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
                            <img className="TituloCptImagen" src={footProyectos} alt="" />
                            

                         </div>
                         <div className="sraCpt">  
<div className="mujer"  data-aos="slide-left"
                        data-aos-duration="2000">
                            <img className="mujerCpt" src={sraComidaParaTodos} alt="" />

                         </div>
                                    
               </div>

               <div className="tituloCpt"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
                            <img className="TituloCptImagen" src={footProyectos} alt="" />
                            

                         </div>
               <div className="tituloCpt"  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
                            <img className="TituloCptImagen" src={TecnoCpt} alt="" />
                            
                         </div>
               
               </div>
               <div className="pagCpt1">  
<div className="pag1" >
                            <img className="imgpag1" src={comidaparatodos1} alt="" />

                         </div>
                                    
               </div>
               <div className="pagCpt2">  
<div className="pag2"  >
                            <img className="imgpag2" src={comidaparatodos2} alt="" />

                         </div>
                                    
               </div>
               <div className="pagCpt3">  
<div className="pag3" >
                            <img className="imgpag3" src={comidaparatodos3} alt="" />

                         </div>
                                    
               </div>
               <div className="pagCpt4">  
<div className="pag4" >
                            <img className="imgpag4" src={comidaparatodos4} alt="" />

                         </div>
                                    
               </div>
 
<div className="global-Sociales">
<div className="sociales" data-aos="slide-left"
        data-aos-duration="1000">
           <img className="socialesImagen" src={sociales} alt="" />
           </div>

           </div>

           
        </div>


            <Link to="/proyectos"className="btn btn-dark">
                   Proyectos
               </Link>
               
        </div>
    )
}

export default ComidaParaTodos
