import React from "react";
import { useParams } from "react-router-dom";
import useFetchById from "../../hooks/useFetchByID";
import styles from "./productDetails.module.css";
import SectionHeader from "../../components/sectionHeader/SectionHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ProductDetails = () => {
  const { id } = useParams();
  const { data, loading } = useFetchById(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>No products found.</div>;
  }

  // Round up rating to the nearest whole number
  const roundedRating = Math.ceil(data.rating);

  return (
    <div className={styles.detailsContainer}>
      <div className={styles.detailsDiv}>
        <SectionHeader
          title={data.title}
          sectionImg={data.images[0]}
          price={data.price}
          brand={data.brand}
        />
        <div className={styles.detailsTextDiv}>
          <p className={styles.description}>{data.description}</p>
          <div className={styles.ratingDiv}>
            {/* Render stars based on the rounded rating */}
            <p className={styles.rating}>{data.rating} / 5</p>
            <div>
              {[...Array(5)].map((_, index) => (
                <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                  className={
                    index < roundedRating ? styles.filledStar : styles.emptyStar
                  }
                />
              ))}
            </div>
          </div>
          <div className={styles.bottomDiv}>
            <h3 className={styles.availability}>{data.availabilityStatus}</h3>
            <h4 className={styles.shipping}>{data.shippingInformation}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
