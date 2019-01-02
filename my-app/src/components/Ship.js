import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/ShipAnimation.gif';
import img2 from '../images/cartoonSky3.png';
import img3 from '../images/waterLayer.png';
import { Link } from "react-router-dom";

const Background = styled.div`
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
background-repeat: repeat-x;
background-size: 10%;
position: fixed;
z-index: -100;
repeat 0 0;
  margin-left: 0%;;
  margin-top: 10%;
  text-align: center;
  height: 120vw;
  width: 300vh;

`
const Sky = styled.div`
color: red;
font-size: 45px;
background-image: url(${img2});
position: fixed;
z-index: -101;
repeat 0 0;
  width: 100%;
  margin-top: 0;
  height: 100vh;
  animation: slide2 520s linear infinite;
  
  @keyframes slide2 {
    from { background-position: 0 -0; }
    to { background-position: 8000px 0; }
}
`
const ShipGif = styled.div`
background-image: url(${img});
background-size: 80%;
background-repeat: no-repeat;
    margin-top: 18%;
    position: fixed;
    z-index: 1001;
    margin-left: 80%;
    width: 100vw;
    height: 100vw;
    animation: slide3 55s linear infinite ;
    @keyframes slide3 {
    from { margin-left: 80%; }
   to { margin-left: -110%;  }
}

`

const Water = styled.div`
// background-image: url(${img3});
background-size: 60%;
position: fixed;
z-index: 101;
margin-top: 30%;
margin-left: 0%;
width: 100vw;
height: 100vw;
// animation: slide4 40s linear infinite;
// @keyframes slide4 {
// from { margin-left: 150%; }
// to { margin-left: -110%;  }
// }
`

const Birds = styled.div`
position: fixed;
z-index: -100;
margin-top: -5%;
margin-left: 100%;
animation: slide4 40s linear infinite;
@keyframes slide4 {
from { margin-left: 100%; }
to { margin-left: -110%;  }
}
`

const CruiseBtn = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 50px;
    position: relative;
    z-index: 1000;
    margin-left: 50%;
    border-radius: 15px;
    font-size: 25px;  
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    margin: auto;
background-color: rgba(255, 255, 255, 0.8);
    
}
a:link{
    text-decoration: none;
}
`

const NextBtn = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 40px;
    font-size: 15px;   
    position: absolute;
    z-index: 1000;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    margin: auto;
    margin-top: -2.5em;
margin-left: 75vw;
background-color: rgba(255, 255, 255, 0.619);
}
a:link{
    text-decoration: none;
}

`


class Ship extends Component {
    constructor() {
        super()
        this.state = {
            startCruise: true, //change back to false to make button onclick

        }
    }
    operation() {
        this.setState({
            startCruise: !this.state.startCruise,
        })
    }
    render() {
        return (
            <div>
                <Background>
                    <NextBtn>She ran far far away to shoot people having fun on cruise ships. 
                     <br/> She met people from all over the world, partied every night, spent months in the Caribbean and learned a lot about theatre production and broadcasting.<br></br>
                    <a href='/news'><button>Back</button></a> 
                    <br/>  <Link to="/scene"><button>Next Chapter</button></Link>
                    </NextBtn>
                </Background>
                <Birds>
                    <img src="https://vignette.wikia.nocookie.net/animaljam/images/9/93/Tumblr_ms4th0h51A1sfk0ybo1_500.gif/revision/latest?cb=20160416200533" alt="birds" />
                </Birds>
                <Sky />
                <Water></Water>

                <CruiseBtn>
                    {() => this.operation()}
                    {this.state.startCruise ?
                        <div>
                            <ShipGif></ShipGif>

                        </div>
                        : !null
                    }
                    {/* <button onClick={() => this.operation()}>Cruise</button> */}
                </CruiseBtn>


            </div>
        );
    }
}

export default Ship;