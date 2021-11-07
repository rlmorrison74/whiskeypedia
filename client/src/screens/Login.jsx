import { TextField, Button } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Screens/login.css";

export default function Login({ handleLogin }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="login">
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
        <p>
          {" "}
          Don't have an account? Create one <Link className="registerlink" to="/register">here</Link>.
        </p>
      </form>
    </div>
  );
}
