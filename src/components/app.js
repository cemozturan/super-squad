import React, { Component } from 'react';
import CharacterList from './character-list';

class App extends Component {
  render() {
    return (
      <div>
        <h2>Super Squad</h2>
        <CharacterList />
      </div>
    );
  }
}

export default App;
