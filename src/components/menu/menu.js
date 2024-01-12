import React from "react";
import styles from "./menu.module.css"

const Menu = ({ items }) => {
  return (
    <div className={styles.sectioncenter}>
      {items.map((item) => {
        const { id, title, img, desc, price } = item;
        return (
          <article key={id} className={styles.menuitem}>
            <img src={img} alt={title} className={styles.photo} />
            <div className={styles.iteminfo}>
              <header>
                <h4>{title}</h4>
                <h4 className={styles.price}>${price}</h4>
              </header>
              <p className={styles.itemtext}>{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;