import "./AboutMe.css";

export const AboutMe = (props) => {
  return (
    <AboutMe className="aboutme">
      <h1 className="title">{props.title}</h1>
      {props.AboutMe && <p className="description">{props.description}</p>}
    </AboutMe>
  );
};
