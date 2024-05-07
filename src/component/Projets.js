import React from "react";
import Thumbnail from './Thumbnail.js';
import Elements from "./Elements.js";
import Navbar from "./Navbar.js";

function Projets(props) {

  return (
    <>
    <div id="pageProjet" className="page">
      <Navbar></Navbar>
      <Elements.TitreBalise titre="Projets" />
      <div className="div-wrap">
        <div className="projets">

          <Thumbnail 
            titre="My_Cinema" 
            image="/assets/my_cinema.jpeg"
            gif="/assets/My_cinemaDemo.gif"
            description="[Projet d'école] - Site de référencement de films. À partir d'une base de données MySQL fournie avec le sujet, le but était de réaliser un site qui permette d’interagir avec cette dernière."
            technos="HTML/CSS/JS, PHP, MYSQL"
          />

          <Thumbnail 
            titre="My_Meetic" 
            image="/assets/my_meetic.jpeg" 
            gif="/assets/My_MeeticDemo.gif"
            description="[Projet d'école] - Projet web orienté ajax, jquery, et PHP orienté objet. Le but du projet était de créer un site de rencontre à la manière d'un Meetic "
            technos="HTML/CSS/jQuery, PHP, mysql"
          />

          <Thumbnail 
            titre="My_Snapchat"
            image="/assets/snap.jpeg" 
            gif="/assets/snap.jpeg"
            description="[Projet d'école] - Re-création de l’application snapchat."
            technos="React Native"
          />

          <Thumbnail 
            titre="My_Twitter"
            image="/assets/twac.jpeg" 
            gif="/assets/twacDemo.gif"
            description="[Projet d'école] - Le but du projet était de faire un site similaire à Twitter"
            technos="HTML/CSS/SASS, JS/jQuery, PHP, mysql"
          />

          <Thumbnail 
            titre="Css Generator"
            image="/assets/cssGenerator.png" 
            gif="/assets/css_generatorDemo.gif"
            description="[Projet d'école] - Création d'un outil générateur de spritesheet et du css associé"
            technos="PHP"
          />

          <Thumbnail 
            titre="My_H5ai"
            image="/assets/My_H5ai.jpeg" 
            gif="/assets/myh5aiDemo.gif"
            description="[Projet d'école] - Indexeur de fichiers pour serveurs web HTTP. Le but du projet était de créer un outil PHP reproduisant le comportement de h5ai"
            technos="HTML/CSS, PHP, Apache2"
          />

        </div>
      </div>
      <p className="com"># This portfolio was made with React</p>
    </div>
    <img src="./assets/drawing.svg" alt="background" className="div-wrap-img" />
    </>
  )
}
 
export default Projets;