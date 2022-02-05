import React from "react";

const Wave = ({ height, DPD, APD, direction }) => {
  return (
    <>
      {height !== "MM" && <p>Wave Height: {height}m</p>}
      {DPD !== "MM" && <p>Dominant Wave Period: {DPD}sec</p>}
      {APD !== "MM" && <p>Average Wave Period: {APD}sec</p>}
      {direction !== "MM" && <p>Mean Wave Direction: {direction}&deg;</p>}
    </>
  );
};

export default Wave;
