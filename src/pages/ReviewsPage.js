import React from "react";
import ReviewsInput from "../components/ReviewsInput";
import { useReviewsHook } from "../hooks/useReviewsHook";
import ReviewsList from "../components/ReviewsList";

const ReviewsPage = () => {
  const { reviews, onAdd } = useReviewsHook();

  return (
    <div className="reviews-container">
      <ReviewsInput onAdd={onAdd} />
      <ReviewsList {...{ reviews }} />
    </div>
  );
};

export default ReviewsPage;
