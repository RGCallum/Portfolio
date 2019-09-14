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
font-size: 12px;
background-image: url('https://i.ibb.co/fv7Y6qQ/purp.jpg');
background-size: cover;
height: 150vh;
width: 100vw;
// background-repeat: no-repeat;
color: white;
text-shadow: 1px 1px 1px black;
h1{
    font-size: 45px;
font-weight: 100;

}
h3{
    color: white;
    // text-shadow: none;

}
h2{
    text-align: center
    background-color: rgba(0, 0, 0, 0.509);
    padding: 10px;
    // font-weight: 100;
    font-size: 2vw;
    
}
img{
    width: 100%;
}


 `

const ContainerStyle = styled.div`
margin-top: -5em;

@media only screen and (min-device-width: 320px) and (max-width: 480px) {
    {
        margin-top: -18em;
        
        background-position: center;

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
                    <br />
                    <br />


                    <ContainerStyle>
                        <Coverflow
                            width={560}
                            height={930}
                            displayQuantityOfSide={1.2}
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
                                <a href='https://www.sceneitpix.com'>
                                    <img src='https://i.ibb.co/ZWD3mL4/sceneitweb.png' alt='SceneIt Pictures Interactive Website: HTML|CSS|JS' data-action="https://sceneitpix.com" />
                                </a>
                                <h2> "SceneIt Pictures" <br/> Interactive Website: <br /> created with: HTML | CSS | JS </h2>
                            </div>

                          

                            <div>
                                <a href='https://callumenterprise.com'>
                                    <img src='https://i.ibb.co/wY2FYNY/Callum-Ent.png' alt='Callum Enterprise website: HTML|CSS|JS' data-action="https://callumenterprise.com" />
                                </a>
                                <h2> "Callum Enterprise" website  <br /> created with: HTML | CSS | JS </h2>
                            </div>
                            <div>
                                <a href='https://nobu-filmmakers.herokuapp.com'>
                                <img src='https://i.ibb.co/931K29J/Nobu.png' alt='Independent Filmmaker Database: JS|MongoDB|Express|React|Node' data-action="https://nobu-filmmakers.herokuapp.com" />
                                </a>
                                <h2> "NoBu Filmmakers" <br/> Filmmaker Database <br /> created with: React | JS | Express | MongoDB | Node </h2>
                            </div>
                            <div>
                                <a href='https://piclist.herokuapp.com'>
                                <img src='https://i.ibb.co/w0XPx52/PicList2.png' alt='Event Management Database: JS|MongoDB|Express|Node' data-action="https://piclist.herokuapp.com" />
                                </a>
                                <h2> "PicList" <br/> Management Database  <br /> created with: Handlebars | JS | Express | MongoDB | Node </h2>
                            </div>
                            <div>
                                <a href='https://creative-freedom.herokuapp.com'>
                                <img src='https://i.ibb.co/DKNZsX8/CCXMobile2.png' alt='Social Media Network for Creative Freelancers: JS|Python|React|Django|SQL' data-action="https://creative-freedom.herokuapp.com" />
                                </a>
                                <h2> "Creative Connx" <br/> Social Media Network <br /> created with: React | Python | JS | Django | SQL </h2>
                            </div>
                            <div>
                                <a href='https://majorkeys.netlify.com'>
                                    <img src='https://i.ibb.co/phwJVyh/Mkeys.png' alt='Major Keys Javacript Trivia Game: HTML|CSS|JS' data-action="https://majorkeys.netlify.com" />
                                </a>
                                <h2>  "Major Keys Game" <br/> Mobile App <br /> created with: HTML | CSS | JS | PhoneGap  </h2>
                            </div>
                            <div>
                                <a href='https://callumpay.herokuapp.com'>
                                    <img src='https://i.ibb.co/B2xsRbH/Tenderscrnshot.png' alt='Tender Web and Mobile App: : JS|MongoDB|Express|React|Node' data-action="https://callumpay.herokuapp.com" />
                                </a>
                                <h2>  "Tender" <br/> Web and Mobile App <br /> created with: React | JS | Express | MongoDB | Node  </h2>
                            </div> 
                            <div>
                                <a href='https://imsafenow.com/wearable'>
                                    <img src='https://i.ibb.co/k1hhdV3/ISNSite.png' alt='ImSafeNow Website: HTML|CSS|PHP|JS|AWS|Wordpress|Linux|SQL' data-action="https://imsafenow.com" />
                                </a>
                                <h2>  "I'mSafeNow" Website <br /> created with: HTML | CSS | PHP | JS | AWS | Wordpress | Linux | SQL  </h2>
                            </div>
                           
                            <div>
                                <a href='http://ddinstallers.com'>
                                <img src='https://i.ibb.co/G2HmCxy/Screen-Shot-2019-09-06-at-11-56-34-AM.png' alt='D&D Installers Website: HTML|CSS|JS|Photoshop' data-action="http://ddinstallers.com" />
                                </a>
                                <h2> "D&D Installers" Website <br /> created with: HTML | CSS | JS </h2>
                            </div>
                            <div>
                                <a href='#'>
                                <img src='https://i.ibb.co/gV6Q0mp/Hello-Again-Site.png' alt='Hello Again Website: HTML|CSS|JS|Photoshop' data-action="#" />
                                </a>
                                <h2> "Hello Again" Website <br /> created with: HTML | CSS | JS </h2>
                            </div>
                            <div>
                                <a href='https://hitchhiker42.netlify.com'>
                                <img src='https://i.ibb.co/HFKctrf/hhgttgweb.png' alt="Hitchhiker's Guide to The Galaxy Fansite: HTML|CSS|JS" data-action="https://hitchhiker42.netlify.com" />
                                </a>
                                <h2> "Hitchhiker's Guide to the Galaxy" fansite  <br /> created with: HTML | CSS </h2>
                            </div>

                            <div>
                                <a href='https://magicmirror.netlify.com'>
                                <img src='https://i.ibb.co/QrXwZdZ/Screen-Shot-2019-01-13-at-10-44-42-PM.png ' alt='Independent Filmmaker Database: JS|MongoDB|Express|React|Node' data-action="https://nobu-filmmakers.herokuapp.com" />
                                </a>
                                <h2> "Magic Mirror" <br/> Display Website <br /> created with: HTML | CSS | JS </h2>
                            </div>
                            <div>
                                <a href='https://schmalculator.netlify.com'>
                                <img src='https://i.ibb.co/F5WT0jc/Schmalculator.png' alt='Javascript Calculator: HTML|CSS|JS' data-action="https://schmalculator.netlify.com" />
                                </a>
                                <h2> "Schmalculator" <br/> Web and Mobile App <br /> created with: HTML | CSS | JS | PhoneGap</h2>
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



