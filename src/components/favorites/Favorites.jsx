import useFetch from "../../hooks/useFetch";
import ProductsCard from "../productsCard/ProductsCard";
import styles from "../favorites/favorites.module.css";

const Favorites = () => {
  const { loading, rating } = useFetch();

  console.log(rating);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.favoritesDiv}>
      <h1>CUSTOMER FAVORITES</h1>
      <section className={styles.favoritesSection}>
        {rating?.map((product) => {
          return <ProductsCard key={product.id} product={product} />;
        })}
      </section>
    </div>
  );
};

export default Favorites;
