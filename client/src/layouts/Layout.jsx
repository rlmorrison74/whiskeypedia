import Header from "../components/Header";
import Nav from "../components/Nav";
import "../styles/layouts/layout.css";

export default function Layout({ children, currentUser, handleLogout }) {
  return (
    <div className="layout">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <Nav />
      {children}
    </div>
  );
}
