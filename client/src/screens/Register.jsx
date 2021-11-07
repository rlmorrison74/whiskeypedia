import { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../styles/Screens/register.css";

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
    <div className="register">
      <h1>Create an Account</h1>
      <form
        className="registerform"
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
          label="Email Address"
          value={email}
          name="email"
          onChange={handleChange}
        />
        <br />
        <TextField
          id="password"
          type="password"
          label="Password"
          value={password}
          name="password"
          onChange={handleChange}
        />
        <br />
        <Button type="submit" children="Submit" variant="contained" />
      </form>
    </div>
  );
}
