import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">React component lifecycle</h1>
        </header>
        <Randomnumber/>
      </div>
    );
  }
}

class Randomnumber extends Component{
  constructor(props){
    super(props);

    this.state = {
      r: 0
    };
    this.number = this.number.bind(this);
  }
  number(){
    // alert('hello')
    this.setState( {r: Math.random() })
  }
  render(){
    return (
      <p className="App-intro">
        Click the button to generate a random number <br/>
        <button onClick={this.number}>Click Here</button>
        <Childnumber rnum = {Math.floor(this.state.r * 10)}/>
      </p>
    )
  }
}

class Childnumber extends Component {
  render(){
    return(
      <div>
        
        <p>{this.props.rnum} </p>
      </div>
    )
  }
}

export default App;
