import imgBack from "../../images/mailz.jpeg";
import axios from "axios";
import { toast } from "react-toastify";
import load1 from "../../images/load2.gif";
import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import Typical from "react-typical";
import { useState } from "react";
import "./contactMe.css";

export default function ContactMe(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="main-container " id={props.id || ""}>
      <ScreenHeading title={"Contact Me"} subHeading={"Lets Keep in Touch"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["GET IN TOUCH 📧", 1000]} />
          </h2>
          <a href="https://t.me/Armins88s">
            <i className="fa-brands fa-telegram fa-xl"></i>
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Email Here!</h4>
            <img src={imgBack} alt="iamge not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={handleName} value={name} />
            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              type="text"
              onChange={handleEmail}
              value={email}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              type="text"
              onChange={handleMessage}
              value={message}
            />
            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={load1} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
