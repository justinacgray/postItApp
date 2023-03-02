import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Navigate, useParams, Link } from 'react-router-dom'
import '../css/Dashboard.css'
import AllNotes from '../components/AllNotes'
import NewNote from '../components/NewNote'
import EditNote from '../components/EditNote'

const Dashboard = () => {

  const [modalToggle, setModalToggle] = useState(false)
  const [leftOpen, setLeftOften] = useState(false)

  // const openModalToggle = () => {
  //   alert("Clicked")
  // }
  const toggleSidebar = (event) => {
    event.Default()

  }



  return (
    <div className='dash-body'>
      <a id="nav-expand" href="#">
        <span class="icon icon-menu"></span>&nbsp;
        Menu
      </a>
      <nav>
        <a id="nav-collapse" href="#">
          <span class="icon icon-cross"></span>
        </a>
        <Link to="" onClick={() => setModalToggle(true)}><i className="fas fa-gavel"></i>Create a Note!</Link>
      </nav>
      <main>
        <h2>Todo </h2>
        {modalToggle && <NewNote closeModal={setModalToggle} /> } 
        
      </main>

    </div>
  )
}

export default Dashboard;

