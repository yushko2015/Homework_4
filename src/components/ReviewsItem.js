import React from "react";
import { routes } from "../routes";
import { Link } from "react-router-dom";
import T from "prop-types";

const ReviewsItem = ({ review }) => {
  const href = `${routes.REVIEW}/${review._id}`;
  return (
    <li className="reviews-list__item">
      <Link to={href}>{review.name}</Link>
    </li>
  );
};

ReviewsItem.propTypes = {
  review: T.shape({
    _id: T.string.isRequired,
    name: T.string.isRequired
  }).isRequired
};

ReviewsItem.defaultProps = {
  review: T.shape({
    _id: "",
    name: ""
  })
};

export default ReviewsItem;
