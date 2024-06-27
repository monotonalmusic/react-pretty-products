import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import styles from "./myFavorites.module.css";

const MyFavorites = () => {
  const { data, loading } = useFetch();
  const [likedIDArray, setlikedIDArray] = useState([]);

  useEffect(() => {
    updateLikedArray();

    const handleCustomEvent = () => {
      updateLikedArray();
    };

    window.addEventListener("favoritesUpdated", handleCustomEvent);

    return () => {
      window.removeEventListener("favoritesUpdated", handleCustomEvent);
    };
  }, []);

  const updateLikedArray = () => {
    const liked = JSON.parse(localStorage.getItem("likedProducts"));
    if (liked) {
      setlikedIDArray(liked);
    } else {
      setlikedIDArray([]);
    }

    console.log(likedIDArray);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className={styles.myFavoritesDiv}>
      <h1>MY FAVORITES</h1>
      <ul className={styles.list}>
        {likedIDArray.map((productId) => {
          const likedProduct = data.find((r) => r.id === productId);
          return (
            <li key={productId}>
              <Link to={`/productDetails/${productId}`}>
                {likedProduct?.title.toUpperCase() || "Product not found"}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default MyFavorites;
