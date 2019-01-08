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
  h1{
    margin-top: -4em;
    color: black;
    text-shadow: 1px 1px 1px white;
    font-size: 25px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1000;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    padding: 10px;
    width: 100vw;       
}


@media only screen and (width: 1024px){
    {
        margin-top: 22%;

    }
}
//imac
@media only screen and (width: 1920px) and (width: 1921px) and (height: 1080px){
    {
        h1{
            margin-top: -20em;
        font-size: 45px;
        }
    }
}

// ipad pro
@media only screen and (min-width: 1024px) and (min-height: 1366px){
    {
    h1{
        margin-top: 0em;
        font-size: 35px;
    }
    }
}
//ipad
@media only screen and (min-width: 768px) {
 {
     h1{
     margin-top: 4em;

 }
 }
}
//iphone6+
@media only screen and (min-width: 414px)   {
    {
        h1{
            margin-top: 4em;
            font-size: 18px;


        }
    }
}
//iphone6, iphoneX
@media only screen and (min-width: 375px)   {
    {
        h1{
            margin-top: 4em;
            font-size: 18px;
        }
    }
}
//s5
   @media only screen and (min-width: 360px)   {
    { 
        h1{
            margin-top: 4em;
            font-size: 18px;
    }
    }
}
//really small mobile screens
@media only screen and (min-width: 320px)    {
        h1{
            margin-top: 4em;
            font-size: 15px;
        }
        }
   }
`
const Sky = styled.div`
color: red;
font-size: 45px;
background-image: url(${img2});
background-repeat-y: no-repeat;
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
//big screens
@media only screen and (width: 2560px) and (height: 1440px){
    {
        background-size: cover;
    }
}
@media only screen and (min-width: 1024px) and (min-height: 1366px){
   {
    background-size: cover;

   }
    
}
//iphone6+
@media only screen and (min-width: 414px)   {
    {
        background-size: cover;

    }
    }

    //iphone6, iphoneX
@media only screen and (min-width: 375px)   {
    {
        background-size: cover;

    }
}
//s5
   @media only screen and (min-width: 360px)   {
    { 
        background-size: cover;

    }}

//really small mobile screens
@media only screen and (min-width: 320px)    {
        {
            background-size: cover;

        }       
   }
    
`
const ShipGif = styled.div`
background-image: url(${img});
background-size: 80%;
background-repeat: no-repeat;
    margin-top: 3%;
    position: fixed;
    z-index: 1001;
    margin-left: 80%;
    width: 100vw;
    height: 100vw;
    animation: slide3 35s linear infinite ;
    @keyframes slide3 {
    from { margin-left: 50%; }
   to { margin-left: -110%;  }
}

@media only screen and (width: 1024px){
    {
        margin-top: 30%;

    }
}
@media only screen and (width: 1024px) and (height: 1366px){
    {
        margin-top: 50%;
        background-size: 100%;
        width: 130vw;
    }
     
 }
 //ipad
@media only screen and (width: 768px) {
 {    
    margin-top: 50%;
    background-size: 100%;
    width: 130vw;
 }
}
//iphone6+
@media only screen and (width: 414px)   {
    {
    margin-top: 68%;
    background-size: 100%;
    width: 150vw;
    height: 100vh;
    }
    }

//iphone6, iphoneX
@media only screen and (width: 375px)   {
        {
            margin-top: 70%;
            background-size: 100%;
            width: 150vw;
            height: 100vh;
            }
            }

//s5
@media only screen and (width: 360px)   {
    { 
        margin-top: 72%;
        background-size: 100%;
        width: 150vw;
        height: 100vh;
    }}
    
    //really small mobile screens
@media only screen and (width: 320px)    {
        {
            margin-top: 75%;
            background-size: 100%;
            width: 150vw;
            height: 100vh;
        }       
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
animation: slide 30s linear infinite;
@keyframes slide {
from { margin-left: 100%; }
to { margin-left: -110%;  }
}
//iphone6+
@media only screen and (width: 414px)   {
    {
        margin-top: -24%;

    }
}
//iphone6, iphoneX
@media only screen and (width: 375px)   {
   {
    margin-top: -35%;

}
   }

//s5
   @media only screen and (width: 360px)   {
    { 
        margin-top: -35%;

    }}

    //really small mobile screens
@media only screen and (width: 320px)    {
        {
            margin-top: -43%;
 
        }       
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
                    <NextBtn> 
                        <h1>She ran far far away to shoot people having fun on cruise ships. 
                     <br/> She met people from all over the world, partied every night, spent months in the Caribbean and learned a lot about theatre production and broadcasting.<br></br>
                    <a href='/news'>Back</a> <br/>
                    <a href='/scene'>Next Chapter</a> 
                    </h1> 
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