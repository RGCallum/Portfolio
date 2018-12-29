import React, { Component } from 'react';
import styled from "styled-components";

const NavStyle = styled.div`
position: absolute;
z-index: 1;
display: flex;
flex-direction: row-reverse;
justify-content: space-around;
`

class NavBar extends Component {
    render() {
        return (
            <div>
                <NavStyle>
                    
                Portfolio
                Skills
                Contact 
                Resume
                </NavStyle>
            </div>
        );
    }
}

export default NavBar;