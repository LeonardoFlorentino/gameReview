import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import "./styles.css";


export const Paginator = (Props: any) => {
  const { showData, userName, numOfElements,typePage, per_page = 7 } = Props
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const fetchData = (page: number) => {
    fetch(`https://api.github.com/users/${userName}/${typePage}?per_page=${per_page}&page=${page}`)
      .then((res) => res.json())
      .then((value) => setData(value))

  }

  const handlePageClick = ({ selected }: any) => {
    setCurrentPage(selected + 1);
  }

  const offset = currentPage * per_page;

  const currentPageData = data
    .map((follower) => showData(follower));

  const pageCount = Math.ceil(numOfElements / per_page);



  return (
    <div className="content">
      <div className="content-page">
        {currentPageData}
      </div>
      <ReactPaginate
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        previousLabel={"«"}
        nextLabel={"»"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"active"}
      />
    </div>
  );
}
