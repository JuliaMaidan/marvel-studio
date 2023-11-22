import { useState, useEffect } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import {
  LastComicsWrapper,
  ComicsList,
  ButtonsWrapper,
} from "./LastComics.styled";

const LastComics = () => {
  const items = [
    { name: "Immoral X-Men (2019)", old: "Kieron Gillen", id: 1 },
    { name: "Immoral X-Men (2020)", old: "Kieron Gillen", id: 2 },
    { name: "Immoral X-Men (2021)", old: "Kieron Gillen", id: 3 },
    { name: "Immoral X-Men (2022)", old: "Kieron Gillen", id: 4 },
    { name: "Immoral X-Men (2023)", old: "Kieron Gillen", id: 5 },
  ];
  //   const [startIndex, setStartIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [comicsPerPage, setComicsPerPage] = useState(4);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 768) {
      setComicsPerPage(1);
    } else if (windowWidth < 1440) {
      setComicsPerPage(2);
    } else {
      setComicsPerPage(3);
    }
  }, [windowWidth]);

  const totalPages = Math.ceil(items.length / comicsPerPage);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  const startIndex = currentPage * comicsPerPage;
  const visibleComics = items.slice(startIndex, startIndex + comicsPerPage);

  return (
    <LastComicsWrapper className="section">
      <p className="caption">Last Comics</p>
      <ComicsList>
        {/* {items
          .slice(startIndex, startIndex + itemsPerPage)
          .map((item, index) => (
            <li
              className="item"
              key={index}
              style={{ flex: `0 0 ${100 / itemsPerPage}%`, minWidth: "200px" }}
            >
              <img className="image" src="/" alt="" />
              <p className="comics">{item.name}</p>
              <p className="hero">{item.old}</p>
            </li>
          ))} */}
        {visibleComics.map(({ name, old, id }) => (
          <li className="item" key={id}>
            <img className="image" src="/" alt="" />
            <p className="comics">{name}</p>
            <p className="hero">{old}</p>
          </li>
        ))}
      </ComicsList>
      <ButtonsWrapper>
        <button
          className="btn"
          onClick={handlePreviousPage}
          disabled={currentPage === 0}
        >
          <BsArrowLeft className="svg" />
        </button>
        <button
          className="btn"
          onClick={handleNextPage}
          disabled={currentPage === totalPages - 1}
        >
          <BsArrowRight className="svg" />
        </button>
      </ButtonsWrapper>
    </LastComicsWrapper>
  );
};

export default LastComics;
