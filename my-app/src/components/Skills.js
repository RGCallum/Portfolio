import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/Skills3.png';
import { Link } from "react-router-dom";


const Container = styled.div`
text-align: center;
`

const SkillStyle = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: 100%;
position: fixed;
z-index: -100;
width: 100vw;
height: 100vw;
text-align: center;
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
class Skills extends Component {
    render() {
        return (
            <div>
                <Container>
                 <h1>Skills</h1> 

                <SkillStyle></SkillStyle>
                <NextBtn>
                        <Link to="/resume"><button>Resume</button></Link>

                    </NextBtn>
                </Container>
            </div>
            
        );
    }
}

export default Skills;