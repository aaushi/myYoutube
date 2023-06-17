import React, { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeMenu } from "./utils/AppSlice";

const Watch = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("v"));
  // const videoInfo=useVideo(id);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  });
  return (
    /*  <video className="flex h-full w-4/6 rounded-lg pl-20 m-2" controls autoPlay>
      
      <source src={"https://www.youtube.com/embed/"+searchParams.get("v")} />
     
    </video>  */
    <div>
      <iframe
        width="1200"
        height="650"
        src={"https://www.youtube.com/embed/"+searchParams.get("v")}
        title="YouTube video player"
        frameborder="0" className="pl-24"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default Watch;
