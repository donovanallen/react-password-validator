import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      password_validation: '',
      valid: true
    };

  }

  // this.handleEmail = this.handleEmail.bind(this)
  // this.handlePassword = this.handlePassword.bind(this)
  // this.handlePasswordVal = this.handlePasswordVal.bind(this)
  // this.handleSubmit = this.handleSubmit.bind(this)

  handleEmail(event) {
    this.setState({email: event.target.value});
  }
  handlePassword(event) {
    this.setState({password: event.target.value});
  }
  handlePasswordVal(event) {
    this.setState({password_validation: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    this.checkValidity()
    // alert('An email was submitted: ' + this.state.value.email + ' ' + this.state.value.password + ' ' + this.state.value.password_validation);
  }


  checkValidity() {
    if (this.state.password === this.state.password_validation){
      this.setState({valid: true})
      console.log("yes");
    } else {
      this.setState({valid: false})
      console.log("no");
    }
  }


  render() {
    let validText = this.state.valid ? "Valid!" : "Passwords do not match"
    return (
      <div>
        <label>
          <input type="text" placeholder="Email" onChange={(event) => this.handleEmail(event)} />
        </label>
        <label>
          <input type="password" placeholder="Password" onChange={(event) => this.handlePassword(event)} />
        </label>
        <label>
          <input type="password" placeholder="Confirm Password" onChange={(event) => this.handlePasswordVal(event)} />
        </label>
        <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)} />
        <p>
          {validText}
        </p>
      </div>
    );
  }
}

export default App;
