import React from "react";
import "./App.css";

import Header from "./components/Header";
import ToyForm from "./components/ToyForm";
import ToyContainer from "./components/ToyContainer";

class App extends React.Component {
  state = {
    display: false,
    toys: [],
  };

  async componentDidMount() {
    let response = await fetch("http://localhost:3000/toys");
    let data = await response.json();
    this.setState({
      toys: data,
    });
  }

  submitForm = (toy) => {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
      },
      body: JSON.stringify({...toy}),
    })
      .then((resp) => resp.json())
      .then(data =>
        this.setState({
          toys: [...this.state.toys, data],
        })
      );
  };

  deleteToy = (id) => {
    let newArray= [...this.state.toys]
    let toyIndex = newArray.findIndex((toyObj) => toyObj.id === id)
    newArray.splice(toyIndex, 1)
    this.setState({
      toys: newArray
    })
    
  }

  setToyState =(newToys)=>{
    this.setState({toys: newToys})
  }

  handleClick = () => {
    let newBoolean = !this.state.display;
    this.setState({
      display: newBoolean,
    });
  };

  render() {
    return (
      <>
        <Header />
        {this.state.display ? <ToyForm formHandler={this.submitForm} /> : null}
        <div className="buttonContainer">
          <button onClick={this.handleClick}> Add a Toy </button>
        </div>
        <ToyContainer toys={this.state.toys}  setToyState={this.setToyState} deleteToy={this.deleteToy}/>
      </>
    );
  }
}

export default App;
