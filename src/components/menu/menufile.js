import React, { useState } from "react";
import Categories from "./category";  // Adjust the filename based on your actual file name
import items from "../menu/menudata";
import Menu from "./menu";  // Adjust the filename based on your actual file name
import styles from "./menu.module.css";
import Navbar from "../navbar/navbar"


const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Menufile = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [activeCategory, setActiveCategory] = useState("");
  const [categories] = useState(allCategories);

  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === "all") {
      setMenuItems(items);
    } else {
      const newItems = items.filter((item) => item.category === category);
      setMenuItems(newItems);
    }
  };

  return (
    <main>
      <section className={styles.menusection}>
        <Navbar/>
        <div className={styles.title}>
          <h2>Menu List</h2>
          <div className={styles.underline}></div>
        </div>
        <Categories
          categories={categories}
          activeCategory={activeCategory}
          filterItems={filterItems}
        />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Menufile;
