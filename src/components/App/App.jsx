import React from "react";
import Cam from "../Cam/Cam";
import Table from "../Table/Table";

const App = () => {
  return (
    <>
      <h1>Weather Buoy</h1>
      <Cam STN="41008" />
      <Table />
    </>
  );
};

export default App;
