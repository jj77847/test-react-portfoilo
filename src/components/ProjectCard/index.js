import "./ProjectCard.css";

export const ProjectCard = ({ title, description, link }) => {
  return (
    <div className="card">
      <div>{title}</div>
      <p>{description}</p>
      <image></image>
      <div>
        <a href={link}>Project Link</a>
      </div>
    </div>
  );
};
