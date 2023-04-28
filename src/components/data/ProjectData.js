// Imports the images for each project
import imgTechBlog from "../../images/tech-blog.jpg";
import imgECommerceBackend from "../../images/e-commerce-back-end.jpg";
import imgEmployeeTracker from "../../images/employee-tracker.jpg";
import imgWeatherDashboard from "../../images/weather.png";
import imgCodingQuiz from "../../images/quiz.png";
import imgNoteTaker from "../../images/note-taker.jpg";
import imgReadmeGenerator from "../../images/readme-generator.jpg";
import imgWorkDayScheduler from "../../images/work-day-scheduler.jpg";
import imgPasswordGenerator from "../../images/password-generator.jpg";
import imgPortfolio from "../../images/portfolio.jpg";
import imgReactPortfolio from "../../images/react-portfolio.jpg";
;


export const projects = [

  {
    title: "React Portfolio",
    image: imgReactPortfolio,
    description:
      " The purpose of this challenge is to build a portfolio using React and Syntactically Awesome Style Sheets.  It is a single-page application that meets the progressive web application (PWA) criteria.",
    technologies: "React & SASS",
    GitHubRepo: "https://github.com/dpk5e7/react-portfolio/",
  },

  {
    title: "Tech Blog",
    image: imgTechBlog,
    description:
      "The purpose of this challenge is to build a CMS-style blog site following the MVC paradigm, where developers can publish their blog posts and comment on other developers' posts as well.",
    technologies:
      "Node.js, Express.js, MySQL, Sequelize, Handlebars.js, & express-session",
    GitHubRepo: "https://github.com/dpk5e7/tech-blog",
  },
  {
    title: "e-Commerce Back End",
    image: imgECommerceBackend,
    description:
      " The purpose of this challenge is to build a back end for a generic e-commerce site using one-to-many and many-to-many database relationships.",
    technologies: "Node.js, Express.js, MySQL, & Sequelize",
    GitHubRepo: "https://github.com/FadumaD/Back-end-13",
  },
  {
    title: "Employee Tracker",
    image: imgEmployeeTracker,
    description:
      "The purpose of this challenge is to build a command-line application to manage a company's employee database.",
    technologies: "Node.js, Inquirer v8.2.4, dotenv, & MySQL",
    GitHubRepo: "https://github.com/FadumaD/employeetrackerapp-12",
  },
  {
    title: "Note Taker",
    image: imgNoteTaker,
    description:
      "The purpose of this challenge is to build a note taker application to save and retreive data from a JSON file.",
    technologies: "Node.js, Express.js",
    GitHubRepo: "https://github.com/FadumaD/notetaking-c11",
  },
  
  {
    title: "Readme Generator",
    image: imgReadmeGenerator,
    description:
      " The purpose of this challenge is to build a GitHub README generator. using your terminal. Its a professional grade README file",
    technologies: "Node.js & Inquirer v8.2.4",
    GitHubRepo: "https://github.com/FadumaD/ReadmeGenerater-9",
  },
  {
    title: "Weather Dashboard",
    image: imgWeatherDashboard,
    description:
      "The purpose of this challenge is to build a weather dashboard that calls the OpenWeather API.",
    technologies: "HTML, CSS, Moment.js, Bootstrap 5.2, & OpenWeather API",
    GitHubRepo: "https://github.com/FadumaD/WeatherApp-6",
  },
  {
    title: "Work Day Scheduler",
    image: imgWorkDayScheduler,
    description:
      "Plan your day with a  work day scheduler, it has all the work hours and the day and time change automatically. You can save notes and to do things",
    technologies: "HTML, CSS, jQuery, Moment.js & Bootstrap 5.2",
    GitHubRepo: "https://github.com/FadumaD/DailyPlanner-5",
  },
  {
    title: "Coding Quiz",
    image: imgCodingQuiz,
    description:
      "This was a project where I created a quiz about coding and if you get a question wrong you lost seconds on the time",
    technologies: "HTML, CSS, & Javascript",
    GitHubRepo: "https://github.com/FadumaD/CodeQuiz-4",
  },
  {
    title: "Password Generator",
    image: imgPasswordGenerator,
    description:
      "You had to create a password generater at random with the correct amount of charcaters and symbols",
    technologies: "Javascript",
    GitHubRepo: "https://github.com/FadumaD/Week3_UoB_Assignment",
  },
  {
    title: "Portfolio",
    image: imgPortfolio,
    description:
      " The purpose of this challenge is to build a portfolio.",
    technologies: "HTML & CSS",
    GitHubRepo: "https://github.com/FadumaD/React-Portfolio",
  },

];
