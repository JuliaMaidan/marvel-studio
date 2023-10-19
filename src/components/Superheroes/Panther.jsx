import panther1 from "../../images/hero/panther/panther1.png";
import panther2 from "../../images/hero/panther/panther2.png";

import { Hero, Description } from "./Heroes.styled";

const Panther = () => {
  return (
    <Hero>
      <img className="firstImg" src={panther1} alt="SpiderMan" />
      <div className="box panther">
        <img className="secondImg" src={panther2} alt="SpiderMan" />
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

export default Panther;
