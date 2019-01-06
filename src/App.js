import React, { Component } from 'react';
import './App.css';
import ShowTodo from './components/showTodos/showTodos'
import ControlTodos from './components/controlTodos/controlTodos'

class Todos extends Component {
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
      
        <ControlTodos 
        clickHandler={this.handleClick} 
        changeHandler={this.handleChange} 
        value={this.state.input} 
        resetHandler={this.handleReset} 
        removeHandler={this.handleRemove}
        
        />
        
        <ShowTodo 
        todoArray={this.state.array} 
        />
      
      </div>
    )
  }
}


export default Todos