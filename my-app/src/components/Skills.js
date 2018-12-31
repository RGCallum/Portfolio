import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from '../images/Skills3.png';
import img2 from '../images/skillWebDev.png';
import img3 from '../images/skillSoftware.png';
import img4 from '../images/skillOther.png';
import img5 from '../images/skillDesk.png';


const Container = styled.div`
text-align: center;
h1{
    font-size: 2vw;
}
`

const SkillStyle = styled.div`
// background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-repeat: no-repeat;
background-size: 100%;
position: fixed;
z-index: -100;
width: 100vw;
height: 100vw;
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
const SkillWeb = styled.div`
background-image: url(${img2});
background-repeat: no-repeat;
background-size: 100%;
position: fixed;
z-index: 100;
width: 100vw;
height: 100vw;
text-align: center;
margin-top: 1%;
animation: slide2 1s linear 1;
  
@keyframes slide2 {
  from { margin-left: -50%; }
  to { margin-left: -10% 0; }
}
`
const SkillSoftware = styled.div`
background-image: url(${img3});
background-repeat: no-repeat;
background-size: 100%;
position: fixed;
z-index: 100;
width: 100vw;
height: 100vw;
text-align: center;
animation: slide4 1s linear 1;
  
@keyframes slide4 {
  from { margin-top: 50%; }
  to { margin-top: 10% 0; }
}
`
const SkillOther = styled.div`
background-image: url(${img4});
background-repeat: no-repeat;
background-size: 100%;
position: fixed;
z-index: 100;
width: 100vw;
height: 100vw;
text-align: center;
animation: slide5 1s linear 1;
  
@keyframes slide5 {
  from { margin-top: -50%; }
  to { margin-top: -10% 0; }
}

`
const SkillDesk = styled.div`
background-image: url(${img5});
background-repeat: no-repeat;
background-size: 100%;
position: fixed;
z-index: 100;
width: 100vw;
height: 100vw;
text-align: center;
animation: slide3 1s linear 1;
  
@keyframes slide3 {
  from { margin-left: 50%; }
  to { margin-left: 10% 0; }
}
`

const NextBtn = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 50px;
    position: relative;
    z-index: 1000;
    margin-left: 70%;
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
                    <br/>
                    <br/>
                    <br/>

                <Container>
                 <h1>Skills</h1> 

                <SkillStyle/>
                <SkillWeb/>
                <SkillSoftware/>
                <SkillOther/>
                <SkillDesk/>

                {/* <NextBtn>
                        <Link to="/resume"><button>Resume</button></Link>

                    </NextBtn> */}
                </Container>
            </div>
            
        );
    }
}

export default Skills;