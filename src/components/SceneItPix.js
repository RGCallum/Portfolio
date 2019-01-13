import React, { Component } from 'react';
import styled from "styled-components";
import img from '../images/SIPDeskR.png';
import img2 from '../images/SIPBackdropL.png';
import img3 from '../MagicMirrorGlow.png';


const Container = styled.div`
background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
background-size: 400% 400%;
height: 200vh;
color: white;
// text-shadow: 1px 1px 1px black;
font-size: 25px;
font-weight: 800;
text-align: center;
position: absolute;

h1{
    color: black;
    // text-shadow: 1px 1px 1px white;
    font-size: 25px;
    background-color: rgba(255, 255, 255, 0.5);
    z-index: 1;
    border-radius: 15px;
    border: inset rgb(228, 228, 228)2px;
    padding: 10px;
    width: 100vw;     
      
}
a:hover{
color: #E73C7E;
}
a{
    text-decoration: none;
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
@media only screen and (min-width: 412px) and (max-width: 425px)  {
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
    transform: translateY(0);

              animation-timing-function: ease-out;
    }
    5% {
       transform: translateY(30px);
              animation-timing-function: ease-in;
    }
    15% {
    transform: translateY(0);

              animation-timing-function: ease-out;
    }
    25% {
       transform: translateY(38px);
              animation-timing-function: ease-in;
    }
    38% {
    transform: translateY(0);

              animation-timing-function: ease-out;
    }
    52% {
       transform: translateY(75px);
              animation-timing-function: ease-in;
    }
    70% {
    transform: translateY(0);

              animation-timing-function: ease-out;
    }
    85% {
      opacity: 1;
    }
    100% {
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
            margin-top: 20%;
        }
          }

//laptop
@media only screen and (width: 1280px)   {
{ 
    margin-top: 20%;
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
@media only screen and (min-width: 412px) and (max-width: 425px)  {
          { 
            margin-top: 65%;

           }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            margin-top: 75%;

           }
}

//s5
@media only screen and (width: 360px)   {
          { 
            margin-top: 85%;

           }
}

//really small mobile
@media only screen and (width: 320px)   {
          {           
            margin-top: 100%;           
        }
}
`
const SceneItDesk = styled.div`
background-image: url('${img}');
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
            margin-top: 20%;
        }
          }

//laptop
 @media only screen and (width: 1280px)   {
       { 
            margin-top: 20%;
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
@media only screen and (min-width: 412px) and (max-width: 425px)  {
          { 
            margin-top: 65%;

           }
}
//iphone 6
@media only screen and (width: 375px)   {
          { 
            margin-top: 75%;

           }
}

//s5
@media only screen and (width: 360px)   {
          { 
            margin-top: 85%;

           }
}
//really small mobile
@media only screen and (width: 320px)   {
          {           
                margin-top: 100%;           
           }
}

`
const Mirror = styled.div`
// background-image: url('https://i.ibb.co/RNsNKgC/SIPMirror.png');
background-image: url(${img3});

background-repeat: no-repeat;
background-size: contain;
    position: absolute;
    z-index: 100;
    width: 100%;
    height: 100vw;
    animation: bounce-in-top 1.1s 16s both;
    @keyframes bounce-in-top {
        0% {
         
                  transform: translateY(-500px);
                          animation-timing-function: ease-in;
          opacity: 0;
        }
        38% {
                transform: translateY(0);
                           animation-timing-function: ease-out;
          opacity: 1;
        }
        55% {
                    transform: translateY(-65px);
                          animation-timing-function: ease-in;
        }
        72% {
                transform: translateY(0);
                           animation-timing-function: ease-out;
        }
        81% {
                    transform: translateY(-28px);
                }
        90% {
                transform: translateY(0);
                           animation-timing-function: ease-out;
        }
        95% {
                   transform: translateY(-8px);
                          animation-timing-function: ease-in;
        }
        100% {
                transform: translateY(0);
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
    @media only screen and (min-width: 412px) and (max-width: 425px)  {
              { 
                margin-top: 65%;
    
               }
    }
    //iphone 6
    @media only screen and (width: 375px)   {
              { 
                margin-top: 75%;
    
               }
    }
    
    //s5
    @media only screen and (width: 360px)   {
              { 
                margin-top: 85%;
    
               }
    }
    //really small mobile
    @media only screen and (width: 320px)   {
              {           
                    margin-top: 100%;           
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
                        After returning to land, she decided to try event photography. She loved being at the events and making people smile for a living. Then she wanted to make her equipment self contained and the guest experience more interactive, so she built her own Magic Mirror photo booth.  It was a success, and the guests loved it. The challenge and excitement of building the photo booth sparked her interest for computer programming. <br />
                        <a href='/ship'>Back  </a> | <a href='/school'> Next Chapter</a> <br />
                        

                    </h1>
                </Container>
                <Parent>
                        <People />
                        <SceneItDesk />
                        </Parent>
                        <Mirror />
            </div>
        );
    }
}

export default SceneItPix;