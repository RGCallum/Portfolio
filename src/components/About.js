import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/streetBkgd3.jpg';
import camGirl from '../images/camGirlRunSteady.gif';
import { Link } from "react-router-dom";

const Background = styled.div`
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
background-image: url(${img});
position: fixed;
z-index: -100;
// repeat 0 0;
  width: 100%;
  margin: 0;
  margin-top: -5%;
  text-align: center;
  height: 100vw;
  box-sizing: border-box;
  animation: slide2 120s linear infinite;

  @keyframes slide2 {
    from { background-position: 0 0; }
    to { background-position: -8000px 0; }
}
@media only screen and (min-device-width: 320px) and (max-width: 2560px) {
    {
height: 150vh;
margin-top: 1px;
        }
   }
h1{
    background-color: rgba(0,0,0, .4);
    margin-top: -3em;

    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
        {
            margin-top: -3em;
            font-size: 15px;
            }
       }
}
`

const Bus = styled.div`
    margin-top: 38%;
    position: fixed;
    z-index: 200;
    margin-left: 100%;
    animation: slide3 15s linear infinite;
    @keyframes slide3 {
    from { margin-left: 100%; }
   to { margin-left: -110%;  }
}
@media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        background-size: 50%;
        margin-top: 180%;
        animation: slide3 35s linear infinite;
        @keyframes slide3 {
        from { margin-left: 100%; }
       to { margin-left: -1590%;  }
        }
   }
   @media only screen and (min-width: 375px) and (max-width: 424px){
    {
        margin-top: 155%;
        animation: slide3 35s linear infinite;
        @keyframes slide3 {
        from { margin-left: 100%; }
       to { margin-left: -1590%;  }
        }
   }
   @media only screen and (min-width: 425px) and (max-width: 767px){
    {
        margin-top: 100%;
        animation: slide3 35s linear infinite;
        @keyframes slide3 {
        from { margin-left: 100%; }
       to { margin-left: -1590%;  }
        }
   }
 
`
const Birds = styled.div`
position: fixed;
z-index: 200;
margin-top: -5%;
margin-left: 100%;
animation: slide4 20s linear infinite;
@keyframes slide4 {
from { margin-left: 150%; }
to { margin-left: -110%;  }
}
@media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        animation: slide4 35s linear infinite;
        @keyframes slide4 {
        from { margin-left: 150%; }
        to { margin-left: -1510%;  }
        }
    }
}
`
const Parent = styled.div`
position: fixed;
`


const Child = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
background-size: 11%;
margin-top: 37%;
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

@media only screen and (min-width: 320px) and (max-width: 374px) {
    {
        background-size: 50%;
        margin-top: 160%;
        animation-play-state: paused;
        background-repeat: no-repeat;
        position: fixed;
        }
   }

   @media only screen and (min-width: 375px) and (max-width: 424px){
    {
        background-size: 50%;
        margin-top: 130%;
        animation-play-state: paused;
        background-repeat: no-repeat;
        position: fixed;
        }
   }
   @media only screen and (min-width: 425px) and (max-width: 767px){
    {
        background-size: 50%;
        margin-top: 110%;
        animation-play-state: paused;
        background-repeat: no-repeat;
        position: fixed;
        }
   }
   @media only screen and (min-width: 768px) and (max-width: 1024px){
    {
        background-size: 30%;
        margin-top: 60%;
        margin-left: -10%;
        animation-play-state: paused;
        background-repeat: no-repeat;
        position: fixed;
        }
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
margin-top: .5em;
margin-left: 75vw;
background-color: rgba(255, 255, 255, 0.619);
}
a:link{
    text-decoration: none;
}

`


class Home extends Component {
    render() {
        return (
            <div>
                <Parent>
                <Background>
                <br/><br/>
                <br/><br/>

                 <h1> 
 
Once upon a time there was a girl who wanted to be a filmmaker, <br/> so she learned everything she could about film in school. <br/> Then she ran all over the city and shot short films and music videos and TV shows and interviews and any and everything she possibly could.</h1> 
<NextBtn>
                            <Link to="/news"><button>Next Chapter</button></Link> 
                            </NextBtn>
</Background>
                    <Birds>
                    <img src="https://vignette.wikia.nocookie.net/animaljam/images/9/93/Tumblr_ms4th0h51A1sfk0ybo1_500.gif/revision/latest?cb=20160416200533" alt="birds"/>
                    </Birds>
                    
                        <Child/>
                            <Bus>
                                <img src="https://media.giphy.com/media/1k0AlwzpknA4TeDERT/giphy.gif" alt="bus" />
                            </Bus>
                            </Parent>
            </div>
        );
    }
}

export default Home;