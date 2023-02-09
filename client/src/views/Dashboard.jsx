import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Navigate, useParams} from 'react-router-dom'
import '../css/Dashboard.css'
import AllNotes from '../components/AllNotes'

const Dashboard = () => {

  const [leftOpen, setLeftOften] = useState(false)

  const toggleSidebar = (event) => {
    event.Default()

  }

  
  return (
    <div id='layout'>
      <aside>
        <div>
          <a href="/create-note">
            Let's post it!
          </a>

        </div>
      </aside>
      <main>
        <AllNotes />
      </main>

    </div>
  )
}

export default Dashboard;
