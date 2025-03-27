import { useDispatch } from "react-redux";
import { category } from "../redux/slices/filterSlice";

function Categories({ activeCategory }: { activeCategory: number }) {
  const categories = ["Все", "Мясные", "Вегетарианские", "Острые"];
  const dispatch = useDispatch();
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) => (
          <li
            key={item}
            onClick={() => {
              dispatch(category(index));
            }}
            className={activeCategory === index ? "active" : ""}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
