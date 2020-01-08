import React, { Component } from "react";
import "./_about.scss";

class About extends Component {
  render() {
    return (
      <section className="d-flex">
        <div className="image-container justify-content-center d-flex align-items-center">
          <img src="me.jpg" alt="emre avcılar" />
        </div>

        <div className="text-container d-flex align-items-center">
          <p>
            My name is Emre and I'm an Istanbul based JavaScript developer &
            UI/UX designer. Since beginning my journey in the technology
            industry in 2008, I've done project management, software
            configuration, quality assurance, search engine optimization,
            responsive UI/UX web design, usability testing, front-end web /
            mobile app development, some back-end applications and back office
            integrations. I love collaborating with talented people to create
            digital products for both business and consumer use. You could see
            my projects from{" "}
            <a
              href="https://www.linkedin.com/in/emreavcilar"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin
            </a>{" "}
            and my repos from{" "}
            <a
              href="https://github.com/emreavcilar"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
            </a>
            . You could also read my{" "}
            <a
              href="https://medium.com/@emreavcilar"
              target="_blank"
              rel="noopener noreferrer"
            >
              medium
            </a>{" "}
            articles and my{" "}
            <a
              href="https://codepen.io/emreavcilar"
              target="_blank"
              rel="noopener noreferrer"
            >
              codepen
            </a>
            .
          </p>
        </div>
      </section>
    );
  }
}

export default About;
