import React, { Component } from 'react';
import CardList from './components/CardList';
import { getRobots } from './services/robots';

class App extends Component {
  state = {
    robots: [],
  };

  async componentDidMount() {
    const { data: robots } = await getRobots();

    this.setState({ robots });
  }

  render() {
    const { robots } = this.state;

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <CardList robots={robots} />
        </div>
      </div>
    );
  }
}

export default App;
