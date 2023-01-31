import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FiFigma } from "react-icons/fi";
import { BiWorld } from "react-icons/bi";
import projects__hc from "../images/projects__hc.png";
import projects__arq from "../images/projects__arq.png";
import projects__fm from "../images/projects__fm.png";
import projects__vg from "../images/projects__vg.png";
import projects__pk from "../images/projects__pk.jpeg";
import projects__hcxs from "../images/projects__hc300.png";
import projects__arq3xs from "../images/projects__arq300.png";
import projects__fmxs from "../images/projects__fm300.png";
import projects__vgxs from "../images/projects__vg300.png";
import projects__pkxs from "../images/projects__pk300.jpeg";
import "../styles/Projects.css";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2>Projects</h2>
        <span className="line"></span>
        <div className="content">
          <section className="cards">
            <img
              src={projects__hc}
              alt="image of the design for Henry connect on figma"
              width="300px"
              height="250px"
            />
            <div>
              <h1>HENRYconnect</h1>
              <p>
                I was part of a team that developed Henry Connect, a
                location-based chat application built with React Native. My role
                focused on the front-end development and design, including
                implementing the user interface and styling elements.
              </p>
              <br />
              <a
                href="https://www.figma.com/file/2NzlH6zSqLfxevWvKNVJCU/P-connect?node-id=0%3A1&t=tCm1GvsENAYSyUCP-1"
                target="_blank"
                className="cards__icon-center"
              >
                <FiFigma size={30} className="cards__icon" alt="Link to Figma"/>
              </a>
            </div>27
          </section>
          <section className="cards">
            <img src={projects__arq} alt="Arquihub" width="300px" height="250px" />
            <div>
              <h1>ARQUIHUB</h1>
              <p>
                As a member of the front-end team, I contributed to the
                development of Arquihub. My responsibilities included creating
                and implementing various React components, contributing to the
                overall design and aesthetics of the application, and adding
                functionalities.
              </p>
              <br />
              <div className="cards__icon-center">
                <a href="https://github.com/pcelman/ARQUIHUB" target="_blank">
                  <GoMarkGithub
                    size={30}
                    className="cards__icon-center-github"
                    alt="Link to Github"
                  />
                </a>
                <a href="https://arquihub.vercel.app/" target="_blank">
                  <BiWorld size={30} className="cards__icon-center-world" alt="Link to the deploy of Arquihub"/>
                </a>
              </div>
            </div>
          </section>
          <section className="cards">
            <img src={projects__fm} alt="Fundacion Mujer project" width="300px" height="250px" />
            <div>
              <h1>Fundacion Mujer</h1>
              <p>
                I was part of the front-end team for a foundation based in
                Colombia. The goal of the project was to create a website that
                provided a platform for women to access news, posts, and job
                opportunities. My role involved designing the user interface and
                the website's overall aesthetic.
              </p>
              <a
                href="https://www.figma.com/file/4R1YzisyHOhWE0j228Qk2V/P-Fundacion?t=tCm1GvsENAYSyUCP-1"
                target="_blank"
                className="cards__icon-center"
              >
                <FiFigma size={30} className="cards__icon" alt="Link to Figma"/>
              </a>
            </div>
          </section>
          <section className="cards">
            <img src={projects__vg} alt="Videogames project" width="300px" height="250px" />
            <div>
              <h1>Videogames</h1>
              <p>
                I was the sole developer for a personal project creating a video
                game website. My responsibilities included all aspects of the
                project, from API requests to the final rendering and
                functionality of the website. I utilized Express for routing,
                Sequelize and Postgres for the database, and React and Redux for
                the front-end. The information for the website was sourced from
                an API.
              </p>
              <a
                href="https://github.com/pcelman/Videogames"
                target="_blank"
                className="cards__icon-center"
              >
                <GoMarkGithub size={30} className="cards__icon" alt="Link to Github"/>
              </a>
            </div>
          </section>
          <section className="cards">
            <img src={projects__pk} alt="Pokemon project" width="300px" height="250px" />
            <div>
              <h1>Pokemon</h1>
              <p>
                I worked independently on a personal project creating a website
                dedicated to Pokemon. The project involved using Express for
                routing, Sequelize and Postgres for the database, and React and
                Redux for the front-end. I utilized an API to gather information
                and display it on the website.
              </p>
              <br /> <br />
              <a
                href="https://github.com/pcelman/Make-your-own"
                target="_blank"
                className="cards__icon-center"
              >
                <GoMarkGithub size={30} className="cards__icon" alt="Link to Github"/>
              </a>
            </div>
          </section>{" "}
          {/* <section className="cards">
            <img
              src={projects__horoscope}
              alt="Horosope, one of my next project"
              width="300px"
              height="250px"
            />
            <div>
              <h1>Horoscope</h1>
              <p>
                I will be working on a project called Horoscope, coming soon.
                More information will be available as the project progresses.
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
              </p>
              <a
                // href="" target="_blank"
                className="cards__icon-center"
              >
                <GoMarkGithub size={30} className="cards__icon" alt="Link to Github"/>
              </a>
            </div>
          </section> */}
        </div>
      </div>
    </div>
  );
}
