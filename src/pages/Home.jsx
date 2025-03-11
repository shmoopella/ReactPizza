import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPizza } from "../redux/slices/pizasSlice.js";
import { setPage } from "../redux/slices/filterSlice.js";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import MySkeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
import ContentError from "../components/PizzaBlock/ContentError.jsx";
function Home() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizza.items);
  const { status } = useSelector((state) => state.pizza);
  const { categoryValue, sortValue, searchValue, currentPage } = useSelector(
    (state) => state.filter,
  );
  React.useEffect(() => {
    const url = new URL("https://6784503c1ec630ca33a4389a.mockapi.io/pizzas");
    url.searchParams.append(
      "category",
      categoryValue === 0 ? "" : categoryValue,
    );
    url.searchParams.append("sortBy", sortValue.type);
    url.searchParams.append("order", sortValue.order);
    url.searchParams.append("title", searchValue);
    url.searchParams.append("limit", 4);
    url.searchParams.append("page", currentPage);
    dispatch(fetchPizza(url));
  }, [categoryValue, sortValue, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={categoryValue} />
        <Sort selectedSort={sortValue} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {status === "error" ? (
          <ContentError />
        ) : status === "loading" ? (
          [...new Array(8)].map((_, index) => <MySkeleton key={index} />)
        ) : (
          pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)
        )}
      </div>
      <Pagination
        pageCount={3}
        handlePageClick={(page) => dispatch(setPage(page))}
      />
    </div>
  );
}

export default Home;
