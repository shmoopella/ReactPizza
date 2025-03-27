import React from "react";
import { useSelector } from "react-redux";
import {RootState} from "../../redux/store.ts";

import Order from "../../components/Cart/Order";
import Check from "../../components/Cart/Check";
import EmptyCart from "../../components/Cart/EmptyCart";
import CustomConfirm from "../../components/Cart/CustomConfirm";
import styles from "./Cart.module.scss";

function Cart() {
  const [showConfirm, setShowConfirm] = React.useState(false);
  const order = useSelector((state: RootState) => state.cart.value);
  const handleCleanClick = () => {
    setShowConfirm(true);
  };
  if (order.length) {
    return (
      <div className={styles.root}>
        <CustomConfirm isShow={showConfirm} setShowConfirm={setShowConfirm} />
        <div className={styles.headerContainer}>
          <h1>Корзина</h1>
          <button className={styles.cleanButton} onClick={handleCleanClick}>
            Очистить корзину
          </button>
        </div>
        <div className={styles.orderContainer}>
          <Order order={order}></Order>
          <Check order={order}></Check>
        </div>
      </div>
    );
  } else {
    return <EmptyCart />;
  }
}

export default Cart;
