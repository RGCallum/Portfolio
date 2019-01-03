import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/girlCodeHappyR.png';
import img2 from '../images/girlCodeHappyL.png';
import img3 from '../images/cartoonRoomDark.png';

import { Link } from "react-router-dom";


const Container = styled.div`
width: 100vw;
height: 100vw;
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
text-align: center;

`
const Background = styled.div`
background-image: url(${img3});
background-repeat: no-repeat;
background-size: 100%;
position: fixed;
z-index: -100;
width: 100vw;
height: 100vw;
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
text-align: center;
animation: move 60s infinite;

@keyframes move{
    50%{
        transform: scale(1.1);
        
        
    }
}
`

const FlashBtn = styled.div`
button{
    background: #f49;
    width: 100px;
    height: 100px;
    margin: 50px auto;
    color: white;
}
`

const DeskL = styled.div`
background-image: url(${img2});
background-size: 50%;
background-repeat: no-repeat;
position: fixed;
z-index: 100;
  width: 100%;
  margin-top: 20%;
  margin-left: 24%;
  height: 100vh;
  animation: slide2 1s linear 1;
  @keyframes slide2 {
    from { margin-left: -50%; }
    to { margin-left: -10% 0; }
}
`
const DeskR = styled.div`
background-image: url(${img});
background-size: 50%;
background-repeat: no-repeat;
    position: fixed;
    z-index: 100;
    margin-top: 20%;
    margin-left: 24%;
    width: 100%;
    height: 100vw;
    animation: slide3 1s linear 1;
    @keyframes slide3 {
      from { margin-left: 50%; }
      to { margin-left: 10% 0; }
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
    margin-top: 1em;
margin-left: 75vw;
background-color: rgba(255, 255, 255, 0.619);
}
a:link{
    text-decoration: none;
}

`


class Desk1Bedroom extends Component {
    render() {
        return (
            <div>
                <Container>
                    <Background/>
                    <DeskL />
                    <DeskR />

                    <FlashBtn>
                    </FlashBtn>
                    <br/>
                    <br/>

                    It was amazing, she realized that every one of her prior experiences lead her to the world of coding, and it was here that she really excelled.  She was finally able to create projects that utilized her skill in storytelling, her eye for detail and composition, her expertise in photo editing and her determination to solve problems no matter how long it took.
                    <NextBtn>
                    <br/>
                    <a href='/school'><button>Back</button></a> 
                    <br/>
                        <Link to="/desk2"><button>Next Chapter</button></Link>
                    </NextBtn>
                </Container>
            </div>
        );
    }
}
export default Desk1Bedroom;