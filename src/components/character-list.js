import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions';

// See the bottom of the file to understand why this is not needed and commented out now
// import { bindActionCreators } from 'redux';

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
                  <div onClick={() => this.props.addCharacterById(ch.id)}> + </div>
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

/*
// What we have below is teh full version of mapDispatchToProps, and how it needs to be used in connect
// I am leaving it here commented out for future reference
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addCharacterById }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
*/

// And this is the shortcut. We can simply list the actions we want, without having to write a
// mapDispatchToProps method and a call to bindActionCreators
export default connect(mapStateToProps, { addCharacterById })(CharacterList);
