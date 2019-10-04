import React, { Component } from 'react';
import axios from 'axios';

import NavBar from './NavBar.jsx';
import PlayersData from './playersData.js';
import Container from './Container.js';

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
      <Container>
      <PlayersData props={this.state.players}/>
      </Container>
      </div>
    )
  }

}
