import React from 'react';
import Coverflow from 'react-coverflow';
import styled from "styled-components";
import { Link } from "react-router-dom";

var fn = function () {
    /* do your action */
}

const Container = styled.div`
text-align: center;
font-size: 15px;
`
const NextBtn = styled.div`
button{
    display: flex ;
    justify-content: center ;
    height: 50px;
    position: relative;
    z-index: 1000;
    margin-left: 50%;
    margin-top: 0%;
    border-radius: 15px;
    font-size: 30px;   
}
a:link{
    text-decoration: none;
}

`

export default class Portfolio extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            active: 0
        };
    }

    render() {
        return (
            <div>
                
                <Container>
                    <h1>Portfolio</h1>
                    <h2>Click thumbnail to view Apps</h2>
                
                
                <Coverflow
                    width={560}
                    height={680}
                    displayQuantityOfSide={1.4}
                    navigation={true}
                    enableHeading={true}
                    active={this.state.active}     
                >

                    <div
                        onClick={() => fn()}
                        onKeyDown={() => fn()}
                        role="menuitem"
                        tabIndex="0"
                    >
                    {/* Scroll or click Next button to view my work */}
                    </div>
                    <img src='https://i.ibb.co/ZWD3mL4/sceneitweb.png' alt='SceneIt Pictures Interactive Website' data-action="https://sceneitpix.com" /> 
                    <img src='https://i.ibb.co/s3FcP6n/Major-Keys.png' alt='Major Keys Javacript Trivia Game' data-action="https://majorkeys.netlify.com" />
                    <img src='https://i.ibb.co/wY2FYNY/Callum-Ent.png' alt='Callum Enterprise website' data-action="https://callumenterprise.com" />
                    <img src='https://i.ibb.co/5RwrNpJ/CCXMobile.png' alt='Social Media App for Creative Freelancers' data-action="https://creative-freedom.herokuapp.com"/>
                    <img src='https://i.ibb.co/931K29J/Nobu.png' alt='Independent Filmmaker Database App' data-action="https://nobu-filmmakers.herokuapp.com" />
                    <img src='https://i.ibb.co/w0XPx52/PicList2.png' alt='Event Management Database App' data-action="https://piclist.herokuapp.com" />
                    <img src='https://i.ibb.co/SrR50Xb/hhgttgweb.png' alt="Hitchhiker's Guide to The Galaxy Fansite" data-action="https://hitchhiker42.netlify.com" />
                    <img src='https://i.ibb.co/F5WT0jc/Schmalculator.png' alt='Javascript Calculator' data-action="https://schmalculator.netlify.com" />
                    {/* <img src='images/.png' alt='two' data-action="http://"/>
              <img src='images/.png' alt='three' data-action="https://"/>
              <img src='images/.png' alt='four' data-action="http://"/> */}
               
                </Coverflow>
                <NextBtn>
                        <Link to="/Skills"><button>Skills</button></Link>

                    </NextBtn>
                </Container>
            </div>
        );
    }


};



