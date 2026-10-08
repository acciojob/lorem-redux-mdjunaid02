const initialState = {
  loading: false,
  data: [],
  error: null
};

const loremReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_LOREM_REQUEST":
      return {
        ...state,
        loading: true,
        error: null
      };

    case "FETCH_LOREM_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };

    case "FETCH_LOREM_FAILURE":
      return {
        ...state,
        loading: false,
        data: null,
        error: action.payload
      };

    default:
      return state;
  }
};

export default loremReducer;