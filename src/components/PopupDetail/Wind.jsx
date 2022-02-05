import React from "react";

const Wind = ({ direction, speed, gust }) => {
  return (
    <>
      {direction !== "MM" && <span>Wind {direction}&deg; </span>}
      {speed !== "MM" && <span>{speed}m/s </span>}
      {gust !== "MM" && <span>({gust}m/s) </span>}
    </>
  );
};

export default Wind;
