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
  h1{
      
    color: black;
    text-shadow: 1px 1px 1px white;
    font-size: 25px;
    background-color: rgba(255, 255, 255, 0.4);
    z-index: 1000;
    border-radius: 15px;
        border: inset rgb(228, 228, 228)2px;
        padding: 10px;
        width: 100vw;
        
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
animation: slide 5s linear 1;
animation-delay: 17s;
animation-fill-mode: forwards;

@keyframes slide {
    from { margin-left: 50%; }
   to { margin-left: -140%;  }
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

`

const NextBtn = styled.div`

h1{
      
    color: black;
    font-size: 25px;
    background-color: rgba(255, 255, 255, 0.6);
    z-index: 1000;
    border-radius: 15px;
        border: inset rgb(228, 228, 228)2px;
        padding: 10px;
        width: 100vw;
        text-align: center;
        margin-top: 2em;
        // margin-left: 25vw;    

}
//really small mobile screens
@media only screen and (min-width: 320px)    {
        h1{
            margin-top: 10.5em;
            background-color: #bdd4e7;
            background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
            font-size: 15px;
            color: white;
            width:100vw;

        }
        }
   }
//s5
   @media only screen and (min-width: 360px)   {
    h1{
        margin-top: 12em;
        background-color: #bdd4e7;
        background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
        
        font-size: 15px;
        color: white;
        width:100vw;

    }
    }
}
//iphone6, iphoneX
@media only screen and (min-width: 375px)   {
    h1{
        margin-top: 13em;
        background-color: #bdd4e7;
        background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);  
        font-size: 15px;
        color: white;
        width:100vw;
    }
    }
}

//iphone6+
@media only screen and (min-width: 414px)   {
    h1{
        margin-top: 14em;
        background-color: #bdd4e7;
        background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);    
        font-size: 15px;
        color: white;
        width:100vw;
    }
    }
}


   //ipad
   @media only screen and (min-width: 768px) {
    h1{
        margin-top: 27em;
        background-color: #bdd4e7;
        background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);
        
        font-size: 15px;
        color: white;
        width:100vw;
    }
    }
}

// ipad pro
@media only screen and (min-width: 1024px) and (min-height: 1366px){
    h1{
        margin-top: 16em;
        background-color: #bdd4e7;
        background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);      
        font-size: 35px;
        color: white;
        width:100vw;
    }
    }
}

@media only screen and (width: 1024px) and (height: 768px){
    {
        h1{
            margin-top: 22em;
            background-color: #bdd4e7;
            background-image: linear-gradient(315deg, #bdd4e7 0%, #8693ab 74%);      
            font-size: 25px;
            color: white;
            width:100vw;
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
                    <a href='/about'>Back</a> <br/>
                    <a href='/ship'>Next Chapter</a> 
                    </h1> 
                    </NextBtn>
            </div>
        );
    }
}

export default News;