import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function Layout({ children, currentUser, handleLogout }) {
  return (
    <div>
      <header>
        <h1>Whiskeypedia</h1>
        {currentUser ? (
          <div>
            <p>{currentUser.username}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/login">Login/Register</Link>
        )}
      </header>
      <Nav />
          {children}
    </div>
  );
}
