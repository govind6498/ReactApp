import logo from "./assets/img/bridgelabz.png"
import './App.css';
import React from 'react';
class App extends React.Component{
  url="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.glassdoor.co.in%2FLocation%2FBridgeLabz-Solutions-Bengaluru-Location-EI_IE1318507.0%2C20_IL.21%2C30_IC2940587.htm&psig=AOvVaw1Uo3KVtXuCLWRNzjRwTbE-&ust=1636733355414000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCKiW8IfbkPQCFQAAAAAdAAAAABAD"
  constructor(){
    super()
    this.state={
      title:"Hello from Bridgelabz!!"
    }
  }
  onClick=(Sevent)=>{
    console.log("save button is clicked",Sevent);
    window.open(this.url,"_blank");
  }
  render(){
    return(
      <div>
        <h1>{this.state.title}</h1>
        <img src={logo} onClick={this.onClick}
        alt="The BridgeLabz logo: A bridge to Employeement through lab wokrs"></img>
      </div>
    )
  }
}

export default App;
