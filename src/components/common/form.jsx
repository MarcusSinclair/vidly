import React, { Component } from "react";
import Input from "./input";

class Form extends Component {
  state = {
    account: {
      email: "",
      password: "",
      name: "",
    },
  };
  handleChange(input) {
    console.log(input.target.value);
  }
  render() {
    return (
      <form>
        <Input
          id="1"
          label="Email"
          placeholder="Enter email"
          onChange={this.handleChange}
        />
        <Input
          id="2"
          label="Password"
          placeholder="Enter password"
          onChange={this.handleChange}
        />
        <Input
          id="3"
          label="Name"
          placeholder="Enter name"
          onChange={this.handleChange}
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default Form;
