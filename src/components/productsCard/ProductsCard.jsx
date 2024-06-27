import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../productsCard/productsCard.module.css";

const ProductCard = ({ product }) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];
    setLiked(likedProducts.includes(product.id));
  }, [product.id]);

  const toggleLike = () => {
    const likedProducts =
      JSON.parse(localStorage.getItem("likedProducts")) || [];

    if (liked) {
      const updatedLikes = likedProducts.filter((id) => id !== product.id);
      localStorage.setItem("likedProducts", JSON.stringify(updatedLikes));
    } else {
      likedProducts.push(product.id);
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    }

    const event = new Event("favoritesUpdated");
    window.dispatchEvent(event);

    setLiked(!liked);
  };

  return (
    <div className={styles.productCardDiv}>
      <li key={product.id} className={styles.productList}>
        <img alt="" src={product.images[0]} className={styles.productImg} />
        <Link
          to={`/productDetails/${product.id}`}
          className={styles.productLinks}
        >
          <div className={styles.textDiv}>
            <p className={styles.title}>{product.title}</p>
            <p className={styles.brand}>{product.brand}</p>
            <p className={styles.price}>${product.price}</p>
          </div>
        </Link>
        <button onClick={toggleLike} className={styles.likeButton}>
          {liked ? "❤️" : "♡"}
        </button>
      </li>
    </div>
  );
};

export default ProductCard;
