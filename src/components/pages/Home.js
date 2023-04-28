// Import my picture
import headshot from "../../images/Dan.jpg";

// Builds the component to show my headshot and a short bio.
export default function Home() {
  return (
    <>
      <aside>
        <img src={headshot} alt="Fadumo" />
      </aside>
      <div className="sections">
        <section id="About">
          <h2>About Me</h2>
          <p>
             Hi I'm a 21 year old full stack develop student. 
          </p>
          <p>
          More about me : I have 6 sibling, I’m the third eldest. I love to watch Tv shows, some of my favourite are Grey’s anatomy and Game of Thrones. I have a huge sweet tooth, which explains the background of the website
          </p>
          <p>
           This portfolio shows my journey throughout my time learning new skills and application. I use VS code and GitHub to help me develop my code and projects and bring them to life. I was very young when I grew font and curious of technology and started to play with different types of code to become more skilled ie; HTML, JavaScipt and CSS along with many more. 
          </p>
        </section>
      </div>
    </>
  );
}
