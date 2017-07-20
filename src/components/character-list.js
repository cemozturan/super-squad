import React, { Component } from 'react';
import { connect } from 'react-redux';

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul>
          {
            this.props.selectableCharacters.map(ch => {
              return(
                <li key={ch.id}>
                  <div>{ch.name}</div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectableCharacters: state.characters
  };
}

export default connect(mapStateToProps, null)(CharacterList);
