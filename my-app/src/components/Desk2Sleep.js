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
font-size: 25px;
text-align: center;
h1{
    color: black;
    // text-shadow: 1px 1px 1px white;
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
            font-size: 50px;
            margin-top: 5%;
        }
    }
}

@media only screen and (width: 1920px){
    {
        h1{
            font-size: 35px;
            margin-top: 5%;
        }
    }
}



//laptop
@media only screen and (width: 1280px)   {
{ 
    h1{
        margin-top: 5%;
    } 
 }
 }
 //ipad pro

 @media only screen and (width: 1024px)   {
         { 
            background-size: cover;
            height: 100%;
            margin-left: -30%;
            width: 130%;
        h1{
            margin-top: 5%;
            margin-left: 23%;

        }
     }
}
//ipad
@media only screen and (max-width: 768px)   {
        { 
            background-size: cover;
            height: 100%;
            margin-left: -30%;
            width: 130%;
        h1{
            margin-top: 5%;
            margin-left: 23%;

        }
        }
}
//iphone 6+ and big mobile phones
@media only screen and (min-width: 412px) and (max-width: 425px)  {
          { 

            h1{
                font-size: 16px;      
                margin-top: 10%; 
 
              }
           }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            h1{
                font-size: 16px;   
                margin-top: 10%; 
    
              }
           }
}
//s5
@media only screen and (width: 360px)   {
          {    
              h1{
                font-size: 14px;       
                margin-top: 10%; 

              }
           }
}

//really small mobile
@media only screen and (width: 320px)   {
          {    
              h1{
                font-size: 14px;       
                margin-top: 10%; 

              }
           }
}
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
  @media only screen and (width: 1920px){
    {
       
            margin-top: 25%;
        
    }
}

//laptop
@media only screen and (width: 1280px)   {
{ 
    margin-top: 35%;
        
}
}

//ipad pro
    @media only screen and (width: 1024px)   {
        { 
            margin-top: 60%;
        background-size: 100%;
        }
        }

        //ipad
@media only screen and (max-width: 768px)   {
        { 
            margin-top: 65%;
            background-size: 100%;
            }
}

//iphone 6+ and big mobile phones
@media only screen and (min-width: 412px) and (max-width: 425px)  {
          { 
            margin-top: 85%;
            background-size: 120%;
            margin-left: 10%;
            }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            margin-top: 90%;
            background-size: 120%;
            margin-left: 12%;
            }
}

//s5
@media only screen and (width: 360px)   {
          { 
            margin-top: 90%; 
            margin-left: 12%;
            background-size: 120%;          
                     
            
        }
}

//really small mobile
@media only screen and (width: 320px)   {
          {  
            margin-top: 90%; 
            margin-left: 12%;
            background-size: 120%;          
            
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
                        <h1>
                    So she ate, breathed and slept code, and discovered a whole new world that has given her some of the best and most challenging days that she has ever faced in her life. It was fun and hard and exciting and disappointing all at the same time. And she loved every minute of it.
                    <br/>
                    <a href='/desk1'>Back </a> | <a href='/end'> Next Chapter</a>
                        </h1>
                    </NextBtn>
                </Container>
            </div>
        );
    }
}
export default Desk2Sleep;