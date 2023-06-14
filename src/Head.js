import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faVideoPlus } from '@fortawesome/'
import { Input } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";

import {
  faVideo,
  faBell,
  faCircleUser,
  faBars,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";
import { toggleMenu } from "./utils/AppSlice";

const Head = () => {
  const dispatch = useDispatch();
  const handleMenuToggle=()=>{
    dispatch(toggleMenu())
  }
  return (
    <div className="flex justify-between">
      <div className=" flex">
        <FontAwesomeIcon icon={faBars} className="p-4 m-4 h-10" onClick={()=>handleMenuToggle()} />
        <img
          className="h-12 w-36 mt-8"
          src="https://w7.pngwing.com/pngs/674/324/png-transparent-youtube-logo-music-video-computer-icons-youtube-logo-text-trademark-logo.png"
        />
      </div>
      <div className="flex w-1/3">
        <div className="w-full p-4 m-4 ">
          <Input
            label="Search"
            variant=""
            icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          />
        </div>
        {/* <FontAwesomeIcon icon={faMagnifyingGlass} className="p-4 m-4 h-8"/> */}
      </div>
      <div className="flex">
        <FontAwesomeIcon icon={faVideo} className="p-4 m-4 h-8" />
        <FontAwesomeIcon icon={faBell} className="p-4 m-4 h-8" />
        <FontAwesomeIcon icon={faCircleUser} className="p-4 m-4 h-8" />
      </div>
    </div>
  );
};

export default Head;
