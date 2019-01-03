import React, { Component } from 'react';
import './App.css';

{/* The home(parent) component that renders the getter and setter (childs)component, it also contains the handler for the getter's click and change event,that was passed as props */}
{/* The home component has two dict in its states, the input is the user's input that's saved temporary and the array renders the input values with other inputs if available */}
class Home extends React.Component {
    constructor(props){
      super(props);
      this.state = {
        input: '',
        array: []
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleReset = this.handleReset.bind(this)
  }

  handleChange(event){
    this.setState({
      input: event.target.value
    })
  }

  handleClick(){
    const joined = this.state.array.concat(this.state.input);
    if(this.state.input != ''){
      this.setState({
      input: '',
      array: joined
      })
    }
  }

  handleRemove(){
    this.state.array.splice(-1, 1);
    let newArray = this.state.array
    this.setState({
      input: '',
      array: newArray
    })
  }

  handleReset(){
    this.setState({
      input: "",
      array: []
    })
  }

  render() {
    return(
      <div className="style">
        <h1>My To-Do List</h1> 
        <Getter clickHandler={this.handleClick} changeHandler={this.handleChange} value={this.state.input} resetHandler={this.handleReset} removeHandler={this.handleRemove}/>
        <Setter array={this.state.array}/>
      </div>
    )
  }
}

{/* The getter child component gets the input, updates the states of the home(parent) component, get buttons to add,remove or reset the array in the state of the home(parent) component*/}
{/* Its also the connector component because it connects almost all the handlers together */}
class Getter extends React.Component {
  render(){
    return(
      <div>
        <input type="text" onChange={this.props.changeHandler} value={this.props.value}/>
        <button onClick={this.props.clickHandler} className="addbtn">Add</button>
        <button onClick={this.props.removeHandler} className="removebtn">Remove</button>
        <button onClick={this.props.resetHandler} className="resetbtn">Reset</button>
      </div>
    )
  }
}

{/* The setter child component renders only the array in the state of the home(parent) component */}
class Setter extends React.Component {
  render(){
    return(
      <div>
        <ul>
          {this.props.array.map((i) =><li>{i}</li>)}
        </ul>
      </div>
    )
  }
}

export default Home
