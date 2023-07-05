import SearchBar from "./SearchBar";
import GreetingsBox from "./GreetingsBox";
import SurveyComponent from "./SurveyComponent";

const Home = () => {
  return (
    <div id="home__main__wrapper">
      <SearchBar />
      <GreetingsBox />
      <SurveyComponent />
    </div>
  );
};

export default Home;
