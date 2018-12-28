import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/streetBkgd.jpg';
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
  animation: slide2 80s linear infinite;

  @keyframes slide2 {
    from { background-position: 0 0; }
    to { background-position: -8000px 0; }
}
`
const Child = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
background-size: 20%;
margin-top: 28%;
position: absolute;
z-index: 100;
height: 100%;
width: 100%;
// margin-left: -100%;
// animation: slide 20s linear infinite;

@keyframes slide {
    from { margin-left: -100%; }
   to { margin-left: 200%;  }
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
<Child>
    
</Child>
                       
                        <img src='../images/camGirlRunning.gif' alt='' />

                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;