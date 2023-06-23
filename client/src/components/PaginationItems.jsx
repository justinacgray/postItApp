import axios from 'axios';
import React, { useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate';


// https://www.npmjs.com/package/react-paginate

const PaginationItems = () => {
    const [userPostIts, setUserPostIts] = useState([])
    const [perPage, setPerPage] = useState(7);
    const [currentPage, setCurrentPage] = useState(0);
    



     // Invoke when user click to request another page.
    const handlePageClick = (event) => {

    };

    return (
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        // pageCount={pageCount}
        previousLabel="< previous"
        // renderOnZeroPageCount={null}
    />
    )
}

export default PaginationItems;