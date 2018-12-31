import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/streetBkgd3.jpg';
import camGirl from '../images/camGirlRunSteady.gif';
import { Link } from "react-router-dom";

const Background = styled.div`
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
    margin-top: 38%;
    position: fixed;
    z-index: 200;
    margin-left: 100%;
    animation: slide3 15s linear infinite;
    @keyframes slide3 {
    from { margin-left: 100%; }
   to { margin-left: -110%;  }
}

`
const Birds = styled.div`
position: fixed;
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
background-size: 11%;
margin-top: 37%;
position: fixed;
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
const NextBtn = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 40px;
    font-size: 20px;   
    position: relative;
    z-index: 1000;
    margin-left: 50%;
    border-radius: 15px;
}
a:link{
    text-decoration: none;
}

`


class Home extends Component {
    render() {
        return (
            <div>
                <Background></Background>
                    <Birds>
                    <img src="https://vignette.wikia.nocookie.net/animaljam/images/9/93/Tumblr_ms4th0h51A1sfk0ybo1_500.gif/revision/latest?cb=20160416200533" alt="birds"/>
                    </Birds>
                        <Child/>
                            <Bus>
                                <img src="https://media.giphy.com/media/1k0AlwzpknA4TeDERT/giphy.gif" alt="bus" />
                            </Bus>
                            <NextBtn>
                            <Link to="/news"><button>Next Chapter</button></Link> 
                            </NextBtn>
            </div>
        );
    }
}

export default Home;