import styled from "./challenge-2.module.css";

/* ==== Crear un sistema de filtros para búsqueda de personas 🔍🕵🏻‍♀️ ======= /
/   1. Se deben poner los siguientes checkboxes:                          /
/      a. Mayor de edad                                                   /
/      b. Hombre - Mujer                                                  /                                    
/      c. Solo correos con gmail                                          /
/      d. Solo gente no binaria                                           /                                     
/                                                                         /                                     
/   2. Solo se puede buscar con un filtro a la vez.                       /                                     
/   3. Mostrar la cantidad de resultados cada que se aplique un filtro.   /                                         
/   4. Carda resultado debe mostrar todos los datos del usuario.          /                                         
/ ====================================================================== */

interface User {
  id: number;
  name: string;
  age: number;
  email: string;
  gender: "male" | "female" | "no-binary";
}

const users: User[] = [
  {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz",
    gender: "male",
    age: 30,
  },

  {
    id: 2,
    name: "Ervin Howell",
    email: "Shanna@melissa.tv",
    gender: "male",
    age: 16,
  },
  {
    id: 3,
    name: "Clementine Bauch",
    email: "Nathan@gmail.com",
    gender: "female",
    age: 22,
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    email: "Julianne.OConner@kory.org",
    gender: "female",
    age: 17,
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    email: "Lucio_Hettinger@gmail.com",
    gender: "female",
    age: 29,
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    email: "Karley_Dach@jasper.info",
    gender: "no-binary",
    age: 27,
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    email: "Telly.Hoeger@gmail.com",
    gender: "male",
    age: 16,
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    email: "Sherwood@rosamond.me",
    gender: "male",
    age: 21,
  },
  {
    id: 9,
    name: "Glenna Reichert",
    email: "Chaim_McDermott@dana.io",
    gender: "female",
    age: 40,
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    email: "Rey.Padberg@karina.biz",
    gender: "no-binary",
    age: 33,
  },
];

export const Challenge2 = () => {
  return (
    <div>
      <input type="checkbox" />
    </div>
  );
};
