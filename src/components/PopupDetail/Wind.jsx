import React from "react";

const Wind = ({ direction, speed, gust }) => {
  const knots = 1.94384449;
  return (
    <>
      <i className="wi wi-strong-wind" />
      {speed !== "MM" && (
        <span className="pl-2">{(speed * knots).toFixed(1)}kts </span>
      )}
      {gust !== "MM" && <span>({(gust * knots).toFixed(1)}kts) </span>}
      {direction !== "MM" && <span>{direction}&deg; </span>}
    </>
  );
};

export default Wind;
