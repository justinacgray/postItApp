import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


// will be a model

const ViewOnePost = () => {

  const {id} = useParams()
  const [oneSinglePost, setOneSinglePost ] = useState({})

  useEffect(() => {
    // axios to call the data
    axios.get(`http://localhost:7000/api/posts/view/${id}`) 
    .then((res) => {
        console.log(res.data);
        setOneSinglePost(res.data); 
    })
    .catch((err) => {
        console.log(err);
    })
}, []);

  const deletePost = (postId) => {
    axios.delete(`http://localhost:7000/api/posts/delete/${id}`)
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

export default ViewOnePost