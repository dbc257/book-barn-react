import React, { Component } from "react";
import "./App.css";
// import Books from "./components/Books";

class App extends Component {
  constructor(props) {
    super();
    this.state = {
      username: "",
      password: "",
      // message: "",
    };
  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleUserLogin = () => {
    const user = {
      username: this.state.username,
      password: this.state.password,
    };
    console.log("User", user);
    fetch("http://localhost:3001/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Response", response);
        this.props.history.push("/books");
      });
  };

  render() {
    return (
      <div>
        <input
          name="username"
          type="text"
          placeholder="Username"
          onChange={this.handleTextBoxChange}
        />
        <input
          name="password"
          type="text"
          placeholder="Password"
          onChange={this.handleTextBoxChange}
        />
        <button onClick={this.handleUserLogin}>Submit</button>

        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
export default App;
