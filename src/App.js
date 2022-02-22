import { Header } from "./components/Header";
import "./App.css";
import { Projects } from "./components/Projects";

const projectsFromApi = [
  {
    title: "Accessability Website",
    image: "./public/assets/img/marketing-screenshot-1.png",
    description:
      "Tasked with refactoring a marketing website focusing on accessability and readability in the html and css.",
    link: "https://github.com/jj77847/marketing-acessability-website/tree/dev",
  },
  {
    title: "Password Generator",
    description:
      "In this project I have created a README generator using Node.js with the inquirer package. This allows a user to go through a series of terminal prompts and the program creates a markdown file using the answers collected from the user",
    link: "https://github.com/jj77847/good-readme-generator",
  },
  {
    title: "Portfolio",
    description:
      "Portfolio of Jonathan Jefferies using example websites from GitHub, Codepen, Freecodecamp and Futurelearn.",
    link: "https://github.com/jj77847/portfolio/tree/dev",
  },
  {
    title: "Code Quiz",
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
  {
    title: "Project 4",
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
  {
    title: "Project 4",
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
  {
    title: "Project 4",
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
  {
    title: "Project 4",
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
  {
    title: "Project 4",
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
  {
    title: "Project 4",
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
  {
    title: "Project 4",
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
  {
    title: "Project 4",
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
  {
    title: "Project 4",
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
