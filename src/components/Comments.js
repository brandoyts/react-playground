import React from "react";
import useFetchData from "../hooks/useFetchData";

function Comments({ location }) {
  const [data] = useFetchData(location.pathname);

  return (
    <div className="comments">
      <h1>{location.pathname}</h1>
      <ul>
        {data.map((i) => (
          <li key={i.id}>{i.body}</li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
