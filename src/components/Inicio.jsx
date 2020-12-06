import React from 'react'
import {
    Link
  } from "react-router-dom";
import '../styles/Inicio.css';
import Group13 from '../assets/img/Group13.svg'
import FRONT from '../assets/img/FRONT.svg'
import END from '../assets/img/END.svg'
import DEVELOPER from '../assets/img/DEVELOPER.svg'
import navbar from '../assets/img/navbar.svg'
import sociales from '../assets/img/sociales.svg'
import proyectos from '../assets/img/proyectos.svg'
import yo from '../assets/img/yo.svg'
import contactame from '../assets/img/contactame.svg'
import pollo from '../assets/img/pollo.jpg'



const Inicio = () => {
 
    return (
        // <div className="fondoInicio">
        <div className="layout">
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
                    <div className="parrallax-background_image" style={{ backgroundImage: `url(${pollo})`,opacity:"1", backgroundPositionY:"0rem"}}></div>
                </div>


                <div className="global-lines">
                
                <div className="linesLateral" data-aos="fade-left"data-aos-duration="2000"> </div>

                 <div className="linesLateralDos" data-aos="fade-left"data-aos-duration="1000"> </div>
          <div className="linesLateralTres" data-aos="fade-left"
               
               data-aos-duration="1000">
              
          </div>
               
                
               
           
          
           <div className="proyectos" data-aos="slide-left"
        data-aos-duration="1000">
           
           <Link to="/proyectos">
           <img className="proyectosImagen" src={proyectos} alt="" />
               </Link>
           </div>
           <div className="yo" data-aos="slide-left"
        data-aos-duration="2500">
            <Link to="/yo">
            <img className="yoImagen" src={yo} alt="" />
               </Link>
           
           </div>
           <div className="contactame" data-aos="slide-left"
        data-aos-duration="3000">
             <Link to="/contacto">
             <img className="contactameImagen" src={contactame} alt="" />
               </Link>
                      </div>
                      </div>

                      
                {/* <div className="global-header">
                
                <div className="nombreLogo" data-aos="slide-left"
                data-aos-duration="1000">  
                
                <Link to="/">
                <img className="logoNombre" src={Group13} alt="" />
             
               </Link>
                </div>
            </div>  */}
           
<div className="titulo">  
<div className="front"  data-aos="slide-left"
                        data-aos-duration="2000">
                            <img className="frontImagen" src={FRONT} alt="" />

                         </div>
               
               <div className="end" data-aos="slide-left"
        data-aos-duration="1000">
            <img className="endImagen" src={END} alt="" />
		
	    </div>
        <div className="developer" data-aos="slide-left"
        data-aos-duration="1000">
            <img className="developerImagen" src={DEVELOPER} alt="" />
		
	    </div>
               
               </div>

           

        
{/* 
           <article data-aos="fade-up">
           <h1>Hola Soy Marcela</h1>
               <p>Me encanta este efecto fade-up</p>

	</article>
    <article data-aos="fade-down">
           <h1>Hola Soy Marcela</h1>
               <p>Me encanta este efecto fade-down</p>

	</article>
    <article data-aos="fade-right">
           <h1>Hola Soy Marcela</h1>
               <p>Me encanta este efecto fade-right</p>

	</article>
    <div data-aos="fade-left">
               <h1>Hola Soy Marcela</h1>
               <p>Me encanta este efecto fade-left</p>
           </div>
    <article data-aos="fade-up-right">
           <h1>Hola Soy Marcela</h1>
               <p>Me encanta este efecto fade-up-right</p>

	</article>
    <article data-aos="fade-up-left">
           <h1>Hola Soy Marcela</h1>
               <p>Me encanta este efecto fade-up-left</p>

	</article>
    <article data-aos="fade-down-right">
           <h1>Hola Soy Marcela</h1>
               <p>Me encanta este efecto fade-down-right</p>

	</article>
    <article data-aos="fade-down-left">
           <h1>Hola Soy Marcela</h1>
               <p>Me encanta este efecto fade-down-left</p>

	</article>
	<article data-aos="flip-left" data-aos-duration="3000" data-aos-offset="300">
		<h1>Ejemplo de animación</h1>
		<p>"flip-left" data-aos-duration="3000" data-aos-offset="300"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis ex tortor, vel consequat nibh porttitor in. Nam in orci ut magna lobortis imperdiet. Curabitur et blandit tortor. Nullam id quam ornare, elementum ex sed, condimentum nunc. </p>
	</article>
	<article data-aos="slide-right">
		<h1>Ejemplo de animación</h1>
		<p>  data-aos="slide-right"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis ex tortor, vel consequat nibh porttitor in. Nam in orci ut magna lobortis imperdiet. Curabitur et blandit tortor. Nullam id quam ornare, elementum ex sed, condimentum nunc. </p>
	</article>
    <article data-aos="slide-left">
		<h1>Ejemplo de animación</h1>
		<p>  data-aos="slide-right"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In venenatis ex tortor, vel consequat nibh porttitor in. Nam in orci ut magna lobortis imperdiet. Curabitur et blandit tortor. Nullam id quam ornare, elementum ex sed, condimentum nunc. </p>
	</article>
		<h1>.</h1> */}

<div className="sociales" data-aos="slide-left"
        data-aos-duration="1000">
           <img className="socialesImagen" src={sociales} alt="" />
           </div>

        
        </div>
        </div>
    )
}

export default Inicio
