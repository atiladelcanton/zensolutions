import Image from "next/image";
import styles from "./banner.module.scss";
import System from "../../../public/img/system.svg";
const Banner = () => {
  return (
    <section className={styles.banner}>
      <div className={styles.banner__side__left}>
        <h2 className={styles.banner__title}>Desenvolvimento de Sistemas</h2>
        <p className={styles.banner__text}>
          Sistemas desenvolvidos com <span>agilidade e persolizado</span> para
          as necessidades da sua empresa ou negócio, com o{" "}
          <span>maximo de autonomia</span>
        </p>
      </div>
      <div>
        <Image src={System} />
      </div>
    </section>
  );
};

export default Banner;
