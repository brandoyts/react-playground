import React, { useRef } from "react";
import useFormSubmit from "../hooks/useFormSubmit";
import FormGroup from "@material-ui/core/FormGroup";
import TextField from "@material-ui/core/TextField";

const styles = {
  width: "500px",
  height: "75%",
};

function Form(props) {
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const firstName = firstNameRef.current.value;
    const lastName = lastNameRef.current.value;

    if (firstName && lastName) {
      const newUser = { firstName, lastName };
      props.submit(newUser);

      //   reset input fiels
      firstNameRef.current.value = "";
      lastNameRef.current.value = "";

      return;
    }

    alert("ampty field detected");
  };

  return (
    <form action="#" style={styles} onSubmit={(e) => handleSubmit(e)}>
      <FormGroup>
        <TextField
          id="standard-basic"
          label="First name"
          inputRef={firstNameRef}
        />
      </FormGroup>

      <FormGroup>
        <TextField
          id="standard-basic"
          label="Lastname"
          inputRef={lastNameRef}
        />
      </FormGroup>

      <FormGroup>
        <button type="submit">Submit</button>
      </FormGroup>
    </form>
  );
}

export default Form;
