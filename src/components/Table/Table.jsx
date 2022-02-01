import React, { useMemo } from "react";
import { connect } from "react-redux";

import "./Table.scss";

const Table = ({ data }) => {
  return (
    <>
      <h2>Table</h2>
      <table>
        <tbody>
          {data.map((rowData) => (
            <tr key={rowData.STN}>
              <td>
                <a
                  href={`https://www.ndbc.noaa.gov/buoycam.php?station=${rowData.STN}`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {rowData.STN}
                </a>
              </td>
              <td>
                <a
                  href={`https://www.google.com/maps/@${rowData.LAT},${rowData.LON},7z`}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {`${rowData.LAT},${rowData.LON}`}
                </a>
              </td>
              <td>{`${rowData.MM}/${rowData.DD}/${rowData.YYYY} ${rowData.hh}:${rowData.mm}`}</td>
              <td>{rowData.WDIR}</td>
              <td>{rowData.WSPD}</td>
              <td>{rowData.GST}</td>
              <td>{rowData.WVHT}</td>
              <td>{rowData.DPD}</td>
              <td>{rowData.APD}</td>
              <td>{rowData.MWD}</td>
              <td>{rowData.PRES}</td>
              <td>{rowData.PTDY}</td>
              <td>{rowData.ATMP}</td>
              <td>{rowData.WTMP}</td>
              <td>{rowData.DEWP}</td>
              <td>{rowData.VIS}</td>
              <td>{rowData.TIDE}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
