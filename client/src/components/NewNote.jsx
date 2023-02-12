import React, { useState } from 'react'
import Form from '../views/Form'
import axios from 'axios'

const NewNote = ({closeModal}) => {

  // todo => finish create function and pass down props to Form Component  

  const [newNote, setNewNote] = useState({
    title : "",
    text : "",
    isUrgent : "",
    dueDate : "",
    categoryType: ""
  })
  const [errors, setErrors] = useState({});
  
  const handleCreate = (e) => {
        //the e (event) prevents the default
        e.preventDefault();
        // call axios to post the object to my api
        axios.post("http://localhost:7000/api/notes/create-note", newNote, 
            {
              withCredentials: true
            }
        )
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


  return (
    <div>
      {/* pass state down to form */}
      <Form closeModal={closeModal} submitForm={handleCreate} note={newNote} setNote={setNewNote} errors={errors} setErrors={setErrors}/>
    </div>
  )
}

export default NewNote