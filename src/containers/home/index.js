import React, { Component, createRef } from "react";
import "./_home.scss";
import * as Icon from "react-feather";

class Home extends Component {
  chartWrapperRef = createRef();
  skills = [
    { type: "HTML", level: 99 },
    { type: "CSS", level: 98 },
    { type: "JavaScript", level: 97 },
    { type: "React.js", level: 90 },
    { type: "React Native", level: 87 },
    { type: "Angular.js", level: 80 },
    { type: "Angular2+", level: 80 },
    { type: "Vue.js", level: 85 },
    { type: "Firebase", level: 63 },
    { type: "Android", level: 20 }
  ];

  constructor(props) {
    super(props);

    this.state = {
      collapsed: true
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollHandler);
  }

  scrollHandler = () => {
    if (this.isElementInViewport(this.chartWrapperRef.current))
      if (this.state.collapsed === true) {
        this.setState({
          collapsed: false
        });
      }
  };

  isElementInViewport = el => {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  render() {
    const { collapsed } = this.state;

    return (
      <>
        <div className="icon-container d-flex justify-content-center align-items-center">
          <div className="icon-item justify-content-center text-center">
            <Icon.Layout />
            <h2>Design</h2>
            <p>
              If you need help coming up with a design, I can help you with
              color schemes, typography, and ensure user-centered information
              flow.
            </p>
          </div>

          <div className="icon-item justify-content-center text-center">
            <Icon.Folder />
            <h2>Development</h2>
            <p>
              Do you have an app idea you want available on the web, iOS or
              Android? I can help you bring your idea to life.
            </p>
          </div>

          <div className="icon-item justify-content-center text-center">
            <Icon.PieChart />
            <h2>SEO / Analytics</h2>
            <p>
              Increase your online visibility organically by ensuring your size
              is optimized for search engine readability.
            </p>
          </div>
        </div>

        <div
          ref={this.chartWrapperRef}
          className={`skills-container container ${
            collapsed ? "collapsed" : ""
          }`}
        >
          <h2>My Skills</h2>

          <ul className="skills">
            {this.skills.map((skill, index) => (
              <li
                key={skill.type}
                className="d-block position-relative"
                style={{
                  width: `${skill.level}%`
                  // backgroundColor: `hsl(${189}, ${100}%, ${100 /(index + 2.8)}%)`
                }}
              >
                <p>
                  {skill.type}
                  <span className="position-absolute">{skill.level}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default Home;
