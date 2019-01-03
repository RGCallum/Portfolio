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
// background-color: rgba(0,0,0,.1);
height: 100vh;
color: white;
h1{
    font-size: 45px;
    font-weight: 800;
    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
        {
            font-size: 25px;
            margin-top: 1em;
            }
       }
}
h2{
    font-size: 25px;
    font-weight: 700;
    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
        {
            margin-top: 1em;
            font-size: 15px;
            // width: 80%;
            // text-align: center;

            }
       }
}
}
button{
    border-radius: 5px;
}
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

`

const HomeStyle = styled.div`
background-repeat: no-repeat;
position: absolute;
z-index: -100;
width: 100vw;
height: 100vw;
margin-top: -15em;
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-size: 400% 400%;
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
text-align: center;
@media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        margin-top: -25em;
        height: 170vh;
        width: 100vw;
        word-wrap: normal;
    }
   }
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
background-size: 80%;
position: fixed;
z-index: 100;
width: 100vw;
height: 100vw;
text-align: center;
margin-top: 2%;
margin-left: 10%;
animation: slide2 1s linear 1;
  
@keyframes slide2 {
  from { margin-left: -50%; }
  to { margin-left: -10% 0; }
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
animation: slide4 1s linear 1;
  
@keyframes slide4 {
  from { margin-top: 50%; }
  to { margin-top: 10% 0; }
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
animation: slide5 1s linear 1;
  
@keyframes slide5 {
  from { margin-top: -50%; }
  to { margin-top: -10% 0; }
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
class Home extends Component {
    render() {
        return (
            <div>                 <br />
                <br />
                <br />

                <SkillText>
                    {/* <h2>Home</h2> */}
                </SkillText>

                <Container>
                    <br />
                    <h1>
                    Rashaunda Guy-Callum
                    </h1>
                    
                    <h2>I create awesome things for your home and computer. <br /> To view my work or skills please click on the navbar on the top left. <br />
                    To read my story and learn more about me, click the button below.
                    <br />
                    <br />
                    <a href='/about'><button>My Story</button></a>
                    </h2>
                    <HomeStyle />
                    {/* <SkillWeb/> */}
                    {/* <SkillSoftware/> */}
                    {/* <SkillOther/> */}
                    {/* <SkillDesk/> */}

                    {/* <NextBtn>
                        <Link to="/resume"><button>Resume</button></Link>

                    </NextBtn> */}
                </Container>
            </div>

        );
    }
}


export default Home;