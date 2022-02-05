export default function reducer(
  state = {
    data: [],
    buoyCAM: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "SET_FILTERS": {
      return { data: [...state.data], buoyCAM: action.payload };
    }
    default: {
      return state;
    }
  }
}
