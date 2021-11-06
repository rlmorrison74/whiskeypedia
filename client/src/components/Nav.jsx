import { NavLink } from "react-router-dom";
import "../styles/components/nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <NavLink className="navlink" to="/">Home</NavLink>
      <NavLink className="navlink" to="/posts">Recent Posts</NavLink>
      <NavLink className="navlink" to="/about">About</NavLink>
      <NavLink className="navlink" to="/contact">Contact</NavLink>
    </div>
  );
}
