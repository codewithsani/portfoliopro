import "./screenHeading.css";

export default function ScreenHeading(props) {
  return (
    <div className="heading-container">
      <div className="screen-heading">{props.title}</div>
      {props.subheading ? (
        <div className="screen-sub-heading">
          <span>{props.subheading}</span>
        </div>
      ) : (
        <div></div>
      )}
      <div className="heading-separator">
        <div className="separoter-line">
          <div className="separator-blob">
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
