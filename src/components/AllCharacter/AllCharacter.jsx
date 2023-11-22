import { useState, useEffect } from "react";
import {
  fetchAllCharacters,
  fetchCharacterById,
  getTotalCharacters,
} from "../../services/axios";
import CharacterPopUp from "../PopUps/CharacterPopUp";
import { CharactersLit, InputsList } from "./AllCharacters.styled";

import { createTheme, ThemeProvider } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import NotFound from "../Error/NotFound";

export const AllCharacter = () => {
  const [characters, setCharacters] = useState([]);
  const [open, setOpen] = useState(false);
  const [popUpInfo, setPopUpInfo] = useState(null);

  const [letter, setLetter] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("name");

  const [comics, setComics] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        let fetchedCharacters;

        if (letter) {
          fetchedCharacters = await fetchAllCharacters(
            currentPage,
            letter,
            sortOption
          );
          setFilteredCharacters(fetchedCharacters);
          setTotalPages(1);
        } else {
          const totalCharacters = await getTotalCharacters();
          setTotalPages(Math.ceil(totalCharacters / 20));

          fetchedCharacters = await fetchAllCharacters(
            currentPage,
            letter,
            sortOption
          );
          setCharacters(fetchedCharacters);
          setFilteredCharacters(fetchedCharacters);
        }
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    fetchData();
  }, [currentPage, letter, sortOption]);

  const handleInputChange = (e) => {
    const inputLetter = e.target.value.toLowerCase();
    setLetter(inputLetter);
    setCurrentPage(1);
  };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let fetchedCharacters;

  //       if (letter || comics) {
  //         fetchedCharacters = await fetchAllCharacters(
  //           currentPage,
  //           letter,
  //           sortOption,
  //           comics
  //         );
  //         setFilteredCharacters(fetchedCharacters);
  //         setTotalPages(1);
  //       } else {
  //         const totalCharacters = await getTotalCharacters();
  //         setTotalPages(Math.ceil(totalCharacters / 20));

  //         fetchedCharacters = await fetchAllCharacters(
  //           currentPage,
  //           letter,
  //           sortOption,
  //           comics
  //         );
  //         setCharacters(fetchedCharacters);
  //         setFilteredCharacters(fetchedCharacters);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching characters:", error);
  //     }
  //   };

  //   fetchData();
  // }, [currentPage, letter, sortOption, comics]);

  // const handleInputChange = (e) => {
  //   setLetter(e.target.value.toLowerCase());
  // };

  const handleComicsInputChange = (e) => {
    setComics(e.target.value.toLowerCase());
    console.log(comics);
  };

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
  };

  const handleClick = () => setOpen(!open);

  const imageSize = "portrait_uncanny";

  const handleCharacterClick = async (characterId) => {
    const info = await fetchCharacterById(characterId);
    handleClick();
    console.log(info);
    setPopUpInfo(info[0]);
  };

  let size = "";
  if (window.innerWidth < 768) {
    size = "medium";
  } else {
    size = "large";
  }

  const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          // root: {
          //   display: 'flex',
          //   justifyContent: 'center',
          //   margin: 'auto',
          //   '& .MuiPaginationItem-root': {
          //     color: '#fafafa',
          //     opacity: 0.9,
          //     borderColor: '#957ead36',
          //   },
          //   '& .MuiPaginationItem-page.Mui-selected': {
          //     backgroundColor: '#957ead36',
          //     borderColor: '#fafafa7e',
          //     color: '#fafafa',
          //   },
          // },
          root: {
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            "& .MuiPaginationItem-root": {
              color: "#fafafa",
              opacity: 0.9,
              borderColor: "#957ead36",
              "&:not(.Mui-selected):hover": {
                borderColor: "#fafafa7e",
              },
            },
            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor:
                "#957ead36" /* Колір для обраної сторінки залишається незмінним */,
              borderColor: "#fafafa7e",
              color: "#fafafa",
            },
          },
        },
      },
    },
  });

  return (
    <section className="section">
      <InputsList>
        {/* <label htmlFor="comics" className="label"> */}
        {/* Comics */}
        {/* <input
            className="input"
            id="comics"
            type="text"
            placeholder="Enter text"
            // value={letter}
            // onChange={handleInputChange}
          />
        </label> */}
        {/* <label htmlFor="comics">Filter by Comics:</label> */}
        <input
          id="comics"
          type="text"
          placeholder="Enter comics name"
          value={comics}
          onChange={handleComicsInputChange}
        />
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="name">Name</option>
          <option value="modified">Last Modified</option>
        </select>
        <label className="label" htmlFor="name">
          Name Starts With
          <input
            className="input"
            id="name"
            type="text"
            placeholder="Enter text"
            value={letter}
            onChange={handleInputChange}
          />
        </label>
      </InputsList>
      <CharactersLit>
        {filteredCharacters.map(({ id, name, thumbnail }) => (
          <li
            key={id}
            className="item"
            onClick={() => handleCharacterClick(id)}
          >
            <img
              src={`${thumbnail.path}/${imageSize}.${thumbnail.extension}`}
              alt={name}
              className="image"
            />
            <p className="name">{name}</p>
          </li>
        ))}
      </CharactersLit>
      {filteredCharacters.length === 0 && <NotFound />}
      <ThemeProvider theme={theme}>
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            variant="outlined"
            color="secondary"
            size={size}
          />
        </Stack>
      </ThemeProvider>
      {open && <CharacterPopUp info={popUpInfo} close={handleClick} />}
    </section>
  );
};
