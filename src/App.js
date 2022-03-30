import logo from "./logo.svg";
import "./style.css";
import imgSrc from "./imageInSrc.jpg";
import myVideo from "./myVideo.mp4";
function App() {
  return (
    <div className="App">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red mb-5">Your name here</h1>

        <img className="mb-5" src={imgSrc} />
        <br />
        <img src="/imageInPublic.jpg" />
        <br />

        <video width="320" height="240" controls>
          <source src={myVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
