import React from 'react';
import ReactDOM from 'react-dom';
import Coverflow from 'react-coverflow';
import styled from "styled-components";
var fn = function () {
    /* do your action */
}

const Container = styled.div`
text-align: center;

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
                    <h2>Info</h2>
                </Container>
                <Coverflow
                    width={960}
                    height={480}
                    displayQuantityOfSide={2}
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

                        {/* <img src='https://i.ibb.co/ZWD3mL4/sceneitweb.png' alt='Album one' data-action="https://sceneitpix.com"/> */}
                    </div>
                    <img src='https://i.ibb.co/ZWD3mL4/sceneitweb.png' alt='SceneItPix' data-action="https://sceneitpix.com" />
                    <img src='https://i.ibb.co/s3FcP6n/Major-Keys.png' alt='MajorKeys' data-action="https://majorkeys.netlify.com" />
                    <img src='https://i.ibb.co/wY2FYNY/Callum-Ent.png' alt='CallumEnt' data-action="https://callumenterprise.com" />
                    <img src='https://i.ibb.co/5RwrNpJ/CCXMobile.png' alt='CCXMobile' />
                    <img src='https://i.ibb.co/931K29J/Nobu.png' alt='NobuShorts' data-action="https://nobu-filmmakers.herokuapp.com" />
                    <img src='https://i.ibb.co/w0XPx52/PicList2.png' alt='PicList' data-action="https://piclist.herokuapp.com" />
                    <img src='https://i.ibb.co/SrR50Xb/hhgttgweb.png' alt='Hitchhiker42' data-action="https://hitchhiker42.netlify.com" />
                    <img src='https://i.ibb.co/F5WT0jc/Schmalculator.png' alt='Schmalculator' data-action="https://schmalculator.netlify.com" />
                    {/* <img src='images/.png' alt='two' data-action="http://"/>
              <img src='images/.png' alt='three' data-action="https://"/>
              <img src='images/.png' alt='four' data-action="http://"/> */}
                </Coverflow>

            </div>
        );
    }

    _handleClick() {
        var num = Math.floor((Math.random() * 10) + 1);
        this.setState({
            active: num
        });
    }
};

    // ReactDOM.render(
    //   <Container></Container>,
    //   document.querySelector('.example_4')
    // );

