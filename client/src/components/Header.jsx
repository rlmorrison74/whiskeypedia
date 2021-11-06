import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import landingHeader from "../assets/images/whiskeybackground1.jpg";
import otherHeader from "../assets/images/whiskeybackground2.jpg";
import "../styles/components/header.css";

export default function Header({ currentUser, handleLogout }) {
  let location = useLocation();
  const [headerImage, setHeaderImage] = useState("");
  const [pageTitle, setPageTitle] = useState("");

  const image = () => {
    if (location.pathname === "/") {
      setHeaderImage(landingHeader);
    } else {
      setHeaderImage(otherHeader);
    }
  };

  const title = () => {
    if (location.pathname === "/") {
      setPageTitle("Welcome to Whiskeypedia");
    } else if (location.pathname === "/register") {
      setPageTitle("Sign Up");
    } else if (location.pathname === "/login") {
      setPageTitle("Sign In");
    } else if (location.pathname === "/contact") {
      setPageTitle("Contact");
    } else if (location.pathname === "/about") {
      setPageTitle("About");
    } else {
      setPageTitle("Forum");
    }
  };

  useEffect(() => {
    title();
    image();
  });

  return (
    <div className="header">
      <img src={headerImage} alt="whiskey glass" />
      <div className="userStatus">
        {currentUser ? (
          <div className="user">
            <p>Welcome, {currentUser.username}</p>
            <p onClick={handleLogout}>Logout</p>
          </div>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </div>
      <div className={location.pathname === '/' ? "title" : "titleh1div"}>
        <h1 className={location.pathname === '/' ? "" : "titleh1"}>{pageTitle}</h1>
      </div>
    </div>
  );
}
