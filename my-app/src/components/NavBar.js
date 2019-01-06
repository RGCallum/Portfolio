import React, { Component } from 'react';
import styled from "styled-components";

const NavStyle = styled.div`

  
  a {
    text-decoration: none;
    color: #000000;
    font-size: 16px;
    font-weight: 100;
  }
  
  a:hover {
    background-color: #eeeeee;
    border-radius: 15px; 
    color: #E73C7E;
    font-weight: 600;
  }
  
  /* Dropdown */
  
  .dropdown {
    display: inline-block;
    position: absolute;
    z-index: 1000;
  }
  
  .dd-button {
    display: inline-block;
    border: inset rgb(228, 228, 228)2px;
    border-radius: 150px;
    padding: 5px 10px 5px 10px;
    background-color: rgba(255, 255, 255, 0.4);
    font-size: 16px;
    cursor: pointer;
    white-space: nowrap;
  }
  
  .dd-button:after {
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
    color: #E73C7E;

  }
  
  
  .dd-input {
    display: none;
  }
  
  .dd-menu {
    position: absolute;
    top: 100%;
    border: inset rgb(228, 228, 228)1px;
    border-radius: 15px;
    padding: 0;
    margin: 2px 0 0 0;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
    background-color: rgba(255, 255, 255, 0.66);
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
    // background-color: #f6f6f6;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)1px;

    
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

                        <input type="checkbox" class="dd-input" id="test" />

                        <ul class="dd-menu">
                            <li><a href="/"><i class="fas fa-home"></i> Home </a></li>
                            <li><a href="/about"><i class="fas fa-grin-tongue-wink"></i> My Story </a></li>
                            <li><a href="/portfolio"><i class="far fa-images"></i> Portfolio </a></li>
                            <li><a href="/skills"><i class="fas fa-magic"></i> Skills </a></li>
                            <li><a href="/resume"><i class="far fa-list-alt"></i> Resume </a> </li>
                        </ul>

                    </label>

                </NavStyle>
            </div>
        );
    }
}

export default NavBar;