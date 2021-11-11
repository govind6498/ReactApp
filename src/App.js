import logo from "./assets/img/bridgelabz.png"
import './App.css';
import React from 'react';
class App extends React.Component{
  url="https://www.bridgelabz.com/"
  constructor(){
    super()
    this.state={
      userName:"",
      nameError:""
    }
  }
  onClick=(Sevent)=>{
    console.log("save button is clicked",Sevent);
    window.open(this.url,"_blank");
  }
  onNameChange=(event)=>{
    console.log("Value is ",event.target.value);
    const nameRegex =RegExp("[A-Z]{1}[a-zA-Z\\s]{2,}$");
    //set the title using setState method
    this.setState({userName:event.target.value})
    if(nameRegex.test(event.target.value)){
      this.setState({nameError:""})
    }
    else{
      this.setState({nameError:"Name is Incorrect"})
    }
  }
  render(){
    return(
      <div>
      <div>
        <h1>Hello {this.state.userName} from BridgeLabz</h1>
        <img src={logo} onClick={this.onClick}
        alt="The BridgeLabz logo: A bridge to Employeement through lab wokrs"></img>
      </div>
      <div>
        <input onChange={this.onNameChange}></input>
        <span className="error-output">{this.state.nameError}</span>
      </div>
      </div>
    );
  }
}

export default App;
