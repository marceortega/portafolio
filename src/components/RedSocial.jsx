import React from 'react'
import '../styles/RedSocial.css';
import {
    Link
  } from "react-router-dom";
  import Group13 from "../assets/img/Group13.svg";
  import navbar from "../assets/img/navbar.svg";
  import sociales from "../assets/img/sociales.svg";
  import tituloSocialMbti from "../assets/img/tituloSocialMbti.svg";
  import fondoProyectos from "../assets/img/fondoProyectos.jpg";
  import filtroFondoProyectos from "../assets/img/filtroFondoProyectos.svg";
  import footProyectos from "../assets/img/footProyectos.svg";
  import TecnoMbti from "../assets/img/TecnoMbti.svg";
  import mbti1 from "../assets/img/mbti1.png";
  import mbti2 from "../assets/img/mbti2.png";
  import mbti3 from "../assets/img/mbti3.png";
  import mbti4 from "../assets/img/mbti4.png";
const RedSocial = () => {
    return (
        <div>
           <div className="global-header">
        <div
          className="nombreLogo"
          data-aos="slide-left"
          data-aos-duration="1000"
        >
          <Link to="/">
            <img className="logoNombre" src={Group13} alt="" />
          </Link>
        </div>
      </div>

      <div className="global-nav">
        <div
          className="navEgg_svg"
          data-aos="slide-left"
          data-aos-duration="1000"
        >
          <img className="navbarImagen" src={navbar} alt="" />
        </div>
      </div>

      <div className="layout-main">
        <div className="parrallax-background">
          <div
            className="parrallax-background_image"
            style={{
              backgroundImage: `url(${filtroFondoProyectos})`,
              opacity: "1",
              backgroundPositionY: "0rem",
            }}
          ></div>
          <div
            className="parrallax-background_image_filtro"
            style={{
              backgroundImage: `url(${fondoProyectos})`,
              opacity: "1",
              backgroundPositionY: "0rem",
            }}
          ></div>
        </div>

        <div className="titulo_MBTI">
          <div
            className="tituloSocialMbti"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            <img className="TituloMbtiImagen" src={tituloSocialMbti} alt="" />
          </div>
          <p
            className="parrafoInicioMbti"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            MBTI Social es un recurso que puede ayudar a las personas a comprenderse mejor a sí mismas,
            y a partir de aquí saber, por ejemplo, mejorar su comunicación con los demás y posiblemente reducir 
            algunos de sus conflictos personales y profesionales. Es una plataforma en donde podrán compartir
             temas de interés, y conocer distintos puntos de vista respecto a sus opiniones lo que resulta crucial
              para poder mejorar aspectos de la personalidad.{" "}
          </p>

          <div
            className="tituloSocialMbti"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="TituloMbtiImagen" src={footProyectos} alt="" />
          </div>
          <div className="imagenCentralMbti">
            <div
              className="appMbti"
              data-aos="slide-left"
              data-aos-duration="2000"
            >
              <img className="appMbtiImagen" src={mbti1} alt="" />
            </div>
          </div>

          
         
          <div className="TecnoUtilizadas">   
          <div
            className="tecnologiasMbti"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="TituloMbtiImagenTec" src={TecnoMbti} alt="" />
          </div>
          </div>
        </div>
        <div
            className="tituloSocialMbti"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="TituloMbtiImagen" src={footProyectos} alt="" />
          </div>
        <div className="pagMbti1">
          <div className="pagMbti_1">
            <img className="imgMbtiPag1" src={mbti2} alt="" />
          </div>
        </div>
        <div className="pagMbti2">
          <div className="pagMbti_2">
            <img className="imgMbtiPag2" src={mbti3} alt="" />
          </div>
        </div>
        <div className="pagMbti3">
          <div className="pagMbti_3">
            <img className="imgMbtiPag3" src={mbti4} alt="" />
          </div>
        </div>
        

        <div className="global-Sociales">
          <div
            className="sociales"
            data-aos="slide-left"
            data-aos-duration="1000"
          >
            <img className="socialesImagen" src={sociales} alt="" />
          </div>
        </div>
      </div>

      <Link to="/proyectos" className="btn btn-dark">
        Proyectos
      </Link>
            <Link to="/proyectos"className="btn btn-dark">
                   Proyectos
               </Link>
               <Link to="/"className="btn btn-dark">
                   Inicio
               </Link>
        </div>
    )
}

export default RedSocial
