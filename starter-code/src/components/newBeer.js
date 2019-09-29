import React from "react";
import axios from "axios";

class NewBeer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: "",
      newTagline: "",
      newContributor: ""
    };
  }

  addNew = e => {
    e.preventDefault();
    const newBeer = {
      name: this.state.newName,
      tagline: this.state.newTagline,
      contributor_by: this.state.newContributor
    };

    axios
      .post("https://ih-beer-api.herokuapp.com/beers/new", newBeer)
      .then(blah => {
        this.props.history.push("/");
        // this is how to redirect in react
      })

      .catch(err => {
        console.log(err);
      });
  };

  handleInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.addNew}>
          <p>Name</p>
          <input
            value={this.state.newName}
            name="newName"
            onChange={this.handleInput}
          />

          <p>Tagline</p>
          <input
            value={this.state.newTagline}
            name="newTagline"
            onChange={this.handleInput}
          />

          <p>Contributor</p>
          <input
            value={this.state.newContributor}
            name="newContributor"
            onChange={this.handleInput}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default NewBeer;
