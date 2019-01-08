import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/cartoonBkgdEnd.svg';
import img2 from '../images/confetti.gif';
import sprite from '../images/spriteStand.png';
import spriteWin from '../images/Win.gif';
import { Link } from "react-router-dom";

const Background = styled.div`
color: white;
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
position: fixed;
z-index: -100;
  width: 100vw;
  height: 100vw;
  margin: 0;
  margin-top: 0%;
  text-align: center;
  overflow-y: hidden;
  //ipad pro
    @media only screen and (width: 1024px)   {
        { 
        background-size: cover;
        height: 110%;
        
        }
        }
  
//ipad 
@media only screen and (max-width: 768px)   {
    { 
            background-size: cover;
            height: 115%;
            width: 115%;
            }
}

//iphone6+
@media only screen and (min-width: 414px) and (max-width: 425px)  {
    { 
            background-size: cover;
            height: 100%;
            width: 100%;
            }
}
        `


const BothBtns = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 50px;
    position: relative;
    z-index: 1000;
    margin-left: 50%;
    border-radius: 15px;
    font-size: 15px;  
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    margin: auto;
background-color: rgba(255, 255, 255, 0.8);
    
}
a:link{
    text-decoration: none;
}

`
const JumpBtn = styled.div`
button{
    width: 100px;
    margin-top: .5em;
}
`
const ConfettiBtn = styled.div`
button{
    width: 150px;
    margin-top: .5em;
}
`
const GirlStill1 = styled.div`
button{
    margin-top 10%;
    width: 100px;
    height: 50px;
    position: fixed;
    z-index: 1000;
}
`
const GirlJump = styled.div`
button{
    margin-top 20%;
    width: 100px;
    height: 50px;
    position: fixed;
    z-index: 1000;
}
`
const Confetti = styled.div`
    // margin-top: -5%;
    position: fixed;
    z-index: 2;
    margin-left: 0%;
    height: 90vw;
    width: 102vw;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: contain;
    display: block;


`
const Child1 = styled.div`
background-image: url(${sprite});
background-repeat: no-repeat;
background-size: 22%;
margin-top: 20.2%;
margin-left: 40.7%;
position: fixed;
z-index: 3;
height: 100%;
width: 100%;

@media only screen and (width: 2560px){
    {
        margin-top: 10%;

    }
}
@media only screen and (width: 1920px){
    {
       
        margin-top: 10%;
        
    }
}

@media only screen and (width: 1440px){
    {
        margin-top: 12%;
        
    }
    }

//laptop
@media only screen and (width: 1280px)   {
{ 
    margin-top: 15%;
        
}
}

//ipad pro
    @media only screen and (width: 1024px)   {
        { 
            margin-top: 20%;
            margin-left: 23%;
        background-size: 50%;
        }
        }

        //ipad
@media only screen and (max-width: 768px)   {
        { 
            margin-top: 4%;
            margin-left: 23%;
        background-size: 50%;
            }
}

//iphone 6+ and big mobile phones
@media only screen and (min-width: 414px) and (max-width: 425px)  {
          { 
            margin-top: 14%;
            margin-left: 23%;
        background-size: 50%;
            }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            margin-top: 33%;
            margin-left: 23%;
        background-size: 50%;
            }
}

//s5
@media only screen and (width: 360px)   {
          { 
            margin-top: 35%;
            margin-left: 23%;
        background-size: 50%;         
                     
            
        }
}

//really small mobile
@media only screen and (width: 320px)   {
          {  
            margin-top: 37%;
            margin-left: 23%;
        background-size: 50%;          
            
        }
}
`
const Child2 = styled.div`
background-image: url(${spriteWin});
background-repeat: no-repeat;
background-size: 20%;
margin-top: 21%;
margin-left:42%;
position: fixed;
z-index: 3;
height: 100%;
width: 100%;

@media only screen and (width: 2560px){
    {
        margin-top: 10%;

    }
}
@media only screen and (width: 1920px){
    {
       
        margin-top: 10%;
        
    }
}

@media only screen and (width: 1440px){
    {
        margin-top: 12%;
        
    }
    }

//laptop
@media only screen and (width: 1280px)   {
{ 
    margin-top: 15%;
        
}
}

