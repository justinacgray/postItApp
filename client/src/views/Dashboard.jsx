import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useParams, Link } from 'react-router-dom'
import '../css/Dashboard.css'
import AllNotes from '../components/AllNotes'
import NewNote from '../components/NewNote'
import EditNote from '../components/EditNote'

const Dashboard = ({user_Id, setUser_Id}) => {

  const [modalToggle, setModalToggle] = useState(false)
  const [leftOpen, setLeftOften] = useState(false)

  // const openModalToggle = () => {
  //   alert("Clicked")
  // }
  const toggleSidebar = (event) => {
    event.Default()

  }
  // todo userId is not saving to state properly upon reference
  // for some reason when setting userId to string it reset my state but using an object it didn't?? 
  
  useEffect(() => {
    axios.get("http://localhost:7000/api/users/secure-user",
    {
      withCredentials: true,
    })
    .then((res) => {
        console.log(res.data);
        setUser_Id(res.data)
    })
    .catch((err) => {
        console.log(err);
    })
}, []);



  return (
    <div className='dash-body'>
      <a id="nav-expand" href="#">
        <span className="icon icon-menu"></span>&nbsp;
        Menu
      </a>
      <nav>
        <a id="nav-collapse" href="#">
          <span className="icon icon-cross"></span>
        </a>
        <Link to="" onClick={() => setModalToggle(true)}><i className="fas fa-gavel"></i>Create a Note!</Link>
      </nav>
      <main>
        <h1>{JSON.stringify(user_Id)}</h1>
        <h2>Todo </h2>
        {modalToggle && <NewNote closeModal={setModalToggle} /> } 
        
      </main>

    </div>
  )
}

export default Dashboard;

