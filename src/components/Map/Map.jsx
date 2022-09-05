import React, { useEffect } from "react";
import { connect } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PopupDetail from "../PopupDetail/PopupDetail";
import { getBuoyData } from "../../actions/dataActions";

import { hasBuoyCam } from "../../../hasbuoycam";
import "./Map.css";

const accessToken =
  "pk.eyJ1IjoicGpicm9mIiwiYSI6ImNqMjNvZDBraTAwMjMzMm81MWcxMjA4cjIifQ.-XXQyKK7bZW7Lg4dLJ3Suw";
const buoyCAM = false;

const filterUndefined = (buoy) => {
  if (buoy.LAT === undefined) {
    return false;
  }
  return true;
};

const filterBuoyCAM = (buoy) => {
  return hasBuoyCam.some((cam) => {
    return buoy.STN === cam;
  });
};

const applyFilters = (filters = { undef: true, cam: true }, item) => {
  if (filters.undef) {
    return filterUndefined(item);
  }
};

const Map = ({ data, getBuoyData }) => {
  useEffect(() => {
    getBuoyData();
  }, []);

  return (
    <>
      <MapContainer center={[40, -113]} zoom={4}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/styles/v1/pjbrof/ckzeqwsw9001014mrha37jqib/tiles/256/{z}/{x}/{y}?access_token=${accessToken}`}
        />
        {data.data
          .filter((buoy) => filterUndefined(buoy))
          .filter((buoy) => filterBuoyCAM(buoy))
          .map((buoy) => {
            return (
              <Marker key={buoy.STN} position={[buoy.LAT, buoy.LON]}>
                <Popup>
                  <PopupDetail buoy={buoy} />
                </Popup>
              </Marker>
            );
          })}
      </MapContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  getBuoyData,
};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
