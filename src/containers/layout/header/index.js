import React, { Component } from "react";
import './_header.scss'; 
import { NavLink } from "react-router-dom";
import * as ROUTES from '../../../config/constants/routePaths';

class Header extends Component {
	render() {
	  return (
          <header>

              <div className="top d-flex justify-content-between align-items-center">
                <div className="logo-container bg-white d-flex align-items-center justify-content-center">
                    <span>ea</span>
                </div>

                <div className="hello">
                    <a className="text-white" 
                        href="mailto:emreavcilar@gmail.com">
                        say hello
                    </a>
                </div>
              </div>

              <div className="instruction-container text-center">
                  <h1 className="text-white">Emre Avcılar<span className="text-white">//</span>JS Developer</h1>
                  <span className="text-white">JavaScript Developer specializing in the design and development of web and mobile apps.</span>
              </div>
              
              <nav>
                  <ul className="text-center">
                      <li>
                          <NavLink to={ROUTES.HOME} exact>Home</NavLink>
                          <NavLink to={ROUTES.ABOUT}>About</NavLink>
                      </li>
                  </ul>
              </nav>

              
          </header>
	  );
	}
}

export default Header;
