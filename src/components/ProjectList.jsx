import { Link, Tooltip } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactPlayer from "react-player";
import { useRef } from "react";

const ProjectList = ({ project }) => {
  const { currentColor } = useSelector((state) => state.global);
  const { video, title, desc } = project;
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const playerRef = useRef(null);
  return (
    <div className="flex  mx-4 rounded-3xl  mt-4 shadow-2xl  flex-col   ">
      {/* <img
        src={img}
        alt="website home page"
        className="rounded-md hover:scale-110 my-0.5"
      /> */}
      <ReactPlayer
        ref={playerRef}
        url={video}
        controls={false}
        width="340"
        height="360"
      />

      <div className=" rounded-md px-2 py-1" data-aos="fade-right">
        <Tooltip title="Title of the video" arrow placement="top">
          <p
            sx={{ marginLeft: "2px", marginBottom: "2px" }}
            underline="none"
            rel="noopener"
            color={currentColor}
          >
            {title}
          </p>
        </Tooltip>
        {/* <Tooltip title="Go to the github repository" arrow placement="bottom">
          <Link
            sx={{ marginLeft: "2px", marginBottom: "3px" }}
            underline="none"
            href={repo}
            rel="noopener"
            color={currentColor}
            target="_blank"
          >
            Repository
          </Link>
        </Tooltip> */}
        <p className="my-2 mt-2 mb-6" style={{ color: currentColor }}>
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectList;
