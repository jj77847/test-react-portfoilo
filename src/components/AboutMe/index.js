import { AboutMeCard } from "../AboutMeCard";
import "./AboutMe.css";

export const AboutMe = ({ aboutme }) => {
  return (
    <section>
      <h3 className="title">About Me</h3>

      <div className="aboutmecard">
        {aboutme.map((aboutme, index) => (
          <AboutMeCard {...aboutme} key={index} />
        ))}
      </div>
    </section>
  );
};
