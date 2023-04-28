// Imports svg files for social media images
import svgGitHub from "../images/github.svg";
import svgLinkedIn from "../images/linkedin.svg";


export default function Footer() {
  return (
    <footer>
      <h4>
        &copy; 2022&nbsp;
        <a
          href="https://www.fadumosoftware.org"
          target="_blank"
          rel="noreferrer"
        >
          Fadumo Software Solutions
        </a>
      </h4>
      <div className="socialMedia">
        <a href="https://github.com/FadumaD" target="_blank" rel="noreferrer">
          <img src={svgGitHub} alt="GitHub" />
        </a>
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noreferrer"
        >
          <img src={svgLinkedIn} alt="LinkedIn" />
        </a>
      </div>
    </footer>
  );
}
