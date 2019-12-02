import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {}; 
  }

  render() {
    return(
      <div className='delete-me'>
        <p>
          "Love of your work, willingness to stay with it even in the absence of extrinsic motivation, is good food and good drink."
        </p>
        <p>
          - George Leonard 
        </p>
      </div>
    )
  }
}

export default App;
