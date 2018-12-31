import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/Skills3.png';

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
class Skills extends Component {
    render() {
        return (
            <div>
                <Container>
                 <h1>Skills</h1> 

                <SkillStyle></SkillStyle>
                </Container>
            </div>
            
        );
    }
}

export default Skills;