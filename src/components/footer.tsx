import React from "react"
import {IoIosMail,IoLogoWhatsapp,IoLogoFacebook,IoLogoInstagram,IoIosHome,IoIosLocate} from "react-icons/io";

const Footer =()=>{
    return(
        <footer>
            <div className="footerSection">
                <h6>Contato comercial</h6>
                <div className="footerContent">

                    <a className="centeredLine" href="#" target="_blank">
                        <IoIosMail style={{"color":"#2D3A45","fontSize":51}} />
                        <p>costaflorida@hotmail.com</p>
                    </a>
                    <a className="centeredLine" href="#" target="_blank">
                        <IoLogoWhatsapp style={{"color":"#34af23","fontSize":51}} />
                        <p>+55 47 991511226</p>
                    </a>

                </div>
            </div>

            <div className="footerSection">
                <h6>Redes sociais</h6>
                <div className="footerContent">
                    <a className="centeredLine" href="https://www.facebook.com/Pousada-Costa-Florida-349947545858712/"
                        target="_blank">
                        <IoLogoFacebook style={{"color":"#3b5998","fontSize":51}} />
                        <p>Pousada Costa Florida</p>
                    </a>
                    <a className="centeredLine" href="https://www.instagram.com/costafloridaparadise/" target="_blank">
                        <IoLogoInstagram style={{"color":"#3f729b","fontSize":51}} />
                        <p>@pousadacostaflorida</p>
                    </a>

                </div>

            </div>

            <div className="footerSection">
                <h6>Endereço</h6>
                <div className="footerContent">
                    <a className="centeredLine" href="#">
                        <IoIosHome style={{"color":"#2D3A45","fontSize":51}} />
                        <p>Servidão Caminho Costa da Lagoa</p>
                    </a>
                    <a className="centeredLine" href="#">
                        <IoIosLocate style={{"color":"#2D3A45","fontSize":51}} />
                        <p>Ponto 13</p>
                    </a>
                    <p style={{"color":"#2D3A45","marginTop":"16px"}}>Para mais informações sobre endereço <br />visite nossa aba <a
                            href="http://localhost:3000/ComoChegar" style={{"color":"#2D3A45"}}><b>como chegar.</b></a>
                    </p>
                </div>
            </div>
        </footer>
    )
    }
    export default Footer;