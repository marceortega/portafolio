import React from 'react'
import "../styles/Revelio.css";
import { Link } from "react-router-dom";
import Group13 from "../assets/img/Group13.svg";
import navbar from "../assets/img/navbar.svg";
import sociales from "../assets/img/sociales.svg";
import tituloRevelio from "../assets/img/tituloRevelio.svg";
import fondoProyectos from "../assets/img/fondoProyectos.jpg";
import filtroFondoProyectos from "../assets/img/filtroFondoProyectos.svg";
import footProyectos from "../assets/img/footProyectos.svg";
import TecnoRevelio from "../assets/img/TecnoRevelio.svg";
import RevelioDataLovers1 from "../assets/img/RevelioDataLovers1.png";
import RevelioDataLovers2 from "../assets/img/RevelioDataLovers2.png";
import RevelioDataLovers3 from "../assets/img/RevelioDataLovers3.png";
import RevelioDataLovers4 from "../assets/img/RevelioDataLovers4.png";
import RevelioDataLovers5 from "../assets/img/RevelioDataLovers5.png";

const Revelio = () => {
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

        <div className="titulo_Revelio_principal">
          <div
            className="tituloRevelioPrincipal"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            <img className="TitulorevelioImagenPrincipal" src={tituloRevelio} alt="" />
          </div>
          <p
            className="parrafoIniciorRevelio"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            REVELIO está dirigido a todas aquellas personas que deseen empezar a jugar
             "Harry Potter: Wizards Unite", pero no saben de qué se trata Harry Potter.
              La idea de nuestra página es que con ella puedan tener una introducción a este mágico mundo,
               y se incentiven a seguir en la historia del juego; además de conocer los libros y las películas 
               de Harry Potter.{" "}
          </p>
<div className="tituloRevelio">
<div
            className="tituloRevelioMovil"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="TituloRevelioImagen" src={footProyectos} alt="" />
          </div>


</div>
         
          <div className="RevelioCentral">
            <div
              className="Revelio"
              data-aos="slide-left"
              data-aos-duration="2000"
            >
              <img className="RevelioImg" src={RevelioDataLovers1} alt="" />
            </div>
          </div>

          <div
            className="tituloRevelioMovilDos"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="TituloRevelioImagenDos" src={footProyectos} alt="" />
          </div>

          <div className="TecnoRevelio">   
          <div
            className="tecnologiasRevelio"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="RevelioImagenTec" src={TecnoRevelio} alt="" />
          </div>
          </div>
         
        </div>


        <div className="pagRevelio2">
          <div className="revelio2">
            <img className="imgRevelio2" src={RevelioDataLovers2} alt="" />
          </div>
        </div>
        <div className="pagRevelio3">
          <div className="revelio3">
            <img className="imgRevelio3" src={RevelioDataLovers3} alt="" />
          </div>
        </div>
        <div className="pagRevelio4">
          <div className="revelio4">
            <img className="imgRevelio4" src={RevelioDataLovers4} alt="" />
          </div>
        </div>
        <div className="pagRevelio5">
          <div className="revelio5">
            <img className="imgRevelio5" src={RevelioDataLovers5} alt="" />
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
        </div>
    )
}

export default Revelio
