import ReactPaginate from "react-paginate";

import styles from "./Pagination.module.scss";

function Pagination({ pageCount, handlePageClick }:{pageCount:number; handlePageClick:(page: number)=>void}) {
  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => handlePageClick(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={pageCount}
      renderOnZeroPageCount={null}
    />
  );
}

export default Pagination;
