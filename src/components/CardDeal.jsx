import { card } from "../assets";

import styles, { layout } from "../style";

import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find A Better Card Deal <br className="sm:block hidden" /> In Few Easy
        Steps
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Arcu Tortor, Purus In Mettis At Set Integer Faucibus. Aliquet Quis
        Aliquet Eget Mauris Tortor.C Aliquet Ultrices AC, Ameteu.
      </p>
      <Button styles="mt-10 rounded-[10px]" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
