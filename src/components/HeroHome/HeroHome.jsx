import { Link } from "react-router-dom";
import { useState } from "react";
// import spiderman from "../../images/hero/spiderman/big.jpg";
// import spider from "../../images/hero/spiderman/full.jpg";
import { Section, Wrapper, Button } from "./HeroHome.styled";
import Hulk from "../Superheroes/Hulk";
import Spiderman from "../Superheroes/Spiderman";
import Panther from "../Superheroes/Panther";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 0 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const HeroHome = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Section className="section">
      <Wrapper>
        <p className="web">Web-based platform</p>
        <h1 className="title">Marvelous Adventures</h1>
        <p className="desc">
          is a web-based platform that provides an immersive experience for
          users to explore and discover a vast collection of Marvel characters
          and comics. Start exploring the Marvelous Adventures now by visiting
          our Characters and Comics sections and discover your new favorites
          today.
        </p>
        <Link to="/characters">
          <Button>All Characters</Button>
        </Link>
      </Wrapper>

      <Box
        sx={{
          height: 700,
          // width: 2,
        }}
      >
        <Tabs
          orientation="vertical"
          indicatorColor="red"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          sx={{
            borderRight: 2,
            borderColor: "rgba(23, 23, 23, 0.70)",
            position: "absolute",
            left: 0,
            color: "red",
          }}
        >
          <Tab {...a11yProps(0)} />
          <Tab {...a11yProps(1)} />
          <Tab {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <Spiderman />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Hulk />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Panther />
        </TabPanel>
      </Box>
    </Section>
  );
};

export default HeroHome;
