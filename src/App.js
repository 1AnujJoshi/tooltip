import Tooltip from "./Tooltip";
function App() {
  return (
    <div className="App">
      <Tooltip
        position="right"
        tooltipText="Thanks for hovering! I am a tooltip..."
      >
        <button className="btn">
          <h1>Hover Over Me !!!</h1>
        </button>
      </Tooltip>
    </div>
  );
}

export default App;
