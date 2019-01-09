import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/StreetNews2.png';
import img2 from '../images/sky2.jpg';
import camGirl from '../images/camGirlRunSteadyReverse.gif';
import camGirl2 from '../images/camGirlStillReverse.png';
import { Link } from "react-router-dom";


const Background = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
position: fixed;
z-index: -100;
  width: 100vw;
  margin: 0;
  margin-top: 0%;
  text-align: center;
  height: 100vw;

  //laptop
@media only screen and (width: 1440px)   {
    { 
        background-size: cover;
        width: 100vw;
        height: 100vh;
    }
    }

    // ipad pro
@media only screen and (width: 1024px) and (height: 1366px){
    {
        margin-left: -60%;
        background-size: cover;
        width: 165%;
        height: 100%;
    }
}

//ipad
@media only screen and (width: 768px) {
 {
    margin-left: -60%;
    background-size: cover;
    width: 165%;
    height: 100%;
}
}

//iphone6+
@media only screen and (min-width: 412px) and (max-width: 425px) {
    {
        margin-left: -90%;
    background-size: cover;
    width: 190%;
    height: 100%;
}
}

//iphone6, iphoneX
@media only screen and (width: 375px)   {
    {
        margin-left: -90%;
    background-size: cover;
    width: 190%;
    height: 100%;
}
}

//s5
   @media only screen and (width: 360px)   {
    { 
        margin-left: -90%;
        background-size: cover;
        width: 190%;
        height: 100%;
    }
    }

    //really small mobile screens
@media only screen and (width: 320px)    {
    { 
        margin-left: -90%;
        background-size: cover;
        width: 190%;
        height: 100%;
    }
    }
`


const BothBtns = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 40px;
    position: relative;
    z-index: 1000;
    margin-left: 50%;
    border-radius: 15px;
    font-size: 25px;  
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    margin: auto;
background-color: rgba(255, 255, 255, 0.8);
    
}
a:link{
    text-decoration: none;
}

`
const RunBtn = styled.div`
button{
    width: 100px;
    margin-top: .5em;
}
`
const WeatherBtn = styled.div`
button{
    width: 150px;
    margin-top: .5em;
}
`
const GirlStill1 = styled.div`

`
const GirlRun = styled.div`
// display: none;
animation: 1s appear;
animation-fill-mode: forwards;
animation-delay: 16s;
visibility: hidden;
}

@keyframes appear {
99% {
  visibility: hidden;
}
100% {
  visibility: visible;
}
}
`
const Sky = styled.div`
color: red;
font-size: 45px;
background-image: url(${img2});
background-size: contain;
background-repeat-y: no-repeat;
overflow-x: hidden;
position: fixed;
z-index: -200;
repeat 0 0;
  width: 100vw;
  margin: 0;
  height: 100vw;
  animation: slide2 320s linear infinite;
  @keyframes slide2 {
    from { background-position: 0 0; }
    to { background-position: -8000px 0; }
}
// ipad pro
@media only screen and (width: 1024px) and (height: 1366px){
    {
        background-size: cover;
        height: 115%;
    }
}

//ipad
@media only screen and (width: 768px) {
 {
    background-size: cover;
    height: 115%;
}
}

//iphone6+
@media only screen and (min-width: 412px) and (max-width: 425px) {
    {
    background-size: cover;
    height: 115%;
}
}

//iphone6, iphoneX
@media only screen and (width: 375px)   {
    {
        background-size: cover;
    height: 115%;
}
}

//s5
   @media only screen and (width: 360px)   {
    { 
        background-size: cover;
        height: 115%;
    }
}

//really small mobile screens
@media only screen and (width: 320px)    {
    { 
        background-size: cover;
        height: 115%;
    }
}
`
const Tornado = styled.div`
    margin-top: -30%;
    position: fixed;
    z-index: -180;
    margin-left: 0%;
    height: 75vw;
    width: 100vw;
    // border: 3px solid black;
    background-image: url('https://data.whicdn.com/images/308544314/original.gif');
    background-repeat: no-repeat;
    background-size: cover;
    overflow-y: hidden
    animation-name: tornado;
    animation-duration: 16s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;  
    @keyframes tornado {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1
        }
      }
      //laptop
      @media only screen and (width: 1440px)   {
          { 
            margin-top: -20%;

          }
}

// ipad pro
@media only screen and (width: 1024px) and (height: 1366px){
    {
        background-size: cover;
        height: 115%;
        width: 135%;
        margin-left: -30%;
    }
}

//ipad
@media only screen and (width: 768px) {
 {
    background-size: cover;
    height: 115%;
    width: 135%;
    margin-left: -30%;
}
}

//iphone6+
@media only screen and (min-width: 412px) and (max-width: 425px)  {
    {
        margin-top: -50%;
        background-size: cover;
        height: 115%;
        width: 145%;
        margin-left: -45%;
}
}

//iphone6, iphoneX
@media only screen and (width: 375px)   {
    {
        margin-top: -50%;
        background-size: cover;
        height: 115%;
        width: 145%;
        margin-left: -45%;
}
}

//s5
   @media only screen and (width: 360px)   {
    { 
        margin-top: -50%;
        background-size: cover;
        height: 115%;
        width: 145%;
        margin-left: -45%;
}
}

//really small mobile screens
@media only screen and (width: 320px)    {
    { 
        margin-top: -50%;
        background-size: cover;
        height: 115%;
        width: 145%;
        margin-left: -45%;
}
}
`
const Rain = styled.div`
background-image: url('https://gifimage.net/wp-content/uploads/2018/04/rain-transparent-gif-9.gif');
margin-top: -1%;
margin-left: 0%;
position: fixed;
z-index: -2;
background-size: 105%;
width: 100vw;
height: 105vw;
background-repeat: no-repeat;
display: block;
animation-name: rain;
animation-duration: 35s;
animation-fill-mode: forwards;
animation-timing-function: ease-out;  
@keyframes rain {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1
    }
  }
  //laptop
  @media only screen and (width: 1440px)   {
      { 
        // margin-top:1%;
        background-size: 115%;

      }
}

// ipad pro
@media only screen and (width: 1024px) and (height: 1366px){
    {
        // margin-top: 20%;
        background-size: cover;
        height: 115%;
        width: 115%;
        margin-left: -10%;
    }
}

//ipad
@media only screen and (width: 768px) {
 {
    // margin-top: 20%;
    background-size: cover;
    height: 115%;
    width: 115%;
    margin-left: -10%;
}
}

//iphone6+
@media only screen and (min-width: 412px) and (max-width: 425px)  {
    {
        background-size: cover;
        height: 115%;
        width: 145%;
        margin-left: -45%;
}
}

//iphone6, iphoneX
@media only screen and (width: 375px)   {
    {
        background-size: cover;
        height: 115%;
        width: 145%;
        margin-left: -45%;
}
}

//s5
   @media only screen and (width: 360px)   {
    { 
        background-size: cover;
        height: 115%;
        width: 145%;
        margin-left: -45%;
}
}
//really small mobile screens
@media only screen and (width: 320px)    {
    { 
        background-size: cover;
        height: 115%;
        width: 145%;
        margin-left: -45%;
}
}
`

