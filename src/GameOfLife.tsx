import produce from "immer";
import { useEffect, useReducer, useState } from "react";
import styled from "./GameOfLife.module.css";

// It can be greater than you can imagine
// const COSMOS_SIZE = 100;
const WORLD_SIZE_X = 20;
const LIVE_CHANCE = 0.2;

export const GameOfLife = () => {
  const [universe, setUniverse] = useState<number[][]>([]);
  const [parallelUniverse, setParallelUniverse] = useState<number[][]>([]);
  const [livesCoordinates, setLivesCoordinates] = useState<number[][]>([]);
  const [isLiving, setIsLiving] = useState<boolean>(false);
  const [tempInterval, setTempInterval] = useState<any>();

  // const [universe, dispatch] = useReducer(reducer, initialState);

  const generateNewWorld = () => {
    const isAlive = () => Math.random() < LIVE_CHANCE;

    let arr: number[][] = [];
    let row = [];

    for (let i = 0; i < WORLD_SIZE_X; i++) {
      for (let j = 0; j < WORLD_SIZE_X; j++) {
        row.push(isAlive() ? 1 : 0);
      }

      arr.push(row);
      row = [];
    }

    setUniverse(arr);
    setLivesCoordinates((prev) => [...prev, [0, 0]]);
  };

  const initializeLife = () => {
    // Las instrucciones de creación
    let arr = [];
    for (let i = 0; i < WORLD_SIZE_X; i++) {
      arr[i] = Array(WORLD_SIZE_X).fill(0);
    }

    // Empiza la vida
    // dispatch({ type: "newGeneration", payload: arr });
    setUniverse(arr);
    setParallelUniverse(arr);
  };

  useEffect(() => {
    // El hacedor de la vida
    initializeLife();
  }, []);

  const giveLifeTo = (x: number, y: number) => {
    setLivesCoordinates((prev) => [...prev, [x, y]]);

    let arr = universe;
    arr[x][y] = 1;
    // dispatch({ type: "newGeneration", payload: arr });
    setUniverse(arr);
    setParallelUniverse(arr);
    // aQuickBlink();
  };

  const countNeighbours = (x: number, y: number) => {
    let count = 0;
    if (x >= 1) {
      if (universe[x - 1][y - 1] === 1) count++;
      if (universe[x - 1][y] === 1) count++;
      if (universe[x - 1][y + 1] === 1) count++;
    }

    if (x < WORLD_SIZE_X - 1) {
      if (universe[x + 1][y - 1] === 1) count++;
      if (universe[x + 1][y] === 1) count++;
      if (universe[x + 1][y + 1] === 1) count++;
    }

    if (y >= 1) {
      if (universe[x][y - 1] === 1) count++;
    }

    if (y < WORLD_SIZE_X - 1) {
      if (universe[x][y + 1] === 1) count++;
    }

    return count;
  };

  const getNextGeneration = () => {
    for (let i = 0; i < WORLD_SIZE_X; i++) {
      for (let j = 0; j < WORLD_SIZE_X; j++) {
        const currentCell = universe[i][j];
        const neighbours = countNeighbours(i, j);

        // Si la célula está viva
        if (!currentCell && neighbours === 3) {
          // Si tiene 3 vecinos, nace
          const ramParallel = universe;
          ramParallel[i][j] = 1;
          setUniverse(ramParallel);
          setLivesCoordinates((prev) => [...prev, [i, j]]);
        }

        // Si tiene menos de 2 vecinos, muere de soledad
        // Si tiene más de 3 vecinos, muere de sobrepoblación
        if (currentCell && (neighbours < 2 || neighbours > 3)) {
          const ramParallel = universe;
          ramParallel[i][j] = 0;
          setUniverse(ramParallel);
          setLivesCoordinates((prev) => [...prev, [i, j]]);
        }

        // Si tiene 2 o 3 vecinos, sobrevive
        if (currentCell && (neighbours === 2 || neighbours === 3)) {
          const ramParallel = universe;
          ramParallel[i][j] = 1;
          setUniverse(ramParallel);
          setLivesCoordinates((prev) => [...prev, [i, j]]);
        }
        // setLivesCoordinates((prev) => [...prev, [i, j]]);

        // Si tiene menos de 2 vecinos, muere de soledad
        // Si tiene más de 3 vecinos, muere de sobrepoblación
        // Si tiene 2 o 3 vecinos, sobrevive
      }
    }
  };

  const liveBegin = () => {
    setIsLiving(true);
    setTempInterval(
      setInterval(() => {
        getNextGeneration();
      }, 100)
    );
  };

  const endLife = () => {
    setIsLiving(false);
    const newInterval = clearInterval(tempInterval);
    setTempInterval(newInterval);
  };

  return (
    <div className={styled.cosmos}>
      {/* <img src="./rym.jpg" alt="aaa" className={styled.background} /> */}
      {/* <button onClick={getNextGeneration}>Next Generation</button>
      <button onClick={liveBegin}>Live begin</button> */}
      {/* <h1>Game of Life</h1> */}

      <div className={styled.graphic}>
        <div className={styled.image}>
          <div className={styled.glass}>
            {universe.map((row: number[], rowIndex: number) => (
              <div
                style={{ gridTemplateColumns: `repeat(${WORLD_SIZE_X}, 25px)` }}
                className={styled.universe}
              >
                {row.map((cell: number, cellIndex: number) => (
                  // Se materializa la  vida
                  <div
                    onClick={() => giveLifeTo(rowIndex, cellIndex)}
                    className={styled.cell}
                    style={{
                      backgroundColor: cell ? "#7fffd4" : "transparent",
                    }}
                  ></div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className={styled.buttonsSection}>
          <button onClick={generateNewWorld}>Generar</button>
          <button onClick={isLiving ? endLife : liveBegin}>
            {isLiving ? "Pausar" : "Empezar"}
          </button>
        </div>
      </div>
    </div>
  );
};
