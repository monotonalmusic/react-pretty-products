import { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import ProductsCard from "../../components/productsCard/ProductsCard";
import PageHeader from "../../components/pageHeader/PageHeader";
import MyFavorites from "../../components/myFavorites/MyFavorites";
import styles from "../../components/button/button.module.css";
import Button from "../../components/button/Button";

const Products = () => {
  const { data, loading, groceries, furniture, beauty, fragrances } =
    useFetch();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = {
    All: data,
    Groceries: groceries,
    Furniture: furniture,
    Beauty: beauty,
    Fragrances: fragrances,
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
    setFilteredProducts(filters[filter] || []);
  };

  useEffect(() => {
    if (data) {
      setFilteredProducts(data);
    }
  }, [data]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <PageHeader title="PRODUCTS" headerImg={data?.[0]?.images?.[0]} />
      <MyFavorites />
      <section className="recipes">
        <div className="filterButtons">
          {Object.keys(filters).map((filter) => (
            <Button
              key={filter}
              onClick={() => handleFilter(filter)}
              className={filter === activeFilter ? `${styles.active}` : ""}
              name={filter}
            ></Button>
          ))}
        </div>
        <ul className="recipes-ul">
          {filteredProducts.map((product) => (
            <ProductsCard key={product.id} product={product} />
          ))}
        </ul>
      </section>
    </>
  );
};

export default Products;
