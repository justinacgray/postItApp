import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Navigate, useParams} from 'react-router-dom'
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
    <div id='layout'>
      <aside className='sidebar'>
        <div>
          <button onClick={() => setModalToggle(true)}>
            Let's Post Something
          </button>
        {modalToggle && <NewNote closeModal={setModalToggle} /> }
        </div>
      </aside>
      <main className='main-body'>
        <AllNotes />
        {/* <EditNote /> */}
      </main>

    </div>
  )
}

export default Dashboard;
