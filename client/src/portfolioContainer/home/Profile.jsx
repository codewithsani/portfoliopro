import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://t.me/Armins88s">
                <i className="fa-brands fa-telegram fa-xl"></i>
              </a>
              {/* <a href="#">
              <i className="fa-brands fa-square-whatsapp"></i>
            </a> */}
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello, I&apos;m <span className="highlighted-text">Saied</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic 🔥",
                    1000,
                    "Full Stack 💻",
                    1000,
                    "MERN 🌎",
                    1000,
                    "Developer 😎",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                knock of building application with frontend and backend
                operation
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me {""}
            </button>
            <a href="Lebenslauf.pdf" download="Lebenslauf.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
