import './App.css';
import React, {useState, createContext} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogReg from './views/LogReg'
import Form from './views/Form'
import Dashboard from './views/Dashboard'

// todo -> finish setup of useContext
export const MyContext = createContext()

function App() {
  const [user_Id, setUser_Id] = useState({})

  return (
    <div>
        <BrowserRouter>
        <MyContext.Provider value={user_Id}>
          <Routes>
            <Route path='/' element={<LogReg user_Id={user_Id} setUser_Id ={setUser_Id} />} />
            {/* <Route path='/dashboard/:username' element={<Dashboard/>} /> */}
            <Route path='/dashboard' element={<Dashboard user_Id={user_Id} setUser_Id={setUser_Id} />} />
          </Routes>
        </MyContext.Provider>
        </BrowserRouter>
    </div>
  );
}

export default App;

