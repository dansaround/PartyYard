import "./App.css";
import { GameOfLife } from "./GameOfLife";
import { TextSide } from "./TextSide";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="layout">
          <TextSide />
          <GameOfLife />
        </div>
      </header>
    </div>
  );
}

export default App;
