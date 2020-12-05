import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
  } from "react-router-dom";
import Contactame from './components/Contactame';
import Inicio from './components/Inicio';
import Proyectos from './components/Proyectos';
import SobreMi from './components/SobreMi';
import SobreMiDescription from './components/SobreMiDescription';

const Router = () => {
    return (
        <BrowserRouter>
          
            <Switch>
                <Route exact path="/contacto" component={Contactame} />
                <Route exact path="/proyectos" component={Proyectos} />
                <Route exact path="/sobreMi" component={SobreMiDescription} />
                <Route exact path="/yo" component={SobreMi} />
                <Route exact path="/" component={Inicio} />

            </Switch>
            

            </BrowserRouter>
     
    )
}

export default Router
