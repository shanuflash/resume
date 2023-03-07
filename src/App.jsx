import "./App.css";
import photo from "./assets/212220220044.jpg";

function App() {
  return (
    <div className="App">
      <div className="left box">
        <div className="container">
          <img
            // src="src/assets/212220220044.jpg"
            src={photo}
            alt="shanu-image"
            className="photo"
          />
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
          <div className="up-desc">Full Stack Developer</div>
        </div>
        <div className="container"></div>
      </div>
    </div>
  );
}

export default App;
