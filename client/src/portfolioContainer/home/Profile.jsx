import Typical from "react-typical";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <a href="https://t.me/Armins88s">
              <i className="fa-brands fa-telegram"></i>
            </a>
            {/* <a href="#">
              <i className="fa-brands fa-square-whatsapp"></i>
            </a> */}
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
                    "Enthusiastic Dev 🔴",
                    1000,
                    "Full Stack Developer 💻",
                    1000,
                    "MERN Stack Developer 😎",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-togline">
                knock of building application with frontend and backend
                operation
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn btn-primary">
              {""}
              Hire Me {""}
            </button>
            <a href="Lebenslauf.pdf" download="Lebenslauf.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
