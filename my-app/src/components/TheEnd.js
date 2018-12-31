import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/cartoonBkgdEnd.svg';
import img2 from '../images/confetti.gif';
import sprite from '../images/spriteStand.png';
import spriteWin from '../images/Win.gif';
import { Link } from "react-router-dom";

const Background = styled.div`
color: red;
font-size: 45px;
background-image: url(${img});
background-repeat: no-repeat;
background-size: 100%;
position: fixed;
z-index: -100;
  width: 115vw;
  height: 100vh;
  margin: 0;
  margin-top: -5%;
  margin-left: -15%;
  text-align: center;
  height: 100vw;

`


const BothBtns = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 50px;
    position: relative;
    z-index: 1000;
    margin-left: 50%;
    border-radius: 15px;
    font-size: 15px;  
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    margin: auto;
background-color: rgba(255, 255, 255, 0.8);
    
}
a:link{
    text-decoration: none;
}

`
const JumpBtn = styled.div`
button{
    width: 100px;
    margin-top: .5em;
}
`
const ConfettiBtn = styled.div`
button{
    width: 150px;
    margin-top: .5em;
}
`
const GirlStill1 = styled.div`
button{
    margin-top 10%;
    width: 100px;
    height: 50px;
    position: fixed;
    z-index: 1000;
}
`
const GirlJump = styled.div`
button{
    margin-top 20%;
    width: 100px;
    height: 50px;
    position: fixed;
    z-index: 1000;
}
`
const Confetti = styled.div`
    margin-top: -5%;
    position: fixed;
    z-index: 2;
    margin-left: 0%;
    height: 90vw;
    width: 100vw;
    background-image: url(${img2});
    background-repeat: no-repeat;
    background-size: cover;
    display: block;


`
const Child1 = styled.div`
background-image: url(${sprite});
background-repeat: no-repeat;
background-size: 22%;
margin-top: 40.2%;
margin-left: 49.7%;
position: absolute;
z-index: 3;
height: 100%;
width: 100%;

`
const Child2 = styled.div`
background-image: url(${spriteWin});
background-repeat: no-repeat;
background-size: 20%;
margin-top: 41%;
margin-left:51%;
position: absolute;
z-index: 3;
height: 100%;
width: 100%;
`
const NextBtn = styled.div`
button{
margin-top: -6.5em;
margin-left: 75vw;
background-color: rgba(255, 255, 255, 0.619);
`
class TheEnd extends Component {
    constructor() {
        super()
        this.state = {
            showConfetti: false,
            girlStill1: false,
            girlJump: true,
        }
    }
    operation() {
        this.setState({
            showConfetti: !this.state.showConfetti,
        })
    }
    operation2() {
        this.setState({
            girlStill1: !this.state.girlStill1,

        })
    }
    operation3() {
        this.setState({
            girlJump: !this.state.girlJump,

        })
    }
    render() {
        return (
            <div>
                                <Background></Background>

               <GirlStill1>
                    {() => this.operation2()}

                    {
                        this.state.girlStill1 ?
                            <div>
                                <Child2></Child2>
                            </div>
                            : null
                    }
                </GirlStill1>
                <GirlJump>
                    {() => this.operation3()}
                    {this.state.girlJump ?
                        <div>
                            <Child1></Child1>

                        </div>
                        : !null
                    }
                </GirlJump>
                <BothBtns>
                    <ConfettiBtn>
                        <button onClick={() => this.operation()}>Confetti</button>
                    </ConfettiBtn>
                    {
                        this.state.showConfetti ?
                            <div>
                                <Confetti></Confetti>
                            </div>
                            : null
                    }
                    <JumpBtn>
                        <button onClick={() => { this.operation2(); this.operation3(); }}>Jump! </button>
                    </JumpBtn>
                    <NextBtn>
                    <Link to="/portfolio"><button>Portfolio</button></Link> 
                    </NextBtn>

                </BothBtns>
            </div>
        );
    }
}

export default TheEnd;