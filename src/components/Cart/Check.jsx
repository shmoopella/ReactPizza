import styles from "./Check.module.scss";
import { useSelector } from "react-redux";

function Check({ order }) {
  const orderCost = useSelector((state) => state.cart.orderCost);
  const pizzasCount = useSelector((state) => state.cart.totalPizzasCount);
  return (
    <div className={styles.root}>
      <p>ВАШ ЧЕК</p>
      <table>
        <thead>
          <tr>
            <th>Наименование</th>
            <th>Кол-во</th>
            <th>Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {order.map((pizza, index) => {
            return (
              <tr key={index}>
                <td>{pizza.title}</td>
                <td>{pizza.count}.00</td>
                <td>{pizza.count * pizza.price}₽</td>
              </tr>
            );
          })}
          <tr className={styles.total}>
            <td>Всего</td>
            <td>{pizzasCount}.00</td>
            <td>{orderCost}₽</td>
          </tr>
        </tbody>
      </table>
      <button className={styles.orderButton}>ОФОРМИТЬ ЗАКАЗ</button>
    </div>
  );
}

export default Check;
