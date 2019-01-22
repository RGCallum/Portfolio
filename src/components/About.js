import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/streetBkgd4.png';
import camGirl from '../images/camGirlRunSteady.gif';
import { Link } from "react-router-dom";

const Background = styled.div`
background-image: url(${img});
background-size: contain;
background-repeat-y: no-repeat;
color: black;

position: fixed;
z-index: -100;
  width: 100vw;
  text-align: center;
  height: 150vw;
  animation: slide2 120s linear infinite;
  @keyframes slide2 {
    from { background-position: 0 0; }
    to { background-position: -8000px 0; }
}
a:hover{
    color: #E73C7E;
    }

a:link{
    text-decoration: none;
}    
h1{
    background-color: rgba(255, 255, 255, 0.9);
    z-index: 100;
    border-radius: 15px;
        border: inset rgb(228, 228, 228)2px;
        padding: 10px;
        width: 100vw;
        font-size: 16px;
        
}

//laptop
   @media only screen and (min-width: 2560px){
    { 
        background-size: cover;
        width: 100vw;
        height: 100vh;
        h1{
            font-size 30px;
            margin-top: 3%;
    
            }
    }
}

//laptop
   @media only screen and (min-width: 1920px) and (max-width: 1921px){
    { 
        background-size: cover;
        width: 100vw;
        height: 100vh;
        h1{
            font-size 25px;
            margin-top: 5%;
    
            }
    }
}

//laptop
@media only screen and (width: 1440px)   {
    { 
        background-size: cover;
        width: 100vw;
        height: 100vh;
        h1{
            font-size 25px;
            margin-top: 5%;
    
            }
    }
    }

    // ipad pro
@media only screen and (width: 1024px) {
    {
        background-size: cover;
        width: 165%;
        height: 100%;
        h1{
            font-size 30px;
            margin-top: 8%;
    
            }
    }
}

//ipad
@media only screen and (width: 768px) {
 {
    background-size: cover;
    width: 165%;
    height: 100%;
    h1{
        font-size 20px;
        margin-top: 8%;

        }
}
}

//iphone6+
@media only screen and (min-width: 412px) and (max-width: 425px) {
    {
    background-size: cover;
    width: 190%;
    height: 100%;
    h1{
        font-size 14px;
        margin-top: 8%;

        }
}
}

//iphone6
@media only screen and (width: 375px) and (min-height: 667px) {
    {
    background-size: cover;
    width: 190%;
    height: 100%;
    h1{
        font-size 14px;
        margin-top: 10%;

        }
}
}

// iphoneX
@media only screen and (width: 375px) and (min-height: 812px) {
    {
    background-size: cover;
    width: 190%;
    height: 100%;
    h1{
        font-size 14px;
        margin-top: 10%;

        }
}
}

//s5
   @media only screen and (width: 360px)   {
    { 
        background-size: cover;
        width: 190%;
        height: 105vh;
        h1{
        font-size 13px;
        margin-top: 10%;

        }
    }
}

//really small mobile screens
@media only screen and (width: 320px)    {
    { 
        background-size: cover;
        width: 190%;
        height: 120vh;
        h1{
        font-size 13px;
        margin-top: 13%;

        }
    }
}

`

