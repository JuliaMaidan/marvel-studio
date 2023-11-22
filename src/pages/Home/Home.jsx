import HeroHome from "../../components/HeroHome/HeroHome";
import LastComics from "../../components/LastComics/LastComics";
import RandomCharacter from "../../components/RandomCharacter/RandomCharacter";

const Home = () => {
  return (
    <div>
      <HeroHome />
      <RandomCharacter />
      <LastComics />
    </div>
  );
};

export default Home;
