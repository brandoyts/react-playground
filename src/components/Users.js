import React, { useEffect } from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

function Users({ users }) {
  console.log(users);

  return (
    <div className="users">
      {users.length > 0 ? (
        users.map((user, index) => (
          <p key={index}>
            {user.firstName} {user.lastName}
          </p>
        ))
      ) : (
        <CircularProgress />
      )}
    </div>
  );
}

export default Users;
