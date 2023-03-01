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
      <nav>
        <input type="checkbox" name="" id="side-menu-switch" />
        <div className="side-menu">
          <form action="">
            <input type="text" placeholder="Search For Note" />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </form>
          <Link to="" onClick={() => setModalToggle(true)}><i className="fas fa-gavel"></i>Create a Note!</Link>
          <label htmlFor="side-menu-switch">
            <i className="fas fa-angle-left"></i>
          </label>
        </div>
      {modalToggle && <NewNote closeModal={setModalToggle} /> }
      </nav>
      <main >
      <AllNotes  />
      {/* <EditNote /> */}

      </main>
      
    </div>
  )
}

export default Dashboard;

