import React, { Component } from "react";

export default class AddUser extends Component {
  state = {
    name: "",
    email: "",
  };
  onNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
    console.log("name change");
  };
  onEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
    console.log("email change");
  };

  onAddSubmit = (e) => {
    e.preventDefault();
    console.log("form sumbitted - onAddSubmit çalıştı");
    const newUser = {
      name: this.state.name,
      email: this.state.email,
      id: this.props.users.length + 1,
    };
    this.props.addUser(newUser);
  };

  render() {
    const { name, email } = this.state;
    return (
      <div className="mt-4" style={{width:"80vw", margin:"auto"}}>
        <div className="card">
          <h3 className="card-header">ADD NEW USER</h3>
          <div className="card-body">
            <form onSubmit={this.onAddSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name here..."
                  onChange={this.onNameChange.bind(this)}
                  value={name}
                ></input>
              </div>
              <div className="form-group">
                <label htmlFor="email">email</label>
                <input
                  className="form-control"
                  type="email"
                  email="email"
                  id="email"
                  placeholder="email here..."
                  onChange={this.onEmailChange.bind(this)}
                  value={email}
                ></input>
              </div>
              <button className="btn btn-danger btn-block mt-2" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
