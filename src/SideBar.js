import React from "react";
import {
  faHouse,
  faCirclePlay,
  faLayerGroup,
  faPhotoFilm,
  faClockRotateLeft,
  faClock,
  faThumbsUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  Card,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector } from "react-redux";

const SideBar = () => {

  const toggle=useSelector((store)=>store.app.isMenuOpen)
  console.log(toggle);
  if(toggle){
    return (
      <Card className=" top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <List className="h-6 w-5 font-medium text-lg text-black">
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faHouse} className="h-6 w-5" />
            </ListItemPrefix>
            Home
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faCirclePlay} className="h-6 w-5" />
            </ListItemPrefix>
            Shorts
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faLayerGroup} className="h-6 w-5" />
            </ListItemPrefix>
            Subscription
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem>
          <hr></hr>
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faPhotoFilm} className="h-6 w-5" />
            </ListItemPrefix>
            Library
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faClockRotateLeft} className="h-6 w-5" />
            </ListItemPrefix>
            History
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faClock} className="h-6 w-5" />
            </ListItemPrefix>
            Watch Later
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faThumbsUp} className="h-6 w-5" />
            </ListItemPrefix>
            Liked Videos
          </ListItem>
        </List>
      </Card>
    );
  }
  else{
    return (
      
        <Card className=" w-24 flex top-4  h-[calc(100vh-2rem)]  p-4 shadow-xl shadow-blue-gray-900/5">
          <List className="h-6 font-medium text-lg text-black">
            <ListItem className="w-20">
              <ListItemPrefix >
                <FontAwesomeIcon icon={faHouse} className="h-6 " />
              </ListItemPrefix>
              
            </ListItem>
            <ListItem className="w-20">
              <ListItemPrefix>
                <FontAwesomeIcon icon={faCirclePlay} className="h-6 " />
              </ListItemPrefix>
              
            </ListItem>
            <ListItem className="w-20">
              <ListItemPrefix>
                <FontAwesomeIcon icon={faLayerGroup} className="h-6 " />
              </ListItemPrefix>
              
            </ListItem>
            
            <ListItem className="w-20">
              <ListItemPrefix>
                <FontAwesomeIcon icon={faPhotoFilm} className="h-6 " />
              </ListItemPrefix>
              
            </ListItem>
            
          </List>
        </Card>
      );
    
  }
  
};

export default SideBar;
