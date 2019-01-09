import React, { Component } from 'react';
import styled from "styled-components";

const NavStyle = styled.div`

  
  a, li {
    text-decoration: none;
    color: black;
    font-size: 16px
    font-weight: 500;
    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        font-size: 12px

    }
   }

  }
  
  a:hover, li:hover {
    border-radius: 15px; 
    color: #E73C7E;
    font-weight: 600;
  }
  
  /* Dropdown */
  
  .dropdown {
    display: inline-flex;
    justify-content: space-between;

    position: absolute;
    z-index: 1000;
  }
  
  .dd-button {
    display: inline-flex;
    border: inset rgb(228, 228, 228)2px;
    border-radius: 150px;
    padding: 5px 10px 5px 10px;
    background-color: rgba(255, 255, 255, 0.4);
    font-size: 16px;
    cursor: pointer;
    white-space: nowrap;
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
    // top: 100%;
   left: 100%;
    border: inset rgb(228, 228, 228)1px;
    border-radius: 15px;
    padding: 0;
    margin: 2px 0 0 0;
    box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
    // background-color: rgba(255, 255, 255, .999);
    background-color: rgba(255, 255, 255, 0.4);

    list-style-type: none;
  }
  
  .dd-input + .dd-menu {
    display: none;
  } 
  
  .dd-input:checked + .dd-menu {
    display: flex;
  } 
  
  .dd-menu li {
    padding: 10px 20px;
    white-space: nowrap;
  }
  
  .dd-menu li:hover {
    background-color: #f6f6f6;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)1px; 
  }
  
  .dd-menu li a {
    display: flex;
    margin: -10px -20px;
    padding: 10px 10px;
    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
        {
            padding: 5px 5px;

        }
       }
  }
  
  .dd-menu li.divider{
    padding: 0;
    border-bottom: 1px solid #cccccc;
  }
//sub menu





.dd2-button:hover {
  background-color: #eeeeee;
  color: #E73C7E;

}


.dd2-input {
  display: block;
}

.dd2-menu {
  position: absolute;
  margin-top: 15px;
  border: inset rgb(228, 228, 228)1px;
  border-radius: 15px;
  padding: 0;
  margin: 2px 0 0 0;
  box-shadow: 0 0 6px 0 rgba(0,0,0,0.1);
  background-color: rgba(255, 255, 255, .999);
  // background-color: rgba(255, 255, 255, 0.4);

  list-style-type: none;
}

.dd2-input + .dd2-menu {
  display: none;
} 

.dd2-input:checked + .dd2-menu {
  display: block;
} 

.dd2-menu li {
  padding: 10px 20px;
  white-space: nowrap;
}

.dd2-menu li:hover {
  background-color: #f6f6f6;
  border-radius: 15px;
  border: inset rgb(228, 228, 228)1px; 
}

.dd2-menu li a {
  display: flex;
  margin: -10px -20px;
  padding: 10px 10px;
  @media only screen and (min-device-width: 320px) and (max-width: 480px) {
      {
          padding: 5px 5px;

      }
     }
}

.dd2-menu li.divider{
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
                            <li><a href="/portfolio"><i class="far fa-images"></i> Portfolio </a></li>
                            <li><a href="/skills"><i class="fas fa-magic"></i> Skills </a></li>
                            <li><a href="/resume"><i class="far fa-list-alt"></i> Resume </a> </li>
                            <li><a href="#"><i class="fas fa-grin-tongue-wink"></i> My Story </a> 
                            <label class="dropdown">

                        <div class="dd2-button">
                      
                                                </div>
                                                <input type="checkbox" class="dd2-input" id="test" />

                            <ul class="dd2-menu">
                            <li><a href="/about"><i class="fas fa-film"></i> Film </a></li>
                            <li><a href="/news"><i class="far fa-newspaper"></i> News </a></li>
                            <li><a href="/ship"><i class="fas fa-ship"></i> Ship </a></li>
                            <li><a href="/scene"><i class="fas fa-camera-retro"></i> SceneIt </a> </li>
                            <li><a href="/school"><i class="fas fa-chalkboard-teacher"></i> Studies </a></li>
                            <li><a href="/desk1"><i class="fas fa-code"></i> Code </a></li>
                            <li><a href="/desk2"><i class="fas fa-laptop-code"></i> More Code </a> </li>
                            <li><a href="/end"><i class="fas fa-trophy"></i> Winning </a></li>

                        </ul>
                        </label>


                        </li>

                        </ul>

                    </label>

                </NavStyle>
            </div>
        );
    }
}

export default NavBar;