import React from 'react';
import Coverflow from 'react-coverflow';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyleRoot } from 'radium';

var fn = function () {
    /* do your action */
}

const Container = styled.div`
text-align: center;
font-size: 15px;
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
color: white;
text-shadow: 1px 1px 1px black;
h1{
    font-size: 45px;
font-weight: 100;

}
h2{
    text-align: center
    background-color: rgba(0, 0, 0, 0.509);
    padding: 10px;
    font-weight: 100;
    font-size: 2vw;
    
}

background-size: 400% 400%;
img{
    width: 100%;
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

const ContainerStyle = styled.div`
// margin-top: -5em;
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
                    <br />
                    <h1>Portfolio</h1>
                    <h3>Click thumbnail to view Apps</h3>

                    <ContainerStyle>
                        <Coverflow
                            width={560}
                            height={830}
                            displayQuantityOfSide={.8}
                            navigation={true}
                            enableHeading={false}
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

                            <div>
                                <img src='https://i.ibb.co/ZWD3mL4/sceneitweb.png' alt='SceneIt Pictures Interactive Website: HTML|CSS|JS' data-action="https://sceneitpix.com" />
                                <h2> SceneIt Pictures Interactive Website: <br /> created with: HTML | CSS | JS </h2>
                            </div>

                            <div>
                                <img src='https://i.ibb.co/s3FcP6n/Major-Keys.png' alt='Major Keys Javacript Trivia Game: HTML|CSS|JS' data-action="https://majorkeys.netlify.com" />
                                <h2>  Major Keys Javacript Trivia Game <br /> created with: HTML | CSS | JS  </h2>
                            </div>

                            <div>
                                <img src='https://i.ibb.co/wY2FYNY/Callum-Ent.png' alt='Callum Enterprise website: HTML|CSS|JS' data-action="https://callumenterprise.com" />
                                <h2> Callum Enterprise website  <br /> created with: HTML | CSS | JS </h2>

                            </div>

                            <div>
                                <img src='https://i.ibb.co/DKNZsX8/CCXMobile2.png' alt='Social Media Network for Creative Freelancers: JS|Python|React|Django|SQL' data-action="https://creative-freedom.herokuapp.com" />
                                <h2> Social Media Network for Creative Freelancers <br /> created with: JS | Python | React | Django | SQL </h2>
                            </div>

                            <div>
                                <img src='https://i.ibb.co/931K29J/Nobu.png' alt='Independent Filmmaker Database: JS|MongoDB|Express|React|Node' data-action="https://nobu-filmmakers.herokuapp.com" />
                                <h2> Independent Filmmaker Database <br /> created with: JS | MongoDB | Express | React | Node </h2>
                            </div>

                            <div>
                                <img src='https://i.ibb.co/w0XPx52/PicList2.png' alt='Event Management Database: JS|MongoDB|Express|Node' data-action="https://piclist.herokuapp.com" />
                                <h2> PicList Employee Management Database  <br /> created with: JS | MongoDB | Express | React | Node </h2>
                            </div>

                            <div>
                                <img src='https://i.ibb.co/HFKctrf/hhgttgweb.png' alt="Hitchhiker's Guide to The Galaxy Fansite: HTML|CSS|JS" data-action="https://hitchhiker42.netlify.com" />
                                <h2> Social Media Network for Creative Freelancers  <br /> created with: HTML | CSS | JS</h2>
                            </div>

                            <div>
                                <img src='https://i.ibb.co/F5WT0jc/Schmalculator.png' alt='Javascript Calculator: HTML|CSS|JS' data-action="https://schmalculator.netlify.com" />
                                <h2> Javascript Calculator <br /> created with: HTML | CSS | JS</h2>
                            </div>







                        </Coverflow>

                    </ContainerStyle>
                    {/* <NextBtn>
                        <Link to="/Skills"><button>Skills</button></Link>

                    </NextBtn> */}
 
                </Container>
            </div>
        );
    }


};



