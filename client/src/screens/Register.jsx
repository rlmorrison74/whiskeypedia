import { useState } from "react";

import { TextField, Button } from "@mui/material";

export default function Register({ handleRegister }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleRegister(formData);
      }}
    >
      <TextField
        id="username"
        type="text"
        autoFocus
        label="Username"
        value={username}
        name="username"
        onChange={handleChange}
      />
      <br />
      <TextField
        id="email"
        type="text"
        autoFocus
        label="Email Address"
        value={email}
        name="email"
        onChange={handleChange}
      />
      <br />
      <TextField
        id="password"
        type="password"
        autoFocus
        label="Password"
        value={password}
        name="password"
        onChange={handleChange}
      />
      <br />
          <Button type="submit" children="Submit" variant="contained"  />
          {/* <button>Submit</button> */}
    </form>
  );
}
