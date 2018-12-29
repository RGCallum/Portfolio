import React, { Component } from 'react';
import styled from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";

const NavStyle = styled.div`
position: absolute;
z-index: 1000;
display: flex;
flex-direction: row;
justify-content: space-around;
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
                            <h3>
                            <Link to="/"><i class="far fa-images"></i> Portfolio </Link>
                            <Link to="/skills"><i class="fas fa-magic"></i> Skills </Link>
                            <Link to="/contact"><i class="far fa-comment-alt"></i> Contact </Link>
                            <Link to="/resume"><i class="far fa-list-alt"></i> Resume </Link>        
                            </h3>                 
                        </div>
                    </BrowserRouter>
                </NavStyle>
            </div>
        );
    }
}

export default NavBar;