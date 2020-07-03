import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import { getRobots } from './services/robots';
import './App.css';

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
        <div className='row my-2'>
          <div className='col text-center'>
            <h1 className='title text-white text-uppercase font-weight-bold'>
              Random robots
            </h1>
          </div>
        </div>
        <div className='row'>
          <SearchBox />
        </div>
        <div className='row justify-content-center'>
          <CardList robots={robots} />
        </div>
      </div>
    );
  }
}

export default App;
