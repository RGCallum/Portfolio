import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/girlFallAsleep.gif';
import img2 from '../images/daynight2.gif';

import { Link } from "react-router-dom";


const Container = styled.div`
background-image: url(${img2});
background-repeat: no-repeat;
background-size: 100vw;
position: fixed;
z-index: -100;
width: 100vw;
height: 100vw;
margin-top:0%;
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
text-align: center;
`

const GirlSleep = styled.div`
background-image: url(${img});
background-size: 50%;
background-repeat: no-repeat;
    position: fixed;
    z-index: 100;
    margin-top: 30%;
    margin-left: 24%;
    width: 100%;
    height: 100vw;
    animation: slide3 .8s linear 1;
    @keyframes slide3 {
        from { margin-top: -50%; }
        to { margin-top: -10% 0; }
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
    margin-top: 15%;
margin-left: 75vw;
background-color: rgba(255, 255, 255, 0.619);
}
a:link{
    text-decoration: none;
}
`


class Desk2Sleep extends Component {
    render() {
        return (
            <div>
                <Container>
                    <GirlSleep />
                    <NextBtn>
                    <br/>
                    <br/>
                    <br/>
                    So she ate, breathed and slept code, and discovered a whole new world that has given her some of the best and most challenging days that she has ever faced in her life.  Coding Bootcamp was an emotional rollercoaster with some days being the highest of high feeling like she was on top of the world, and the lowest of lows, when she couldn't figure something out.  And she loved every minute of it.
                    <br/>
                    <a href='/desk1'><button>Back</button></a> 
                    <br/>
                        <Link to="/end"><button>Next Chapter</button></Link>
                    </NextBtn>

                </Container>
            </div>
        );
    }
}
export default Desk2Sleep;