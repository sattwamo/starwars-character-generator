import React from "react";

class Generator extends React.Component {
    constructor() {
      super();
  
      this.state = {
        loadChar: false,
        name: null,
        height: null,
        homeworld: null,
        image: null,
        affiliations: [],
      };
    }
  
    getNewCharater() {
      const randomNumber = Math.round(Math.random() * 88);
  
      const url = `https://raw.githubusercontent.com/akabab/starwars-api/master/api/id/${randomNumber}.json`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          this.setState({
            loadChar: true,
            name: data.name,
            height: data.height,
            homeworld: data.homeworld,
            image: data.image,
            affiliations: data.affiliations,
          });
        });
      // console.log(this.state.image)
    }
  
    resetCharater() {
      this.setState({
        loadChar: false,
        name: null,
        height: null,
        homeworld: null,
        image: null,
        affiliations: null,
      });
    }
  
    render() {
      var aff = null;
      if (this.state.loadChar) {
        aff = this.state.affiliations.map((item, i) => {
          return <li key={i}>{item}</li>;
        });
      }
  
      return (
        <div>
          <h1>Random Star Wars Character Generator</h1>
          {this.state.loadChar && (
            <div>
              <img src={this.state.image} alt={this.state.image} />
              <h1>{this.state.name}</h1>
              <p>Height: {this.state.height} m</p>
              <p>Homeworld: {this.state.homeworld}</p>
              <p>Affiliations: </p>
              <ul>{aff}</ul>
            </div>
          )}
          <button
            type="button"
            onClick={() => this.getNewCharater()}
            className="btn"
          >
            Randomise
          </button>
          <button
            type="button"
            onClick={() => this.resetCharater()}
            className="btn"
          >
            Reset
          </button>
        </div>
      );
    }
  }

  export default Generator;