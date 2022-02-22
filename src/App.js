import { Header } from "./components/Header";
import "./App.css";
import { Projects } from "./components/Projects";

const projectsFromApi = [
  {
    title: "Project 1",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, eligendi repudiandae? Cum modi eos earum minus, beatae, obcaecati officiis facilis, et neque reiciendis officia consequatur quam? Sint, aspernatur? Quasi, commodi!",
    link: "https://www.google.co.uk/",
  },
  {
    title: "Project 2",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, eligendi repudiandae? Cum modi eos earum minus, beatae, obcaecati officiis facilis, et neque reiciendis officia consequatur quam? Sint, aspernatur? Quasi, commodi!",
    link: "https://www.google.co.uk/",
  },
  {
    title: "Project 3",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, eligendi repudiandae? Cum modi eos earum minus, beatae, obcaecati officiis facilis, et neque reiciendis officia consequatur quam? Sint, aspernatur? Quasi, commodi!",
    link: "https://www.google.co.uk/",
  },
  {
    title: "Project 4",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, eligendi repudiandae? Cum modi eos earum minus, beatae, obcaecati officiis facilis, et neque reiciendis officia consequatur quam? Sint, aspernatur? Quasi, commodi!",
    link: "https://www.google.co.uk/",
  },
];

const App = (props) => {
  return (
    <div>
      <Header title="Jonathan Jefferies" subTitle="Full Stack Developer" />
      <main>
        <Projects projects={projectsFromApi} />
      </main>
    </div>
  );
};

export default App;
