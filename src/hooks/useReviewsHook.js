import { useReducer, useEffect } from "react";

import {
  initialState,
  REVIEWS_ACTIONS,
  reviewsReducer
} from "../reviewsReducer";

export const useReviewsHook = () => {
  const [reviews, dispatch] = useReducer(reviewsReducer, initialState());

  const onAdd = name =>
    dispatch({
      name,
      type: REVIEWS_ACTIONS.ADD
    });

  // TODO: Need to make asyncronus becouse return undefined
  const getReviewById = _id => {
    dispatch({
      _id,
      type: REVIEWS_ACTIONS.GET_BY_ID
    });
  };

  useEffect(() => {
    const reviewsStringified = JSON.stringify(reviews);
    localStorage.setItem("reviews", reviewsStringified);
  }, [reviews]);

  return {
    reviews,
    onAdd,
    getReviewById
  };
};
