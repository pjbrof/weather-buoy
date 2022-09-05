export const setFilters = (data) => {
  return (dispatch) => {
    dispatch({
      type: "SET_FILTERS",
      payload: data,
    });
  };
};
