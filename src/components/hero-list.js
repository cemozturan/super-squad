import React, { Component } from 'react';
import { connect } from 'react-redux';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="list-group">
          {
            this.props.selectedHeroes.map(ch => {
              return(
                <li key={ch.id} className="list-group-item">
                  <div className="list-item">{ch.name}</div>
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
    selectedHeroes: state.heroes
  };
}
export default connect(mapStateToProps, null)(HeroList);
