import axios from 'axios';
import React, { useState, useEffect} from 'react'
import { PostContext } from '../context/PostContext';
import ReactPaginate from 'react-paginate';


// https://www.npmjs.com/package/react-paginate

const PaginationItems = () => {

    const {postsArray, setPostsArray}  = useContext(PostContext)
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 7
    const pagesVisited = currentPage * postsArray
    

    const displayPosts = userPostIts.slice(pagesVisited, pagesVisited + postsPerPage).map((onePost) => {
        return (
            // display the cards from postArrays
        )
    })
     // Invoke when user click to request another page.
    // const handlePageClick = (event) => {

    // };

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