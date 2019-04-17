import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacter } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: ''
    };
  }

  componentDidMount() {
    // call our action
    const starWarsCharacter = props => {
      const fetchCharacter = e => {
        e.preventDefault();
        props.getCharacter();
      }
    }
  }

  render() {
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state = ({
  characters: state.characters,
  error: state.error
})
export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
