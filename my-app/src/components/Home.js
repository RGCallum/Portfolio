import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/streetBkgd3.jpg';
import camGirl from '../images/camGirlRunning.gif';

const Container = styled.div`
color: red;
font-size: 45px;
background-image: url(${img});
position: fixed;
z-index: -100;
repeat 0 0;
  width: 100%;
  margin: 0;
  margin-top: -5%;
  text-align: center;
  height: 100vw;
  box-sizing: border-box;
  animation: slide2 120s linear infinite;

  @keyframes slide2 {
    from { background-position: 0 0; }
    to { background-position: -8000px 0; }
}
`

const Bus = styled.div`
    margin-top: 40%;
    position: absolute;
    z-index: 200;
    margin-left: 100%;
    animation: slide3 40s linear infinite;
    @keyframes slide3 {
    from { margin-left: 100%; }
   to { margin-left: -110%;  }
}

`
const Birds = styled.div`
position: absolute;
z-index: 200;
margin-top: -5%;
margin-left: 100%;
animation: slide4 20s linear infinite;
@keyframes slide4 {
from { margin-left: 150%; }
to { margin-left: -110%;  }
}
`

const Child = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
background-size: 17%;
margin-top: 36%;
position: absolute;
z-index: 100;
height: 100%;
width: 100%;
margin-left: -100%;
animation: slide 25s linear infinite;

@keyframes slide {
    from { margin-left: -10%; }
   to { margin-left: 110%;  }
}
`


class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div>
                        <h1>
                            Home
                        </h1>
                    </div>
                </Container>
                    <Birds>
                    <img src="https://vignette.wikia.nocookie.net/animaljam/images/9/93/Tumblr_ms4th0h51A1sfk0ybo1_500.gif/revision/latest?cb=20160416200533" alt="birds"/>
                    </Birds>
                        <Child/>
                            <Bus>
                                <img src="https://i.ibb.co/qrWcHwt/bus.png" alt="bus" />
                            </Bus>
            </div>
        );
    }
}

export default Home;