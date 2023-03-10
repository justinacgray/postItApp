import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


// will be a model

const ViewOneNote = () => {

  const {id} = useParams()
  const [oneSingleNote, setOneSingleNote ] = useState({})

  useEffect(() => {
    // axios to call the data
    axios.get(`http://localhost:7000/api/notes/view/${id}`) 
    .then((res) => {
        console.log(res.data);
        setOneSingleNote(res.data); 
    })
    .catch((err) => {
        console.log(err);
    })
}, []);

  const deleteProduct = (noteId) => {
    axios.delete(`http://localhost:7000/api/notes/delete/${id}`)
        .then(res => {
            // navigate upon success
        })
        .catch((err) => {
            console.log(err);
        })
    }


  return (
    <div>
      view one component
    </div>
  )
}

export default ViewOneNote