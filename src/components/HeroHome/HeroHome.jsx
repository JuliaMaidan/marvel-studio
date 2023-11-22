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
        <Link to="/comics">
          <Button>All Comics</Button>
        </Link>
      </Wrapper>

      <Box
        sx={{
          // height: 700,
          position: "relative",
          "@media (min-width: 768px)": {
            // height: 700, // Змініть стиль для екранів шириною 600px і менше
          },
          "@media (min-width: 1440px)": {
            // height: 700, // Змініть стиль для екранів шириною 600px і менше
          },
        }}
      >
        <Tabs
          orientation={
            window.innerWidth >= 768 && window.innerWidth <= 1439
              ? "horizontal"
              : "vertical"
          }
          indicatorColor="red"
          value={value}
          onChange={handleChange}
          sx={{
            backgroundColor: "rgba(23, 23, 23, 0.70)",
            position: "absolute",
            color: "red",
            right: 0,
            width: 4,
            // height: "auto",
            "@media (min-width: 768px)": {
              left: 210,
              top: 680,
              width: 270,
              height: 4,
            },
            "@media (min-width: 1440px)": {
              left: -60,
              top: 320,
              width: 4,
            },
          }}
        >
          <Tab
            {...a11yProps(0)}
            sx={{
              "&.Mui-selected": {
                color: "#600404",
                backgroundColor: "#600404",
              },
            }}
          />
          <Tab
            {...a11yProps(1)}
            sx={{
              "&.Mui-selected": {
                color: "#5B7F3C",
                backgroundColor: "#5B7F3C",
              },
            }}
          />
          <Tab
            {...a11yProps(2)}
            sx={{
              "&.Mui-selected": {
                color: "#34387F",
                backgroundColor: "#34387F",
              },
            }}
          />
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
