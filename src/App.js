import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          Topscreen Media
        </div>
        <div className="container"> 
          <a href="https://www.youtube.com/embed/XPVFD5vzXIU?autoplay=1&rel=0" className="tile">
            <div>
              Show Reel
            </div>
          </a>
          <a href="http://topscreenkiosk.co.uk/towers-cms/" className="tile">
            <div>
              Booking Pod
            </div>
          </a>
          
          <a href="https://s3-eu-west-1.amazonaws.com/emmasdiary-photosbucket-1e6ddqba7em08/Network+Digital+Menu+Board+Range_New.pdf" className="tile">
            <div>
              Menu Board
            </div>
          </a>
          <a href="http://topscreenmedia.com/products/kiosks/" className="tile">
            <div>
              Website
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default App;
