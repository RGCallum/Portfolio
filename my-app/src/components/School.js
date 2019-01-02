import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/classroom.png';
import { Link } from "react-router-dom";


const Container = styled.div`
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-size: 400% 400%;
height: 100vh;

color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
text-align: center;

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


const Classroom = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: 80%;
margin: auto;
margin-top: 15%;
    position: fixed;
    z-index: 100;
    width: 80vw;
    height: 100vw;
    animation: slide3 1s linear 1;
  
    @keyframes slide3 {
      from { margin-top: 50%; }
      to { margin-top: 10% 0; }
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



class School extends Component {
  
    render() {
        return (
            <div>
                <Container>
                    <Classroom />
                    <br/>
                    <br/>

                    So she decided to go back to school and learn about web and app development.  She learned all about CSS, Javascript, Python, React, just to name a few and really enjoyed working on challenging projects. She met many like minded classmates who laughed with her on the best days and helped her fight through the rough ones. 

                    <NextBtn>
                    <a href='/scene'><button>Back</button></a> 
                    <br/>

                        <Link to="/desk1"><button>Next Chapter</button></Link>

                    </NextBtn>
                </Container>
            </div>
        );
    }
}

export default School;