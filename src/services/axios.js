import axios from "axios";
import CryptoJS from "crypto-js";

const PUBLIC_KEY = "cc199306e90314696ed4a7ee174e90fd";
const PRIVATE_KEY = "39c73db8fc8da42885c00f9566babf54826190ff";
const ts = Date.now().toString();
const hash = CryptoJS.MD5(ts + PRIVATE_KEY + PUBLIC_KEY).toString();
// const offset = 100;
const apiUrl = `http://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=cc199306e90314696ed4a7ee174e90fd&hash=${hash}&limit=100`;

// export const fetchRandomHeroes = () => {
//   return axios
//     .get(apiUrl)
//     .then((response) => {
//       // console.log(response);
//       const allHeroes = response.data.data.results;
//       const randomHeroes = getRandomHeroes(allHeroes, 5);
//       return randomHeroes;
//     })
//     .catch((error) => {
//       console.error("Помилка запиту до Marvel API:", error);
//       return [];
//     });
// };
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

// const getRandomHeroes = (allHeroes, count) => {
//   const totalPages = Math.ceil(allHeroes.length / 20); // Припускаємо, що на кожній сторінці 20 героїв
//   const heroesPerPage = 20;

//   const randomHeroes = [];

//   // Генеруємо випадкову сторінку
//   const randomPage = Math.floor(Math.random() * totalPages) + 1;

//   // Визначаємо початковий індекс героїв на вибраній сторінці
//   const startIndex = (randomPage - 1) * heroesPerPage;

//   // Вибираємо героїв з вибраної сторінки
//   for (let i = startIndex; i < startIndex + count; i++) {
//     if (i < allHeroes.length) {
//       randomHeroes.push(allHeroes[i]);
//     }
//   }

//   return randomHeroes;
// };
