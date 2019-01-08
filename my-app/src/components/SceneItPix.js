import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/SIPDeskR.png';
import img2 from '../images/SIPBackdropL.png';
import mirror from '../images/MagicMirror2glow.png';
import { Link } from "react-router-dom";


const Container = styled.div`
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-size: 400% 400%;
height: 100vh;
color: white;
text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
text-align: center;
position: absolute;
h1{
    
    color: black;
    text-shadow: 1px 1px 1px white;
    font-size: 25px;
    background-color: rgba(255, 255, 255, 0.7);
    z-index: 1;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    padding: 10px;
    width: 100vw;     
      
}
a:hover{
color: #E73C7E;
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


@media only screen and (width: 2560px){
    {
        h1{
            font-size: 40px;
        }
    }
}

//ipad pro
@media only screen and (min-width: 769px) and (max-width: 1079px)   {
        { 
            h1{
                margin-top: 5%;
                font-size: 30px;
            }
         }
}

//ipad
@media only screen and (max-width: 768px)   {
        { 
            h1{
                font-size: 20px;
            }
         }
}

//iphone 6+ and big mobile phones
@media only screen and (min-width: 414px) and (max-width: 425px)  {
          { 
            h1{
                font-size: 16px;       
              }
           }
}

//iphone 6
@media only screen and (width: 375px)   {
          { 
            h1{
                font-size: 16px;       
              }
           }
}

//s5
@media only screen and (width: 360px)   {
          {    
              h1{
                font-size: 16px;       

              }
           }
}

//really small mobile
@media only screen and (width: 320px)   {
          {    
              h1{
                font-size: 16px;       

              }
           }
}

`
const FlashBtn = styled.div`
button{
    background: #f49;
    width: 100px;
    height: 100px;
    margin: 50px auto;
    color: white;
}
`
const Parent = styled.div`
animation: bounce-out-bottom 1.5s 15s both;
@keyframes bounce-out-bottom {
    0% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    5% {
      -webkit-transform: translateY(30px);
              transform: translateY(30px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    15% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    25% {
      -webkit-transform: translateY(38px);
              transform: translateY(38px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    38% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    52% {
      -webkit-transform: translateY(75px);
              transform: translateY(75px);
      -webkit-animation-timing-function: ease-in;
              animation-timing-function: ease-in;
    }
    70% {
      -webkit-transform: translateY(0);
              transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
              animation-timing-function: ease-out;
    }
    85% {
      opacity: 1;
    }
    100% {
      -webkit-transform: translateY(800px);
              transform: translateY(800px);
      opacity: 0;
    }
  }
  
`
const People = styled.div`
color: red;
font-size: 45px;
background-image: url(${img2});
background-repeat: no-repeat;
background-size: contain;
position: absolute;
z-index: -100;
width: 100%;
  height: 100vw;

  animation: slide2 1s linear 1;
  @keyframes slide2 {
    from { margin-left: -50%; }
    to { margin-left: -10% 0; }
}
//laptop
@media only screen and (width: 1440px)   {
    { 
        margin-top: 5%;
    }
    }
//laptop
@media only screen and (width: 1366px)   {
          { 
              margin-top: 5%;
          }
          }

//laptop
@media only screen and (width: 1280px)   {
{ 
     margin-top: 5%;
 }
 }

 //ipad pro
 @media only screen and (width: 1024px)   {
 { 
      margin-top: 45%;
  }
  }

//ipad 
@media only screen and (width: 768px)   {
          { 
               margin-top: 45%;
           }
  }



//iphone 6+ and big mobile phones
@media only screen and (min-width: 414px) and (max-width: 425px)  {
          { 
            margin-top: 65%;

           }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            margin-top: 85%;

           }
}

//s5
@media only screen and (width: 360px)   {
          { 
            margin-top: 95%;

           }
}

//really small mobile
@media only screen and (width: 320px)   {
          {           
                margin-top: 125%;           
           }
}
`
const SceneItDesk = styled.div`
background-image: url(${img});
background-repeat: no-repeat;
background-size: contain;
    position: absolute;
    z-index: -100;
    width: 100%;
    height: 100vw;

    animation: slide3 1s linear 1;
    @keyframes slide3 {
      from { margin-left: 50%; }
      to { margin-left: 10% 0; }
  }

//laptop
@media only screen and (width: 1440px)   {
      { 
          margin-top: 5%;
      }
      }

//laptop
@media only screen and (width: 1366px)   {
          { 
              margin-top: 5%;
          }
          }

//laptop
 @media only screen and (width: 1280px)   {
       { 
            margin-top: 5%;
        }
        }
//ipad pro
@media only screen and (width: 1024px)   {
        { 
             margin-top: 45%;
         }
}

//ipad 
@media only screen and (width: 768px)   {
        { 
             margin-top: 45%;
         }
}

//iphone 6+ and big mobile phones
@media only screen and (min-width: 414px) and (max-width: 425px)  {
          { 
            margin-top: 65%;

           }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            margin-top: 85%;

           }
}

//s5
@media only screen and (width: 360px)   {
          { 
            margin-top: 95%;

           }
}
//really small mobile
@media only screen and (width: 320px)   {
          {           
                margin-top: 125%;           
           }
}

`
const Mirror = styled.div`
background-image: url(${mirror});
background-repeat: no-repeat;
background-size: contain;
    position: absolute;
    z-index: 100;
    width: 60%;
    height: 60vw;
    margin-top: 10%;
    margin-left: 20%;
    animation: bounce-in-top 1.1s 16s both;
    @keyframes bounce-in-top {
        0% {
          -webkit-transform: translateY(-500px);
                  transform: translateY(-500px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
          opacity: 0;
        }
        38% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
          opacity: 1;
        }
        55% {
          -webkit-transform: translateY(-65px);
                  transform: translateY(-65px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        72% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        81% {
          -webkit-transform: translateY(-28px);
                  transform: translateY(-28px);
          -webkit-animation-timing-function: ease-in;
        }
        90% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
        95% {
          -webkit-transform: translateY(-8px);
                  transform: translateY(-8px);
          -webkit-animation-timing-function: ease-in;
                  animation-timing-function: ease-in;
        }
        100% {
          -webkit-transform: translateY(0);
                  transform: translateY(0);
          -webkit-animation-timing-function: ease-out;
                  animation-timing-function: ease-out;
        }
      }
      

    //laptop
    @media only screen and (width: 1440px)   {
          { 
              margin-top: 15%;
          }
          }
    
    //laptop
    @media only screen and (width: 1366px)   {
              { 
                  margin-top: 15%;
              }
              }
    
    //laptop
     @media only screen and (width: 1280px)   {
           { 
                margin-top: 15%;
            }
            }
    //ipad pro
    @media only screen and (width: 1024px)   {
            { 
                 margin-top: 55%;
             }
    }
    
    //ipad 
    @media only screen and (width: 768px)   {
            { 
                 margin-top: 55%;
             }
    }
    
    //iphone 6+ and big mobile phones
    @media only screen and (min-width: 414px) and (max-width: 425px)  {
              { 
                margin-top: 75%;
    
               }
    }
    //iphone 6
    @media only screen and (width: 375px)   {
              { 
                margin-top: 95%;
    
               }
    }
    
    //s5
    @media only screen and (width: 360px)   {
              { 
                margin-top: 105%;
    
               }
    }
    //really small mobile
    @media only screen and (width: 320px)   {
              {           
                    margin-top: 135%;           
               }
    }
`


class SceneItPix extends Component {


    render() {
        return (
            <div>
                

                        <Container>
                    <FlashBtn>
                    </FlashBtn>
                    <br />
                    <br />
                    <h1>
                        After returning to land, she decided to try event photography. She loved being at the events and making people smile for a living. After awhile, she wanted to make her equipment self contained and the guest experience more interactive, so she built her own Magic Mirror photo booth.  It was a success, and the guests loved it. The challenge and excitement of building the photo booth sparked her interest for computer programming. <br />
                        <a href='/ship'>Back  </a> | <a href='/school'> Next Chapter</a> <br />
                        

                    </h1>
                </Container>
                <Parent>
                        <People />
                        <SceneItDesk />
                        </Parent>

                        <Mirror/>
            </div>
        );
    }
}

export default SceneItPix;