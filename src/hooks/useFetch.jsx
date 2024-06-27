import { useState, useEffect } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [rating, setRating] = useState([]);
  const [groceries, setGroceries] = useState([]);
  const [furniture, setFurniture] = useState([]);
  const [beauty, setBeauty] = useState([]);
  const [fragrances, setFragrances] = useState([]);

  const getRating = () => {
    console.log(data);
    setRating(data?.filter((product) => product.rating > 4));
  };

  const getFurniture = () => {
    setFurniture(data?.filter((product) => product.category === "furniture"));
  };

  const getBeauty = () => {
    setBeauty(data?.filter((product) => product.category === "beauty"));
  };

  const getGroceries = () => {
    setGroceries(data?.filter((product) => product.category === "groceries"));
  };

  const getFragrances = () => {
    setFragrances(data?.filter((product) => product.category === "fragrances"));
  };

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
        setLoading(false);
        getRating();
        getFurniture();
        getBeauty();
        getGroceries();
        getFragrances();
      });
  }, [loading]);

  return { data, loading, rating, groceries, furniture, beauty, fragrances };
};

export default useFetch;
