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
margin-top: -15%;
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
                        <Link to="/end"><button>Next Chapter</button></Link>
                    </NextBtn>
                </Container>
            </div>
        );
    }
}
export default Desk2Sleep;