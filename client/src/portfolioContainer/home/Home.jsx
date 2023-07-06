import Profile from "./profile/Profile";
import Footer from "./footer/Footer";
import "./home.css";
export default function Home() {
  return (
    <div className="home-container">
      <Profile />
      <Footer />
    </div>
  );
}
