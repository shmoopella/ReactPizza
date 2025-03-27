import { useDispatch } from "react-redux";
import { cleanCart } from "../../redux/slices/cartSlice.js";

import styles from "./CustomConfirm.module.scss";
function CustomConfirm({ isShow, setShowConfirm } : {isShow: boolean; setShowConfirm : (value: boolean) => void}) {
  const dispatch = useDispatch();
  const onYesButtonClick = () => {
    dispatch(cleanCart());
    setShowConfirm(false);
  };

  const onNoButtonClick = () => {
    setShowConfirm(false);
  };
  if (!isShow) {
    return null;
  }
  return (
    <div className={styles.overlay}>
      <div className={styles.content}>
        <p className={styles.message}>
          Вы уверены, что хотите полностью очистить корзину?
        </p>
        <div className={styles.buttonGroup}>
          <button
            className={`${styles.button} ${styles.yesButton}`}
            onClick={onYesButtonClick}
          >
            Да
          </button>
          <button
            className={`${styles.button} ${styles.noButton}`}
            onClick={onNoButtonClick}
          >
            Нет
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomConfirm;
