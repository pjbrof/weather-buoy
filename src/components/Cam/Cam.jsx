import React from "react";

const Cam = ({ STN }) => {
  const URI = "https://www.ndbc.noaa.gov/buoycam.php?station=";
  return (
    <>
      <a href={`${URI}${STN}`} target="_blank" rel="noreferrer noopener">
        Station {STN}
      </a>
    </>
  );
};

export default Cam;
