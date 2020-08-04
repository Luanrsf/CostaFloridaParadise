import React from "react";
import {IoLogoWhatsapp,IoLogoFacebook,IoLogoInstagram,IoIosClose} from "react-icons/io";
import "../pages/home/style.css";
import { motion } from "framer-motion";
const PopUp =()=>{
  
  function hiddePopUp(){
    const popUp = document.getElementById("popUp"); 
    popUp?.setAttribute("style", "top:-1000px")
  }
    return(
        <div id="popUp">
          
        <div className="popUpContent">
        <motion.div  style={{"background":"none","border":"none","marginLeft":"35vw","marginTop":"1vh"}}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}>
        <IoIosClose  onClick={()=>hiddePopUp()} style={{"color":"#D1DFEB","fontSize":50,"float":"right"}}/>
        </motion.div>
        <h5>Gostou?Estamos esperando por você,<br/>Entre em contato:</h5>
        <div className="buttonGroup">
        <div className="buttonDirect"><a target="blank" href="https://wa.me/5547991511226"><span>Mensagem Direta </span><IoLogoWhatsapp style={{"color":"#34af23","fontSize":25}}/></a></div>
        <p>ou</p>
        <div className="buttonDirect"><a target="blank" href="https://www.instagram.com/costafloridaparadise"><span>Mensagem Direta</span><IoLogoInstagram style={{"color":"#2D3A45","fontSize":25,}}/></a></div>
        </div>
        <p>
          Não perca nada, nos acompanhe<br/> em nossas redes sociais
        </p>
        <div className="iconGroup">
          
  <a target="blank" href="https://www.instagram.com/costafloridaparadise"><IoLogoInstagram style={{"color":"#C13584","fontSize":50,}}/></a>
  <IoLogoFacebook style={{"color":"#4267B2","fontSize":50,}}/>
  </div>
  </div>
      </div>
      )
}
export default PopUp;