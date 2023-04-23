import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate, useParams, Link } from 'react-router-dom'
import '../css/Dashboard.css'
import AllPosts from '../components/AllPosts'
import NewPost from '../components/NewPost'
import EditPost from '../components/EditPost'

const Dashboard = ({user_Id, setUser_Id}) => {

  const navigate = useNavigate()
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
  
  console.log("USER ID --->", user_Id)
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

const logout = (e) => {
  axios
      .post(
          "http://localhost:7000/api/users/logout",
          {},
          {
              withCredentials: true,
          })
      .then((res) => {
          console.log(res.data);
          navigate("/");
      })
      .catch((err) => {
          console.log(err);
      });
};



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
        <a onClick={(e) => logout()}>Logout</a>
        <a onClick={() => setModalToggle(true)}><i className="fas fa-gavel"></i>Create a Post!</a>
      </nav>
      <main>
        <h2>{user_Id._id}</h2>
        <h2>Posts</h2>
        {modalToggle && <NewPost closeModal={setModalToggle} /> } 
        <AllPosts  />
      </main>

    </div>
  )
}

export default Dashboard;

