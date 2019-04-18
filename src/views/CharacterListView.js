import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacter } from "../actions";

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    // call our action
    this.props.getCharacter();
  }

  render() {
    console.log(this.props)
    if (this.props.fetching) {
      // return something here to indicate that you are fetching data
      <h2>Characters of the Star Wars we must fetch...</h2>
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

const mapStateToProps = state => ({
  characters: state.charsReducer.characters,
  error: state.charsReducer.error
  // fetching: state.charsReducer.fetching
})
export default connect(
  mapStateToProps,
  {
    getCharacter
  }
)(CharacterListView);
