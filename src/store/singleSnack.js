import axios from "axios";

const SINGLE_SNACK = "SINGLE_SNACK";
const CLEAR_STATE = "CLEAR_STATE";

export const setSingleSnack = (snack) => ({
  type: SINGLE_SNACK,
  snack,
});

export const clearState = () => ({
  type: CLEAR_STATE,
});

export const fetchSingleSnack = (snackId) => {
  return async (dispatch) => {
    try {
      const { data: snack } = await axios.get(`/api/products/${snackId}`);
      dispatch(setSingleSnack(snack));
    } catch (error) {
      console.error(error);
    }
  };
};

export default function (state = {}, action) {
  switch (action.type) {
    case SINGLE_SNACK:
      return action.snack;
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
}
