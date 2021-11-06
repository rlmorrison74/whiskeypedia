import Header from "../components/Header";
import Nav from "../components/Nav";
import "../styles/layouts/layout.css";
import Footer from '../components/Footer'

export default function Layout({ children, currentUser, handleLogout }) {
  return (
    <div className="layout">
      <Header currentUser={currentUser} handleLogout={handleLogout} />
      <Nav />
      {children}
      <Footer />
    </div>
  );
}
