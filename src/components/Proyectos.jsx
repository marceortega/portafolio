import React from 'react'
import {
    Link
  } from "react-router-dom";
  import '../styles/Proyectos.css';
  import Group13 from '../assets/img/Group13.svg'
  import navbar from '../assets/img/navbar.svg'
  import footProyectos from '../assets/img/footProyectos.svg';
  import cartonHuevos from '../assets/img/cartonHuevos.png';
  import sombraCarton from '../assets/img/sombraCarton.svg';
  import sociales from '../assets/img/sociales.svg';
  import amaPica from '../assets/img/amaPica.svg';
  import comidaParaTodos from '../assets/img/comidaParaTodos.svg';
  import redSocialMbti from '../assets/img/redSocialMbti.svg';

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

                <div className="global-Sociales">
                      <div className="sociales" data-aos="slide-left"
                       data-aos-duration="1000">
                       <img className="socialesImagen" src={sociales} alt="" />
                     </div>
                     </div>


                <div className="global-lines">
                
                <div className="linesLateralProyect" data-aos="fade-left"data-aos-duration="2000"> </div>

                 <div className="linesLateralDosProyect" data-aos="fade-left"data-aos-duration="1000"> </div>
          <div className="linesLateralTresProyect" data-aos="fade-left"
               
               data-aos-duration="1000">
              
          </div>
</div>
<div className="footProyectos">
<div className="tituloProyectos" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000">
           <img className="ProyectosImagen" src={footProyectos} alt="" />
           </div>
           </div>

<div className="cartonEggs">  
<div className="carton"  data-aos="slide-left"
                        data-aos-duration="2000">
                            <img className="cartonImagen" src={cartonHuevos} alt="" />

                         </div>
                                    
               </div>
               <div className="sombraCarton"  data-aos="slide-left"
                        data-aos-duration="1500">
                            <img className="sombraCartonImagen" src={sombraCarton} alt="" />

                         </div>              

                        

          
               
               <div className="comidaParaTodos" data-aos="fade-down-right"
        data-aos-duration="2500">
            <Link to="/proyectosComidaParaTodos">
           <img className="comidaParaTodosImagen" src={comidaParaTodos} alt="" />
               </Link>
           </div>

           <div className="redSocialMbti" data-aos="fade-up-right"
        data-aos-duration="2500">
            <Link to="/proyectosRedSocial">
            <img className="redSocialImagen" src={redSocialMbti} alt="" />
               </Link>
           </div>

           <div className="amaPica" data-aos="fade-up-left"
        data-aos-duration="3000">
             <Link to="/proyectosAmaPicaRestobar">
             <img className="amaPicaImagen" src={amaPica} alt="" />
               </Link>
                      </div>

                     

                  
                  
                   </div>
                   
               

                
            
            
           
               
        </div>
        
    )
}

export default Proyectos
