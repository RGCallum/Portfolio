import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

const NavStyle = styled.div`
position: absolute;
z-index: 1000;
display: flex;
flex-direction: row;
justify-content: space-around;
word-spacing: 25px;
background-color: rgba(0, 0, 0, 0.44);
width: 100vw;
text-shadow: 1px 1px 1px black;
a:link{
    text-decoration: none;
}
a:visited{
    color: white;
}

`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavStyle>
                    
                    <BrowserRouter>
                        <div>
                            <h2>
                            <a href="/"><i class="fas fa-home"></i> </a>
                            <a href="/portfolio"><i class="far fa-images"></i> </a>
                            <a href="/skills"><i class="fas fa-magic"></i> </a>
                            <a href="/resume"><i class="far fa-list-alt"></i> </a>        
                            </h2>                 
                        </div>
                    </BrowserRouter>
                </NavStyle>
            </div>
        );
    }
}

export default NavBar;