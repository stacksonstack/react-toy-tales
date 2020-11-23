import React, { Component } from 'react';

class ToyForm extends Component {


  state={
    name: "",
    image: ""
  }

  handleForm = (e) =>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  

  render() {
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={(e)=> {
          e.preventDefault()
          this.props.formHandler({name: this.state.name, image: this.state.image, likes: 0 }) }}>
          <h3>Create a toy!</h3>
          <input value={this.state.name}type="text" name="name" placeholder="Enter a toy's name..." className="input-text" onChange={this.handleForm}/>
          <br/>
          <input value={this.state.image}type="text" name="image" placeholder="Enter a toy's image URL..." className="input-text" onChange={this.handleForm}/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
