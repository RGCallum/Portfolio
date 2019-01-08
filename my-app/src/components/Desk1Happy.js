import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/girlCodeHappyR.png';
import img2 from '../images/girlCodeHappyL.png';
import img3 from '../images/cartoonRoomDark.png';

import { Link } from "react-router-dom";


const Container = styled.div`
width: 100vw;
height: 100vw;
font-size: 25px;
text-align: center;
h1{
    color: black;
    text-shadow: 1px 1px 1px white;
    font-size: 30px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    padding: 10px;
    width: 100vw;     
      
}
a:hover{
color: #E73C7E;
}
@media only screen and (width: 2560px){
    {
        h1{
            font-size: 40px;
        }
    }
}
//laptop
@media only screen and (width: 1440px)   {
    { 
        h1{
            font-size: 25px;
        }    
    }
    }

    //laptop
@media only screen and (width: 1366px)   {
          { 
            h1{
                font-size: 25px;
            } 
          }
          }

//laptop
@media only screen and (width: 1280px)   {
{ 
    h1{
        font-size: 25px;
    } 
 }
 }
 //ipad pro

 @media only screen and (width: 1024px)   {
         { 
        h1{
            margin-top: 0%;
            font-size: 30px;
        }
     }
}
`
const Background = styled.div`
background-image: url('https://www.planwallpaper.com/static/images/2014-08-Aurora-Blue-Background-HD.jpg');
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
// animation: move 60s infinite;
// @keyframes move{
//     50%{
//         transform: scale(1.1);       
//     }
// }

//laptop
@media only screen and (width: 2560px)   {
    { 
            background-size: 110%;
           
    }
    }
//laptop
@media only screen and (width: 1440px)   {
    { 
            background-size: 120%;
           
    }
    }
//ipad pro
    @media only screen and (width: 1024px)   {
        { 
            background-size: cover;
            height: 100%;
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
  margin-top: 18%;
  margin-left: 24%;
  height: 100vh;
  animation: slide2 .5s linear 1;
  @keyframes slide2 {
    from { margin-left: -50%; }
    to { margin-left: -10% 0; }
}
//laptop
@media only screen and (width: 2560px)   {
    { 
margin-top: 25%;           
    }
    }

//laptop
@media only screen and (width: 1440px)   {
    {      
margin-top: 30%;           
    }
}

@media only screen and (width: 1024px)   {
    { 
        margin-top: 35%; 
        margin-left: -1%;
        background-size: 100%;          

     }
}
`
const DeskR = styled.div`
background-image: url(${img});
background-size: 50%;
background-repeat: no-repeat;
    position: fixed;
    z-index: 100;
    margin-top: 18%;
    margin-left: 24%;
    width: 100%;
    height: 100vw;
    animation: slide3 .5s linear 1;
    @keyframes slide3 {
      from { margin-left: 50%; }
      to { margin-left: 10% 0; }
  }

  //laptop
@media only screen and (width: 2560px)   {
    { 
margin-top: 25%;           
    }
    }

  //laptop
  @media only screen and (width: 1440px)   {
      { 
          
  margin-top: 30%;           
      }
      }
 //ipad pro
@media only screen and (width: 1024px)   {
        { 
            margin-top: 35%; 
            margin-left: -1%;
            background-size: 100%;          
    
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
                    <Background />
                    <DeskL />
                    <DeskR />

                    <FlashBtn>
                    </FlashBtn>
                    <br />
                    <br />
                    <NextBtn>
                        <h1>
                        It was amazing, she realized that every one of her prior experiences lead her to the world of coding, and it was here that she really excelled.  She was finally able to create projects that utilized her skill in storytelling, her eye for detail and composition, her expertise in photo editing and her determination to solve problems no matter how long it took.
                    <br />
                            <a href='/school'>Back </a> | <a href='/desk2'> Next Chapter</a>
                        </h1>
                    </NextBtn>
                </Container>
            </div>
        );
    }
}
export default Desk1Bedroom;