const Bus = styled.div`
    // margin-top: 88%;
    position: fixed;
    z-index: 200;
    margin-left: 100%;
    animation: slide3 30s linear infinite;
    @keyframes slide3 {
    from { margin-left: 100%; }
   to { margin-left: -810%;  }
}


//really small mobile screens 
@media only screen and (min-width: 320px) and (max-width: 359px){
    {
        margin-top: 150%;

        }
}

//s5
@media only screen and (min-width: 360px) and (max-width: 374px){
    {
        margin-top: 130%;
        
        }
   }

//iphone6
@media only screen and (min-width: 375px) and (max-width: 411px) {
    {
        margin-top: 130%;

        }
   }

   // iphoneX
   @media only screen and (width: 375px) and (min-height: 812px) {
       {
   margin-top: 160%;
       }
   }

   //iphone6+
   @media only screen and (min-width: 412px) and (max-width: 425px){
    {
        margin-top: 130%;

        }
   }

   // iphoneX
   @media only screen and (width: 375px) and (min-height: 812px) {
       {
   
       }
   }

   //ipad
   @media only screen and (min-width: 768px) {
    {      
        margin-top: 110%;
    }
}

// ipad pro
@media only screen and (width: 1024px) {
    {
       
    }
}

//laptop
   @media only screen and (min-width: 1920px) and (max-width: 1921px){
    { 
    }
}

@media only screen and (width: 2560px){
    {
       
    }
}

`
const Birds = styled.div`
position: fixed;
z-index: 200;
margin-top: -5%;
margin-left: 100%;

animation: slide4 10s linear 1;
@keyframes slide4 {
from { margin-left: 150%; }
to { margin-left: -110%;  }
}

`

const Child = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
background-size: 11%;
margin-top: 47%;
position: fixed;
z-index: 100;
height: 100%;
width: 100%;
margin-left: -100%;
animation: slide 25s linear infinite;

@keyframes slide {
    from { margin-left: -10%; }
   to { margin-left: 110%;  }
}


@media only screen and (min-width: 320px) {
    {
        background-size: 50%;
        margin-top: 135%;
        animation-play-state: paused;

        }
   }

   //s5
   @media only screen and (min-width: 360px)   {
    { 
        background-size: 40%;
        margin-top: 118%;
        animation-play-state: paused;

        }
   }

   //iphone6, iphoneX
   @media only screen and (min-width: 375px) and (max-width: 411px){
    {
        background-size: 40%;
        margin-top: 115%;
        margin-left: 20%;
        animation-play-state: paused;

        }
   }

   // iphoneX
@media only screen and (width: 375px) and (min-height: 812px) {
    {
        background-size: 40%;
        margin-top: 145%;
        margin-left: 20%;
        animation-play-state: paused;
    }
}

   //iphone6+
   @media only screen and (min-width: 412px) and (max-width: 425px){
    {
        background-size: 40%;
        margin-top: 114%;
        animation-play-state: paused;

        }
   }
   //ipad
   @media only screen and (min-width: 768px){
    {
        background-size: 25%;
        margin-top: 90%;
        animation-play-state: running;
        }
   }

// ipad pro
@media only screen and (width: 1024px) {
 {
        background-size: 30%;
        margin-top: 85%;
        }
   }

   //laptop
@media only screen and (width: 1440px)   {
       { 
            margin-top: 38%;
            background-size: 12%;

        }
}

//laptop
   @media only screen and (min-width: 1920px) and (max-width: 1921px){
    {
        margin-top: 36%;
        background-size: 12%;
        }
}

   @media only screen and (width: 2560px){
    {
        margin-top: 37%;
        background-size: 11%;
    }
}

`



class Home extends Component {
    render() {
        return (
            <div>
                
                    <Background>
                        <h1>    Once upon a time there was a girl who wanted to be a filmmaker, <br /> so she learned everything she could about film in school. <br /> Then she ran all over the city and shot short films and music videos and TV shows and interviews and any and everything she possibly could.  
                            <br />
                           <a href="/news">Next</a>  
                            </h1>


                    </Background>
                    <Birds>
                        <img src="https://vignette.wikia.nocookie.net/animaljam/images/9/93/Tumblr_ms4th0h51A1sfk0ybo1_500.gif/revision/latest?cb=20160416200533" alt="birds" />
                    </Birds>

                    <Child />
                    <Bus>
                        <img src="https://media.giphy.com/media/1k0AlwzpknA4TeDERT/giphy.gif" alt="bus" />
                    </Bus>
               
            </div>
        );
    }
}

export default Home;