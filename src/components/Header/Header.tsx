import Link from "next/link";
import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import styles from "./header.module.scss";
const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <Menu />
    </header>
  );
};

export default Header;
