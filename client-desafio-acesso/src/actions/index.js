import axios from "axios";
import { FETCH_TWEETS } from "./types";

export const fetchTweets = keyword => async dispatch => {
  const res = await axios.post("/fetch-tweets", { keyword });

  dispatch({
    type: FETCH_TWEETS,
    payload: res.data
  });
};
