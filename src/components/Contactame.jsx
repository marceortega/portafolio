import React from 'react'
import {
    Link
  } from "react-router-dom";
  import '../styles/Contactame.css';
  import Group13 from '../assets/img/Group13.svg'
  import navbar from '../assets/img/navbar.svg'
 import polloConversando from '../assets/img/pollosConversando.jpg'
 import tituloContacto from '../assets/img/tituloContacto.svg'
 import sociales from '../assets/img/sociales.svg'
 import contactosFono from '../assets/img/contactosFono.svg'
const Contactame = () => {
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
                <div className="global-Sociales">
                      <div className="sociales" data-aos="slide-left"
                       data-aos-duration="1000">
                       <img className="socialesImagen" src={sociales} alt="" />
                     </div>
                     </div>
                

                <div className="layout-main">
                <div className="parrallax-background" >
                    <div className="parrallax-background_image" style={{ backgroundImage: `url(${polloConversando})`,opacity:"1", backgroundPositionY:"0rem"}}></div>
                </div>
                <div className="fono">  
<div className="contactoFono"  data-aos="fade-up-right"
                        data-aos-duration="2000">
                            <img className="contactoFonoImagen" src={contactosFono} alt="" />

                         </div>
                         </div>

                

            
               </div>
               <div className="footContactame">
<div className="tituloContacto"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" >
           <img className="tituloContactoImagen" src={tituloContacto} alt="" />
           </div>
           </div>
        </div>
    )
}

export default Contactame
