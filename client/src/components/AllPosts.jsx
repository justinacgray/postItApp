import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import '../css/All_Posts.css'
import { Button, Card} from 'react-bootstrap';
import { PostContext } from '../context/PostContext';
import PaginationItems from './PaginationItems'


const AllPosts = () => {

  //create an array to hold all posts
  //set State to update the page for each new postit added
  const {postsArray, setPostsArray}  = useContext(PostContext)
  //need to use Effect to immediately the data on the page
  //need to use axios to get all products from the backend server

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

  // const removeFromDom = (postsId) => {
  //     setPostsArray(postsArray.filter(post => posts._id !== postsId));
  // }

  // const deleteProduct = (postsId) => {
  //     axios.delete("http://localhost:7000/api/delete/")
  //         .then(res => {
  //             removeFromDom(postsId);
  //             // navigate upon success 
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         })
  //     }


  return (
    <div className='all-posts'>
      All Posts Goes HEre

      <div className='posts-container'>
      {/* <Card  className="card-container">
            <Card.Header className='card-header'>Post Header</Card.Header>
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>Post Title</Card.Title>
              <Card.Text className='card-text' >
                Post Text
              </Card.Text>
              <Button className= '' variant="primary">Edit Post Title</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Created Post</Card.Footer>
      </Card> */}

      {
        postsArray.map((onePost, index) => (
          <Card key={index} className="card-container">
            <Card.Header className='card-header'>{onePost.title} {onePost.dueDate}</Card.Header>
            <Card.Body className='card-body'>
              <Card.Title className='card-title'>{onePost.title}</Card.Title>
              <Card.Text className='card-text' >
                {onePost.text}
              </Card.Text>
              <Button className= '' variant="primary">Edit {onePost.title}</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Created {onePost.updatedAt}</Card.Footer>
          </Card>

        )) } 
        </div>
        
      <PaginationItems />

    </div>
  )
}

export default AllPosts