import React, { Component } from 'react';
import styled from "styled-components";
// import { BrowserRouter } from "react-router-dom";
import img from '../images/RashaundaGC-NP.png';

const Container = styled.div`
background-image: url('https://i.ibb.co/QfSzryH/resume-Stack4.png');
background-size: cover;
width: 110vw;
height: 100vh;
background-repeat: no-repeat;
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



`

const ResStyle = styled.div`
background-image: url('${img}');
background-repeat: no-repeat;
background-size: contain;
width: 80vh;
height: 80vw;

text-align: center;
// margin: auto;
&:hover{
    transform: scale(1.01);
}
@media only screen and (min-device-width: 320px) and (max-width: 2580px) {
    
        width: 100vw;
        background-position: center;
  
        
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
const Contact = styled.div`
display: flex;
justify-content: space-evenly;
text-align: center;
padding: 10px;
width: 100vw;
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
                                <a href='RashaundaGC-NP.pdf' download> <i class="fas fa-file-download"></i> </a>
                            <a href="mailto:rguy129@yahoo.com?subject=Rashaunda You're So Awesome" target='blank'><i class="far fa-envelope"></i>  </a>
                            <a href="https://github.com/RGCallum" target='blank'><i class="fab fa-github"></i>  </a>
                            <a href="https://www.linkedin.com/in/rashaundaguy/" target='blank'><i class="fab fa-linkedin"></i>  </a>
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