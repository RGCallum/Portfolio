import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/SIPDeskR.png';
import img2 from '../images/SIPBackdropL.png';
import { Link } from "react-router-dom";


const Container = styled.div`
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-size: 400% 400%;
height: 100vh;
animation: Gradient 15s ease infinite;
@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}


`
const FlashBtn = styled.div`
button{
    background: #f49;
    width: 100px;
    height: 100px;
    margin: 50px auto;
    color: white;
}
`

const People = styled.div`
color: red;
font-size: 45px;
background-image: url(${img2});
position: fixed;
z-index: 100;
  width: 100%;
  margin-top: 0;
  height: 100vh;
  animation: slide2 2s linear 1;
  
  @keyframes slide2 {
    from { margin-left: -50%; }
    to { margin-left: -10% 0; }
}
`
const SceneItDesk = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
    margin-top: 0%;
    position: fixed;
    z-index: 100;
    margin-left: 0%;
    width: 100%;
    height: 100vw;
    animation: slide3 2s linear 1;
  
    @keyframes slide3 {
      from { margin-left: 50%; }
      to { margin-left: 10% 0; }
  }

`

const NextBtn = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 40px;
    font-size: 15px;   
    position: absolute;
    z-index: 1000;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    margin: auto;
    margin-top: 1em;
margin-left: 75vw;
background-color: rgba(255, 255, 255, 0.619);
}
a:link{
    text-decoration: none;
}

`



class SceneItPix extends Component {


    render() {
        return (
            <div>
                <Container>
                    <People />
                    <SceneItDesk />
                    <NextBtn>
                        <Link to="/school"><button>Next Chapter</button></Link>

                    </NextBtn>
                    <FlashBtn>
                    </FlashBtn>
                </Container>
            </div>
        );
    }
}

export default SceneItPix;