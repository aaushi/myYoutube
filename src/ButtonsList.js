import React from "react";
import Buttons from "./Buttons";

const ButtonsList = () => {
  const ButtonsList = [
    "All",
    "Cricket",
    "Music",
    "Movies",
    "Comedy",
    "Shows",
    "Drama",
    "Action",
    "News",
    "Games",
    "Art",
    "Computer and Information",
    "React",
    "Python",
    "Angular",
    "Kapil Sharma",
    "Bollywood"
  ];
  return (
    <div>
      
      <Buttons ButtonsListItems={ButtonsList}  />
    </div>
  );
};

export default ButtonsList;
