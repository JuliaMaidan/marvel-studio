import { useState, useEffect } from "react";
import { fetchRandomHeroes } from "../../services/axios";
import { RandomWrapper, Characters } from "./RandomCharacter.styled";

const RandomCharacter = () => {
  const [heroes, setHeroes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchRandomHeroes().then((heroes) => {
      setHeroes(heroes);
      console.log(heroes);
    });
  }, []);

  useEffect(() => {
    const changeHeroImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroes.length);
    };

    const intervalId = setInterval(changeHeroImage, 4500);

    return () => {
      clearInterval(intervalId);
    };
  }, [heroes]);

  const imageSize = "standard_xlarge";

  return (
    <RandomWrapper className="section">
      <h2 className="title">Random characters</h2>
      <div className="box">
        {heroes.length > 0 && (
          <img
            src={`${heroes[currentIndex].thumbnail.path}/${imageSize}.${heroes[currentIndex].thumbnail.extension}`}
            alt="Фотографія героя"
            className="image"
          />
        )}
        <Characters>
          {heroes.map(({ id, name, description }, index) => (
            <li className="character" key={id}>
              <p className={`name ${index === currentIndex ? "active" : ""}`}>
                {name}
              </p>
              <p className={`desc ${index === currentIndex ? "active" : ""}`}>
                {description}
              </p>
            </li>
          ))}
        </Characters>
      </div>
    </RandomWrapper>
  );
};

export default RandomCharacter;
