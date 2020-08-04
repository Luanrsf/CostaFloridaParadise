import React from "react";
import { motion, AnimatePresence } from "framer-motion"
import logo from "../../assets/LogoDefaultSize.png";
import "./style.css";
import TopPath from "../../assets/TopPath.png"
import cooperbarco from "../../assets/cooperbarco.png";
import cooperbarcoP3 from "../../assets/cooperbarcoP3.png";
import lancha from "../../assets/TransporteService.png";
import whitePath from "../../assets/CoverComoChegar.png"
import {IoIosArrowBack} from "react-icons/io";
import {
    Link
} from "react-router-dom";
import Footer from "../../components/footer";
import PopUp from "../../components/popUp";
const ComoChegar = ()=>{
    function handlePopUpDown(){
        const popUp = document.getElementById("popUp");
            popUp?.classList.add("slide-in-top");
            popUp?.addEventListener("animationend",()=>{
                popUp?.classList.remove("slide-in-top")
            })
            popUp?.setAttribute("style", "top:64px");
    }
 
    return(
    <>
<PopUp/>
    <header className="headerComoChegar">
                     <Link to="/">
                    <motion.div  style={{"color":"#D1DFEB","fontSize":40,"marginLeft":"-73vh","top":"16px","width":"50px","position":"absolute"}}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9}}>
                        <IoIosArrowBack />
                        </motion.div>
                        </Link>
    <img id="coverComoChegar" src={TopPath}></img>
    <div id="headerTitle">
    <img src={logo} id="LogoComoChegar"/>
    <h4>LOCALIZAÇÃO</h4>
    </div>
    </header>
    <main>
        
    <section className="localização">
        
    
    <div>
        
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14149.672287494759!2d-48.4609298!3d-27.5495327!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd3c0b92f4fe71abb!2sCosta%20Florida%20Pousada!5e0!3m2!1spt-BR!2sbr!4v1596456946804!5m2!1spt-BR!2sbr" 
    width="600" height="450"  style={{"border":"0"}}></iframe>
    <h6>Nossa pousada fica localizada em Florianópolis/SC ,  em um lindo pedacinho do paraíso chamado "Costa da Lagoa".</h6>
    </div>
    
    </section>
    <section className="ComoChegar">
        <img src={whitePath} id="whitePath"></img>
        <h4>COMO CHEGAR</h4>
        <div className="alignContent">
        <div className="leftInfo">
        <h6>Este lindo paraíso é somente acessível por barco ou trilha, o transporte é feito pela cooperbarco, os barcos saem de hora em hora e o preço por pessoa é R$12,50, ou se preferir temos a opção de <Link to="/services"><b>passeio de lancha particular</b></Link></h6>
        <img src={cooperbarco}></img>
        </div>
        <div className="rightInfo">
        
        <img src={cooperbarcoP3}></img>
        <h6>O embarque náutico é realizado em dois pontos, no <a className="linkBold" href="https://www.google.com/maps/place/Cooperbarco/@-27.6046269,-48.4661054,17z/data=!3m1!4b1!4m5!3m4!1s0x95273ebb80a6abbb:0xeeaac65c4f20e495!8m2!3d-27.6046317!4d-48.4639167" target="blank"><b>trapiche no centrinho da Lagoa da Conceição</b></a> antes da ponte da Av.Rendeiras, ou no <a className="linkBold" href="https://www.google.com.br/maps/place/Cooperbarco+Trapiche+P.3+Canto+Dos+Ara%C3%A7%C3%A1s/@-27.5859295,-48.4629518,17z/data=!3m1!4b1!4m5!3m4!1s0x95273edd185f6aa9:0x2de376376ac3ba37!8m2!3d-27.5859343!4d-48.4607631" target="blank"><b>trapiche do Canto dos Araçás.</b></a></h6>
        </div>
        </div>
        <div className="lastContent">
            <h6>Após embarcar o barco ira deixar você no no Ponto 13 onde nós iremos lhe recepcionar e levar até a pousada que fica 2 minutos do trapiche.</h6>
            <img src={lancha}></img>
            <p>Ta esperando o que?<br/>
                Vem logo curtir o paraíso</p>
                <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
           <div onClick={()=>{
               handlePopUpDown();   
           }} className="button-to-popup" id="button-to-popupComoChegar">
               <h5>RESERVE-JÁ</h5>
           </div>
           </motion.div>
        </div>
       
    </section>
    </main>
    <Footer/>
    </>
    )}
export default ComoChegar;
