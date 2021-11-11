import logo from "./assets/img/bridgelabz.png"
import './App.css';
import React from 'react';
class App extends React.Component{
  url="https://www.bridgelabz.com"
  constructor(){
    super()
    this.state={
      userName:""
    }
  }
  onClick=(Sevent)=>{
    console.log("save button is clicked",Sevent);
    window.open(this.url,"_blank");
  }
  onNameChange=(event)=>{
    console.log("Value is ",event.target.value);
    //set the title using setState method
    this.setState({userName:event.target.value})
  }
  render(){
    return(
      <>
      <div>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick}
        alt="The BridgeLabz logo: A bridge to Employeement through lab wokrs"></img>
      </div>
      <div>
        <input onChange={this.onNameChange}></input>
      </div>
      </>
    );
  }
}

export default App;
