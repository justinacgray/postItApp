import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import '../css/All_Posts.css'
import { Button, Card} from 'react-bootstrap';
import { PostContext } from '../context/PostContext';
import ReactPaginate from 'react-paginate'



const AllPosts = () => {
  //create an array to hold all posts
  //set State to update the page for each new postit added
  const {postsArray, setPostsArray}  = useContext(PostContext)
  //need to use Effect to immediately the data on the page
  //need to use axios to get all products from the backend server
    const [currentPage, setCurrentPage] = useState(0);
    const postsPerPage = 7
    const pagesVisited = currentPage * postsArray.length

    const maxPosts = pagesVisited + postsPerPage

    console.log('POSTS ARR', postsArray)
    console.log("pagesVisited",pagesVisited)
  

  // todo need to update axios call to display ONLY the user that is logged in posts
  useEffect(() => {
    axios.get("http://localhost:7000/api/posts/view-all-posts", {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        //set the new data in our state from my api
        setPostsArray(res.data); // needed to add .products my response was a new object with a key of products and the value is the array of product objects
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  // TODO figure out how to change the current page / when clicking prev/next it doesn't change the items on the page
  // https://stackoverflow.com/questions/72922274/pagination-with-react-doesnt-work-all-items-are-still-displayed-on-screen
    const displayPosts = postsArray.slice(pagesVisited, maxPosts).map((onePost, index) => {
        console.log('one post')
        return (
            <div >
                
            {/* <div className='posts-container'> */}
                <Card key={index} className="card-container">
                    <Card.Header className='card-header'>{onePost.title} {onePost.dueDate}</Card.Header>
                    <Card.Body className='card-body'>
                        <Card.Title className='card-title'>{onePost.title}</Card.Title>
                        <Card.Text className='card-text' >
                            {onePost.text}
                        </Card.Text>
                        <Button className='' variant="primary">Edit {onePost.title}</Button>
                    </Card.Body>
                    <Card.Footer className="text-muted">Created {onePost.updatedAt}</Card.Footer>
                </Card>
            {/* </div>  */}
            </div>
        )
    })

    const pageCount = Math.ceil(postsArray.length / postsPerPage)

    // selected is the number of the page you want to move to
    const changePage = ({selected}) => {
      console.log("working?", selected)
      setCurrentPage(selected)
    }

  return (
    <div className='all-posts'>
      All Posts Goes HEre

      <div className='posts-container'>
        {displayPosts}
        <ReactPaginate 
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName ={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName = {"nextBttn"}
        disabledClassName = {"paginationDisabled"}
        activeClassName={"paginationActive"}
        />

        </div>

  

    </div>
  )
}

export default AllPosts