const Child1 = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
background-size: 22%;
margin-top: 36.2%;
margin-left: 51.7%;
position: fixed;
z-index: -4;
height: 100%;
width: 100%;
animation: slide 4s linear 1;
animation-delay: 17s;
animation-fill-mode: forwards;

@keyframes slide {
    from { margin-left: 50%; }
   to { margin-left: -140%;  }
}

@media only screen and (width: 1440px)   {
    { 
      margin-top: 38.2%;

    }
    }

    // ipad pro
    @media only screen and (width: 1024px) and (height: 1366px){
        {
            margin-top: 84%;
            background-size: 47.5%;
            margin-left: 48%;
    
        }
}

//ipad
@media only screen and (width: 768px) {
 {
    margin-top: 82%;
    background-size: 49.5%;
    margin-left: 47.5%;

}
}

//iphone6+
@media only screen and (min-width: 412px) and (max-width: 425px){
    {
        margin-top: 122%;
        background-size: 53%;
        margin-left: 48%;
}
}

//iphone6, iphoneX
@media only screen and (width: 375px)   {
    {
        margin-top: 122%;
        background-size: 53%;
        margin-left: 48%;
}
}

//s5
   @media only screen and (width: 360px)   {
    {
        margin-top: 122%;
        background-size: 53%;
        margin-left: 48%;
}
}

//really small mobile screens
@media only screen and (width: 320px)    {
    { 
        margin-top: 122%;
        background-size: 53%;
        margin-left: 48%;
}
}
`
const Child2 = styled.div`
background-image: url(${camGirl2});
background-repeat: no-repeat;
background-size: 25%;
margin-top: 35%;
margin-left: 50%;
position: fixed;
z-index: -4;
height: 100%;
width: 100%;
animation: 1s disappear;
animation-fill-mode: forwards;
animation-delay: 16s;
visibility: visible;
}

@keyframes disappear {
99% {
  visibility: visible;
}
100% {
  visibility: hidden;
}
}
@media only screen and (width: 1440px)   {
    { 
      margin-top: 37%;

    }
}

// ipad pro
@media only screen and (width: 1024px) and (height: 1366px){
    {
        margin-top: 82%;
        background-size: 53%;
        margin-left: 45%;

    }
}

//ipad
@media only screen and (width: 768px) {
 {
    margin-top: 79%;
    background-size: 57%;
    margin-left: 43.5%;

}
}

//iphone6+
@media only screen and (min-width: 412px) and (max-width: 425px)  {
    {
        margin-top: 120%;
        background-size: 58%;
        margin-left: 45%;
}
}

