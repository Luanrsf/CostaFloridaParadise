import React, {
    useState,
    useEffect
} from "react";
import "./style.css";


import logoDefault from "../../assets/LogoDefaultSize.png";
import Grid1 from "../../assets/GRID1.png";

import {
    Link
} from "react-router-dom";
import {
    IoIosArrowForward,
    IoIosArrowBack
} from "react-icons/io";
import Footer from "../../components/footer";
import TimeLapse from "../../components/TimeLapse";
import PopUp from "../../components/popUp";

import { motion } from "framer-motion";


interface suiteInterface {
    direct: string,
        description: string
}




const Home = () => {

        const [selectedId, setSelectId] = useState < number > (0);
        const aboutData = [{

                id: 1,
                title: "PRAIA EXCLUSIVA PARA HOSPEDES",
                description: "A Pousada possui uma praia de acesso exclusivo para os hospedes,com espriguiçadeoras, guarda-sol, Prancha de stand up,Balanços redes na agua além de toda a beleza da lagoa da conceição.",
                img: "PraiaExclusiva.png",
                imgNew: "CafeDaManha.jpeg",
                imgLast: "aboutUsFirst.png",
                titleLast: "POUSADA COSTA FLORIDA",
                titleNew: "CAFÉ DA MANHA"


            },
            {
                id: 2,
                title: "CAFÉ DA MANHA",
                description: " Um café da manha reforçado preparado com amor e carinho com tudo fresquinho para que você tenha disposição para aproveitar todas as nossa belezas.",
                img: "CafeDaManha.jpeg",
                imgNew: "Restaurante.png",
                imgLast: "PraiaExclusiva.png",
                titleLast: "PRAIA EXCLUSIVA PARA HOSPEDES",
                titleNew: "ALMOÇO"



            },
            {
                id: 3,
                title: "ALMOÇO",
                description: "A pousada nao provém almoço mas temos 15 restaurantes proximos que oferecem um delicioso almoço.",
                img: "Restaurante.png",
                imgNew: "jantarTest.jpg",
                imgLast: "CafeDaManha.jpeg",
                titleLast: "CAFÉ DA MANHA",
                titleNew: "JANTAR"

            },
            {
                id: 4,
                title: "JANTAR",
                description: " Oferecemos a oportunidade de um jantar romantico à luz de velas na sacada em frente a suite com vista para a lagoa.",
                img: "jantarTest.jpg",
                imgNew: "macaco.JPG",
                imgLast: "Restaurante.png",
                titleLast: "ALMOÇO",
                titleNew: "SUAS BELEZAS"


            },
            {
                id: 5,
                title: "SUAS BELEZAS",
                description: "Em um lindo dia de sol a beleza de nosso paraíso é realçada e você pode passear pelas trilhas onde temos casarões antigos, engenho e a famosa cachoeira da costa da lagoa.",
                img: "macaco.JPG",
                imgNew: "Externo.JPG",
                imgLast: "jantarTest.jpg",
                titleLast: "JANTAR",
                titleNew: "ÁREA EXTERNA COM CHURRASQUEIRA"
            },
            {
                id: 6,
                title: "ÁREA EXTERNA COM CHURRASQUEIRA",
                description: " A area externa possui um deck com churrasqueira a 8 metros da praia que pode ser utilizado pelos hospedes gratuitamente com reserva antecipada.",
                img: "Externo.JPG",
                imgNew: "void.png",
                imgLast: "macaco.JPG",
                titleLast: "SUAS BELEZAS",
                titleNew: ""

            }
        ]




        const rightImg = document.getElementById("groupAboutNavR");
        const note = document.getElementById("note");
        const leftImg = document.getElementById("groupAboutNavL");
        const mainImg = document.getElementById("aboutUsFirst");
        const fixHoverN = document.getElementById("SuiteN");
        const fixHoverC = document.getElementById("SuiteC");
        const fixHoverS = document.getElementById("SuiteS");
        const arrowLeft = document.getElementById("arrowLeft");
        const arrowRight = document.getElementById("arrowRight"); 
        const SuiteN = {
            direct: "NORTE",
            description: "suite localizada ao norte"
        };
        const SuiteC = {
            direct: "CENTRAL",
            description: "suite localizada centralmente"
        };
        const SuiteS = {
            direct: "SUL",
            description: "suite localizada ao sul"
        };
        const SuiteSImg = ["SuiteS01.jpeg","SuiteS02.jpg", "SuiteS03.jpg","SuiteS04.jpg"];

        const SuiteCImg = ["SuiteC01.jpeg","SuiteC02.jpg","SuiteC03.jpg","SuiteC04.jpg"];


        const SuiteNImg = ["SuiteN01.jpg","SuiteN02.jpg","SuiteN03.jpg"];
    

        const [suiteSelected, setSuiteSelected] = useState<suiteInterface>(SuiteC);
        const [suiteImgs, setSuiteImgs] = useState<string[]>(SuiteCImg);
        const [suiteSelectedCounter, setSuiteSelectedCounter] =useState<number>(2);
        const [suiteImgCount, setSuiteImgCount] =useState<number>(1);
        const [wrapper1Count, setWrapper1Count] =useState<number>(0);
        const scrollImg = document.getElementById("pics");
        const wrapper =  document.getElementById("wrapper")
        const wrapper21 = document.getElementById("wrapper21");
        const wrapper22 = document.getElementById("wrapper22");
        const wrapper41 = document.getElementById("wrapper41");
        const wrapper42 = document.getElementById("wrapper42");
        const wrapper43 = document.getElementById("wrapper43");
        const wrapper44 = document.getElementById("wrapper44");
        const wrapper45 = document.getElementById("wrapper45");
        const wrapper46 = document.getElementById("wrapper46");
        const wrapper47 = document.getElementById("wrapper47");
        const wrapper48 = document.getElementById("wrapper48");
        const popUp = document.getElementById("popUp");



        function handlePopUpDown(){
            const popUp = document.getElementById("popUp");
                popUp?.classList.add("slide-in-top");
                popUp?.addEventListener("animationend",()=>{
                    popUp?.classList.remove("slide-in-top")
                })
                popUp?.setAttribute("style", "top:32px");
        }






        function scrollUp(){
            if (suiteImgCount<suiteImgs.length) {
                setSuiteImgCount(suiteImgCount + 1)


            }
            const scrollImg = document.getElementById("pics");
            scrollImg?.scrollBy({
                top: 0,
                left: 950,
                behavior: 'smooth'
            });
        }

        function scrollDown(){
            if(suiteImgCount>1){
                setSuiteImgCount(suiteImgCount - 1)
            };
            const scrollImg = document.getElementById("pics");
            scrollImg?.scrollBy({
                top: 0,
                left: -950,
                behavior: 'smooth'
            });
           
        }

        function rightClick(){
            if(selectedId<5){
                setSelectId(selectedId + 1);
            }
        };

        function leftClick(){
            if(selectedId>0){
                setSelectId(selectedId - 1)
            }
        };

        function SuiteNAction(){
            const fixHoverN = document.getElementById("SuiteN");

            fixHoverC?.setAttribute("style", "background-color: #2D3A45;color: #D1DFEB;transition:all linear 0.2s");


            fixHoverS?.setAttribute("style", "background-color: #2D3A45;color: #D1DFEB;transition:all linear 0.2s");


            fixHoverN?.setAttribute("style", "background-color: #D1DFEB; color:#2D3A45;transition:all linear 0.2s");



            const scrollImg = document.getElementById("pics");
            scrollImg?.animate(
                [{
                        opacity: "1"
                    },
                    {
                        opacity: "0"
                    }
                ], {
                    duration: 1000
                });

            setSuiteSelectedCounter(1);
            setSuiteImgs(SuiteNImg);
            setSuiteSelected(SuiteN);
            scrollImg?.animate(
                [{
                        opacity: "0.5"
                    },
                    {
                        opacity: "1"
                    }
                ], {
                    duration: 1000
                });
                scrollImg?.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                setSuiteImgCount(1);
        };

        function SuiteCAction() {
            const fixHoverC = document.getElementById("SuiteC");
            fixHoverS?.setAttribute("style", "background-color: #2D3A45;color: #D1DFEB;transition:all linear 0.2s");

            fixHoverN?.setAttribute("style", "background-color: #2D3A45;color: #D1DFEB;transition:all linear 0.2s");

            fixHoverC?.setAttribute("style", "background-color: #D1DFEB; color:#2D3A45;transition:all linear 0.2s");



            const scrollImg = document.getElementById("pics");
            scrollImg?.animate(
                [{
                        opacity: "1"
                    },
                    {
                        opacity: "0"
                    }
                ], {
                    duration: 1000
                });
            setSuiteSelectedCounter(2);
            setSuiteImgs(SuiteCImg);
            setSuiteSelected(SuiteC);
            scrollImg?.animate(
                [{
                        opacity: "0.5"
                    },
                    {
                        opacity: "1"
                    }
                ], {
                    duration: 1000
                });
                scrollImg?.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                setSuiteImgCount(1);
        };

        function SuiteSAction() {
            const fixHoverS = document.getElementById("SuiteS");
            fixHoverN?.setAttribute("style", "background-color: #2D3A45;color: #D1DFEB;transition:all linear 0.2s");

            fixHoverC?.setAttribute("style", "background-color: #2D3A45;color: #D1DFEB;transition:all linear 0.2s");


            fixHoverS?.setAttribute("style", "background-color: #D1DFEB; color:#2D3A45;transition:all linear 0.2s");



            
            scrollImg?.animate(
                [{
                        opacity: "1"
                    },
                    {
                        opacity: "0"
                    }
                ], {
                    duration: 1000
                });
            setSuiteSelectedCounter(3);
            setSuiteImgs(SuiteSImg);
            setSuiteSelected(SuiteS);
            scrollImg?.animate(
                [{
                        opacity: "0.5"
                    },
                    {
                        opacity: "1"
                    }
                ], {
                    duration: 1000
                });
                scrollImg?.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
                setSuiteImgCount(1);
        };

            function backAllImgsRoll(){

                wrapper?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                });
                backWrapper2()
                wrapper41?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                });
                wrapper42?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper43?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper44?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper45?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper46?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper47?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper48?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                setWrapper1Count(0);
            }
            function backWrapper2(){
                wrapper21?.scrollTo({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                });
                wrapper22?.scrollTo({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                });
                
                
            }
            function goImgRoll(){
                wrapper?.scrollBy({
                    top: 0,
                    left:400,
                    behavior: 'smooth'
                });
                wrapper21?.scrollBy({
                    top: 0,
                    left:180,
                    behavior: 'smooth'
                });
                wrapper22?.scrollBy({
                    top: 0,
                    left:180,
                    behavior: 'smooth'
                });
                wrapper41?.scrollBy({
                    top: 0,
                    left:90,
                    behavior: 'smooth'
                });
                wrapper42?.scrollBy({
                    top: 0,
                    left:90,
                    behavior: 'smooth'
                });
                wrapper43?.scrollBy({
                    top: 0,
                    left:90,
                    behavior: 'smooth'
                });
                wrapper44?.scrollBy({
                    top: 0,
                    left:90,
                    behavior: 'smooth'
                });
                wrapper45?.scrollBy({
                    top: 0,
                    left:90,
                    behavior: 'smooth'
                });
                wrapper46?.scrollBy({
                    top: 0,
                    left:90,
                    behavior: 'smooth'
                });
                wrapper47?.scrollBy({
                    top: 0,
                    left:90,
                    behavior: 'smooth'
                });
                wrapper48?.scrollBy({
                    top: 0,
                    left:90,
                    behavior: 'smooth'
                });
                
            }



            function Back3ImgsRoll(){
                wrapper41?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                });
                wrapper42?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper43?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper44?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper45?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper46?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper47?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper48?.scroll({
                    top: 0,
                    left:0,
                    behavior: 'smooth'
                
                });
                wrapper?.scrollBy({
                    top: 0,
                    left:400,
                    behavior: 'smooth'
                });
              
            }


        useEffect(() => {
            if (suiteImgCount == 1) {
                arrowLeft?.setAttribute("style", "opacity:0");
                arrowRight?.setAttribute("style", "opacity:1");

            }
            if (suiteImgCount > 1) {
                arrowLeft?.setAttribute("style", "opacity:1")

            }
            if (suiteImgCount < suiteImgs.length) {
                arrowRight?.setAttribute("style", "opacity:1")
            }
            if (suiteImgCount == suiteImgs.length) {
                arrowRight?.setAttribute("style", "opacity:0")
            }
        }, [suiteImgCount, suiteImgs]);

        useEffect(() => {
            if (suiteSelectedCounter == 1) {
                SuiteNAction()
               
            };
            if (suiteSelectedCounter == 2) {
                SuiteCAction()
                
                
            };
            if (suiteSelectedCounter == 3) {
                SuiteSAction()

                
            };

            
        }, [suiteSelectedCounter]);
        useEffect(() => {
            if (selectedId == 0) {
                leftImg?.setAttribute("style", "opacity:0");
            };
            if (selectedId > 0) {
                leftImg?.setAttribute("style", "opacity:0.5");

            };
            if (selectedId > 1) {
                leftImg?.animate(
                    [{
                            opacity: "0.7"
                        },
                        {
                            opacity: "0"
                        }
                    ], {
                        duration: 1000
                    })
                leftImg?.animate(
                    [{
                            opacity: "0"
                        },
                        {
                            opacity: "0.5"
                        }
                    ], {
                        duration: 1000
                    })
            };
            if (selectedId < 5) {

                rightImg?.animate(
                    [{
                            opacity: "0.7"
                        },
                        {
                            opacity: "0"
                        }
                    ], {
                        duration: 1000
                    })
                rightImg?.animate(
                    [{
                            opacity: "0"
                        },
                        {
                            opacity: "0.5"
                        }
                    ], {
                        duration: 1000
                    });
            }
            if (selectedId < 5) {
                rightImg?.setAttribute("style", "opacity:0.5")

            };
            if (selectedId == 5) {
                rightImg?.setAttribute("style", "opacity:0");

            };
            mainImg?.animate(
                [{
                        opacity: "1"
                    },
                    {
                        opacity: "0"
                    }
                ], {
                    duration: 1000
                });
            mainImg?.animate(
                [{
                        opacity: "0.5"
                    },
                    {
                        opacity: "1"
                    }
                ], {
                    duration: 1000
                });
            note?.animate(
                [{
                        opacity: "0.1"
                    },
                    {
                        opacity: "1"
                    }
                ], {
                    duration: 2000
                });

        }, [selectedId]);

        useEffect(()=>{



            if(wrapper1Count<=6){
                
                if(wrapper1Count==6){ 
                    backAllImgsRoll();
                    
                }
                if(wrapper1Count==3){
                    Back3ImgsRoll();
                   backWrapper2();
                   
                }
                else{
                    goImgRoll()

                }
               

            
        }

        },[wrapper1Count])
        useEffect(() => {
            const interval = setInterval(() => {
              setWrapper1Count(Wrapper1Count => Wrapper1Count + 1);
            }, 4000);

            return () => {clearInterval(interval)
            
            };
            
          }, []);

    return(
   <>
       <TimeLapse/>
       <PopUp/>
       
       <section className="first-screen">
           

           <header>
               <ul> 
                   <Link to="/ComoChegar">
                   <li>Como chegar</li>
                   </Link>
                   <img src={logoDefault}></img>
                   <Link to="/services">
                   <li>Serviços</li>
                   </Link>
               </ul>
           </header>
           <h2>O melhor de Floripa esta aqui, <br />Venha viver momentos <br />inesquecíveis.</h2>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
           <div onClick={()=>{
               handlePopUpDown();   
           }} 
            className="button-to-popup">
               <h5>RESERVE-JÁ</h5>
           </div>
           </motion.div>
           
       </section>
       <main id="mainHome">


           <section className="aboutUs">
               <img src={require(`../../assets/${aboutData[selectedId].img}`)} id="aboutUsFirst"></img>

               <div className="action-menu">
                   <div id="cover" className="coverText">
                       <h3>Sobre nós</h3>
                       <h6>Experimente nosso menu interativo, clique nas imagens</h6>
                   </div>


                   <div className="navImgs">
                   <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                       <div id="groupAboutNavL">
                           <a onClick={()=>leftClick()}><img
                                   src={require(`../../assets/${aboutData[selectedId].imgLast}`)}
                                   id="aboutChangeImgLeft"></img></a>
                           
                       </div>
                       </motion.div>
                       <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }} >
                       <div id="groupAboutNavR">
                           <a onClick={()=>rightClick()}><img
                                   src={require(`../../assets/${aboutData[selectedId].imgNew}`)}
                                   id="aboutChangeImgRight"></img></a>
                           
                       </div>
                       </motion.div>
                   </div>


                   <div id="note" className="noteAbout">

                       <h6>{aboutData[selectedId].title}</h6>
                       <p>{aboutData[selectedId].description}</p>

                       <p id="warn">Alguns serviços são cobrados a parte, verificar antecipadamente...</p>
                   </div>


               </div>
           </section>




           <section className="suites">

               <div id="coverContent">
                   <div id="picWrapper">
                       <div id="pics">


                           {suiteImgs.map(img=>(
                           <div id="pic" key={img}><img id="scrollImg" src={require(`../../assets/${img}`)}></img>
                                   </div>))}


                                   </div> </div> <div className="suiteRightContent">
                               <h5>SUITE {suiteSelected.direct}</h5>
                               <h6>Uma linda e cheirosa<br />{suiteSelected.description} <br /> com vista para um lindo
                                   nascer do sol na<br />Lagoa da Conceição.</h6>
                               <h6>Incluso:</h6>
                               <h6>
                                   *Produtos para higiene pessoal<br />
                                   *Secador de Cabelo<br />
                                   *Prancha de cabelo<br />
                                   *Ar-Condicionado<br />
                                   *Café da manhã<br />
                                   *TV Smart<br />
                                   *Wi-fi
                               </h6>
                               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} >
                               <div 
                                onClick={()=>{
                                    handlePopUpDown();   
                                }} 
                               className="button-to-popup">
                                   <h5>RESERVE-JÁ</h5>
                               </div>
                               </motion.div>
                             
                           </div>
                       </div>



                       <div className="nav-bar">
                           <div id="navTopContent">
                               <a id="SuiteN" onClick={()=>{SuiteNAction() }}>SUITE <br />NORTE</a>
                               <a id="SuiteC" onClick={()=>{SuiteCAction()}}>SUITE <br />CENTRAL</a>
                               <a id="SuiteS" onClick={()=>{SuiteSAction()}}>SUITE <br />SUL</a>
                           </div>
                           <div id="navImg">
                           <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="arrowIcon" id="arrowLeft">
                               <IoIosArrowBack onClick={scrollDown} />   
                               </motion.div>
                               <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} className="arrowIcon" id="arrowRight" >
                               <IoIosArrowForward onClick={scrollUp}  />
                               </motion.div>
                           </div>
                       </div>

           </section>
           <section className="galeriaContent">
               <h4>GALERIA</h4>
               <div className="gridsGaleria">

                   <div className="wrapper">
                       <div className="wrapperGalery" id="wrapper">
                           <div className="carrouselGalery"><img src={require("../../assets/Praia4.png")}></img></div>
                           <div className="carrouselGalery"><img src={require("../../assets/balanco2.png")}></img></div>
                           <div className="carrouselGalery"><img src={require("../../assets/HospedeCosta3.png")}></img></div>
                           <div className="carrouselGalery"><img src={require("../../assets/barco3.png")}></img></div>
                           <div className="carrouselGalery"><img src={require("../../assets/SuiteNRandom.png")}></img></div>
                           <div className="carrouselGalery"><img src={require("../../assets/balanco2.png")}></img></div>
                       </div>
                   </div>


    <div className="grid2">
               
                       <div className="wrapper2">
                           <div className="wrapperGalery2" id="wrapper21">
                               <div className="carrouselGalery2"><img src={require("../../assets/praia.png")}></img></div>
                               <div className="carrouselGalery2"><img src={require("../../assets/HospedeCosta4.png")}></img></div>
                               <div className="carrouselGalery2"><img src={require("../../assets/HospedeCosta.png")}></img></div>
                               <div className="carrouselGalery2"><img src={require("../../assets/balanco3.png")}></img></div>
                               <div className="carrouselGalery2"><img src={require("../../assets/HospedeCosta.png")}></img></div>
                               <div className="carrouselGalery"><img src={require("../../assets/balanco2.png")}></img></div>
                           </div>
                       </div>
                       <div className="wrapper2">
                           <div className="wrapperGalery2" id="wrapper22">
                               <div className="carrouselGalery2"><img src={require("../../assets/barco2.png")}></img></div>
                               <div className="carrouselGalery2"><img src={require("../../assets/HospedeCosta2.png")}></img></div>
                               <div className="carrouselGalery2"><img src={require("../../assets/praia2.png")}></img></div>
                               <div className="carrouselGalery"><img src={require("../../assets/balanco.png")}></img></div>
                               <div className="carrouselGalery"><img src={require("../../assets/balanco5.png")}></img></div>
                               <div className="carrouselGalery"><img src={require("../../assets/balanco2.png")}></img></div>
                           </div>
                       </div>
