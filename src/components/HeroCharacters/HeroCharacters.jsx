import { Link } from "react-router-dom";
import { Section } from "./HeroCharacters.styled";

const HeroCharacters = () => {
  return (
    <Section className="characters-wrapper">
      <div className="section">
        <p className="text">Web-based platform</p>
        <h1 className="caption">Characters</h1>
        <p className="desc">
          With over 70,000 characters in the Marvel Multiverse, this is the most
          complete public listing in existence.
        </p>
        <Link to="/">
          <button className="btn">Back home</button>
        </Link>
      </div>
    </Section>
  );
};

export default HeroCharacters;
