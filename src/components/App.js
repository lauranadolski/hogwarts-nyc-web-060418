import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import Filter from './Filter'

class App extends Component {

  state = {
    hogs: hogs
  }

  handleGiantButtonClick = (nameOfChild) =>{
    console.log(nameOfChild);
    let randomHog = this.state.hogs.slice(0, 5)
    this.setState({
      hogs: randomHog
    })
  }

  render() {
    return (
      <div className="App">
          <Nav />
          <Filter />
          <HogContainer
          myCoolFunction={this.handleGiantButtonClick} hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
