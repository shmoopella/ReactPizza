import { useDispatch } from "react-redux";
import {
  addPizza,
  deletePizza,
  decrementPizza,
} from "../../redux/slices/cartSlice.js";
import {OrderPizza} from "../../redux/slices/cartSlice.js";

import styles from "./Order.module.scss";
import deleteIcon from "../../assets/img/close_icon.svg";

function Order({ order }:{ order: OrderPizza[]}) {
  const dispatch = useDispatch();
  const countIncrementClick = (title: string, type: number, size: number, price: number) => {
    dispatch(addPizza({ title, type, size, price }));
  };
  const countDecrementClick = (title: string, type: number, size: number, price: number) => {
    dispatch(decrementPizza({ title, type, size, price }));
  };
  const deletePizzaClick = (title: string, size: number, type: number, count: number, price: number) => {
    dispatch(deletePizza({ title, size, type, count, price }));
  };
  return (
    <div className={styles.root}>
      {order.map(({ url, title, type, size, price, count }, index) => (
        <div className={styles.wrap} key={index}>
          <div className={styles.descriptionWrap}>
            <img src={url} alt="pizza_img" className={styles.pizzaImg} />
            <div className={styles.descriptionBlock}>
              <h3>{title}</h3>
              <p>
                {size === 0 ? "25" : size === 1 ? "30" : "35"} см /{" "}
                {type ? "тонкое" : "традиционное"}
              </p>
              <div>
                <button
                  onClick={() => countDecrementClick(title, type, size, price)}
                >
                  {" "}
                  -
                </button>
                <span className={styles.pizzaCount}>{count}</span>
                <button
                  onClick={() => countIncrementClick(title, type, size, price)}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
          </div>

          <div className={styles.priceBlock}>
            <p>
              Цена за шт. - {price} руб.
              <br />
              Цена за всё - {count}x{price} = {count * price}руб.
            </p>
            <button
              onClick={() => deletePizzaClick(title, size, type, count, price)}
            >
              <img
                src={deleteIcon}
                alt="delete_icon"
                className={styles.deleteIcon}
              />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Order;
