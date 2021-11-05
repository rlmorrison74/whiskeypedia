import { useLocation } from "react-router";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import landingHeader from "../assets/images/whiskeybackground1.jpg";
import otherHeader from "../assets/images/whiskeybackground2.jpg";

export default function Header({ currentUser, handleLogout }) {
  let location = useLocation();
  const [headerImage, setHeaderImage] = useState("");
  const [pageTitle, setPageTitle] = useState("");

  useEffect(() => {
    const image = () => {
      if (location.pathname === "/") {
        setHeaderImage(landingHeader);
      } else {
        setHeaderImage(otherHeader);
      }
    };
    image();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const title = () => {
      if (location.pathname === "/") {
        setPageTitle("Welcome to Whiskeypedia");
      } else if (location.pathname === "/register") {
        setPageTitle("Sign Up");
      } else if (location.pathname === "/login") {
        setPageTitle("Sign In");
      } else if (location.pathname === "/contact") {
        setPageTitle("Contact Us");
      } else if (location.pathname === "/about") {
        setPageTitle("About Us");
      } else {
        setPageTitle("Forum");
      }
    };
    title();
    // eslint-disable-next-line
  }, []);

  const setP = () => {
    if (location.pathname === "/") {
      return (
        <p>
          If you're here because you love to sip a glass, you're in the right
          place
        </p>
      );
    }
  };

  return (
    <div>
      <img src={headerImage} alt="whiskey glass" />
      <div className="userStatus">
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </div>
      <h1>{pageTitle}</h1>
      <div>{setP()}</div>
    </div>
  );
}
