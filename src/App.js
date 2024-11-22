import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"><Counter /></header> */}
      <iframe
        id="fullscreenIframe"
        src="http://localhost:4000/tasks"
        title="Fullscreen iFrame"
      ></iframe>
    </div>
  );
}

export default App;
