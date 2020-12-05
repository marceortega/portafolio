import React from 'react'
import {
    Link
  } from "react-router-dom";
import '../styles/Inicio.css';
import Group13 from '../assets/img/Group13.svg'


const Inicio = () => {
 
    return (
        <div className="fondoInicio">
            <div className="btn-group">
                <Link to="/proyectos"className="btn btn-dark">
                   Proyectos
               </Link>
               <Link to="/yo"className="btn btn-dark">
                   yo
               </Link>
               <Link to="/contacto"className="btn btn-dark">
                   Contactame
               </Link>

           </div>
           <div className="nombreLogo" data-aos="slide-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000">  
                <img className="logo" src={Group13} alt="" />
                
  
           </div>
           
           <div className="linesLateral" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="2000">
               
           </div>
           <div className="linesLateralDos" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000">
               
           </div>
           <div className="linesLateralTres" data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000">
               
           </div>
          
<div className="titulo">  
<div className="front"  data-aos="slide-left"
                        data-aos-duration="2000">

                         </div>
               
               <div className="end" data-aos="slide-left"
        data-aos-duration="1000">
		
	    </div>
        <div className="developer" data-aos="slide-left"
        data-aos-duration="1000">
		
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



        
        </div>
    )
}

export default Inicio
