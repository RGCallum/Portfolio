import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/classroom.png';
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


const Classroom = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: 80%;
margin-left: 25%;
margin-top: 5%;
    position: fixed;
    z-index: 100;
    width: 80vw;
    height: 100vw;
    animation: slide3 2s linear 1;
  
    @keyframes slide3 {
      from { margin-top: 50%; }
      to { margin-top: 10% 0; }
  }

`

const NextBtn = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 50px;
    position: relative;
    z-index: 1000;
    margin-left: 50%;
    border-radius: 15px;
    font-size: 30px;   
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
                    <NextBtn>
                        <Link to="/desk1"><button>Next Chapter</button></Link>

                    </NextBtn>

                </Container>
            </div>
        );
    }
}

export default School;