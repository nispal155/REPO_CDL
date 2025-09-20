import React from "react";
import useFetch from "../hooks/useFetch";

function UserList() {
  const { data: users, pending } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  return (
    <div className="data-box">
      <h2>Users (Custom Hook)</h2>
      {pending && <p>Loading...</p>}
      {users && (
        <ul>
          {users.map((u) => (
            <li key={u.id}>{u.id} : {u.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UserList;
