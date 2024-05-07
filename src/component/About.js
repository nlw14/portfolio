import React from "react";
import Button from 'react-bootstrap/Button';
import Navbar from "./Navbar.js";
import Elements from "./Elements.js";
import Pdf from "../CV_Nolwenn_SIBIRIL.pdf";
 
function About(props) {
  return (
    <>
    <div className="page">
    <Navbar></Navbar>
      <Elements.TitreBalise titre="Nolwenn Sibiril " age="31" />
      <div className="div-wrap">
        <div className="profil">
          <div className="topPres">
            <div className="topPres">
              <img src="assets/photo.jpg" alt="Profil" className="profilPic" id="photo"/>
              <div className="reseaux">
                <a href="https://github.com/Nlw14"><img src="assets/github-logo.png" alt="logo github" className="icone"/></a>
                <a href="https://www.linkedin.com/in/nolwenn-sibiril-408773226/"><img src="assets/linkedin-logo.png" alt="logo linkedin" className="icone"/></a>
                <Button href={Pdf} className="button" id="CV">CV PDF</Button>
              </div>
            </div>
            <img src="assets/qr-code.png" alt="QR Code" className="profilPic"/>
          </div>
          <div className="presentation">

            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Coordonnées" />
              <Elements.Balise addClass="noBottom" nom="Mail" content="nolwenn.sibiril@ecole2600.com"/>
              <Elements.Balise addClass="noBottom" nom="téléphone" content="06 30 38 05 50"/>
            <Elements.Balise nom="Coordonnées" close="true"/>


            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Recherche" />
              <div className="content">
                <div className="tab">
                  Contrat d'apprentissage - Alternance<br/>
                  4 semaine entreprise<br/>
                  2 semaine Formation<br/>
                  (école 2600)
                </div>
                <Elements.Balise addClass="noBottom" nom="Dates" content="début Septembre 2024"/>
              </div>
            <Elements.Balise nom="Recherche" close="true"/>

            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Compétences" />
            <Elements.Balise addClass="noBottom" nom="Langues" content="Français, Anglais"/>
            <Elements.Balise addClass="noBottom" nom="Languages" content="Python, C, Bash, HTML/CSS/JS, PHP, SQL"/>
            <Elements.Balise addClass="noBottom" nom="Frameworks" content="React, Svelte, Nodejs, deno, RoR, Symfony..."/>
            <Elements.Balise addClass="noBottom" nom="Base de donnée" content="mySQL, Postgresql, GraphQl"/>
            <Elements.Balise addClass="noBottom" nom="Autres" content="Permis B, dessin, Photoshop/Illustrator"/>
            <Elements.Balise nom="Compétences" close="true"/>

            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Formation" />
              <div className="content">
                <div className="tab">
                • école 2600 <br/>Titre RNCP niveau 7 d’Expert de la Sécurité des Données, des Systèmes et des Réseaux (Bac+5)
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[78180] Montigny-le-Bretonneux"/>
                <Elements.Balise nom="Dates" content="début Septembre 2024"/>
              </div>

              <div className="content">
                <div className="tab">
                • ESGI <br/>début de cycle, Titre RNCP niveau 6 Chef de Projet Logiciel et Réseau (Bac+3)
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75012] Paris"/>
                <Elements.Balise nom="Dates" content="Septembre 2023 - Mars 2024"/>
              </div>

              <div className="content">
                <div className="tab">
                • Web@cademie by Epitech<br/>Titre RNCP niveau 5 Developpeur web (Bac+2)
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[94276] Le Kremlin-Bicêtre"/>
                <Elements.Balise nom="Dates" content="Mai 2021 - Mai 2023"/>
              </div>

              <div className="content">
                <div className="tab">
                • Digital Art by Isart Digital<br/>
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75011] Paris"/>
                <Elements.Balise nom="Dates" content="Septembre 2012 - Juin 2013"/>
              </div>

              <div className="content">
                <div className="tab">
                • BAC STI Arts Appliqués<br/>
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75018] Paris"/>
                <Elements.Balise addClass="noBottom" nom="Dates" content="Juin 2011"/>
              </div>
            <Elements.Balise nom="Formation" close="true"/>

            <Elements.WhiteSpace px="50"/>

            <Elements.Balise nom="Experiences"/>
              <div className="content">
                <div className="tab">
                • Developpeur<br/>
                  Vintage & Cie
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75008] Paris"/>
                <Elements.Balise nom="Dates" content="Mars 2022 - mai 2023"/>
              </div>

              <div className="content">
                <div className="tab">
                • Cheffe de rang/Barmaid/Runner<br/>
                  [Extras] Café-Restaurant, bar à cocktail, semi-gastro...
                </div>
                <Elements.Balise addClass="noBottom" nom="Lieux" content="[75-93-94] Ile-de-France"/>
                <Elements.Balise nom="Dates" content="Octobre 2013 - Décembre 2021"/>
              </div>
            <Elements.Balise nom="Experiences" close="true"/>
          </div>
        </div>
      </div>
      <img src="./assets/drawing.svg" alt="background" className="div-wrap-img" />
    </div>
    </>
  )
}
 
export default About;

// ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet arcu congue turpis eleifend laoreet. Sed vitae hendrerit tellus, vitae eleifend risus. Curabitur vel nunc eu felis accumsan convallis. Aliquam pulvinar semper lacus id porta. Integer convallis sapien convallis est laoreet, a mattis dolor pellentesque. Nunc ac mauris lorem. Curabitur sapien neque, tincidunt in elementum nec, suscipit eget elit. Proin elementum odio et porta gravida. Curabitur consectetur, nulla a posuere lobortis, lectus magna ullamcorper nibh, a pharetra justo turpis in augue.