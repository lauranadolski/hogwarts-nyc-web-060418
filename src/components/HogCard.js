import React, { Component } from 'react';

class HogCard extends Component {

  state = {
    frontCard: true,
    contentHidden: true
  }

  imageFileNameGenerator = () => {
    let pigName = this.props.hog.name;
    let newPigName = pigName.replace(/ /g, "_");
    return newPigName.toLowerCase();
  }

  sideOfCard = () => {
    let nameString = `./hog-imgs/${this.imageFileNameGenerator()}.jpg`
    let realWeight = Math.round((this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) * 324);

    if (this.state.frontCard) {
      return (
        <div className="ui eight wide column">
          <img alt="" src={nameString} />
          <p>{this.props.hog.name}</p>
          <button onClick={this.showDetails}>Show Details</button>
        </div>
      )
    } else {
      return (<div>
        <p>Specialty: {this.props.hog.specialty}</p>
        <p>Greasy or nah? {(this.props.hog.greased).toString()}</p>
        <p>Weight: {realWeight}lbs. </p>
        <button onClick={this.showDetails}>Hide Details</button>
      </div>
      )
    }
  }

  showDetails = () => {
    this.setState({
      frontCard: !(this.state.frontCard),
    })
  }

  render() {
    console.log(this.props.contentHidden);
    return (
      <div>
        {this.sideOfCard()}
      </div>
    )
  }
}

export default HogCard;
