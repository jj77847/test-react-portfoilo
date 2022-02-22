import "./Header.css";

export const Header = (props) => {
  return (
    <header className="header">
      <h1 className="title">{props.title}</h1>
      {props.subTitle && <h2 className="title">{props.subTitle}</h2>}
    </header>
  );
};
