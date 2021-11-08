import "./App.css";

import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Layout from "./layouts/Layout";
import Login from "./screens/Login";

import {
  loginUser,
  registerUser,
  removeToken,
  verifyUser,
} from "./services/auth";
import Register from "./screens/Register";
import MainContainer from "./containers/MainContainer";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();
  const [userError, setUserError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      setCurrentUser(userData);
    };
    handleVerify();
  }, []);

  const handleLogin = async (formData) => {
    const userData = await loginUser(formData);
    if (userData.username) {
      setCurrentUser(userData);
      history.push("/");
    } else {
      if (userData.data.status !== 200) {
        setUserError(true);
      }
      if (userData.data.status !== 200) {
        setPasswordError(true);
      }
    }
  };

  const handleRegister = async (formData) => {
    const userData = await registerUser(formData);
    if (userData.email) {
      setCurrentUser(userData);
      history.push("/");
    } else {
      if (userData.data.error.username) {
        setUserError(true);
      }
      if (userData.data.error.email) {
        setEmailError(true);
      }
      if (userData.data.error.password) {
        setPasswordError(true);
      }
    }
  };

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem("authToken");
    removeToken();
  };

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path="/login">
            <Login
              handleLogin={handleLogin}
              userError={userError}
              passwordError={passwordError}
              setUserError={setUserError}
              setPasswordError={setPasswordError}
            />
          </Route>
          <Route path="/register">
            <Register
              handleRegister={handleRegister}
              userError={userError}
              emailError={emailError}
              passwordError={passwordError}
              setUserError={setUserError}
              setEmailError={setEmailError}
              setPasswordError={setPasswordError}
            />
          </Route>
          <Route path="/">
            <MainContainer currentUser={currentUser} />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
