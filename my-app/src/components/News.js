import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/StreetNews2.png';
import camGirl from '../images/camGirlReporter.png';

const Container = styled.div`
color: red;
font-size: 45px;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 70%;
position: fixed;
z-index: -100;
  width: 145vw;
  margin: 0;
  margin-top: -5%;
  text-align: center;
  height: 100vw;

`

const Fire = styled.div`
    margin-top: 30%;
    position: absolute;
    z-index: -200;
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
background-size: 40%;
margin-top: 30%;
margin-left: 30%;
position: absolute;
z-index: 100;
height: 100%;
width: 100%;

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
                    <Birds>
                    <img src="https://vignette.wikia.nocookie.net/animaljam/images/9/93/Tumblr_ms4th0h51A1sfk0ybo1_500.gif/revision/latest?cb=20160416200533" alt="birds"/>
                    </Birds>
                        <Child/>
                            <Fire>
                                <img src="https://i.gifer.com/ODku.gif" alt="Fire" />
                            </Fire>
            </div>
        );
    }
}

export default News;