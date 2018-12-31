import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

const Contact = styled.div`
display: flex;
justify-content: space-around;
font-size: 30px;
background-color: rgba(0, 0, 0, 0.44);
text-shadow: 1px 1px 1px black;
margin-top: 100vh;
width: 100vw;
letter-spacing: 25px;

`
class Footer extends Component {
    render() {
        return (
            <div>
                <Contact>
                 <BrowserRouter>
                        <div>
                            <h1>
                                
                            <a href="mailto:rguy129@yahoo.com"><i class="far fa-envelope"></i>  </a>
                            <a href="https://github.com/RGCallum"><i class="fab fa-github"></i>  </a>
                            <a href="https://www.linkedin.com/in/rashaundaguy/"><i class="fab fa-linkedin"></i>  </a>
                            </h1>                 
                        </div>
                    </BrowserRouter>
                    </Contact>

            </div>
            
        );
    }
}

export default Footer;