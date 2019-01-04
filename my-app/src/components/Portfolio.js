import React from 'react';
import Coverflow from 'react-coverflow';
import styled from "styled-components";
import { Link } from "react-router-dom";
import {StyleRoot} from 'radium';

var fn = function () {
    /* do your action */
}

const Container = styled.div`
text-align: center;
font-size: 15px;
// font-weight: 600;
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
color: white;
// height: 100vh;
text-shadow: 1px 1px 1px black;
h1{
    font-size: 45px;
font-weight: 600;
}
alt{
    color: red;
}
background-size: 400% 400%;

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
body{
    font-family: sans-serif;
  }
  h1{
    font-weight: 100;
  }
  .container{
    width: 100%;
    display:block;
    overflow:hidden;
  }
  .carousel{
    display:block;
    width: 100%;
    height: 400px;
    background: white;
    overflow-x: scroll;
    padding: 10px;
    margin: 0;
    white-space: nowrap; 
    border-top: 2px solid rgba(0, 0, 0, 0.1);
    border-bottom: 2px solid rgba(0, 0, 0, 0.1);
  }
  .item {
      display: inline-block;
      width: 380px;
      margin: 0 10px;
      height: 380px;
      background: rgba(0, 0, 0, 0.05) no-repeat center center;
      background-size: cover;
      position:relative;
      
  }
  .item div{
    width: 100%;
    top:10%;
    position:absolute;
    text-align:center;
    font-size: 9em;
    color: white;
  }
  .item h1{
    top: 50%;
    position: absolute;
    color: white;
    text-align: center;
    width: 100%;
    font-size: 4em;
  }
  #party{
    background-image: url(https://i.ibb.co/ZWD3mL4/sceneitweb.png);
  }
  #mood{
    background-image:url(https://i.ibb.co/s3FcP6n/Major-Keys.png);
  }
  #world{
     background-image: url(http://www.whitehat-ops.com/media/cached/photos/9/640x640/constrain/90/Tendenci-Stock-Images-by-Ed-Schipul-2011-82-6ff50_medium_640-a38fa.jpg);
  }
  #ambient{
    background-image:url(http://www.pdpics.com/preview/preview6/1070-orange-sky-sunset.jpg)
  }
  #work{
    background-image:url(http://www.bianchii.com/img/background2.jpg)
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
                    <br/>
                    <h1>Portfolio</h1>
                    <h2>Click thumbnail to view Apps</h2>
                
                <StyleRoot>
                <Coverflow
                    width={560}
                    height={730}
                    displayQuantityOfSide={1.4}
                    navigation={false}
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
                        {/* <div> 
                            <h2>  SceneIt Pictures Interactive Website: <br /> HTML|CSS|JS </h2>                   */}
                                 <img src='https://i.ibb.co/ZWD3mL4/sceneitweb.png' alt='SceneIt Pictures Interactive Website: HTML|CSS|JS' data-action="https://sceneitpix.com" /> 
                        {/* </div> */}
                    <img src='https://i.ibb.co/s3FcP6n/Major-Keys.png' alt='Major Keys Javacript Trivia Game: HTML|CSS|JS' data-action="https://majorkeys.netlify.com" />
                    <img src='https://i.ibb.co/wY2FYNY/Callum-Ent.png' alt='Callum Enterprise website: HTML|CSS|JS' data-action="https://callumenterprise.com" />
                    
                    {/* <div>
                            <h2> Social Media Network for Creative Freelancers:  <br /> JS|Python|React|Django|SQL</h2> */}
                    <img src='https://i.ibb.co/5RwrNpJ/CCXMobile.png' alt='Social Media Network for Creative Freelancers: JS|Python|React|Django|SQL' data-action="https://creative-freedom.herokuapp.com"/>
                    {/* </div> */}

                    <img src='https://i.ibb.co/931K29J/Nobu.png' alt='Independent Filmmaker Database: JS|MongoDB|Express|React|Node' data-action="https://nobu-filmmakers.herokuapp.com" />
                    <img src='https://i.ibb.co/w0XPx52/PicList2.png' alt='Event Management Database: JS|MongoDB|Express|Node' data-action="https://piclist.herokuapp.com" />
                    <img src='https://i.ibb.co/HFKctrf/hhgttgweb.png' alt="Hitchhiker's Guide to The Galaxy Fansite: HTML|CSS|JS" data-action="https://hitchhiker42.netlify.com" />
                    <img src='https://i.ibb.co/F5WT0jc/Schmalculator.png' alt='Javascript Calculator: HTML|CSS|JS' data-action="https://schmalculator.netlify.com" />
                    {/* <img src='images/.png' alt='two' data-action="http://"/>
              <img src='images/.png' alt='three' data-action="https://"/>
              <img src='images/.png' alt='four' data-action="http://"/> */}
                </Coverflow>
                
                </StyleRoot>
                {/* <NextBtn>
                        <Link to="/Skills"><button>Skills</button></Link>

                    </NextBtn> */}
                    {/* <div class="container">
  <div class="carousel">
  <div id="party" class="item">
    <div>
      
    </div>
    <h1>Party</h1>
  </div>
  <div id="mood" class="item">
    <div>
      
    </div>
    <h1>Mood</h1>
  </div>
  <div id="ambient" class="item">
    <div>
     
    </div>
    <h1>Ambient</h1></div>
  <div id="work" class="item">
    <div>
      
    </div>
    <h1>Work</h1>
  </div>
  <div id="world" class="item">
  <div>
      
    </div>
    <h1>World</h1>
  </div>
    <div id="mood" class="item">
    <div>
      
    </div>
    <h1>Mood</h1>
  </div>
  <div id="ambient" class="item">
    <div>
      
    </div>
    <h1>Ambient</h1></div>
  <div id="work" class="item">
    <div>
      
    </div>
    <h1>Work</h1>
  </div>
  <div id="world" class="item">
  <div>
      <i class="fa fa-globe"></i>
    </div>
    <h1>World</h1>
  </div>
</div>
<h1>This is a countinue scroll carousel</h1>
</div> */}
                </Container>
            </div>
        );
    }


};



