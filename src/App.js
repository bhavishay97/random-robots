import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default App;
