import React from "react";
import useModal from "../hooks/useModal";
import Modal from "../components/Modal";
import { useHistory } from "react-router-dom";
import { routes } from "../routes";

const ShopPage = () => {
  const { isShowing, toggle } = useModal();
  const history = useHistory();

  return (
    <div className="shop-content">
      <h1>Welcome to Shop</h1>
      <button onClick={toggle}>Purchase</button>
      <Modal
        onOkClick={() => {
          history.push(routes.HOME);
        }}
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
};

export default ShopPage;
