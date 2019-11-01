import React, { useState } from "react";
import T from "prop-types";

export const ReviewsInput = ({ onAdd, initialValue }) => {
  const [value, setInputValue] = useState(initialValue);

  const onChange = event => setInputValue(event.target.value);

  const onSubmit = event => {
    event.preventDefault();
    if (value === "") return;
    onAdd(value);
    setInputValue("");
  };

  return (
    <form className="reviews-form" onSubmit={onSubmit}>
      <div className="search-input-container">
        <label htmlFor="inp" className="inp">
          <input
            type="text"
            id="inp"
            placeholder="&nbsp;"
            {...{ value }}
            onChange={onChange}
          />
          <span className="label">Review name...</span>
          <svg width="120px" height="26px" viewBox="0 0 120 26">
            <path d="M0,25 C21,25 46,25 74,25 C102,25 118,25 120,25" />
          </svg>
          <span className="border" />
        </label>
      </div>
    </form>
  );
};

ReviewsInput.propTypes = {
  onAdd: T.func.isRequired,
  initialValue: T.string
};

ReviewsInput.defaultProps = {
  initialValue: ""
};

export default ReviewsInput;
