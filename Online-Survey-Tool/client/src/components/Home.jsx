import SearchBar from "./SearchBar";
import GreetingsBox from "./GreetingsBox";
import Drafts from "./Drafts";

const Home = () => {
  return (
    <div id="home__main__wrapper">
      <SearchBar />
      <GreetingsBox />
      <Drafts />
    </div>
  );
};

export default Home;
