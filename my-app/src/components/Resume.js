import React, { Component } from 'react';
import styled from "styled-components";
// import { BrowserRouter } from "react-router-dom";
import img from '../images/RGCallum.png';

const Container = styled.div`
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
text-align: center;
font-size: 40px;
margin: auto;
margin-top: -1em;
color: white;
text-shadow: 1px 1px 1px black;

a:link{
    color: white;
}
a:visited{
    color: white;
}
a:hover{
    text-decoration: none;
    color: #E73C7E;
}
animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const ResStyle = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
width: 100vh;
height: 100vh;
text-align: center;
margin: auto;
margin-left: 30%;
animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const Contact = styled.div`
display: flex;
justify-content: space-evenly;
text-align: center;
margin-left: 24%;
padding: 10px;
width: 50vw;
font-size: 30px;
text-decoration: none;
animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
@keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
class Resume extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <Container>
                <br/>
                
                                <Contact>
                                <a href='https://i.ibb.co/bm5G5Hw/RGCallum.png' download> <i class="fas fa-file-download"></i> </a>
                            <a href="mailto:rguy129@yahoo.com"><i class="far fa-envelope"></i>  </a>
                            <a href="https://github.com/RGCallum"><i class="fab fa-github"></i>  </a>
                            <a href="https://www.linkedin.com/in/rashaundaguy/"><i class="fab fa-linkedin"></i>  </a>
                            </Contact>
                            

              <ResStyle></ResStyle>
                        <div>
              
                        </div>
                        </Container>
            </div>
        );
    }
}

export default Resume;