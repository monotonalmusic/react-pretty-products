import styles from "./sectionHeader.module.css";

const sectionHeader = ({ title, brand, price, sectionImg }) => {
  return (
    <div
      className={styles.sectionHeader}
      style={{ backgroundImage: `url(${sectionImg})` }}
    >
      <div className={styles.sectionContent}>
        <h1>{title}</h1>
        <h2>{brand}</h2>
        <h2>${price}</h2>
      </div>
    </div>
  );
};

export default sectionHeader;
