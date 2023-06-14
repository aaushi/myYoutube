import React from "react";
import { Chip } from "@material-tailwind/react";

const Buttons = ({ ButtonsListItems }) => {
  
  return (
    <div className="flex text-black">
      {ButtonsListItems.map((item, index) => (
        <div key={index} className="flex h-14 p-1 m-1">
          <Chip color="gray" value={item} />
        </div>
      ))}
    </div>
  );
};

export default Buttons;
