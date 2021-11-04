import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Layout({ children, currentUser, handleLogout }) {
  return (
    <div>
      <Header currentUser={currentUser} handleLogout={handleLogout}/>
      <Nav />
      {children}
    </div>
  );
}
