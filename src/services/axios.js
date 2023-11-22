import axios from "axios";
import CryptoJS from "crypto-js";

const PUBLIC_KEY = "cc199306e90314696ed4a7ee174e90fd";
const PRIVATE_KEY = "39c73db8fc8da42885c00f9566babf54826190ff";
const ts = Date.now().toString();
const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();

const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=cc199306e90314696ed4a7ee174e90fd&hash=${hash}`;
const url = `http://gateway.marvel.com/v1/public/characters/`;

export const fetchAllCharacters = async (
  page,
  letter = "",
  sortBy = "name"
) => {
  try {
    const limit = 20;
    const offset = (page - 1) * limit;

    const params = {
      limit,
      offset,
      orderBy: sortBy === "name" ? "name" : "-modified", // Сортування за ім'ям або датою останньої модифікації
    };

    if (letter) {
      params.nameStartsWith = letter;
    }

    const response = await axios.get(apiUrl, { params });
    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
};

export const getTotalCharacters = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.data.total;
  } catch (error) {
    console.error("Error fetching total characters:", error);
    return 0;
  }
};
// export const fetchAllCharacters = async (
//   page,
//   letter = "",
//   sortOption = "name",
//   comics = ""
// ) => {
//   try {
//     const limit = 20;
//     const offset = (page - 1) * limit;

//     const params = {
//       limit,
//       offset,
//       orderBy: sortOption,
//     };

//     if (letter) {
//       params.nameStartsWith = letter;
//     }

//     if (comics) {
//       params.comic = comics; // Змінено параметр на 'comic'
//     }

//     const response = await axios.get(apiUrl, { params });
//     return response.data.data.results;
//   } catch (error) {
//     console.error("Error fetching characters:", error);
//     return [];
//   }
// };

// export const getTotalCharacters = async () => {
//   try {
//     const response = await axios.get(apiUrl);
//     return response.data.data.total;
//   } catch (error) {
//     console.error("Error fetching total characters:", error);
//     return 0;
//   }
// };

//by id-----------------------------------

export const fetchCharacterById = async (characterId) => {
  try {
    const response = await axios.get(
      `${url}/${characterId}?ts=${ts}&apikey=cc199306e90314696ed4a7ee174e90fd&hash=${hash}`
    );
    const characterData = response.data.data.results; // Отримані дані про героя
    console.log(characterData);
    // setSelectedCharacter(characterData); // Збереження даних про героя
    return characterData;
  } catch (error) {
    console.error("Помилка при отриманні даних про героя:", error);
  }
};

//random-----------------------------------

export const fetchRandomHeroes = () => {
  return axios
    .get(apiUrl)
    .then((response) => {
      const allHeroes = response.data.data.results;

      // Фільтрація героїв: лише ті, у яких є фотографія та опис
      const filteredHeroes = allHeroes.filter(
        (hero) =>
          hero.thumbnail &&
          hero.thumbnail.path &&
          hero.thumbnail.extension &&
          hero.description
      );

      const randomHeroes = getRandomHeroes(filteredHeroes, 5);
      return randomHeroes;
    })
    .catch((error) => {
      console.error("Помилка запиту до Marvel API:", error);
      return [];
    });
};

const getRandomHeroes = (heroes, count) => {
  const shuffledHeroes = [...heroes];
  for (let i = shuffledHeroes.length - 1; i >= 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [shuffledHeroes[i], shuffledHeroes[randomIndex]] = [
      shuffledHeroes[randomIndex],
      shuffledHeroes[i],
    ];
  }
  return shuffledHeroes.slice(0, count);
};