</div>
                
                  
                      

<div className="grid4">
    
<div className="wrapper42">
                           <div className="wrapper4">
                               <div className="wrapperGalery4" id="wrapper41">
                                   <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                               </div>
                           </div>

                           <div className="wrapper4">
                               <div className="wrapperGalery4" id="wrapper42">
                               <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                               </div>
                           </div>

                           <div className="wrapper4">
                               <div className="wrapperGalery4" id="wrapper43">
                               <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                               </div>
                           </div>

                           <div className="wrapper4">
                               <div className="wrapperGalery4" id="wrapper44">
                                    <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                    <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                    <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                                    <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                               </div>
                           </div>
                           </div>

                           <div className="wrapper42">
                       
                           <div className="wrapper4">
                               <div className="wrapperGalery4" id="wrapper45">
                               <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                               </div>
                           </div>
                           <div className="wrapper4">
                               <div className="wrapperGalery4" id="wrapper46">
                               <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                               </div>
                           </div>
                           <div className="wrapper4">
                               <div className="wrapperGalery4" id="wrapper47">
                               <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                               </div>
                           </div>
                           <div className="wrapper4">
                               <div className="wrapperGalery4" id="wrapper48">
                               <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/Praia4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/balanco4.png")}></img></div>
                                   <div className="carrouselGalery4"><img src={require("../../assets/aboutUsFirst.png")}></img></div>
                               </div>
                           </div>
                           </div>
                       
</div>
               </div>
                           <h6 style={{"textShadow":"none"}}>Tanta gente feliz, vem ser feliz também...</h6>

           </section>
       </main>
      
       <Footer></Footer>
   </>
        
)
}
 export default Home;