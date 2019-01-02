import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/StreetNews2.png';
import img2 from '../images/sky2.jpg';
import camGirl from '../images/camGirlRunSteadyReverse.gif';
import camGirl2 from '../images/camGirlStillReverse.png';
import { Link } from "react-router-dom";


const Background = styled.div`
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
position: absolute;
z-index: -100;
  width: 100vw;
  margin: 0;
  margin-top: 0%;
  text-align: center;
  height: 100vw;

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
button{
    margin-top 0%;
    width: 100px;
    height: 50px;
    position: fixed;
    z-index: 1000;
}
`
const GirlRun = styled.div`
button{
    margin-top 10%;
    width: 100px;
    height: 50px;
    position: fixed;
    z-index: 1000;
}
`
const Sky = styled.div`
color: red;
font-size: 45px;
background-image: url(${img2});
background-size: contain;
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
    margin-top: -35%;
    position: fixed;
    z-index: -180;
    margin-left: 0%;
    height: 100vw;
    width: 100vw;
    // border: 3px solid black;
    background-image: url('https://data.whicdn.com/images/308544314/original.gif');
    background-repeat: no-repeat;
    background-size: cover;
    display: block;


`
const Rain = styled.div`
background-image: url('https://gifimage.net/wp-content/uploads/2018/04/rain-transparent-gif-9.gif');
margin-top: -3%;
margin-left: 0%;
position: absolute;
z-index: 2;
background-size: 115%;
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
display: block;
`

const Child1 = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
background-size: 22%;
margin-top: 36.2%;
margin-left: 51.7%;
position: absolute;
z-index: -4;
height: 100%;
width: 100%;
animation: slide 5s linear 1;
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
position: absolute;
z-index: -4;
height: 100%;
width: 100%;
`

const Reporter = styled.div`
background-image: url('https://i.ibb.co/5MG8S57/reporter.png');
margin-top: 34%;
margin-left: 32%;
position: absolute;
z-index: -4;
background-size: 20%;
width: 80vw;
height: 80vh;
background-repeat: no-repeat;

`

const NextBtn = styled.div`
button{
    position: relative;
    z-index: 1000;
    border-radius: 9px;
    font-size: 15px;  
margin-top: -6em;
margin-left: 75vw;
background-color: rgba(255, 255, 255, 0.619);
`
class News extends Component {
    constructor() {
        super()
        this.state = {
            showWeather: false,
            girlStill1: true,
            girlRun: false,
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
                <Background><br/><br/><br/><br/>                  
                    <NextBtn>Then, she figured she try shooting live News Television...  <br/>  
                    After working 12 hour shifts through fires and disasters and hurricanes, she quickly realized that the News Industry was not for her.  
                    <a href='/'><button>Back</button></a> 
                    <Link to="/ship"><button>Next Chapter</button></Link>
                    </NextBtn>
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
                    <WeatherBtn>
                        <button onClick={() => this.operation()}>Hurricane</button>
                    </WeatherBtn>
                    {
                        this.state.showWeather ?
                            <div>
                                <Rain></Rain>
                                <Tornado></Tornado>
                            </div>
                            : null
                    }
                    <RunBtn>
                        <button onClick={() => { this.operation2(); this.operation3(); }}>Run! </button>
                    </RunBtn>

                </BothBtns>
            </div>
        );
    }
}

export default News;