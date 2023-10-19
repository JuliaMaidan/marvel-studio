import hulk1 from "../../images/hero/hulk/hulk1.png";
import hulk2 from "../../images/hero/hulk/hulk2.png";
import { Hero, Description } from "./Heroes.styled";

const Hulk = () => {
  return (
    <Hero>
      <img className="firstImg" src={hulk2} alt="Hulk" />
      <div className="box hulk">
        <img className="secondImg" src={hulk1} alt="Hulk" />
        <Description>
          <p className="name">Characters</p>
          <p className="about">
            Exposed to heavy doses of gamma radiation, scientist Bruce Banner
            transforms into the mean, green rage machine called the Hulk.
          </p>
        </Description>
      </div>
    </Hero>
  );
};

export default Hulk;
