import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/streetBkgd.jpg';
import camGirl from '../images/camGirlRunning.gif';

const Container = styled.div`
color: red;
font-size: 45px;
background-image: url(${img});
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100vw;
position: fixed;
z-index: -100;
`
const Child = styled.div`
background-image: url(${camGirl});
background-repeat: no-repeat;
position: absolute;
z-index: 100;
height: 100vh;
width: 100vw;
// margin-left: -100%;
animation: slide 10s linear 1;

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