import React from "react";
import {Route,BrowserRouter} from "react-router-dom";
import Home from "./pages/home/index";
import Services from "./pages/Serviços/index";
import ComoChegar from "./pages/ComoChegar/index";


const Routes= ()=>{
    return(
    <BrowserRouter>
    <Route component={Home} path="/" exact />
    <Route component={Services} path="/services" exact/>
    <Route component={ComoChegar} path="/ComoChegar" exact/>

    </BrowserRouter>
    )}
export default Routes;