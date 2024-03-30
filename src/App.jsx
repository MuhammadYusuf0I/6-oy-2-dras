import data from "./data/data.json";
import "./App.css";
import Books from "./companents/Books";

function App() {
  return (
    <>
      <div className="container">
        <Books data={data} />
      </div>
    </>
  );
}

export default App;
