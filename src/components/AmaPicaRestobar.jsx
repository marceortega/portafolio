import React from "react";
import "../styles/AmaPicaRestobar.css";
import { Link } from "react-router-dom";
import Group13 from "../assets/img/Group13.svg";
import navbar from "../assets/img/navbar.svg";
import sociales from "../assets/img/sociales.svg";
import tituloAma from "../assets/img/tituloAma.svg";
import fondoProyectos from "../assets/img/fondoProyectos.jpg";
import filtroFondoProyectos from "../assets/img/filtroFondoProyectos.svg";
import footProyectos from "../assets/img/footProyectos.svg";
import Ama1 from "../assets/img/Ama1.png";
import Ama2 from "../assets/img/Ama2.png";
import Ama3 from "../assets/img/Ama3.png";
import TecnoAma from "../assets/img/TecnoAma.svg";

const AmaPicaRestobar = () => {
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

        <div className="titulo_AMA">
          <div
            className="tituloAma"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
            <img className="TituloAmaImagen" src={tituloAma} alt="" />
          </div>
          <p
            className="parrafoInicioAma"
            data-aos="slide-left"
            data-aos-duration="2000"
          >
           Parte del proyecto Burguer Queen, AMA PICÁ RESTOBAR es un pequeño restaurante de comida típica Chilena 
           que está creciendo, por lo que necesita una interfaz en la que puedan tomar pedidos usando una tablet, 
           y enviarlos a la cocina para que se preparen ordenada y eficientemente.{" "}
          </p>

          <div
            className="tituloAma"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="TituloAmaImagen" src={footProyectos} alt="" />
          </div>
          <div className="FotoAma">
            <div
              className="AMAPica"
              data-aos="slide-left"
              data-aos-duration="2000"
            >
              <img className="amaImg" src={Ama1} alt="" />
            </div>
          </div>

          <div
            className="tituloAma"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="TituloAmaImagen" src={footProyectos} alt="" />
          </div>
          <div
            className="tituloAma"
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="2000"
          >
            <img className="TituloAmaImagen" src={TecnoAma} alt="" />
          </div>
        </div>

        <div className="pagAma1">
          <div className="pagAmaPica1">
            <img className="imgAmaPica1" src={Ama2} alt="" />
          </div>
        </div>
        <div className="pagAma2">
          <div className="pagAmaPica2">
            <img className="imgAmaPica2" src={Ama3} alt="" />
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

export default AmaPicaRestobar
