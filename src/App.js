import React, { useState } from "react";
import "./App.css";
import Container from "@material-ui/core/Container";
import Form from "./components/Form";
import Users from "./components/Users";

function App() {
  const [users, setUsers] = useState([]);

  const handleSubmit = (newUser) => {
    setUsers((prev) => [...prev, newUser]);
  };
  return (
    <div className="App">
      <Container>
        <Form submit={handleSubmit} />
        <Users users={users} />
      </Container>
    </div>
  );
}

export default App;
