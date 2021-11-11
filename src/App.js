import logo from "./assets/img/bridgelabz.png"
import './App.css';
import React from 'react';
class App extends React.Component{
  constructor(){
    super()
    this.state={
      title:"Hello from Bridgelabz!!"
    }
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo}
        alt="The BridgeLabz logo: A bridge to Employeement through lab wokrs"></img>
      </div>
    )
  }
}

export default App;
