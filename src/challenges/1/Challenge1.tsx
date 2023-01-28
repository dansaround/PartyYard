import styled from "./challenge-1.module.css";

/* ========== Crear un render de una lista de artículos de supermercado con el array `marketCard` 😬🛒 ======== /
/   1. La lista debe ser scrooleable horizontalmente                                                           /
/   2. Debe tener un título que diga "Every day amenities", y al lado un texto que diga la cantidad            /
/   de items en total (ej: "6 artículos")                                                                      /
/   3. Solo se deben mostrar los primeros 3 items, abajo de la lista debe haber un botón que diga "See all",   /
/   al presionarlo se deben mostrar todos los items                                                            /
============================================================================================================= */

const marketCard: { id: number; name: string; image: string }[] = [
  {
    id: 1,
    name: "Tomate",
    image:
      "https://images.rappi.com/products/2092563196-1604688068579.png?d=136x136&e=webp",
  },
  {
    id: 2,
    name: "Banano",
    image:
      "https://images.rappi.com/products/bd056035-1510-42a0-9ef8-0529639d1b1e.jpg?d=136x136&e=webp",
  },
  {
    id: 3,
    name: "Naranja",
    image:
      "https://images.rappi.com/products/2092565224-1604688092524.png?d=136x136&e=webp",
  },
  {
    id: 4,
    name: "Aguacate",
    image:
      "https://images.rappi.com/products/2092563113-1604688063503.png?d=136x136&e=webp",
  },
  {
    id: 5,
    name: "Uva",
    image:
      "https://images.rappi.com/products/1278226-1591710556967.jpg?d=136x136&e=webp",
  },
  {
    id: 6,
    name: "Postobon de uva 2L",
    image:
      "https://images.rappi.com/products/188721350676_rssswnkfdzlr_599194144852_sbbpxelhuulq_17286_1.png?d=136x136&e=webp",
  },
  {
    id: 7,
    name: "Arroz Diana 1k",
    image:
      "https://images.rappi.com/products/329245221491_xpsvrikjjvve_336122715127_vayzkyjshbsd_15046_1.png?d=136x136&e=webp",
  },
  {
    id: 8,
    name: "Macarrón con queso",
    image:
      "https://images.rappi.com/products/ed1feee9-4b1e-4ddf-9c9b-9b13734a0ccb.png?d=136x136&e=webp",
  },
  {
    id: 9,
    name: "Alto pipí de plástico",
    image:
      "https://images.rappi.com/products/2093462479-1619558254861.jpg?d=136x136&e=webp",
  },
  {
    id: 10,
    name: "Pin para el culo con pelusita",
    image:
      "https://images.rappi.com/products/1658159900541_1658159896685.png?d=136x136&e=webp",
  },
];

export const Challenge1 = () => {
  return <div className={styled.mainContainer}>{/* Your code here */}</div>;
};

// Importar este componente en App.tsx.
