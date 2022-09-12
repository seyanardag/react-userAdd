import React, { Component } from "react";
import User from "./User";

export default class Users extends Component {
  render() {
    const { users } = this.props;
    const { deleteUser } =this.props;
    
    return (
      <div style={{width:"80vw", textAlign:"center", margin:"auto"}}>
        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">NAME</th>
              <th scope="col">e-mail</th>
              <th scope="col">DELETE</th>
            </tr>
          </thead>
          <tbody>
          
            {users.map( (user,index) => {
              const { id, name, email } = user;

              return <User
              
              key={index} 
              id = {id}
              name = {name}
              email = {email}
              deleteUser= {deleteUser}
              />


            })}
          </tbody>
        </table>

      </div>
    );
  }
}
