import React, { Component } from 'react';
import CharacterList from './character-list';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <h2>Super Squad</h2>
        <CharacterList />
      </div>
    );
  }
}

export default App;
