import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Form from '../views/Form'
import axios from 'axios'

const NewNote = ({closeModal}) => {
  const navigate = useNavigate()

  // todo => finish create function and pass down props to Form Component  
  
  const handleCreate = (data) => {
    console.log("data -->",data)        
        // call axios to post the object to my api
        axios.post("http://localhost:7000/api/notes/create-note", data, 
            {
              withCredentials: true
            }
        )
        //on success, redirect to product list
        .then((res) => {
            console.log(res.data);
            // todo -> put new new note in allNotes array
            // state doesn't update unless manually rendered 
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

export default NewNote