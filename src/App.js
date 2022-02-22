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
    description: "Batman 66 inspired quiz using JavaScript, HTML and CSS",
    link: "https://github.com/jj77847/code-quiz",
  },
  {
    title: "Work Day Scheduler",
    description:
      "Calendar application that allows the user to save events for each hour of the day.",
    link: "https://github.com/jj77847/work-day-scheduler/tree/dev",
  },
  {
    title: "Weather Dashboard",
    description:
      "A simple web application that allows users to search for a city to get the current weather and 5 day forecast. Locations that users previously looked up will be saved in their local storage.",
    link: "https://github.com/jj77847/weather-dashboard/tree/dev",
  },
  {
    title: "Sound Art Smart",
    description:
      "A quick visual questionnaire to discover artworks based on your interests. Sound Art Smart guides the user through a short series of image-based selections in order to present a random assortment of up to 6 artworks matching their specified interests. The user can then learn more by viewing the artwork information pages which include the work's title, artist, date, medium and much more. Should the user want to come back later, they can save their favourite artworks. As an added bonus, users can view their favourites in a styled gallery page--a one-of-a-kind exhibit all their own!",
    link: "https://github.com/jj77847/sound-art-smart/",
  },
  {
    title: "Updated Portfolio",
    description:
      "Portfolio updated with bootstrap, jquery, html, css and javascript.",
    link: "https://github.com/jj77847/updated-portfoilo/tree/dev2/",
  },
  {
    title: "Good Readme Generator",
    description:
      "I have created a README generator using Node.js with the inquirer package. This allows a user to go through a series of terminal prompts and the program creates a markdown file using the answers collected from the user.",
    link: "https://github.com/jj77847/good-readme-generator/",
  },
  {
    title: "Team Profile Generator",
    description:
      "A software engineering team-generator command line application. The application will prompt the user for information about the team manager and then information about the team members. The user can input any number of team members, and they may be a mix of engineers and interns. Then an html page is created that can be viewed in a web browser.",
    link: "https://github.com/jj77847/team-profile-generator/",
  },
  {
    title: "Note Taker",
    description:
      "I've created an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file. I've also deployed the application to Heroku.",
    link: "https://github.com/jj77847/updated-note-taker/",
  },
  {
    title: "Employee Management System",
    description:
      "Company's employee database, using Node.js, Inquirer, and MySQL.",
    link: "https://github.com/jj77847/updated-employee-tracker/",
  },
  {
    title: "E-Commerse Backend",
    description:
      "I've configured a working Express.js API to use Sequelize to interact with a MySQL database.",
    link: "https://github.com/jj77847/e-commerce-back-end/",
  },
  {
    title: "Tech Blog",
    description:
      "I built a CMS-style blog site similar to a Wordpress site, where developers can publish their blog posts and comment on other developers’ posts also deploy it to Heroku. The app follows the MVC paradigm in its architectural structure, using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.",
    link: "https://github.com/jj77847/updated-tech-blog/",
  },
  {
    title: "Regex Tutorial",
    description:
      "create a tutorial that explains how a specific regular expression, or regex, functions by breaking down each part of the expression and describing what it does.",
    link: "https://github.com/jj77847/regex-tutorial/",
  },
  {
    title: "Social Networking API",
    description:
      "Build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.  I'm using Express.js for routing, a MongoDB database, and the Mongoose ODM. In addition to using the Express.js and Mongoose packages.  I'm going to use a JavaScript date library or the native JavaScript Date object to format timestamps.",
    link: "https://github.com/jj77847/social-network-api/",
  },
  {
    title: "React Portfolio",
    description:
      "React portfolio using the Updated-Portfolio as template for improving functionally",
    link: "https://github.com/jj77847/test-react-portfoilo/",
  },
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
  {
    title: "Project 5",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, eligendi repudiandae? Cum modi eos earum minus, beatae, obcaecati officiis facilis, et neque reiciendis officia consequatur quam? Sint, aspernatur? Quasi, commodi!",
    link: "https://www.google.co.uk/",
  },
  {
    title: "Project 6",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore, eligendi repudiandae? Cum modi eos earum minus, beatae, obcaecati officiis facilis, et neque reiciendis officia consequatur quam? Sint, aspernatur? Quasi, commodi!",
    link: "https://www.google.co.uk/",
  },
  {
    title: "Project 7",
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
