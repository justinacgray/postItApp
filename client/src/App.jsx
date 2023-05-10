import './App.css';
import React, {useState} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogReg from './views/LogReg'
import Form from './views/Form'
import Dashboard from './views/Dashboard'
import { AuthContextProvider } from './context/AuthContext';

function App() {
  const [user_Id, setUser_Id] = useState({})
  // TODO -> implement useReducer and useContext



  return (
    <div>
        <BrowserRouter>
    
          <Routes>
            <Route path='/' element={<LogReg user_Id={user_Id} setUser_Id ={setUser_Id} />} />
            {/* <Route path='/dashboard/:username' element={<Dashboard/>} /> */}
            <Route path='/dashboard' element={<Dashboard user_Id={user_Id} setUser_Id={setUser_Id} />} />
          </Routes>
    
        </BrowserRouter>
    </div>
  );
}

export default App;

