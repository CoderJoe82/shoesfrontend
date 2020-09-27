import React, { Component } from "react";

const mainUrl = "http://127.0.0.1:8000/shoe";

class App extends Component {
  state = {
    shoes: {
      shoe1: {
        brandname: "",
        color: "",
        fasten_type: "",
        manufacturer: "",
        material: "",
        shoe_type: "",
        size: 0,
      },
      shoe2: {
        brandname: "",
        color: "",
        fasten_type: "",
        manufacturer: "",
        material: "",
        shoe_type: "",
        size: 0,
      },
      shoe3: {
        brandname: "",
        color: "",
        fasten_type: "",
        manufacturer: "",
        material: "",
        shoe_type: "",
        size: 0,
      },
      shoe4: {
        brandname: "",
        color: "",
        fasten_type: "",
        manufacturer: "",
        material: "",
        shoe_type: "",
        size: 0,
      },
      shoe5: {
        brandname: "",
        color: "",
        fasten_type: "",
        manufacturer: "",
        material: "",
        shoe_type: "",
        size: 0,
      },
    },
  };

  componentDidMount() {
    fetch(mainUrl)
      .then((response) => response.json())
      .then((data) => {        
        this.setState({
          shoes: {
            shoe1: {
              brandname: data[0].brandname,
              color: data[0].color,
              fasten_type: data[0].fasten_type,
              manufacturer: data[0].manufacturer,
              material: data[0].material,
              shoe_type: data[0].shoe_type,
              size: data[0].size,
            },
            shoe2: {
              brandname: data[1].brandname,
              color: data[1].color,
              fasten_type: data[1].fasten_type,
              manufacturer: data[1].manufacturer,
              material: data[1].material,
              shoe_type: data[1].shoe_type,
              size: data[1].size,
            },
            shoe3: {
              brandname: data[2].brandname,
              color: data[2].color,
              fasten_type: data[2].fasten_type,
              manufacturer: data[2].manufacturer,
              material: data[2].material,
              shoe_type: data[2].shoe_type,
              size: data[2].size,
            },
            shoe4: {
              brandname: data[3].brandname,
              color: data[3].color,
              fasten_type: data[3].fasten_type,
              manufacturer: data[3].manufacturer,
              material: data[3].material,
              shoe_type: data[3].shoe_type,
              size: data[3].size,
            },
            shoe5: {
              brandname: data[4].brandname,
              color: data[4].color,
              fasten_type: data[4].fasten_type,
              manufacturer: data[4].manufacturer,
              material: data[4].material,
              shoe_type: data[4].shoe_type,
              size: data[4].size,
            },
          },
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <h1>OMG SHOES</h1>
        <ul>
          <li>
            <ol>
              Shoe 1:
              <li>{`brandname: ${this.state.shoes.shoe1.brandname}`}</li>
              <li>{`color: ${this.state.shoes.shoe1.color}`}</li>
              <li>{`fasten_type: ${this.state.shoes.shoe1.fasten_type}`}</li>
              <li>{`manufacturer: ${this.state.shoes.shoe1.manufacturer}`}</li>
              <li>{`material: ${this.state.shoes.shoe1.material}`}</li>
              <li>{`shoe_type: ${this.state.shoes.shoe1.shoe_type}`}</li>
              <li>{`size: ${this.state.shoes.shoe1.size}`}</li>
            </ol>
          </li><li>
            <ol>
              Shoe 2:
              <li>{`brandname: ${this.state.shoes.shoe2.brandname}`}</li>
              <li>{`color: ${this.state.shoes.shoe2.color}`}</li>
              <li>{`fasten_type: ${this.state.shoes.shoe2.fasten_type}`}</li>
              <li>{`manufacturer: ${this.state.shoes.shoe2.manufacturer}`}</li>
              <li>{`material: ${this.state.shoes.shoe2.material}`}</li>
              <li>{`shoe_type: ${this.state.shoes.shoe2.shoe_type}`}</li>
              <li>{`size: ${this.state.shoes.shoe2.size}`}</li>
            </ol>
          </li><li>
            <ol>
              Shoe 3:
              <li>{`brandname: ${this.state.shoes.shoe3.brandname}`}</li>
              <li>{`color: ${this.state.shoes.shoe3.color}`}</li>
              <li>{`fasten_type: ${this.state.shoes.shoe3.fasten_type}`}</li>
              <li>{`manufacturer: ${this.state.shoes.shoe3.manufacturer}`}</li>
              <li>{`material: ${this.state.shoes.shoe3.material}`}</li>
              <li>{`shoe_type: ${this.state.shoes.shoe3.shoe_type}`}</li>
              <li>{`size: ${this.state.shoes.shoe3.size}`}</li>
            </ol>
          </li><li>
            <ol>
              Shoe 4:
              <li>{`brandname: ${this.state.shoes.shoe4.brandname}`}</li>
              <li>{`color: ${this.state.shoes.shoe4.color}`}</li>
              <li>{`fasten_type: ${this.state.shoes.shoe4.fasten_type}`}</li>
              <li>{`manufacturer: ${this.state.shoes.shoe4.manufacturer}`}</li>
              <li>{`material: ${this.state.shoes.shoe4.material}`}</li>
              <li>{`shoe_type: ${this.state.shoes.shoe4.shoe_type}`}</li>
              <li>{`size: ${this.state.shoes.shoe4.size}`}</li>
            </ol>
          </li><li>
            <ol>
              Shoe 5:
              <li>{`brandname: ${this.state.shoes.shoe5.brandname}`}</li>
              <li>{`color: ${this.state.shoes.shoe5.color}`}</li>
              <li>{`fasten_type: ${this.state.shoes.shoe5.fasten_type}`}</li>
              <li>{`manufacturer: ${this.state.shoes.shoe5.manufacturer}`}</li>
              <li>{`material: ${this.state.shoes.shoe5.material}`}</li>
              <li>{`shoe_type: ${this.state.shoes.shoe5.shoe_type}`}</li>
              <li>{`size: ${this.state.shoes.shoe5.size}`}</li>
            </ol>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
