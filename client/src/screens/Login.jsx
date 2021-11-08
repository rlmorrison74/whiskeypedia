import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Screens/login.css";

export default function Login({
  handleLogin,
  userError,
  passwordError,
  setUserError,
  setPasswordError,
}) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    setUserError(false);
    setPasswordError(false);
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login">
      <h1>Welcome Back</h1>
      <form
        className="loginform"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(formData);
        }}
      >
        <TextField
          id="username"
          type="text"
          autoFocus
          label="Username"
          value={username}
          name="username"
          margin="normal"
          error={userError || passwordError}
          onChange={handleChange}
        />
        <TextField
          id="password"
          type="password"
          label="Password"
          value={password}
          margin="normal"
          name="password"
          onChange={handleChange}
          error={userError || passwordError}
          helperText={
            userError || passwordError ? "Invalid username or password" : null
          }
        />
        <Button type="submit" children="Submit" variant="contained" />
        <p>
          {" "}
          Don't have an account? Create one{" "}
          <Link className="registerlink" to="/register">
            here
          </Link>
          .
        </p>
      </form>
    </div>
  );
}
