import React, { Component } from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import img from '../images/Skills3.png';



const SkillText = styled.div`


`

const Container = styled.div`
text-align: center;
// background-color: rgba(0,0,0,.9);
height: 100vh;
color: white;
width: 100vw;

h1{
    font-size: 45px;
    font-weight: 800;
    // font-weight: 400;

    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
        {
            font-size: 25px;
            margin-top: 1em;
            width: 100vw;

            }
       }
}
h2{
    background-color: rgba(0,0,0,.5);
    padding: 10px;
    font-size: 25px;
    font-weight: 700;
    font-weight: 400;
    background-size: cover;

    @media only screen and (min-device-width: 320px) and (max-width: 480px) {
        {
            margin-top: 1em;
            font-size: 15px;
            background-position: cover;

            }
       }
}
}
button{
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    padding: 5px 10px 5px 10px;
    margin: 15px;
    background-image: linear-gradient( to bottom, #bcc6cc, #eee, #bcc6cc);;
    font-size: 16px;
    color: black;
    :hover {
        background-color: #eeeeee;
        border-radius: 15px; 
        color: #E73C7E;
        font-weight: 600;
        box-shadow: 1px 1px 10px;  
      }
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
margin-top: -15em;
margin-left: -7%;
background-image: url('https://images.unsplash.com/photo-1515704089429-fd06e6668458?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80');
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
text-align: center;

        text-align: center;
        background-size: cover;
        background-position: center;
        height: 130vh;
        width: 110vw;
        word-wrap: normal;


   animation: move 60s infinite;

@keyframes move{
    50%{
        transform: scale(1.1);
        
        
    }
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
                    <h2>
                        <h1>Rashaunda Guy-Callum</h1>
                        I create awesome web apps and innovative technology. <br /> To view my work, skills or resume please click on the menu above. <br />
                        To learn a bit more about me and check out my work, click the buttons below.
                        <br />
                        <a href='/about'><button>My Story</button></a>                         
                        <a href='/portfolio'><button>My Work</button></a> 

                    </h2>
                    <HomeStyle />


                    {/* <NextBtn>
                        <Link to="/resume"><button>Resume</button></Link>

                    </NextBtn> */}
                </Container>
            </div>

        );
    }
}


export default Home;