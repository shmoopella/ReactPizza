import React from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import MySkeleton from "../components/PizzaBlock/Skeleton";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock";
import Pagination from "../components/Pagination/Pagination";
function Home() {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const activeCategory = useSelector((state) => state.filter.categoryValue);

  const selectedSort = useSelector((state) => state.filter.sortValue);
  const searchValue = useSelector((state) => state.filter.searchValue);

  const [currentPage, setCurrentPage] = React.useState(1);

  function getPizzas(url) {
    axios
      .get(url)
      .then((res) => res.data)
      .then((data) => {
        setPizzas(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setPizzas([]);
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  React.useEffect(() => {
    const url = new URL("https://6784503c1ec630ca33a4389a.mockapi.io/pizzas");
    url.searchParams.append(
      "category",
      activeCategory === 0 ? "" : activeCategory,
    );
    url.searchParams.append("sortBy", selectedSort.type);
    url.searchParams.append("order", selectedSort.order);
    url.searchParams.append("title", searchValue);
    url.searchParams.append("limit", 4);
    url.searchParams.append("page", currentPage);
    getPizzas(url);
  }, [activeCategory, selectedSort, searchValue, currentPage]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory} />
        <Sort selectedSort={selectedSort} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, index) => <MySkeleton key={index} />)
          : pizzas.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
      <Pagination pageCount={3} handlePageClick={setCurrentPage} />
    </div>
  );
}

export default Home;
