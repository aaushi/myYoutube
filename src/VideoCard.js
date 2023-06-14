import * as React from "react";

import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";

import MoreVertIcon from "@mui/icons-material/MoreVert";

const VideoCard = ({ items }) => {
    console.log(items)
    const styles = {
        media: {
          height: 250,
          width:500,
          
          //paddingTop: '56.25%', // 16:9,
          //marginTop:'30'
        }
    };
  return (
    
    
   
    <div className="flex flex-wrap ml-16">
      {items.map((item, index) => (
        
        <Card className="p-2 m-5 max-w-md h-96">
          <CardMedia
            component="img"
            style={styles.media}
            image={item?.snippet?.thumbnails.standard.url}
            
          />
          

          <CardHeader
            avatar={
              <Avatar  src={item?.snippet?.thumbnails.standard.url}  sx={{ width: 60, height: 60 }} aria-label="recipe"></Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={item?.snippet?.localized?.title} titleTypographyProps={{variant:"headline"}}
            subheader={<div>{item?.snippet?.channelTitle}<br/> { item?.statistics?.viewCount}</div>} 
          />
        </Card>
      ))}
    </div>
  );
};
export default VideoCard;
