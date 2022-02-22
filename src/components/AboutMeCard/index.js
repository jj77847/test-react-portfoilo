import "./AboutMeCard.css";

export const AboutMeCard = ({ title, description }) => {
  return (
    <div className="aboutmecard">
      <div>{title}</div>
      <p>{description}</p>
    </div>
  );
};
