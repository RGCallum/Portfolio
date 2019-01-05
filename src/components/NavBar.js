import React, { Component } from 'react';
import styled from "styled-components";

const NavStyle = styled.div`
position: absolute;
z-index: 1000;
max-width: 800px;
margin: auto;
margin-top: 1em;
margin-left: 5vw;
overflow: hidden;
background-color: rgba(255, 255, 255, 0.619);
border-radius: 5px;
border: inset rgb(228, 228, 228)1px;

nav ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }
  

 }
  nav {
    float: right;
    a {
      background: #000;
      margin: .5em 0;
      font-size: 6px;
      transition: all 0.3s ease; 
      text-transform: uppercase;
      display: block;
      color: #000;
      text-decoration: none;
      z-index: -40;
pointer-events: none;
    }
    li:nth-child(n+4) {
      a {
        font-size: 0;
        @media only screen and (min-device-width: 320px) and (max-width: 480px) {
            {
            }
           }
      }
    }
    &:hover{

      a {
        background: rgba(255, 255, 255, 0.2);
        font-size: 16px !important;
        padding: 3px;
        pointer-events: all;

        &:hover {
          color: #E73C7E;
          background: #000;

        }

      }
    }
  }
  @media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        margin-top: 2.5em;
        }
   }
`


class NavBar extends Component {
    render() {
        return (
            <div>

                <NavStyle>

                    <div>
                        <h2>
                            <nav>
                                <ul>
                                    <li><a href="/"><i class="fas fa-home"></i> Home </a></li>
                                    <li><a href="/about"><i class="fas fa-grin-tongue-wink"></i> About Me</a></li>
                                    <li><a href="/portfolio"><i class="far fa-images"></i> Portfolio </a></li>
                                    <li><a href="/skills"><i class="fas fa-magic"></i> Skills </a></li>
                                    <li><a href="/resume"><i class="far fa-list-alt"></i> Resume </a> </li>
                                </ul>
                            </nav>
                        </h2>
                    </div>
                </NavStyle>
            </div>
        );
    }
}

export default NavBar;