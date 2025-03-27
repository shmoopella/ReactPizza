import styles from "./Check.module.scss";
import { useSelector } from "react-redux";
import {RootState} from "../../redux/store.ts";
import {OrderPizza} from "../../redux/slices/cartSlice.ts";


function Check({ order }: {order: OrderPizza[]}) {
    const orderCost = useSelector((state: RootState) => state.cart.orderCost);
  const pizzasCount = useSelector((state: RootState) => state.cart.totalPizzasCount);
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
          {order.map((pizza: OrderPizza, index: number) => {
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
