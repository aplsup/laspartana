import React from "react";
import { GetStaticProps, InferGetStaticPropsType } from 'next'

import styles from './Menu.module.css'

import Header from "../../components/Header";
import menu, { Menu as IMenu, Pizza, Tag } from "../../data/menu";
import Price from "../../components/Price";

export const getStaticProps: GetStaticProps = async () => {
  const staticMenu: IMenu = menu;
  return {
    props: {
      menu: staticMenu
    }
  }
}

const alphabeticalSorter = (a: Pizza, b: Pizza) => {
  let pizzaOne = a.name.toLowerCase();
  let pizzaTwo = b.name.toLowerCase();
  if (pizzaOne > pizzaTwo) return 1;
  if (pizzaTwo > pizzaOne) return -1;
  return 0;
}

const PizzaComponent: React.FunctionComponent<{pizza: Pizza}> = ({pizza}) => {
  return <div key={pizza.name}
              className={styles.menuItem}>
    <div className={styles.menuItemRow}>
      <div className={styles.menuItemName}>
        🍕 {pizza.name}
      </div>
      <div className={styles.menuItemPrice}>
        <Price price={pizza.price}/>
      </div>
    </div>
    {pizza.ingredients && pizza.ingredients.length > 0 &&
    <div className={styles.menuItemIngredients}>
      {pizza.ingredients.join(", ")}
    </div>}
  </div>;
}

function Menu({menu}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
      <div className={styles.container}>
        <Header subtitle={"Menu"}/>
        <div className={styles.main}>
          <section>
            <h1>Pizze Rosse</h1>
            <div className={styles.menuContainer}>
              {menu.pizze
                  .filter((pizza: Pizza) => pizza.tags?.includes(Tag.ROSSA))
                  .sort(alphabeticalSorter)
                  .map((pizza: Pizza) => <PizzaComponent pizza={pizza}/>)}
            </div>
          </section>
          <section>
            <h1>Pizze Bianche</h1>
            <div className={styles.menuContainer}>
              {menu.pizze
                  .filter((pizza: Pizza) => pizza.tags?.includes(Tag.BIANCA))
                  .sort(alphabeticalSorter)
                  .map((pizza: Pizza) => <PizzaComponent pizza={pizza}/>)}
            </div>
          </section>
          <section>
            <h1>Pizze New</h1>
            <div className={styles.menuContainer}>
              {menu.pizze
                  .filter((pizza: Pizza) => pizza.tags?.includes(Tag.NUOVE))
                  .sort(alphabeticalSorter)
                  .map((pizza: Pizza) => <PizzaComponent pizza={pizza}/>)}
            </div>
          </section>
        </div>
      </div>
  )
}

export default Menu;
