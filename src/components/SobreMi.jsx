import React from 'react'
import {
    Link
  } from "react-router-dom";
  import '../styles/SobreMi.css'
  import Group13 from '../assets/img/Group13.svg';
  import navbar from '../assets/img/navbar.svg'
  import pollo from '../assets/img/pollo.jpg';
  import HolaMundo from '../assets/img/HolaMundo.svg';
  import marcoUno from '../assets/img/marcoUno.png';
  import fotoPerfil from '../assets/img/fotoPerfil.svg';

const SobreMi = () => {
    return (
        <div className="layoutSobreMi">
         
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
            <div className="PolloDeCabeza">
            <div
              className="PolloReves"
              
            >
              <img className="PolloIMGCabeza" src={pollo} alt="" />
            </div>
          </div>

            <div className="MarcoTresFotos">
            <div
              className="MarcoInicioYo"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              
              <img className="fotoPerfil" src={fotoPerfil} alt="" />

            </div>
          </div>

          <div className="footSobreMI">
<div className="tituloSobreMi"data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="2000" >
           <img className="tituloHolaImagen" src={HolaMundo} alt="" />
           </div>
           </div>

           {/* <div className="MarcoUnoFotos">
            <div
              className="MarcoUnoYo"
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <img className="marcoImagenUno" src={marcoUno} alt="" />
            </div>
          </div> */}
          <p
            className="parrafoInicioYo"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
           Soy una persona enamorada de mis sueños, y una de ellos,
            el más postergado afloro en estos tiempos difíciles, Ser FRONT END DEVELOPER,
             hoy soy la encarga de traducir los diseños a lenguaje de programación. {" "}
          </p>

          <p
            className="parrafoInicioYo"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
           Visual por naturaleza, mi corazón es feliz cuando estoy creando nuevas cosas.
            Exploradora de distintas técnicas de creación, he pasado de los moldes y las costuras, 
            al código apasionante. Celebradora de la vida, muy agradecida de las oportunidades,
             comunicativa, optimista, muy curiosa, colaboradora, versátil, capaz de asumir riesgos,
              y de darle una segunda vuelta a las cosas, de manera de convertir los problemas en oportunidades.{" "}
          </p>
          <p
            className="parrafoInicioYo"
            data-aos="fade-up-left"
            data-aos-duration="3000"
          >
           Te invito a revisar los trabajos que he hecho,
            y a ponerte en contacto conmigo para que trabajemos en algún diseño juntos.{" "}
          </p>
          <p
            className="parrafoInicioYo"
            data-aos="fade-up"
     data-aos-duration="3000"
          >
           Si quieres saber el porqué del pollo, Click Here!!!{" "}
          </p>
            <Link to="/"className="btn btn-dark">
                   Inicio
               </Link>
             
             <Link to="/sobreMi"className="btn btn-dark">
                   click here
               </Link>
             
        </div>
       
    )
}

export default SobreMi
