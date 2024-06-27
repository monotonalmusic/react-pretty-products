import useFetchByID from "../hooks/useFetchByID";
import PageHeader from "../components/pageHeader/PageHeader";
import Favorites from "../components/favorites/Favorites";
import NewsLetter from "../components/newsLetter/NewsLetter";
import MyFavorites from "../components/myFavorites/MyFavorites"

const Home = () => {
  const { data, loading } = useFetchByID(2);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  console.log(data);

  return (
    <>
      <PageHeader title="HOME" headerImg={data?.images[0]} />
      <MyFavorites />
      <Favorites />
      <NewsLetter />
    </>
  );
};

export default Home;
