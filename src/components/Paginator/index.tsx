import { useState, useEffect, } from "react";
import ReactPaginate from "react-paginate";
import "./styles.css";
import { paginatorProps } from '../../interface'
import { RateList } from "../../pages/Rating/components/GameRateItem";
import { useGame } from "../../providers/store";

interface handlePageArgs {
  selected: number
}



export const Paginator = (props: paginatorProps) => {
  const { numOfElements = 0, per_page = 7, typeOfOrdenation = 'id' } = props
  const [currentPage, setCurrentPage] = useState(1);
  const { DB,  loadGames, setCurrentPageData } = useGame()


  useEffect(() => {
    setCurrentPageData({per_page, currentPage, typeOfOrdenation})
    loadGames(per_page, typeOfOrdenation,currentPage)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);




  const handlePageClick = ({ selected }: handlePageArgs) => {
    setCurrentPage(selected + 1);
  }

  const pageCount = Math.ceil(numOfElements / per_page);

  return (
    <div className="content">
      <div className="content-page">
        {DB.games.map((game: any, key: number) =>
          <RateList id={game.id} key={key} game={game} />
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
