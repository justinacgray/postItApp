import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../views/Form'
import axios from 'axios'
import { PostContext } from '../context/PostContext';

const NewPost = ({closeModal}) => {
  const navigate = useNavigate()
  const {postsArray, setPostsArray}  = useContext(PostContext)

  // todo => finish create function and pass down props to Form Component  
  
  const handleCreate = (data) => {
    console.log("data -->",data)        
        // call axios to post the object to my api
        axios.post("http://localhost:7000/api/posts/create-post", data, 
            {
              withCredentials: true
            }
        )
        //on success, redirect to post list
        .then((res) => {
            console.log(res.data);
            setPostsArray([...postsArray, res.data]) 
            closeModal(!closeModal)
        })
        //on failure, save errors in state so the user can correct the incorrect inputs
        .catch((err) => {
            console.log(err);
        })
    }


  return (
    <div>
      {/* pass state down to form */}
      <Form closeModal={closeModal} submitForm={handleCreate} />
    </div>
  )
}

export default NewPost