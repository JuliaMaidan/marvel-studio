import spiderman from "../../images/hero/spiderman/big.jpg";
import spider from "../../images/hero/spiderman/full.jpg";

import { Hero, Description } from "./Heroes.styled";

const Spiderman = () => {
  return (
    <Hero>
      <img className="firstImg" src={spiderman} alt="SpiderMan" />
      <div className="box">
        <img className="secondImg" src={spider} alt="SpiderMan" />
        <Description>
          <p className="name">Characters</p>
          <p className="about">
            With amazing spider-like abilities, teenage science whiz Peter
            Parker fights crime and dreams of becoming an Avenger as Spider-Man.
          </p>
        </Description>
      </div>
    </Hero>
  );
};

export default Spiderman;
