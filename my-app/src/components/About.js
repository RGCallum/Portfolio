import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/streetBkgd3.jpg';
import camGirl from '../images/camGirlRunSteady.gif';
import { Link } from "react-router-dom";

const Background = styled.div`
color: black;
text-shadow: 1px 1px 1px white;
font-size: 25px;
font-weight: 800;
background-image: url(${img});
position: fixed;
z-index: -100;
  width: 100%;
  margin: 0;
  margin-top: -10%;
  text-align: center;
  height: 150vh;
  box-sizing: border-box;
  animation: slide2 120s linear infinite;
  @keyframes slide2 {
    from { background-position: 0 0; }
    to { background-position: -8000px 0; }
}

h1{
    background-color: rgba(255, 255, 255, 0.9);
    margin-top: -3em;
    z-index: 100;
    border-radius: 15px;
        border: inset rgb(228, 228, 228)2px;
        padding: 10px;
        width: 100vw;
        
}


@media only screen and (min-height: 560px) and (max-height: 660px) {
    {
        height: 250vh;

        }
   }
@media only screen and (max-width: 767px) {
    {
        h1{
            margin-top: 25em;
            font-size: 16px;
            word-wrap: normal;

        }
    }
}
@media only screen and (min-width: 767px) and (max-width: 2560px) {
    {
        h1{
            margin-top: 5em;
            font-size: 26px;
            word-wrap: normal;

        }
    }
}
    @media only screen and (max-width: 480px) {
        {
            margin-top: -12.8em;
            width: 100vh;
            height:
            overflow-y: hidden;

            }
       }
    
       @media only screen and (width: 1024px){
        {
            margin-top: -2em;
            background-repeat-y: no-repeat;
            background-size: 250%;
            }
       }
       @media only screen and (width: 1440px) and (height: 900px){
        {
            h1{
                margin-top: 8em;
            }
            }
       }
       @media only screen and (min-width: 1920px) and (max-width: 1921px) and (height: 1080px){
        {
            margin-top: 0em;

            h1{
                margin-top: 2em;
            }
            }
       }

       @media only screen and (width: 2560px) and (height: 1440px){
        {
            margin-top: 0em;
            background-repeat-y: no-repeat;
            background-size: 100%;

            h1{
                margin-top: 2em;
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
@media only screen and (width: 2560px) and (height: 1440px){
    {
        margin-top: 48%;
    }
}
@media only screen and (min-width: 1920px) and (max-width: 1921px) and (height: 1080px){
    {
        margin-top: 48%;
    }
}
@media only screen and (width: 1440px) and (height: 900px){
    {
            margin-top: 52%;
        }
   }
@media only screen and (width: 1366px) and (height: 768px) {
    {
        margin-top: 54%;
    }
}

@media only screen and (width: 1024px){
    {
        margin-top: 118%;

    }
}

@media only screen and (min-width: 768px) and (max-width: 800px){
    {
        margin-top: 108%;
        background-size: 50%;

        }
   }
@media only screen and (min-width: 320px) and (max-width: 359px){
    {
        background-size: 50%;
        margin-top: 170%;
        animation: slide3 35s linear infinite;
        @keyframes slide3 {
        from { margin-left: 100%; }
       to { margin-left: -1590%;  }
        }
        }
   }
@media only screen and (min-width: 360px) and (max-width: 374px){
    {
        background-size: 50%;
        margin-top: 150%;
        animation: slide3 35s linear infinite;
        @keyframes slide3 {
        from { margin-left: 100%; }
       to { margin-left: -1590%;  }
        }
        }
   }
@media only screen and (min-width: 375px) and (max-width: 425px) {
    {
        background-size: 50%;
        margin-top: 160%;
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
@media only screen and (max-width: 375px) {
    
    {
        width: 50%;
        margin-top: -35%;
        animation: slide4 35s linear infinite;
        @keyframes slide4 {
        from { margin-left: 150%; }
        to { margin-left: -1510%;  }
        
    }
}
`
const Parent = styled.div`
position: fixed;
@media only screen and (min-height: 560px) and (max-height: 660px) {
    {
        margin-top: -10em;
        width: 100vh;
        height: 100vh;
        overflow-y: hidden;
        h1{
            margin-top: 30em;
        }

        }
   }
@media only screen and (min-height: 768px) and (max-height: 853px) {
    {
        margin-top: -10em;
        width: 100vh;
        overflow-y: hidden;
        h1{
            margin-top: 18em;

        }

        }
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


@media only screen and (max-width: 320px) {
    {
        background-size: 50%;
        margin-top: 160%;
        animation-play-state: paused;
        background-repeat: no-repeat;
        position: fixed;
        }
   }
   @media only screen and (min-width: 360px) and (max-width: 374px){
    {
        background-size: 50%;
        margin-top: 145%;
        animation-play-state: paused;
        background-repeat: no-repeat;
        position: fixed;
        }
   }
   @media only screen and (min-width: 375px) and (max-width: 425px){
    {
        background-size: 50%;
        margin-top: 135%;
        animation-play-state: paused;
        background-repeat: no-repeat;
        position: fixed;
        }
   }
   @media only screen and (min-width: 425px) and (max-width: 480px){
    {
        background-size: 50%;
        margin-top: 115%;
        animation-play-state: paused;
        background-repeat: no-repeat;
        position: fixed;
        }
   }
   @media only screen and (min-width: 768px) and (max-width: 800px){
    {
        background-size: 25%;
        margin-top: 104%;
        margin-left: -10%;
        background-repeat: no-repeat;
        position: fixed;
        }
   }


   @media only screen and (min-width: 1024px) and (height: 768px){
    {
        background-size: 20%;
        // margin-top: 75%;
        margin-left: -10%;
        }
   }


   @media only screen and (height: 1366px){
    {
        margin-top: 103%;
        background-size: 25%;


    }
}
@media only screen and (width: 1366px) and (height: 768px) {
    {
        margin-top: 50%;
        background-size: 15%;
    }
}
@media only screen and (width: 1440px) and (height: 900px){
    {
            margin-top: 48%;
            background-size: 13%;

        }
   }
   @media only screen and (min-width: 1920px) and (max-width: 1921px) and (height: 1080px){
    {
        margin-top: 43%;
        background-size: 10%;
        }
   }
   @media only screen and (width: 2560px) and (height: 1440px){
    {
        margin-top: 43%;
        background-size: 10%;
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
margin-left: 55vw;
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
                        <h1>

                            Once upon a time there was a girl who wanted to be a filmmaker, <br /> so she learned everything she could about film in school. <br /> Then she ran all over the city and shot short films and music videos and TV shows and interviews and any and everything she possibly could.  
                            <br />

                           <a href="/news">Next</a>  
                            </h1>
                        {/* <NextBtn>
                            <Link to="/news"><button>Next Chapter</button></Link>
                        </NextBtn> */}

                    </Background>
                    <Birds>
                        <img src="https://vignette.wikia.nocookie.net/animaljam/images/9/93/Tumblr_ms4th0h51A1sfk0ybo1_500.gif/revision/latest?cb=20160416200533" alt="birds" />
                    </Birds>

                    <Child />
                    <Bus>
                        <img src="https://media.giphy.com/media/1k0AlwzpknA4TeDERT/giphy.gif" alt="bus" />
                    </Bus>
                </Parent>
            </div>
        );
    }
}

export default Home;