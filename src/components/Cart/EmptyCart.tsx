import styles from "./EmptyCart.module.scss";
import emptyCart from "../../assets/img/empty-cart.png";
function EmptyCart() {
  return (
    <div className={styles.container}>
      <h2>Ваша корзина пока что пуста 😌</h2>
      <p>Пора добавлять пиццы в корзину и оформлять заказ</p>
      <img src={emptyCart} alt="cart.png" />
    </div>
  );
}
export default EmptyCart;
