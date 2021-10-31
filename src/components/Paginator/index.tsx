import { useState, useEffect,  } from "react";
import ReactPaginate from "react-paginate";
import { useHistory } from "react-router";
import { treatResponse } from "../Toast";
import "./styles.css";
import {paginatorProps} from '../../interface'

interface handlePageArgs {
  selected: number
}

export const Paginator = (props: paginatorProps) => {
  const { showData, typePage, fetchUserData, mainUserName, numOfElements = 0, per_page = 7 } = props
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);
  const history = useHistory()


  useEffect(() => {
    fetchUserData(mainUserName, false)
      .then(response => {
        treatResponse(response, [200])
        if (response !== 200) {
          history.push('/')
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const fetchPageData = async (page: number) => {
      fetch(`https://api.github.com/users/${mainUserName}/${typePage}?per_page=${per_page}&page=${page}`)
        .then((res) => res.json())
        .then((value) => setData(value))
    }
    fetchPageData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);




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
