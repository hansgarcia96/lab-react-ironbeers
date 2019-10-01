import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Link } from "react-router-dom";

import AllBeers from './components/allBeers'
import RandomBeer from './components/randomBeer'
import NewBeer from "./components/newBeer";

import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theBeers: [],
      ready: false,
    };
  }

  componentDidMount() {
    axios
      .get("https://ih-beer-api.herokuapp.com/beers")
      .then(response => {
        this.setState({ theBeers: response.data.slice(0, 50),
        ready: true});
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="App">
        <Link to="/all-beers">All Beers</Link>
        <Link to="/random">Random Beer</Link>
        <Link to="/new">New</Link>

        <Switch>
          <Route exact path="/all-beers" render={(props) => 
          <AllBeers
          {...props}
          beers={this.state.theBeers}
          ready={this.state.ready} />} />

          <Route exact path="/random" render={(props) =>
          <RandomBeer
             {...props}
          beers={this.state.theBeers}
          ready={this.state.ready} />} />

          <Route exact path="/new" component={NewBeer} />
          
        </Switch>
      </div>
    );
  }
}

export default App;
