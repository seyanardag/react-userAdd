import React, { Component } from "react";

export default class User extends Component {

  
  onDeleteClick() {
    console.log("clicked")
    
  }
  
  render() {
    const { id, name, email } = this.props;
    const {deleteUser} = this.props;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
        <td>
          <button className="btn btn-danger" onClick={() => deleteUser(id)}>Del</button>
        </td>       
      </tr>
    );
  }
}
