import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Desk1Happy from "./components/Desk1Happy";
import Desk2Sleep from "./components/Desk2Sleep";
import News from "./components/News";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import SceneItPix from "./components/SceneItPix";
import School from "./components/School";
import Ship from "./components/Ship";
import Skills from "./components/Skills";
import TheEnd from "./components/TheEnd";
import NavBar from "./components/NavBar";
import SipWeb from "./components/SipWeb";
class App extends Component {
  render() {
    return (
    <div>
      <NavBar />
<Router>
  <div>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/desk1" component={Desk1Happy}/>
      <Route exact path="/desk2" component={Desk2Sleep}/>
      <Route exact path="/news" component={News}/>
      <Route exact path="/portfolio" component={Portfolio}/>
      <Route exact path="/resume" component={Resume}/>
      <Route exact path="/scene" component={SceneItPix}/>
      <Route exact path="/school" component={School}/>
      <Route exact path="/ship" component={Ship}/>
      <Route exact path="/skills" component={Skills}/>
      <Route exact path="/end" component={TheEnd}/>
      <Route exact path="/sipweb" component={SipWeb}/>

    </Switch>
  </div>
</Router>
    </div>
    );
  }
}

export default App;
