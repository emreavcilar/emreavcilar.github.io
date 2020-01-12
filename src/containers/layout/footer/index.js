import React, { Component } from "react";
import "./_footer.scss";
import * as Icon from "react-feather";

class Footer extends Component {
  render() {
    return (
      <footer className="text-center">
        <div className="social-media-container">
          <a href="mailto:emreavcilar@gmail.com" title="say hello">
            <Icon.Mail />
          </a>

          <a
            title="linkedin"
            href="https://www.linkedin.com/in/emreavcilar"
            target="blank"
            rel="noopener noreferrer"
          >
            <Icon.Linkedin />
          </a>

          <a
            title="github"
            href="https://github.com/emreavcilar"
            target="blank"
            rel="noopener noreferrer"
          >
            <Icon.GitHub />
          </a>
          <a
            title="medium"
            href="https://medium.com/@emreavcilar"
            target="blank"
            rel="noopener noreferrer"
          >
            <Icon.Edit3 />
          </a>

          <a
            title="codepen"
            href="https://codepen.io/emreavcilar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Codepen />
          </a>
        </div>
        <p>
          Handcrafted using React
          <span>//</span>Copyright 2020 EA <span>//</span>All rights reserved.
        </p>
      </footer>
    );
  }
}

export default Footer;
