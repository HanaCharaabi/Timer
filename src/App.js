import React, { Component } from 'react'
import './App.css'
class App extends Component {
  state = {  }
  render() {
    let h='00';
    let m='30';
    let s='00';
    return ( 
      <div className="App">
        <div className="center">
         <div className="timer-num">
            <span id="hour">{h}</span>
            <span className="points">:</span>
            <span id="minute">{m}</span>
            <span className="points">:</span>
            <span id="second">{s}</span>
          </div>
          <div className="timer-HMS">
            <span className='MHS'>Hour</span>
            <span className='MHS'>Minute</span>
            <span className='MHS'>Second</span>
          </div>
        </div>
      </div>

     );
  }
}
 
export default App;