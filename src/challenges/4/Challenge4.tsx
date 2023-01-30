// funcion que toma dos argumentos que son los catetos, y dibuje el triangulo que e es la respuesta que es el area del trianglo

// area a por b sobre 2

// catetos menor o igual a diez y mayores de 0

// y voy a imprimir un triangulo en frontend que cuando le de inspeccionar elemento, se vea que mide los catetos por 10 en pixels. ese es el height de ese triangulo

// base por altura sobre dos
export const Challenge4 = () => {
  const drawTriangle = (a: number, b: number) => {
    if (a <= 10 && b <= 10 && a > 0 && b > 0) {
      return (
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: `${a * 10}px solid transparent`,
            borderRight: `${b * 10}px solid transparent`,
            borderBottom: `${a * 10}px solid red`,
          }}
        ></div>
      );
    } else {
      return "error";
    }
  };

  const triangleArea = (a: number, b: number) => {
    if (a <= 10 && b <= 10 && a > 0 && b > 0) {
      return (a * b) / 2;
    } else {
      return "error";
    }
  };

  const result = drawTriangle(7, 9);
  console.log(drawTriangle(5, 5));

  console.log(triangleArea(5, 5));

  return (
    <>
      <h1>{result}</h1>
    </>
  );
};
// Importar este componente en App.tsx.
