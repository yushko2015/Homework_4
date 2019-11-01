import uuid from "uuid/v4";

export const REVIEWS_ACTIONS = {
  ADD: "add",
  GET_BY_ID: "get-by-id"
};

export const initialState = () => {
  const reviewsFromStorage = localStorage.getItem("reviews");
  const reviewsParsed = JSON.parse(reviewsFromStorage);

  return reviewsParsed || [];
};

export const reviewsReducer = (reviews, action) => {
  const { type, _id, name } = action;

  switch (type) {
    case REVIEWS_ACTIONS.ADD:
      return [
        ...reviews,
        {
          _id: uuid(),
          name
        }
      ];
    case REVIEWS_ACTIONS.GET_BY_ID:
      return reviews.find(review => review._id === _id);
    default:
      throw new Error();
  }
};
