import React from "react";
import { connect } from "react-redux";

import "./Filters.css";
import { setFilters } from "../../actions/filterActions";

const Filters = ({ setFilters }) => {
  // const handleWaterTemp = (e) => {
  //   e.preventDefault();
  //   console.log(e.target.value);
  // };

  return (
    <>
      <div className="filters shadow border border-gray-200 bg-white">
        <div className="bg-white p-2 border-b border-gray-200 sm:px-4">
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Filters
          </h3>
        </div>
        <div className="px-4 pb-4">
          <fieldset className="space-y-5">
            <legend className="sr-only">Filters</legend>
            <div className="relative flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="comments"
                  aria-describedby="comments-description"
                  name="comments"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  onChange={(e) => setFilters(e.target.checked)}
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="comments" className="font-medium text-gray-700">
                  BuoyCAM
                </label>
                <span id="comments-description" className="text-gray-500">
                  <span className="sr-only">BuoyCAM </span> view most recent
                  photos from the buoy
                </span>
              </div>
            </div>
            {/* <div>
              <label
                htmlFor="waterTemp"
                className="block text-sm font-medium text-gray-700"
              >
                Water Temperature
              </label>
              <input
                type="range"
                min="0"
                max="100"
                defaultValue="10"
                step="1"
                onChange={(e) => {
                  handleWaterTemp(e);
                }}
              />
            </div> */}
          </fieldset>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = {
  setFilters,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
