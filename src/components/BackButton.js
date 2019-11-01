import React from "react";
import { useHistory } from "react-router-dom";

const BackButton = () => {
  const history = useHistory();
  const onBackClick = () => {
    history.goBack();
  };

  return (
    <button className="back-btn" onClick={onBackClick}>
      Back
    </button>
  );
};

export default BackButton;
