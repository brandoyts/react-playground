import React from "react";
import useFetchData from "../hooks/useFetchData";

function Users({ location }) {
  const data = useFetchData(location.pathname);

  return (
    <div className="users">
      <h1>{location.pathname}</h1>
      <ul>
        {data.map((i) => (
          <li key={i.id}>{i.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Users;
