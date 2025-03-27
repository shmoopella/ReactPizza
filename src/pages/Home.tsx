import React from "react";
import { useSelector} from "react-redux";
import {FetchedPizza, fetchPizza} from "../redux/slices/pizasSlice.ts";
import { setPage } from "../redux/slices/filterSlice.ts";
import {RootState} from "../redux/store.ts";
import {useAppDispatch} from "../redux/store.ts";

import Categories from "../components/Categories.js";
import Sort from "../components/Sort.js";
import MySkeleton from "../components/PizzaBlock/Skeleton.js";
import PizzaBlock from "../components/PizzaBlock/PizzaBlock.js";
import Pagination from "../components/Pagination/Pagination";
import ContentError from "../components/PizzaBlock/ContentError.tsx";


function Home() {
  const dispatch = useAppDispatch();
  const pizzas = useSelector((state:RootState) => state.pizza.items);
  const { status } = useSelector((state:RootState) => state.pizza);
  const { categoryValue, sortValue, searchValue, currentPage } = useSelector(
    (state:RootState) => state.filter,
  );

  React.useEffect(() => {
    const url = new URL("https://6784503c1ec630ca33a4389a.mockapi.io/pizzas");
    url.searchParams.append(
      "category",
      categoryValue === 0 ? "" : categoryValue.toString(),
    );
    url.searchParams.append("sortBy", sortValue.type);
    url.searchParams.append("order", sortValue.order);
    url.searchParams.append("title", searchValue);
    url.searchParams.append("limit", "4");
    url.searchParams.append("page", currentPage.toString());
    dispatch(fetchPizza(url.toString()));
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
          pizzas.map((obj:FetchedPizza, index:number) => <PizzaBlock key={index} {...obj} />)
        )}
      </div>
      <Pagination
        pageCount={3}
        handlePageClick={(page: number) => dispatch(setPage(page))}
      />
    </div>
  );
}

export default Home;
