import { useState, useEffect } from "react";

function useFormSubmit(newUser) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    console.log("use effect");
    if (newUser) {
      setUsers((prev) => [...prev, newUser]);
    }
  }, [newUser]);

  return users;
}

export default useFormSubmit;
