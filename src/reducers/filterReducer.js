export default function reducer(
  state = {
    buoyCAM: false,
    waterTempRange: 0,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "SET_FILTERS": {
      return { ...state, buoyCAM: action.payload };
    }
    default: {
      return state;
    }
  }
}
