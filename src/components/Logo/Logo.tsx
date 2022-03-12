import Image from "next/image";
import Logotipo from "../../../public/img/logo.webp";
import styles from "./logo.module.scss";
const Logo = () => {
  return (
    <div className={styles.myLogo}>
      <Image src={Logotipo} alt="Zensolutions" title="Zensolutions" />
    </div>
  );
};

export default Logo;
