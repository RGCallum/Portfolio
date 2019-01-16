import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/classroom.png';
import { Link } from "react-router-dom";


const Container = styled.div`
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-size: 400% 400%;
height: 200vh;
font-size: 25px;
text-align: center;
h1{   
    color: black;
    // text-shadow: 1px 1px 1px white;
    font-size: 35px;
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
animation: Gradient 15s ease infinite;
@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@media only screen and (width: 1920px){
    {
        h1{
            font-size: 30px;
            margin-top: -1%;
        }
    }
}
//laptop
@media only screen and (width: 1440px)   {
    { 
        h1{
            font-size: 30px;
        }    
    }
    }
//laptop
@media only screen and (width: 1366px)   {
          { 
            h1{
                font-size: 30px;
            } 
          }
          }

//laptop
@media only screen and (width: 1280px)   {
{ 
    h1{
        font-size: 25px    } 
 }
 }

//ipad pro
@media only screen and (min-width: 769px) and (max-width: 1079px)   {
        { 
            h1{
                margin-top: 5%;
                font-size: 30px;
            }
         }
}

//ipad
@media only screen and (max-width: 768px)   {
        { 
            h1{
                font-size: 20px;
            }
         }
}

//iphone 6+ and big mobile phones
@media only screen and (min-width: 412px) and (max-width: 425px)  {
          { 
            h1{
                font-size: 16px;      
                margin-top: -5%; 
 
              }
           }
}

//iphone 6
@media only screen and (width: 375px)   {
          { 
            h1{
                font-size: 16px;   
                margin-top: -5%; 
    
              }
           }
}

//s5
@media only screen and (width: 360px)   {
          {    
              h1{
                font-size: 14px;       
                margin-top: -5%; 

              }
           }
}

//really small mobile
@media only screen and (width: 320px)   {
          {    
              h1{
                font-size: 14px;       
                margin-top: -5%; 

              }
           }
}

`


const Classroom = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: 70%;
text-align: center;
margin: auto;
margin-top: 13%;
margin-left: 22%;
    position: fixed;
    z-index: 100;
    width: 80vw;
    height: 100vw;
    animation: fade-in 5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

@media only screen and (min-width: 1920px) and (max-width: 1935px) {
{
    margin-top: 17%;
}
}

//laptop
@media only screen and (width: 1440px)   {
    { 
        margin-top: 24%;
    }
    }
//laptop
@media only screen and (width: 1366px)   {
          { 
              margin-top: 26%;
          }
          }

//laptop
@media only screen and (width: 1280px)   {
{ 
     margin-top: 30%;
 }
 }

 //ipad pro
 @media only screen and (width: 1024px)   {
 { 
      margin-top: 50%;
      background-size: 110%;
      margin-left: 10%;

  }
  }

//ipad 
@media only screen and (width: 768px)   {
          { 
               margin-top: 40%;
               background-size: 100%;
               margin-left: 10%;
           }
  }



//iphone 6+ and big mobile phones
@media only screen and (min-width: 412px) and (max-width: 425px)  {
          { 
            margin-top: 90%;
            background-size: 120%;
            margin-left: 10%;
           }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            margin-top: 105%;
            background-size: 120%;
            margin-left: 10%;
           }
}

//s5
@media only screen and (width: 360px)   {
          { 
            margin-top: 80%;
            background-size: 120%;
            margin-left: 10%;
           }
}

//really small mobile
@media only screen and (width: 320px)   {
          {           
                margin-top: 105%; 
                background-size: 120%;
            margin-left: 10%;          
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



class School extends Component {

    render() {
        return (
            <div>
                <Container>
                    <Classroom />
                    <br />
                    <br />

                    <NextBtn>
                        <h1>
                        So she joined FreeCodeCamp and Codecademy and any and every online tool she could possibly find to learn about coding.
                        And when that wasn't enough, she decided to go back to school and learn in person about web and software development.
                        She learned all about CSS, Javascript, Python, React, just to name a few and really enjoyed working on challenging projects. She met many like minded classmates who laughed with her on the best days and helped her fight through the rough ones.
                        <br />
                    <a href='/scene'>Back </a> |
                    <a href='/desk1'> Next Chapter </a>
                    </h1>
                    </NextBtn>
                </Container>
            </div>
        );
    }
}

export default School;