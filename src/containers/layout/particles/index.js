import React, { Component } from "react";
import ParticlesItem from 'react-particles-js';
import './_particles.scss';

class Particles extends Component {
	render() {
	  return (
	    <ParticlesItem
            height= '100'

            style={{
                width: '100%',
                height: '100%',
              }}
    params={{
	    "particles": {
	        "number": {
	            "value": 50
	        },
	        "size": {
	            "value": 3
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onhover": {
	                "enable": true,
	                "mode": "repulse"
	            }
	        }
	    }
	}} />
	  );
	}
}

export default Particles;
