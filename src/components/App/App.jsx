import React from "react";
import Map from "../Map/Map";
import Filters from "../Filters/Filters";

import "./App.css";
import "../../../node_modules/weather-icons/css/weather-icons.min.css";

const App = () => {
  return (
    <>
      <Map />
      <Filters />
    </>
  );
};

export default App;
