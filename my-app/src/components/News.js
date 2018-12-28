import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/StreetNews2.png';
import camGirl from '../images/camGirlReporter.png';


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

const Tornado = styled.div`
    margin-top: -75%;
    position: fixed;
    z-index: -200;
    margin-left: 5%;
    height: 130vw;
    width: 95vw;
    // border: 3px solid black;
    background-image: url('http://bestanimations.com/Nature/tornado-animated-gif-2.gif');
    background-repeat: no-repeat;
    background-size: cover;
//     margin-left: 100%;
//     animation: slide3 40s linear infinite;
//     @keyframes slide3 {
//     from { margin-left: 100%; }
//    to { margin-left: -110%;  }
// }

`
const Ambulance = styled.div`
position: absolute;
z-index: 200;
margin-top: 27%;
margin-left: 50%;
background-size: 100%;
animation: slide4 10s linear infinite;
@keyframes slide4 {
from { margin-left: -100%; }
to { margin-left: 150%;  }
}
`

const Child = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
background-size: 60%;
margin-top: 65%;
margin-left: 65%;
position: absolute;
z-index: 100;
height: 100%;
width: 100%;
`
const Reporter = styled.div`

`


class News extends Component {
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
                    <Ambulance>
                    <img src="https://media.giphy.com/media/Bp1hRvzni1hjyIoJpv/giphy.gif" alt="Ambulance"/>
                    </Ambulance>
                    <Reporter></Reporter>
                        <Child></Child>

<div>
                            <Tornado>
                            {/* <img src="http://bestanimations.com/Nature/tornado-animated-gif-2.gif" alt="Tornado" /> */}
                            </Tornado>
                            </div>

            </div>
        );
    }
}

export default News;