export const getBuoyData = () => {
  return (dispatch) => {
    fetch("/api/buoy")
      .then((res) => res.json())
      .then((response) => {
        dispatch({
          type: "SET_DATA",
          payload: response.data,
        });
      });
  };
};
