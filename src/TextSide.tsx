import styled from "./GameOfLife.module.css";

export const TextSide = () => {
  return (
    <div className={styled.textSideContainer}>
      <h1>Juego de la Vida</h1>
      <p>
        Es un juego de <b>simulación</b> celular que <b>simula</b> la evolución
        de una población de células en un tablero de juego.
      </p>
    </div>
  );
};
