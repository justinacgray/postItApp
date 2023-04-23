import React, { useState, useEffect } from 'react'
import Form from '../views/Form'
import axios from 'axios'
import { useParams } from 'react-router-dom'

  // todo => finish edit function and pass down props to Form Compoent 


const EditPost = ({closeModal}) => {
  const {id} = useParams()

  const [editPost, setEditPost] = useState({
    title : "",
    text : "",
    isUrgent : "",
    dueDate : "",
    categoryType: ""
  })
  const [errors, setErrors] = useState({});
  
   const handleEdit = (e) => {
        //the e (event) prevents the default
        e.preventDefault();
        // call axios to post the object to my api
        axios.put(`http://localhost:8000/api/posts/${id}`, {
            
        })
        //on success, redirect to product list
        .then((res) => {
            console.log(res.data);
            //if we have validation errors NOT errors with server
            if(res.data.error){
                setErrors(res.data.error.errors)
                // console.log("CHECKING SOMETHING");
            }
            else {
                // on success 
                // navigate 
            }
        })
        //on failure, save errors in state so the user can correct the incorrect inputs
        .catch((err) => {
            console.log(err);
        })
    }

    useEffect(() => {
      axios.get(`http://localhost:8000/api/posts/${id}`)
      .then(res => {
          console.log(res);
        // bring state in
      })
  }, []);


  return (
    <div>
      <Form closeModal={closeModal} submitForm={handleEdit} />
    </div>
  )
}

export default EditPost