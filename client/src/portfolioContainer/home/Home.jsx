import Profile from "./profile/Profile";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import "./home.css";
export default function Home(props) {
  return (
    <div className="home-container" id={props.id}>
      <Header />
      <Profile />
      <Footer />
    </div>
  );
}
