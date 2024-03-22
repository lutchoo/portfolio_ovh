import React from "react";
import "../style/about.css";
import { Card } from "../components/Card";

function About() {
  return (
    <main id="about-container">
      <h1>About Me</h1>
      <section id="cv-container">
        <div id="motivation">
          <h2>Developpeur Full stack</h2>
          <p>
            Pendant mon parcours professionnel, j'ai eu l'opportunité d'explorer
            diverses facettes du monde du travail, et aujourd'hui, je suis ravi
            d'exercer une profession qui me correspond pleinement. Le domaine du
            web m'a toujours attiré
          </p>
          <p>
            Animé par ma passion, je m'investis pleinement dans mon travail et
            j'y prends un grand plaisir.
          </p>
          <div>
            Mes différentes expériences professionnelles et les formations que
            j'ai suivies m'ont permis d'acquérir des compétences en :
            <div id="inline">
              <article id="html">
                <a
                  href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"
                  target="_blank"
                >
                  HTML
                </a>
              </article>
              <article id="css">
                <a
                  href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"
                  target="_blanck"
                >
                  CSS
                </a>
              </article>
              <article id="java">
                <a
                  href="https://fr.wikipedia.org/wiki/JavaScript"
                  target="_blanck"
                >
                  JavaScript
                </a>
              </article>
              <article id="php">
                <a href="https://fr.wikipedia.org/wiki/PHP" target="_blanck">
                  PHP
                </a>
              </article>
              <article id="wordpress">
                <a
                  href="https://fr.wikipedia.org/wiki/WordPress"
                  target="_blanck"
                >
                  Wordpress
                </a>
              </article>
              <article id="symfony">
                <a
                  href="https://fr.wikipedia.org/wiki/Symfony"
                  target="_blanck"
                >
                  Symfony
                </a>
              </article>{" "}
              <article id="react">
                <a href="https://fr.wikipedia.org/wiki/React" target="_blanck">
                  React
                </a>
              </article>
            </div>
          </div>
          <p>
            Toutes ces expériences font de moi un jeune développeur web
            ambitieux. Je suis convaincu que mon sens des responsabilités, ma
            créativité, ma capacité à travailler en équipe, mon esprit
            d'initiative et mon autonomie dans la gestion du travail peuvent
            générer d'excellents résultats.
          </p>
        </div>
        <div id="carde">
          <Card />
        </div>
      </section>
      <section id="about-bot">
        <h2>Mes capacites</h2>
        <article id="capaciter">
          <div id="front">
            <img src="./public/icons/icons8-front-end-64colorer.png" alt="" />
            <h4>Developpement front end</h4>
            <ul>
              <li> Maquetter une application</li>
              <li>
                Réaliser une interface utilisateur web statique et adaptable
              </li>
              <li>Développer une interface utilisateur web dynamique</li>
              <li>
                Réaliser une interface utilisateur avec une solution de gestion
                de contenu ou e-commerce
              </li>
            </ul>
          </div>
          <div id="back">
            <img src="./public/icons/icons8-rest-api-60.png" alt="" />
            <h4>Developpement back end</h4>
            <ul>
              <li>Créer une base de données</li>
              <li>Développer les composants d’accès aux données</li>
              <li>
                Développer la partie back-end d’une application web et web
                mobile
              </li>
              <li>
                {" "}
                Elaborer et mettre en œuvre des composants dans une application
                de gestion de contenu ou e-commerce
              </li>
            </ul>
          </div>
          <div id="responsive">
            <img src="./public/icons/icons8-responsive-design-64.png" alt="" />
            <h4>Responsive design</h4>
            <ul>
              <li>
                Élaborer une application qui est adaptée à toutes les tailles
                d'écran
              </li>
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
}

export default About;
