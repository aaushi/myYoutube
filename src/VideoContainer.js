import React, { useEffect, useState } from "react";
import { YOUTUBE_MOST_POPULAR_VIDEOS_API } from "./utils/Constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
  console.log("in video container");
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    console.log("in useeffect");
    getVideos();
  }, []);
  const getVideos = async () => {
    const videosLinks = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS_API);
    const videosLinkData = await videosLinks.json();
    
    setVideos(videosLinkData.items);
    console.log(videos);
    //return videosLinkData;
  };
  return <VideoCard  items={videos} />;
};

export default VideoContainer;
