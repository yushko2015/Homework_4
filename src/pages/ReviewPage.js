import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReviewsHook } from "../hooks/useReviewsHook";
import BackButton from "../components/BackButton";

const ReviewPage = () => {
  let { reviewId } = useParams();

  const [reviewName, setReviewName] = useState("");
  const { reviews } = useReviewsHook();

  useEffect(() => {
    setReviewName(reviews.find(review => review._id === reviewId).name);
  }, [reviews, reviewId]);

  return (
    <div className="reviews-fragment">
      <span>Review: {reviewName}</span>
      <span>ID: {reviewId}</span>
      <BackButton />
    </div>
  );
};

export default ReviewPage;
