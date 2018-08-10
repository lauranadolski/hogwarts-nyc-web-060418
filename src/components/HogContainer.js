import React, { Component } from 'react';
import HogCard from './HogCard';

class HogContainer extends Component {

  state={
    contentHidden: false
  }

  hogCardGenerator = () => {
    return this.props.hogs.map( (hog) => {
      return <HogCard contentHidden={this.state.contentHidden} key={hog.name} hog={hog}/>
    })
  }

  handleClick = () => {
    this.props.myCoolFunction("hey!!!")
  }

  render()  {
    console.log(this.props.myCoolFunction);
    return (
      <div className="ui grid container">
        <button onClick={this.handleClick} >Hide one hog</button>
        {this.hogCardGenerator()}
      </div>
    )
  }
}

export default HogContainer;
