export default function reducer(
  state = {
    data: [],
    error: null,
  },
  action
) {
  switch (action.type) {
    case "FETCH_INFO_FULFILLED": {
      return { ...state, data: action.payload };
    }
    case "FETCH_INFO_REJECTED": {
      return { ...state, error: action.payload };
    }
    default: {
      return state;
    }
  }
}
