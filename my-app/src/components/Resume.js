import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/RGCallum.png';

const ResStyle = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
width: 100vh;
height: 100vh;
text-align: center;

`
class Resume extends Component {
    render() {
        return (
            <div>
                <br></br>
                <br></br>
              <a href='https://i.ibb.co/bm5G5Hw/RGCallum.png' download> <h1>Download Resume</h1>  </a> <ResStyle></ResStyle>
            </div>
        );
    }
}

export default Resume;