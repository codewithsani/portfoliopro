import "./screenHeading.css";

export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">{props.title}</div>
      {props.subHeading ? (
        <div className="screen-sub-heading">
          <span>{props.subHeading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-separator">
        <div className="separator-line">
          <div className="separator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
