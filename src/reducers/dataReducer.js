export default function reducer(
  state = {
    data: [],
    error: null,
  },
  action
) {
  switch (action.type) {
    case "SET_DATA": {
      return { ...state, data: action.payload };
    }
    default: {
      return state;
    }
  }
}
