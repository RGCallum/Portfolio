import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";

const NavStyle = styled.div`
position: absolute;
z-index: 1000;
display: flex;
flex-direction: row;
justify-content: space-around;
word-spacing: 80px;
background-color: rgba(0, 0, 0, 0.1);
width: 100vw;
text-shadow: 1px 1px 1px black;
a:link{
    text-decoration: none;
}
a:visited{
    color: white;
}

a:active{
    color:  #23A6D5;
}

a:hover{
    color:  #23A6D5;
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
                            <a href="/"><i class="fas fa-home"></i>Home </a>
                            <a href="/portfolio"><i class="far fa-images"></i>Portfolio </a>
                            <a href="/skills"><i class="fas fa-magic"></i>Skills </a>
                            <a href="/resume"><i class="far fa-list-alt"></i>Resume </a>        
                            </h2>                 
                        </div>
                    </BrowserRouter>
                </NavStyle>
            </div>
        );
    }
}

export default NavBar;