import "./App.css";
import photo from "./assets/212220220044.jpg";
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <div className="blur"></div>
      <div className="left box">
        <div className="container">
          <img src={photo} alt="shanu-image" className="photo" />
          <div className="intro">
            Passionate information technology student, Seeking to use my
            existing skills and my eagerness to learn in to design innovative,
            cost-effective software solutions. Prolific, designer and full stack
            web developer with a passion for design and performance.
          </div>
        </div>
      </div>
      <div className="right box">
        <div className="container up">
          <div className="up-title">
            <span style={{ fontWeight: "700" }}>Shanu S</span>
            <span style={{ fontWeight: "200" }}>|</span>
            <span style={{ fontWeight: "500" }}>B. Tech. IT</span>
          </div>
          <div className="up-desc">Full Stack Web Developer</div>
        </div>
        <div className="container main">
          <div className="topic">
            <div className="title">Education:</div>
            <div className="content">
              <div className="edu1">
                <div className="edu-title">
                  High School, Vani Vidyalaya, Chennai
                </div>
                <div className="edu-desc">2008 – 2020 | X: 84%, XII: 82%</div>
              </div>
              <div className="edu2">
                <div className="edu-title">
                  B. Tech. IT, Saveetha Engineering College, Chennai
                </div>
                <div className="edu-desc">2020 – Present | CGPA: 8.2</div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="title">Skills:</div>
            <div className="content">
              <div className="skill">
                <div className="skill-icon">
                  <FaReact style={{ color: "#61DBFB" }} className="icon" />
                </div>
                <div className="skill-content">
                  <div className="skill-title">React</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "70%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <FaJs style={{ color: "#F0DB4F" }} className="icon" />
                </div>
                <div className="skill-content">
                  <div className="skill-title">JavaScript</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "50%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <FaHtml5 style={{ color: "#e34c26" }} className="icon" />
                </div>
                <div className="skill-content">
                  <div className="skill-title">HTML</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "80%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="skill">
                <div className="skill-icon">
                  <FaCss3Alt style={{ color: "#2965f1 " }} className="icon" />
                </div>
                <div className="skill-content">
                  <div className="skill-title">CSS</div>
                  <div className="skill-progress">
                    <div className="progress-track">
                      <div
                        className="progress-thumb"
                        style={{ width: "60%" }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="topic">
            <div className="title">Tools:</div>
            <div className="content">Hello</div>
          </div>
          <div className="topic">
            <div className="title">Projects:</div>
            <div className="content">Hello</div>
          </div>
          <div className="topic">
            <div className="title">Awards:</div>
            <div className="content">Hello</div>
          </div>
          <div className="topic">
            <div className="title">Certification:</div>
            <div className="content">Hello</div>
          </div>
          <div className="topic">
            <div className="title">Language:</div>
            <div className="content">Hello</div>
          </div>
          <div className="topic">
            <div className="title">Hobbier:</div>
            <div className="content">Hello</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
