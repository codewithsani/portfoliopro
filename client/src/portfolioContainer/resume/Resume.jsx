import ScreenHeading from "../../utilities/screenHeading/ScreenHeading";
import { useState } from "react";
import "./resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "/education.svg" },
    { label: "Work History", logoSrc: "/work-history.svg" },
    { label: "Programming Skills", logoSrc: "/programming-skills.svg" },
    { label: "Projects", logoSrc: "/projects.svg" },
    { label: "Interests", logoSrc: "/interests.svg" },
  ];

  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 80 },
    { skill: "ReactJs", ratingPercentage: 80 },
    { skill: "Node.js", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 85 },
    { skill: "PHP", ratingPercentage: 80 },
    { skill: "Python", ratingPercentage: 70 },
    { skill: "C", ratingPercentage: 80 },
    { skill: "Java", ratingPercentage: 70 },
  ];

  const projectDetails = [
    {
      title: "Personal portfolio Website",
      duration: { fromDate: "07.2023", toDate: "08.2023" },
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place",
      subHeading: "Technologies Used:React Js and Bootstrap",
    },
    {
      title: "Game-Hub",
      duration: { fromDate: "05.2023", toDate: "06.2023" },
      description: "A GameH-Hub with all the necessary infos about each Game",
      subHeading: "Technologies Used:React Js and Chakra UI,REST API",
    },
    {
      title: "Ecommerce Website",
      duration: { fromDate: "06.2023", toDate: "07.2023" },
      description:
        "Amazon like Website in Backend and Frontend with payment method and admin dashboard",
      subHeading: "Mongo DB,Express Js,React Js,Node Js,Bootstap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Isfahan Universität,Iran,Isfahan"}
        subHeading={"Bachelor of Science in Elektronik"}
        fromDate={"10.2007"}
        toDate={"10.2013"}
      />
      <ResumeHeading
        heading={"Universität Stuttgart,Germany"}
        subHeading={"Masterstudium  in Elektrotechnik"}
        fromDate={"04.2015"}
        toDate={"10.2018"}
      />
      <ResumeHeading
        heading={"GPB Berlin,Germany"}
        subHeading={"Ausbildung Fachinformatik Anwendungsentwicklung"}
        fromDate={"12.2020"}
        toDate={"07.2022"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"Universität Stuttgart,Germany"}
        fromDate={"09.2015"}
        toDate={"03.2016"}
        subHeading={"Wissenschaftliche Mitarbeiter"}
      />
      <div className="experience-description">
        <span className="reume-description-text">
          Wissenschaftliche Mitarbeiter an Universität Stuttgart in Digital CMOS
          IC-DESIGN
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          -Entwerfen und entwickeln leistungsstarke, stromsparende, und
          kostengünstige integrierte Schaltkreise
        </span>

        <span className="resume-description-text">
          - Erstellen und pflegen Designdokumentationen. Simulieren Sie Entwürfe
          und behebeneventuell auftretende Probleme.
        </span>
        <span className="resume-description-text">
          - Neben dem Entwurf und der Entwicklung integrierter Schaltkreise als
          ein VLSI-Designingenieur auch habe ich Kenntnisse im Design, in der
          Simulation und im Layout analoger und digitaler Schaltkreise.
        </span>
      </div>
    </div>,
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetail, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetail.title}
          subHeading={projectDetail.subHeading}
          description={projectDetail.description}
          fromDate={projectDetail.duration.fromDate}
          toDate={projectDetail.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Ich liebe es, den Studenten in der Softwareentwicklung alles beizubringen, was ich gelernt habe"
      />
      <ResumeHeading
        heading="Klassische Musik"
        description="Das Konzert eines Sinfonieorchesters tut der Seele gut.
        Klassische Musik steigere zudem Konzentration, Gedächtnis,
        Kreativität und Tatkraft und beeinflusse das Immunsystem positiv."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };
  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        key={index}
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
      >
        <img
          src={window.location.origin + `${bullet.logoSrc}`}
          alt="B"
          className="bullet-logo"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div className="resume-container" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
