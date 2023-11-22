import { MdClose } from "react-icons/md";
import { Box, InfoWrapper, Comics } from "./CharacterPopUp.styled";

const CharacterPopUp = ({ info, close }) => {
  console.log(info);

  const inputDate = info.modified;

  // Розбиваємо дату на складові
  const dateParts = new Date(inputDate);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[dateParts.getMonth()];
  const day = dateParts.getDate();
  const year = dateParts.getFullYear();

  const formattedDate = `${month} ${day}, ${year}`;

  console.log(formattedDate);
  const imageSize = "portrait_uncanny";

  return (
    <Box>
      <div className="section">
        <button className="close__btn" onClick={close}>
          <MdClose className="close__svg" />
        </button>
        <img
          src={`${info.thumbnail.path}/${imageSize}.${info.thumbnail.extension}`}
          alt={info.name}
          className="image"
        />
        <InfoWrapper>
          <p className="name">{info.name}</p>
          <p className="date">{formattedDate}</p>
          <p className="info">{info.description || "description"}</p>
          <p className="list__name">List of comics</p>
          <Comics>
            {info.comics.items.map(({ name, resourceURI }) => (
              <li key={name}>
                <img className="comics__img" src="/" alt="" />
                <p className="comics__name">{name}</p>
                <p className="comics__hero">hero</p>
              </li>
            ))}
          </Comics>
        </InfoWrapper>
      </div>
    </Box>
  );
};

export default CharacterPopUp;
