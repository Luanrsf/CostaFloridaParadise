import React from "react";
import "./style.css";
import logoDefault from "../../assets/LogoDefaultSize.png";
import decorationService from "../../assets/DecorationService.png";
import transporteService from "../../assets/TransporteService.png";
import Footer from "../../components/footer";
import TopPath from "../../assets/TopPath.png"
import PopUp from "../../components/popUp";
import {IoIosArrowBack} from "react-icons/io";
import {
    Link
} from "react-router-dom";
import { motion } from "framer-motion";


const services = () => {
    function handlePopUpDown(){
        const popUp = document.getElementById("popUp");
            popUp?.classList.add("slide-in-top");
            popUp?.addEventListener("animationend",()=>{
                popUp?.classList.remove("slide-in-top")
            })
            popUp?.setAttribute("style", "top:64px");
    }
        return (
        <>
        <PopUp/>
        
            <div className="backgroundServices">
            <img id="TopPath" src={TopPath}></img>
            
                <header className="headerServices">
                    <div>
                    <Link to="/">
                    <motion.div  style={{"color":"#D1DFEB","fontSize":40,"marginLeft":"-73vh","top":"16px","width":"50px","position":"absolute"}}
                         whileHover={{ scale: 1.1 }}
                         whileTap={{ scale: 0.9}}>
                        
                        <IoIosArrowBack />
                        
                        </motion.div>
                        </Link>

                        <img src={logoDefault} alt="" />
                        <h4>SERVIÇOS</h4>
                    </div>
                    
                </header>
                
                <main className="mainServices">
                    <section>
                        <div className="serviceOptions">
                            <img src={decorationService} alt="" />
                            <div className="rightContentService">
                                <h5>Decoração Romântica</h5>
                                <p>Para os casais que querem uma experiência
                                    especial oferecemos a opção de contratar a decoração romântica.</p>
                                <p className="small">Para mais informações entre em contato.</p>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                    <div
                                    onClick={()=>{
                                        handlePopUpDown();   
                                    }}
                                    className="button-to-popup">
                                        <h6>QUERO</h6>
                                    </div>
                                </motion.div>
                            </div>

                        </div>
                        <div className="serviceOptions">
                            <div className="leftContentService">
                                <h5>Transporte e passeio <br />de barco</h5>
                                <p>Se você quiser um transporte exclusivo e rápido, tem a opção de contratar o Taxi
                                    Nautico.
                                    Se quiser tornar sua experiêcia ainda mais incrivel eles oferecem passeios pela
                                    Lagoa da Conceição ou Canal da Barra. .</p>
                                <p className="small">Para mais informações entre em contato.</p>
                                <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                                    <div
                                    onClick={()=>{
                                        handlePopUpDown();
                                    }}
                                    className="button-to-popup">
                                        <h6>QUERO</h6>
                                    </div>
                                </motion.div>
                            </div>
                            <img src={transporteService} alt="" />
                        </div>

                    </section>
                </main>
            </div>
            <Footer></Footer>
        </>
    );

}
export default services;