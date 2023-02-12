import React, {useState, useEffect} from 'react'
import axios from 'axios'


const AllNotes = () => {

    //create an array to hold all notes
    //set State to update the page for each new note added
    const [ notesArray, setNotesArray ] = useState([]);
    //need to use Effect to immediately the data on the page
    //need to use axios to get all products from the backend server
  
    useEffect(() => {
        axios.get("http://localhost:7000/api/notes/view-all-notes")
        .then((res) => {
            console.log(res.data);
            //set the new data in our state from my api
            setNotesArray(res.data.products); // needded to add .products my response was a new object with a key of products and the value is the array of product objects
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

      {/* view one component will be render here */}

    </div>
  )
}

export default AllNotes