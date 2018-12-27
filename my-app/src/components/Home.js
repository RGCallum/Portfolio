import React, { Component } from 'react';
import styled from "styled-components";

const Container = styled.div`
color: red;
font-size: 45px;
background-image: url('../images/streetBkgd.jpg');
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
width: 100vw;
position: absolute;
z-index: -100;
`

class Home extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div>
                        
                        
                        <h1>
                            Home
                        <img src='../images/camGirlRunning.gif' alt='' />
                        </h1>
                    </div>
                </Container>
            </div>
        );
    }
}

export default Home;