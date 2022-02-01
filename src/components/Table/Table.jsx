import React, { useMemo } from "react";
import { connect } from "react-redux";
import { useTable } from "react-table";

import "./Table.scss";

const Table = ({ weatherData }) => {
  const data = useMemo(() => weatherData, []);

  const columns = useMemo(
    () => [
      { Header: "APD", accessor: "APD" },
      { Header: "ATMP", accessor: "ATMP" },
      { Header: "Dew Point", accessor: "DEWP" },
      { Header: "DPD", accessor: "DPD" },
      { Header: "GST", accessor: "GST" },
      { Header: "Latitude", accessor: "LAT" },
      { Header: "Longitude", accessor: "LON" },
      { Header: "MWD", accessor: "MWD" },
      { Header: "PRES", accessor: "PRES" },
      { Header: "PTDY", accessor: "PTDY" },
      { Header: "Station", accessor: "STN" },
      { Header: "Tide", accessor: "TIDE" },
      { Header: "Visibility", accessor: "VIS" },
      { Header: "Wind Direction", accessor: "WDIR" },
      { Header: "Wind Speed", accessor: "WSPD" },
      { Header: "WTMP", accessor: "WTMP" },
      { Header: "WVHT", accessor: "WVHT" },
      { Header: "Year", accessor: "YYYY" },
      { Header: "Month", accessor: "MM" },
      { Header: "Day", accessor: "DD" },
      { Header: "Hour", accessor: "hh" },
      { Header: "Minute", accessor: "mm" },
    ],
    []
  );

  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <>
      <h2>Table</h2>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    weatherData: state.data,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
