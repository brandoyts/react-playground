import React from "react";
import useFetchData from "../hooks/useFetchData";

function Todos({ location }) {
  const data = useFetchData(location.pathname);

  return (
    <div className="todos">
      <h1>{location.pathname}</h1>
      <ul>
        {data.map((i) => (
          <li key={i.id}>{i.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
