import React, { useState, useEffect, ReactNode } from "react";
import ReactPaginate from "react-paginate";
import { dataTypes } from "../../interface";
import "./styles.css";

interface paginatorProps {
  typePage: string,
  showData: (value: dataTypes) => ReactNode,
  numOfElements: number | undefined,
  fetchUserData: (value1: string, value2: boolean) => void,
  mainUserName: string,
  per_page?: number,
}

interface handlePageArgs {
  selected: number
}

export const Paginator = (props: paginatorProps) => {
  const { showData, typePage, fetchUserData, mainUserName,  numOfElements = 0, per_page = 7 } = props
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchPageData = (page: number) => {
      fetch(`https://api.github.com/users/${mainUserName}/${typePage}?per_page=${per_page}&page=${page}`)
        .then((res) => res.json())
        .then((value) => setData(value))
    }
    fetchPageData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    fetchUserData(mainUserName , false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mainUserName]);



  const handlePageClick = ({ selected }: handlePageArgs) => {
    setCurrentPage(selected + 1);
  }


  const currentPageData = () => {
    return (data.map((follower) => showData(follower)))
  }

  const pageCount = Math.ceil(numOfElements / per_page);

  return (
    <div className="content">
      <div className="content-page">
        {currentPageData()}
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
