import { useState } from "react";
import { TextField, Button } from "@mui/material";
import "../styles/Screens/register.css";

export default function Register({
  handleRegister,
  userError,
  passwordError,
  emailError,
  setUserError,
  setPasswordError,
  setEmailError,
}) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setUserError(false);
    setEmailError(false);
    setPasswordError(false);
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
          required
          id="username"
          type="text"
          autoFocus
          label="Username"
          value={username}
          name="username"
          onChange={handleChange}
          error={userError}
          margin="normal"
          helperText={userError && "Please enter a valid username"}
        />
        <TextField
          required
          id="email"
          type="text"
          label="Email Address"
          value={email}
          margin="normal"
          name="email"
          error={emailError}
          onChange={handleChange}
          helperText={emailError && "Please enter a valid email"}
        />
        <TextField
          required
          id="password"
          type="password"
          label="Password"
          margin="normal"
          value={password}
          name="password"
          error={passwordError}
          onChange={handleChange}
          helperText={
            passwordError && "Password is too short(minimum 6 characters)"
          }
        />
        <Button type="submit" children="Submit" variant="contained" />
      </form>
    </div>
  );
}
