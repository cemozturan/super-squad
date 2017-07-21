import React, { Component } from 'react';
import CharacterList from './character-list';
import HeroList from './hero-list';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Super Squad</h2>
        <div className="col-md-6">
          <CharacterList />
        </div>
        <div className="col-md-6">
          <HeroList />
        </div>
      </div>
    );
  }
}

export default App;
