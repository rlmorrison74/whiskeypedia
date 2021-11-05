import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/posts">Recent Posts</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </div>
  );
}
