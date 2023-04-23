import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card} from 'react-bootstrap';


const AllPosts = () => {

  //create an array to hold all posts
  //set State to update the page for each new postit added
  const [postsArray, setPostsArray] = useState([]);
  //need to use Effect to immediately the data on the page
  //need to use axios to get all products from the backend server

  useEffect(() => {
    axios.get("http://localhost:7000/api/posts/view-all-posts", {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        //set the new data in our state from my api
        setPostsArray(res.data); // needded to add .products my response was a new object with a key of products and the value is the array of product objects
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
    <div>

      All Posts Goes HEre

      {
        postsArray.map((onePost, index) => (
          <Card key={index} className="text-center">
            <Card.Header>{onePost.title} {onePost.dueDate}</Card.Header>
            <Card.Body>
              <Card.Title>{onePost.title}</Card.Title>
              <Card.Text>
                {onePost.text}
              </Card.Text>
              <Button variant="primary">Edit {onePost.title}</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Created {onePost.updatedAt}</Card.Footer>
          </Card>

        ))
      }

    </div>
  )
}

export default AllPosts