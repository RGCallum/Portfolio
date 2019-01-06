import React, { Component } from 'react';
import styled from "styled-components";

const NavStyle = styled.div`

body {
    color: #000000;
    font-family: Sans-Serif;
    padding: 30px;
    background-color: #f6f6f6;
  }
  
  a {
    text-decoration: none;
    color: #000000;
  }
  
  a:hover {
    color: #222222
  }
  
  /* Dropdown */
  
  .dropdown {
    display: inline-block;
    position: relative;
    z-index: 1;
  }
  
  .dd-button {
    display: inline-block;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 10px 30px 10px 20px;
    background-color: #ffffff;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .dd-button:after {
    // content: '';
    position: absolute;
    top: 50%;
    right: 15px;
    transform: translateY(-50%);
    width: 0; 
    height: 0; 
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid black;
  }
  
  .dd-button:hover {
    background-color: #eeeeee;
  }
  
  
  .dd-input {
    display: none;
  }
  
  .dd-menu {
    position: absolute;
    top: 100%;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0;
    margin: 2px 0 0 0;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
    background-color: #ffffff;
    list-style-type: none;
  }
  
  .dd-input + .dd-menu {
    display: none;
  } 
  
  .dd-input:checked + .dd-menu {
    display: block;
  } 
  
  .dd-menu li {
    padding: 10px 20px;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .dd-menu li:hover {
    background-color: #f6f6f6;
  }
  
  .dd-menu li a {
    display: block;
    margin: -10px -20px;
    padding: 10px 20px;
  }
  
  .dd-menu li.divider{
    padding: 0;
    border-bottom: 1px solid #cccccc;
  }

// position: absolute;
// z-index: 1000;
// max-width: 800px;
// margin: auto;
// margin-top: 1em;
// margin-left: 5vw;
// overflow: hidden;
// background-color: rgba(255, 255, 255, 0.619);
// border-radius: 5px;
// border: inset rgb(228, 228, 228)1px;

// nav ul {
//     list-style-type: none;
//     padding: 0;
//     margin: 0;
//   }
  

//  }
//   nav {
//     float: right;
//     a {
//       background: #000;
//       margin: .5em 0;
//       font-size: 6px;
//       transition: all 0.3s ease; 
//       text-transform: uppercase;
//       display: block;
//       color: #000;
//       text-decoration: none;
//     }
//     li:nth-child(n+4) {
//       a {
//         font-size: 0;
//       }
//     }
//     &:hover {
        
//       a {
//         background: rgba(255, 255, 255, 0.2);
//         font-size: 16px !important;
//         padding: 3px;
//         &:hover {
//           color: #E73C7E;
//           background: #000;

//         }

//       }
//     }
//   }
//   @media only screen and (min-device-width: 320px) and (max-width: 480px) {
//     {
//         margin-top: 2.5em;
//         }
//    }
`

class NavBar extends Component {
    render() {
        return (
            <div>

                <NavStyle>
                <label class="dropdown">

<div class="dd-button">
<i class="fas fa-bars"></i>
</div>

<input type="checkbox" class="dd-input" id="test"/>

<ul class="dd-menu">
<li><a href="/"><i class="fas fa-home"></i> Home </a></li>
                                    <li><a href="/about"><i class="fas fa-grin-tongue-wink"></i> About Me</a></li>
                                    <li><a href="/portfolio"><i class="far fa-images"></i> Portfolio </a></li>
                                    <li><a href="/skills"><i class="fas fa-magic"></i> Skills </a></li>
                                    <li><a href="/resume"><i class="far fa-list-alt"></i> Resume </a> </li>
</ul>

</label>
                    {/* <div>
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
                    </div> */}
                </NavStyle>
            </div>
        );
    }
}

export default NavBar;