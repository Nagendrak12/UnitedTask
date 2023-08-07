import { FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS } from "./constants";

const initialState = {
  data: [],

  error: null,
};

export const dataReducer = (state = initialState, action) => {
  //   console.log(action.payload);
  console.log("reducercalled");
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,

        error: null,
      };

    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],

        error: action.payload,
      };
    default:
      return state;
  }
};
