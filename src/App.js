import { useState } from "react";
import "./App.css";
import Users from "./components/Users";


import React, { Component } from 'react'
import AddUser from "./components/AddUser";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:"",
      email:"",
        users: [ 
          {
          id:1,
          name:"İsmail",
          email: "ismail@gmail.com"
        },
          {
          id:2,
          name:"Ahmet",
          email: "Ahmet@gmail.com"
        },
          {
          id:3,
          name:"Mehmet",
          email: "Mehmet@gmail.com"
        }
      ]
    };

    this.deleteUser = this.deleteUser.bind(this);

    
  }
  deleteUser(id) {
    let updatedUsers = this.state.users;
    updatedUsers = updatedUsers.filter(user => user.id != id);
    this.setState({
      users:updatedUsers
    });
  };

  addUser = (newuser) => {
    let updatedUsers =this.state.users
    updatedUsers.push(newuser)
    this.setState({
      users:updatedUsers
    })

    console.log("user added")

  };

  render() {
    return (
      <div>
        <AddUser addUser={this.addUser} users={this.state.users}/>
        <hr/>
        <Users  deleteUser={this.deleteUser} users={this.state.users}/>
      </div>
    )
  }
}



