import React, { Component } from 'react';
import axios from 'axios';

import PlayersData from './playersData.js';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: []
    };
  }

  componentDidMount() {
      axios.get('http://localhost:5000/api/players')
    .then(res => {
      this.setState({players:res.data})
      console.log(this.state.players);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <PlayersData props={this.state.players}/>
    )
  }

}
