import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card} from 'react-bootstrap';


const AllNotes = () => {

  //create an array to hold all notes
  //set State to update the page for each new note added
  const [notesArray, setNotesArray] = useState([]);
  //need to use Effect to immediately the data on the page
  //need to use axios to get all products from the backend server

  useEffect(() => {
    axios.get("http://localhost:7000/api/notes/view-all-notes", {withCredentials: true})
      .then((res) => {
        console.log(res.data);
        //set the new data in our state from my api
        setNotesArray(res.data); // needded to add .products my response was a new object with a key of products and the value is the array of product objects
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  // const removeFromDom = (notesId) => {
  //     setNotesArray(notesArray.filter(note => notes._id !== notesId));
  // }

  // const deleteProduct = (notesId) => {
  //     axios.delete("http://localhost:7000/api/delete/")
  //         .then(res => {
  //             removeFromDom(notesId);
  //             // navigate upon success 
  //         })
  //         .catch((err) => {
  //             console.log(err);
  //         })
  //     }


  return (
    <div>

      All Notes Goes HEre

      {
        notesArray.map((oneNote, index) => (
          <Card key={index} className="text-center">
            <Card.Header>{oneNote.title} {oneNote.dueDate}</Card.Header>
            <Card.Body>
              <Card.Title>{oneNote.title}</Card.Title>
              <Card.Text>
                {oneNote.text}
              </Card.Text>
              <Button variant="primary">Edit {oneNote.title}</Button>
            </Card.Body>
            <Card.Footer className="text-muted">Created {oneNote.updatedAt}</Card.Footer>
          </Card>

        ))
      }

    </div>
  )
}

export default AllNotes