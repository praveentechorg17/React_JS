mport axios from "axios";
import React, { useEffect, useState } from "react";
export default function Users() {
  let [user, users] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res);
      users(res.data);
    });
  }, []);
  return (
    <div>
      <h1>axios</h1>
      <table border="1">
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {
            user.map((u)=>{
              return <tr>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.username}</td>
                <td>{u.email}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  );
}