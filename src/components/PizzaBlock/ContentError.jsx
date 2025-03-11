import styles from "./ContentError.module.scss";
export default function ContentError() {
  return (
    <div className={styles.root}>
      <h1>Произошла ошибка 🥺</h1>
      <p>
        К сожалению, не удалось загрузить пиццы. Попробуйте повторить попытку
        позже.
      </p>
    </div>
  );
}
