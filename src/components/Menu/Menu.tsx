import Link from "next/link";
import menu from "./menu.json";
import styles from "./menu.module.scss";
const Menu = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav__container}>
        {menu.map((item, index) => {
          return (
            <li key={index} className={styles.nav__item}>
              <Link href={item.location}>
                <a
                  title={item.name}
                  className={styles.nav__item__link}
                  aria-label={item.name}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Menu;
