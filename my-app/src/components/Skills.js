import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from '../images/Skills3.png';
import img2 from '../images/skillWebDev.png';
import img3 from '../images/skillSoftware.png';
import img4 from '../images/skillOther.png';
import img5 from '../images/skillDesk.png';

const SkillText = styled.div`
h2{
    color: white;
    text-shadow: 1px 1px 1px black;
    text-align: center;
    font-size: 3vw;
    
    animation: fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    @keyframes fade-in {
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }
}
`

const Container = styled.div`
text-align: center;
background-color: rgba(0,0,0,.1);
height: 100vh;

`

const SkillStyle = styled.div`
background-image: url('https://images.unsplash.com/photo-1428452932365-4e7e1c4b0987?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
background-repeat: no-repeat;
background-size: cover;
position: absolute;
z-index: -100;
width: 100vw;
height: 130vh;
margin-top: -35em;
text-align: center;
@media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        margin-top: -30em;

        }
   }

   @media only screen and (min-device-width: 2560px) {
    {
        margin-top: -35em;
        background-size: cover;
    }
   }
`
const SkillWeb = styled.div`
background-image: url(${img2});
background-repeat: no-repeat;
background-size: 80%;
position: fixed;
z-index: 100;
width: 100vw;
height: 100vw;
text-align: center;
margin-top: 2%;
margin-left: 10%;
animation: slide2 .4s linear 1;
  
@keyframes slide2 {
  from { margin-left: -50%; }
  to { margin-left: -10% 0; }
}
@media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        background-size: 160vw;
        width: 160vw;
        margin-top: 10%;
        margin-left: -33%;
        }
   }
`
const SkillSoftware = styled.div`
background-image: url(${img3});
background-repeat: no-repeat;
background-size: 80%;
position: fixed;
z-index: 100;
width: 100vw;
height: 100vw;
margin-top: -4%;
margin-left: 8%;
text-align: center;
animation: slide4 .5s linear 1;
  
@keyframes slide4 {
  from { margin-top: 50%; }
  to { margin-top: 10% 0; }
}
@media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        background-size: 160vw;
        width: 160vw;
        margin-top: 25%;
        margin-left: -2%;
        }
   }
`
const SkillOther = styled.div`
background-image: url(${img4});
background-repeat: no-repeat;
background-size: 80%;
position: fixed;
z-index: 100;
width: 100vw;
height: 100vw;
margin-top: -4%;
margin-left: 12%;

text-align: center;
animation: slide5 .5s linear 1;
  
@keyframes slide5 {
  from { margin-top: -50%; }
  to { margin-top: -10% 0; }
}

@media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        background-size: 160vw;
        width: 160vw;
        margin-top: 50%;
        margin-left: -58%;
        }
   }
`
const SkillDesk = styled.div`
// background-image: url(${img5});
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
            <div>                 <br/>
                 <br/>
                 <br/>

                    <SkillText>
                    <h2>Skills</h2> 
                    </SkillText>

                <Container>

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