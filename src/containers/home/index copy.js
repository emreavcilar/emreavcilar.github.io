import React, { Component, createRef } from "react";
import "./_home.scss";
import * as Icon from "react-feather";

class Home extends Component {
  chartWrapperRef = createRef();

  //   chartWrapper = document.querySelector(".chart-wrapper");
  //   chartWrapper = document.querySelectorAll(".chart-wrapper");

  componentDidMount() {
    window.addEventListener("scroll", this.scrollHandler);
  }

  //   scrollHandler = () => {
  //     console.log("this.chartwrapper ", this.chartWrapperRef.current);

  //     if (this.isElementInViewport(this.chartWrapperRef.current))
  //       this.chartWrapperRef.current.classList.add("in-view");
  //   };

  //   isElementInViewport = el => {
  //     var rect = el.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <=
  //         (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   };

  render() {
    return (
      <>
        <div className="icon-container">
          <div className="icon-item">
            <Icon.Layout />
            <h2>Design</h2>
            <p>Blah Blah Lorem ipsum dolor sit amet hello world</p>
          </div>

          <div className="icon-item">
            <Icon.Folder />
            <h2>Development</h2>
            <p>Blah Blah Lorem ipsum dolor sit amet hello world</p>
          </div>

          <div className="icon-item">
            <Icon.PieChart />
            <h2>SEO / Analytics</h2>
            <p>Blah Blah Lorem ipsum dolor sit amet hello world</p>
          </div>
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <section className="d-flex vh-100 bg-lightwhite" id="skills">
          <div className="d-flex justify-content-center align-items-center flex-grow-1">
            <div
              className=" chart-wrapper position-relative"
              ref={this.chartWrapperRef}
            >
              <ul className="d-flex flex-column chart-skills">
                <li className="position-relative">
                  <span>CSS</span>
                </li>

                <li className="position-relative">
                  <span>Javascript</span>
                </li>

                <li className="position-relative">
                  <span>CSS</span>
                </li>

                <li className="position-relative">
                  <span>HTML</span>
                </li>

                <li className="position-relative">
                  <span>Android</span>
                </li>
              </ul>
              <ul className="d-flex position-absolute chart-levels">
                <li className="flex-grow-1 position-relative">
                  <span className="position-absolute">Novice</span>
                </li>

                <li className="flex-grow-1 position-relative">
                  <span className="position-absolute">Beginner</span>
                </li>

                <li className="flex-grow-1 position-relative">
                  <span className="position-absolute">Intermediate</span>
                </li>

                <li className="flex-grow-1 position-relative">
                  <span className="position-absolute">Advanced</span>
                </li>

                <li className="flex-grow-1 position-relative">
                  <span className="position-absolute">Expert</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Home;
