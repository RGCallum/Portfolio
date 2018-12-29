import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/shipBounce.gif';
import img2 from '../images/cartoonSky.png';
import { Link } from "react-router-dom";

const Background = styled.div`
color: red;
font-size: 45px;
background-repeat: repeat-x;
background-size: 10%;
position: fixed;
z-index: -100;
repeat 0 0;
  margin-left: 0%;;
  margin-top: 45%;
  text-align: center;
  height: 120vw;
  width: 300vh;

//   animation: slide2 120s linear infinite;

//   @keyframes slide2 {
//     from { background-position: 0 0; }
//     to { background-position: -8000px 0; }
// }
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
  animation: slide2 820s linear infinite;
  @keyframes slide2 {
    from { background-position: 0 -0; }
    to { background-position: 8000px 0; }
}
`
const ShipGif = styled.div`
background-image: url(${img});
background-size: 750%;
    margin-top: 33%;
    position: fixed;
    z-index: 100;
    margin-left: 100%;
    width: 150px;
    animation: slide3 65s linear infinite;
    @keyframes slide3 {
    from { margin-left: 100%; }
   to { margin-left: -110%;  }
}

`
const Birds = styled.div`
position: fixed;
z-index: 200;
margin-top: -5%;
margin-left: 100%;
animation: slide4 40s linear infinite;
@keyframes slide4 {
from { margin-left: 150%; }
to { margin-left: -110%;  }
}
`


const NextBtn = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 50px;
    position: relative;
    z-index: 1000;
    margin-left: 50%;
    border-radius: 15px;
    font-size: 30px;   
}
a:link{
    text-decoration: none;
}

`


class Ship extends Component {
    render() {
        return (
            <div>
                <Background></Background>
                    <Birds>
                    <img src="https://vignette.wikia.nocookie.net/animaljam/images/9/93/Tumblr_ms4th0h51A1sfk0ybo1_500.gif/revision/latest?cb=20160416200533" alt="birds"/>
                    </Birds>
                        <Sky/>
                            <ShipGif>
                                <img src="https://media.giphy.com/media/X8cMLm7r7Q7Hk1HXHJ/giphy.gif" alt="Ship" />
                            </ShipGif>
                            <NextBtn>
                            <Link to="/studio"><button>Next Chapter</button></Link> 
                            </NextBtn>
            </div>
        );
    }
}

export default Ship;