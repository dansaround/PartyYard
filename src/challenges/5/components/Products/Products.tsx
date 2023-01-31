import { allProducts as data, Food } from "../../Data";
import styled from "./Products.module.css";
import { useState } from "react";

//create a function handleAdd that adds the product to the cart and removes it from the list
//create a function handleRemove that removes the product from the cart and adds it to the list

// const handleRemove = (id) => {
//   const product = cart.find((product) => product.id === id);
//   const newProducts = [...allProducts, product];
//   setAllProducts(newProducts);
//   const newCart = cart.filter((product) => product.id !== id);
//   setCart(newCart);
// };

function Products() {
  const [selectedItems, setSelectedItems] = useState<Food[]>([]);
  const [itemsList, setItemList] = useState<Food[]>(data);

  const handleAdd = (food: Food) => {
    setItemList(itemsList.filter((f) => f.id !== food.id));
    setSelectedItems((prevSelectedItems) => [...prevSelectedItems, food]);
  };

  const handleRemove = (food: Food) => {
    setSelectedItems(selectedItems.filter((f) => f.id !== food.id));
    setItemList([...itemsList, food]);
  };

  const showProducts = itemsList.map((food) => (
    <div className={styled.card} key={food.id}>
      <div className={styled.listCard}>
        <span>
          <h1>{food.name}</h1> <p>{food.price}</p>
        </span>
        <img src={food.image}></img>
        <aside>
          <button className={styled.buttonMore} onClick={() => handleAdd(food)}>
            +
          </button>
          <button
            className={styled.buttonLess}
            onClick={() => handleRemove(food)}
          >
            -
          </button>
        </aside>
      </div>
    </div>
  ));

  const showSelected = selectedItems.map((food) => (
    <div className={styled.card} key={food.id}>
      <div className={styled.listCard}>
        <span>
          <h1>{food.name}</h1> <p>{food.price}</p>
        </span>
        <img src={food.image}></img>
        <aside>
          <button className={styled.buttonMore} onClick={() => handleAdd(food)}>
            +
          </button>
          <button
            className={styled.buttonLess}
            onClick={() => handleRemove(food)}
          >
            -
          </button>
        </aside>
      </div>
    </div>
  ));

  return (
    <div className={styled.mainContainer}>
      <header className={styled.header}>
        <h1>Lista de Compras</h1>
        <p>{data.length} artículos</p>
      </header>
      <div className={styled.listContainer}> {showProducts}</div>
      <hr></hr>
      <div className={styled.header}>
        <h1> Productos Seleccionados</h1>
        <p>{selectedItems.length} artículos en el carrito</p>
      </div>
      <div className={styled.listContainer}> {showSelected}</div>
    </div>
  );
}

export default Products;
