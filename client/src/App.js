import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar.jsx';
import PlayersData from './playersData.js';
import Card from './Card.js';

import "./index.css";


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
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
      <NavBar/>
      <Card>
      <PlayersData props={this.state.players}/>
      </Card>
      </div>
    )
  }

}
