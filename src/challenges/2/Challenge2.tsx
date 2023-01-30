import styled from "./challenge-2.module.css";
import { useState, useEffect } from "react";

/* ==== Crear un sistema de filtros para búsqueda de personas 🔍🕵🏻‍♀️ ======= /
/   1. Se deben poner los siguientes checkboxes:                          /
/      a. Mayor de edad                                                   /
/      b. Hombre - Mujer                                                  /                                    
/      c. Solo correos con gmail                                          /
/      d. Solo gente no binaria                                           /                                     
/                                                                         /                                     
/   2. Solo se puede buscar con un filtro a la vez.                       /                                     
/   3. Mostrar la cantidad de resultados cada que se aplique un filtro.   /                                         
/   4. Card resultado debe mostrar todos los datos del usuario.          /                                         
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
    id: 0,
    name: "Dan",
    email: "dan@other.com",
    gender: "male",
    age: 28,
  },
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

// boxes:                          /
// /      a. Mayor de edad                                                   /
// /      b. Hombre - Mujer                                                  /
// /      c. Solo correos con gmail                                          /
// /      d. Solo gente

// const isMan
// const isGmail
// const isNonBinary
//{if (user.age > 17)}\

export const Challenge2 = () => {
  const [filterList, setFilterList] = useState(users);

  const arr = filterList.map((user) => {
    return (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>
          {user.gender},<b> {user.age}</b>
        </p>
        <hr></hr>
      </div>
    );
  });

  const applyFilter = (
    checked: boolean,
    option: "age" | "man" | "woman" | "email" | "no-binary"
  ) => {
    if (!checked) {
      setFilterList(users);
      return;
    }

    const newFilterApplied = users.filter((user) => {
      if (option === "age") return user.age > 17;
      if (option === "man") return user.gender === "male";
      if (option === "woman") return user.gender === "female";
      if (option === "email") return user.email.includes("gmail");
      if (option === "no-binary") return user.gender === "no-binary";
    });

    setFilterList(newFilterApplied);
  };

  return (
    <div>
      <h1>Taken</h1>
      <input
        onChange={(e) => applyFilter(e.target.checked, "age")}
        type="checkbox"
      />{" "}
      Mayor de Edad
      <input
        onChange={(e) => applyFilter(e.target.checked, "man")}
        type="checkbox"
      />{" "}
      Hombre
      <input
        onChange={(e) => applyFilter(e.target.checked, "woman")}
        type="checkbox"
      />{" "}
      Mujer
      <input
        onChange={(e) => applyFilter(e.target.checked, "email")}
        type="checkbox"
      />{" "}
      Solo Gmail
      <input
        onChange={(e) => applyFilter(e.target.checked, "no-binary")}
        type="checkbox"
      />{" "}
      No Binario
      <p>Actualmente {arr.length} personas cumplen con tu filtro</p>
      <div>{arr}</div>
    </div>
  );
};
