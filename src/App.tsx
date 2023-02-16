import "./App.css";
import { Challenge1 } from "./challenges/1/Challenge1";
import { Challenge2 } from "./challenges/2/Challenge2";
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
