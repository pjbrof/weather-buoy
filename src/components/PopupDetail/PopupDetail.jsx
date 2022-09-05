import React from "react";
import Wind from "./Wind";
import Wave from "./Wave";

const baseURL = "https://www.ndbc.noaa.gov";

const PopupDetail = ({ buoy }) => {
  return (
    <>
      <div className="text-center">
        <a
          href={`${baseURL}/mobile/station.php?station=${buoy.STN}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          <span>Station </span> {buoy.STN}
        </a>
      </div>
      <p>
        <a
          href={`${baseURL}/buoycam.php?station=${buoy.STN}`}
          target="_blank"
          rel="noreferrer noopener"
        >
          BuoyCAM
        </a>
      </p>
      <p>{`${buoy.MM}/${buoy.DD}/${buoy.YYYY} ${buoy.hh}:${buoy.mm}`}</p>
      {buoy.WSPD !== "MM" && (
        <Wind direction={buoy.WDIR} speed={buoy.WSPD} gust={buoy.GST} />
      )}
      {buoy.WVHT !== "MM" && (
        <Wave
          height={buoy.WVHT}
          DPD={buoy.DPD}
          APD={buoy.APD}
          direction={buoy.MWD}
        />
      )}
      {buoy.PRES !== "MM" && (
        <>
          <p>Pressure: {buoy.PRES} hPa</p>
        </>
      )}
      {buoy.PTDY !== "MM" && (
        <p>Pressure Tendency: {buoy.PTDY} hPa &#916; 3hrs</p>
      )}
      {buoy.ATMP !== "MM" && (
        <p className="flex items-center justify-start">
          <i className="wi wi-thermometer text-2xl pr-2" /> Air {buoy.ATMP}
          &deg;C
        </p>
      )}
      {buoy.WTMP !== "MM" && <p>Water Temp: {buoy.WTMP}&deg;C</p>}
      {buoy.DEWP !== "MM" && <p>Dew Point: {buoy.DEWP}&deg;C</p>}
      {buoy.VIS !== "MM" && <p>Visibility: {buoy.VIS}nm</p>}
      {buoy.TIDE !== "MM" && <p>Tide:{buoy.TIDE}ft</p>}
    </>
  );
};

export default PopupDetail;
