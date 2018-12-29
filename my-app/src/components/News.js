import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/StreetNews2.png';
import img2 from '../images/sky2.jpg';
import camGirl from '../images/camGirlRunSteadyReverse.gif';
import camGirl2 from '../images/camGirlStillReverse.png';



const Container = styled.div`
color: red;
font-size: 45px;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 80%;
position: fixed;
z-index: -100;
  width: 145vw;
  margin: 0;
  margin-top: -5%;
  margin-left: -15%;
  text-align: center;
  height: 100vw;

`
const WeatherBtn = styled.div`
button{
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
position: fixed;
z-index: -200;
repeat 0 0;
  width: 100%;
  margin: 0;
  height: 90vh;
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
    margin-left: 5%;
    height: 90vw;
    width: 95vw;
    // border: 3px solid black;
    background-image: url('https://data.whicdn.com/images/308544314/original.gif');
    background-repeat: no-repeat;
    background-size: cover;
    display: block;


`
const Rain = styled.div`
background-image: url('https://gifimage.net/wp-content/uploads/2018/04/rain-transparent-gif-9.gif');
margin-top: 0%;
margin-left: 0%;
position: absolute;
z-index: 100;
background-size: 115%;
width: 100vw;
height: 100vh;
background-repeat: no-repeat;
display: block;
`

const Child1 = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
background-size: 20%;
margin-top: 38%;
margin-left: 50%;
position: absolute;
z-index: -100;
height: 100%;
width: 100%;
`
const Child2 = styled.div`
background-image: url(${camGirl2});
background-repeat: no-repeat;
background-size: 25%;
margin-top: 35%;
margin-left: 48%;
position: absolute;
z-index: -100;
height: 100%;
width: 100%;
`

const Reporter = styled.div`
background-image: url('https://i.ibb.co/5MG8S57/reporter.png');
margin-top: 35%;
margin-left: 32%;
position: absolute;
z-index: 2;
background-size: 20%;
width: 80vw;
height: 80vh;
background-repeat: no-repeat;

`


class News extends Component {
    constructor() {
        super()
        this.state = {
            showWeather: false
        }
    }
    operation() {
        this.setState({
            showWeather: !this.state.showWeather
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <div>
                        <h1>
                            News
                        </h1>
                    </div>

                </Container>
                <Sky></Sky>

                <Reporter></Reporter>
                {/* <Child1></Child1> */}

                <Child2></Child2>
                <WeatherBtn>
                <button onClick={() => this.operation()}>Change Weather</button>
                </WeatherBtn>
                {
                    this.state.showWeather ?
                        <div>
                            <Rain></Rain>
                            <Tornado></Tornado>
                        </div>
                        : null
                }

            </div>
        );
    }
}

export default News;