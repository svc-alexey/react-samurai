import classes from "../../components/Main/Friends/Friends.module.css";
import React, {useState} from "react";

const Pagination = ({totalItemsCount, itemsCount, setCurrentPage, currentPage, portionSize = 10}) => {

    let pages = [];
    let pagesCount = Math.ceil(totalItemsCount / itemsCount) ;
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount =  Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortion] = useState(1);
    let leftPortionLimit = (portionNumber - 1) * portionSize + 1;
    let rightPortionLimit = portionNumber * portionSize;

    let onPrevPortion = () => {
        setPortion(portionNumber - 1);
    }
    let onNextPortion = () => {
        setPortion(portionNumber + 1);
    }

    return (
        <div className={classes.pageButtons}>
            {portionNumber > 1 && <button onClick={onPrevPortion}>Prev</button>}
            {pages.filter(pages => pages >= leftPortionLimit && pages <= rightPortionLimit).map(pages => {
                return (
                    <button key={pages} onClick={() => {
                        setCurrentPage(pages)
                    }}
                            className={currentPage === pages ? classes.selectedPage : classes.pageBtn}>{pages}</button>
                )
            })}
            {portionCount > portionNumber && <button onClick={onNextPortion}>Next</button>}
        </div>
    )
}

export default Pagination;