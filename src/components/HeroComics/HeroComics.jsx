import { Link } from "react-router-dom";
import { Section } from "../HeroCharacters/HeroCharacters.styled";

const HeroComics = () => {
  return (
    <Section className="comics-wrapper">
      <div className="section">
        <p className="text">Web-based platform</p>
        <h1 className="caption">Comics</h1>
        <p className="desc">
          Comics is a medium used to express ideas with images, often combined
          with text or other visual information.
        </p>
        <Link to="/">
          <button className="btn">Back home</button>
        </Link>
      </div>
    </Section>
  );
};

export default HeroComics;
