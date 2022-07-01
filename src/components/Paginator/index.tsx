import { useState, useEffect, } from "react";
import ReactPaginate from "react-paginate";
import "./styles.css";
import { paginatorProps } from '../../interface'
import { RateList } from "../../pages/Rating/components/GameRateItem";

interface handlePageArgs {
  selected: number
}



export const Paginator = (props: paginatorProps) => {
  const {  numOfElements = 0, per_page = 7, typeOfOrdenation = 'id' } = props
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState([]);


  useEffect(() => {
    const fetchPageData = async (page: number) => {
      fetch(`https://uni-games.herokuapp.com/?size=${per_page}&sort=${typeOfOrdenation}&page=${page}`)
        .then((res) => res.json())
        .then((value) => setData(value.content))
    }
    fetchPageData(currentPage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);




  const handlePageClick = ({ selected }: handlePageArgs) => {
    setCurrentPage(selected + 1);
  }


  const pageCount = Math.ceil(numOfElements / per_page);

  return (
    <div className="content">
      <div className="content-page">
        {data.map((game:any, key:number) =>
          <RateList id={game.id} key={key} game={game}/>
        )}
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
