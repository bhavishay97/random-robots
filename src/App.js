import React, { Component } from 'react';
import SearchBox from './components/SearchBox';
import CardList from './components/CardList';
import Message from './components/Message';
import Scroll from './components/Scroll';
import { getRobots } from './services/robots';
import './App.css';

class App extends Component {
  state = {
    robots: [],
    searchQuery: '',
  };

  async componentDidMount() {
    const { data: robots } = await getRobots();

    this.setState({ robots });
  }

  handleSearch = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { robots, searchQuery } = this.state;

    const filtered = robots.filter((robot) => {
      return robot.name
        .toLowerCase()
        .includes(searchQuery.trim().toLowerCase());
    });

    if (robots.length === 0) return <Message text={'Loading'} size={'h2'} />;

    return (
      <div className='container'>
        <Message text={'Random robots'} size={'h1'} />
        <SearchBox searchChange={this.handleSearch} />
        <Scroll>
          <CardList robots={filtered} />
        </Scroll>
      </div>
    );
  }
}

export default App;