//iphone6, iphoneX
@media only screen and (width: 375px)   {
    {
        margin-top: 120%;
        background-size: 58%;
        margin-left: 45%;
}
}

//s5
   @media only screen and (width: 360px)   {
    {
        margin-top: 120%;
        background-size: 58%;
        margin-left: 45%;
}
}
//really small mobile screens
@media only screen and (width: 320px)    {
    { 
        margin-top: 120%;
        background-size: 58%;
        margin-left: 45%;
}
}
`

const Reporter = styled.div`
background-image: url('https://i.ibb.co/5MG8S57/reporter.png');
margin-top: 34%;
margin-left: 32%;
position: fixed;
z-index: -4;
background-size: 20%;
width: 80vw;
height: 80vh;
background-repeat: no-repeat;
//laptop
@media only screen and (width: 1440px)   {
    { 
      margin-top: 36%;

    }
}

// ipad pro
@media only screen and (width: 1024px) and (height: 1366px){
    {
        margin-top: 82%;
        background-size: 40%;
        margin-left: 20%;

    }
}

//ipad
@media only screen and (width: 768px) {
 {
    margin-top: 82%;
    background-size: 40%;
    margin-left: 20%;

}
}

//iphone6+
@media only screen and (min-width: 412px) and (max-width: 425px) {
    {
    margin-top: 115%;
    background-size: 50%;
    margin-left: 6%;
}
}

//iphone6, iphoneX
@media only screen and (width: 375px)   {
    {
        margin-top: 115%;
    background-size: 50%;
    margin-left: 6%;
}
}

//s5
   @media only screen and (width: 360px)   {
    {
        margin-top: 115%;
        background-size: 50%;
        margin-left: 6%;
    }
}

//really small mobile screens
@media only screen and (width: 320px)    {
    { 
        margin-top: 115%;
        background-size: 50%;
        margin-left: 6%;
    }
}
`

const NextBtn = styled.div`

h1{
    color: black;
    // text-shadow: 1px 1px 1px white;
    font-size: 25px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    padding: 10px;
    width: 100vw;     
    text-align: center;
    margin-top: 5%;
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


//ipad pro
@media only screen and (width: 769px) and (max-width: 1079px)   {
        { 
            h1{
                margin-top: 15%;
                font-size: 30px;
            }
         }
}

//ipad
@media only screen and (max-width: 768px)   {
        { 
            h1{
                margin-top: 15%;
                font-size: 25px;
            }
         }
}

//iphone 6+ and big mobile phones
@media only screen and (min-width: 412px) and (max-width: 425px)  {
          { 
            h1{
                margin-top: 15%;
                font-size: 16px;       
              }
           }
}

//iphone 6
@media only screen and (width: 375px)   {
          { 
            h1{
                font-size: 16px;       
              }
           }
}

//s5
@media only screen and (width: 360px)   {
          {    
              h1{
                font-size: 16px;       

              }
           }
}

//really small mobile
@media only screen and (width: 320px)   {
          {    
              h1{
                font-size: 16px;       

              }
           }
}
`
class News extends Component {
    constructor() {
        super()
        this.state = {
            showWeather: true,
            girlStill1: true,
            girlRun: true,
        }
    }
    operation() {
        this.setState({
            showWeather: !this.state.showWeather,
        })
    }
    operation2() {
        this.setState({
            girlStill1: !this.state.girlStill1,

        })
    }
    operation3() {
        this.setState({
            girlRun: !this.state.girlRun,

        })
    }


    render() {
        return (
            <div>
                <Background>
                    </Background>
                    
                <Sky></Sky>

                <Reporter></Reporter>


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
                <GirlRun>
                    {() => this.operation3()}
                    {this.state.girlRun ?
                        <div>
                            <Child1></Child1>

                        </div>
                        : !null
                    }
                </GirlRun>
                <BothBtns>
                    <br/>
                    {/* <WeatherBtn>
                        <button onClick={() => this.operation()}>Weather</button>
                    </WeatherBtn> */}
                    {
                        this.state.showWeather ?
                            <div>
                                <Rain></Rain>
                                <Tornado></Tornado>
                            </div>
                            : null
                    }
                    {/* <RunBtn>
                        <button onClick={() => { this.operation2(); this.operation3(); }}>Run! </button>
                    </RunBtn> */}

                </BothBtns>
                             
                    <NextBtn> <h1> Then, she went on to shoot live News Television...  <br/>  
                    and after working 12 hour shifts through fires and disasters and hurricanes, <br/> 
                    she quickly realized that the News Industry was not for her.  <br/>
                    So she ran away! <br/>
                    <a href='/about'>Back </a> |
                    <a href='/ship'> Next Chapter</a> 
                    </h1> 
                    </NextBtn>
            </div>
        );
    }
}

export default News;