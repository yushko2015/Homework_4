import React from "react";
import ReviewsItem from "../components/ReviewsItem";
import T from "prop-types";

const ReviewsList = ({ reviews }) => {
  return (
    <ul className="reviews-list">
      {reviews.map(review => (
        <ReviewsItem key={review._id} {...{ review }} />
      ))}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: T.array.isRequired
};

ReviewsList.defaultProps = {
  reviews: []
};

export default ReviewsList;