//ipad pro
    @media only screen and (width: 1024px)   {
        { 
            margin-top: 20%;
            margin-left: 23%;
        background-size: 50%;
        }
        }

        //ipad
@media only screen and (max-width: 768px)   {
        { 
            margin-top: 4%;
            margin-left: 23%;
        background-size: 50%;
            }
}

//iphone 6+ and big mobile phones
@media only screen and (min-width: 414px) and (max-width: 425px)  {
          { 
            margin-top: 14%;
            margin-left: 23%;
        background-size: 50%;
            }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            margin-top: 33%;
            margin-left: 23%;
        background-size: 50%;
            }
}

//s5
@media only screen and (width: 360px)   {
          { 
            margin-top: 35%;
            margin-left: 23%;
        background-size: 50%;         
                     
            
        }
}

//really small mobile
@media only screen and (width: 320px)   {
          {  
            margin-top: 37%;
            margin-left: 23%;
        background-size: 50%;          
            
        }
}
`
const NextBtn = styled.div`
h1{
    color: black;
    // text-shadow: 1px 1px 1px white;
    font-size: 20px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    padding: 10px;
    width: 100vw;     
      text-align: center;
      
}
a:hover{
color: #E73C7E;
}
@media only screen and (width: 2560px){
    {
        h1{
            font-size: 40px;
            margin-top: 3%;
        }
    }
}

@media only screen and (width: 1920px){
    {
        h1{
            font-size: 35px;
            margin-top: 3%;
        }
    }
}

@media only screen and (width: 1440px){
    {
        h1{
            font-size: 25px;
            margin-top: 3%;
        }
    }
}


//laptop
@media only screen and (width: 1280px)   {
{ 
    h1{
        margin-top: 3%;
    } 
 }
 }
 //ipad pro

 @media only screen and (width: 1024px)   {
         { 
            
        h1{
            margin-top: 5%;
            font-size: 25px;

        }
     }
}
//ipad
@media only screen and (max-width: 768px)   {
        { 
            
        h1{
            margin-top: 5%;
            font-size: 25px;

        }
        }
}
//iphone 6+ and big mobile phones
@media only screen and (min-width: 414px) and (max-width: 425px)  {
          { 

            h1{
                font-size: 16px;      
                margin-top: 10%; 
 width: 93.5vw;
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
class TheEnd extends Component {
    constructor() {
        super()
        this.state = {
            showConfetti: false,
            girlStill1: false,
            girlJump: true,
        }
    }
    operation() {
        this.setState({
            showConfetti: !this.state.showConfetti,
        })
    }
    operation2() {
        this.setState({
            girlStill1: !this.state.girlStill1,

        })
    }
    operation3() {
        this.setState({
            girlJump: !this.state.girlJump,

        })
    }
    render() {
        return (
            <div>
                <Background/>
               <br/>
                     <NextBtn>
                    <h1>   
                        She couldn't even imagine her life before coding. Even after completing her course she continues to work on projects and learn new things. She finally found something that would constantly challenge her and utilize her skill in animation and graphic design to create new and innovative apps, that are fun, interactive and functional.  <br/>
                        And she lived Codingly Ever After.
                        The End.  <br /><a href='/desk2'>Back</a> </h1> 
 </NextBtn>


                <GirlStill1>
                    {() => this.operation2()}

                    {
                        this.state.girlStill1 ?
                            <div>
                                <Child2></Child2>
                            </div>
                            : null
                    }
                </GirlStill1>
                <GirlJump>
                    {() => this.operation3()}
                    {this.state.girlJump ?
                        <div>
                            <Child1></Child1>

                        </div>
                        : !null
                    }
                </GirlJump>
                <BothBtns>
                    <ConfettiBtn>
                        <button onClick={() => this.operation()}>Confetti</button>
                    </ConfettiBtn>
                    {
                        this.state.showConfetti ?
                            <div>
                                <Confetti></Confetti>
                            </div>
                            : null
                    }
                    <JumpBtn>
                        <button onClick={() => { this.operation2(); this.operation3(); }}>Jump! </button>
                    </JumpBtn>


                </BothBtns>
            </div>
        );
    }
}

export default TheEnd;