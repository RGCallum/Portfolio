import React, { Component } from 'react';
import styled from "styled-components";
// import { BrowserRouter } from "react-router-dom";
import img from '../images/RGCallum.png';

const ResStyle = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
width: 100vh;
height: 100vh;
text-align: center;
margin: auto;
`
const Contact = styled.div`
display: flex;
justify-content: space-around;
font-size: 30px;

`
class Resume extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
              <a href='https://i.ibb.co/bm5G5Hw/RGCallum.png' download> <h1>Download Resume</h1>  </a>                             <h1>
                                <Contact>
                            <a href="mailto:rguy129@yahoo.com"><i class="far fa-envelope"></i>  </a>
                            <a href="https://github.com/RGCallum"><i class="fab fa-github"></i>  </a>
                            <a href="https://www.linkedin.com/in/rashaundaguy/"><i class="fab fa-linkedin"></i>  </a>
                            </Contact>
                            </h1>   
              <ResStyle></ResStyle>
                        <div>
              
                        </div>
            </div>
        );
    }
}

export default Resume;