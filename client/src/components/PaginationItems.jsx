import React from 'react'
import ReactPaginate from 'react-paginate';


// https://www.npmjs.com/package/react-paginate

const PaginationItems = () => {
    const [perPage, setPerPage] = useState(7);
    // const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);

    // const pageCount = Math.ceil(items.length / itemsPerPage);


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