import React from "react";
import { connect } from "react-redux";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import PopupDetail from "../PopupDetail/PopupDetail";

import { hasBuoyCam } from "../../../hasbuoycam";
import "./Map.css";

const accessToken =
  "pk.eyJ1IjoicGpicm9mIiwiYSI6ImNqMjNvZDBraTAwMjMzMm81MWcxMjA4cjIifQ.-XXQyKK7bZW7Lg4dLJ3Suw";
const buoyCAM = false;

const Map = ({ data }) => {
  return (
    <>
      <MapContainer center={[40, -40]} zoom={3}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={`https://api.mapbox.com/v4/mapbox.satellite/{z}/{x}/{y}.png?access_token=${accessToken}`}
        />
        {data.data
          .filter((buoy) => {
            if (
              buoy.LAT === "LAT" ||
              buoy.LAT === "deg" ||
              buoy.LAT === undefined
            ) {
              return false;
            }
            return true;
          })
          .filter((buoy) => {
            if (data.buoyCAM) {
              return hasBuoyCam.some((cam) => {
                return buoy.STN === cam;
              });
            }
            return true;
          })
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
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Map);
