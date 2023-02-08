import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LogReg from './views/LogReg'
import Form from './views/Form'
import Dashboard from './views/Dashboard'

function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<LogReg />} />
            <Route path='/create-note' element={<Form/>} />
            {/* <Route path='/dashboard/:username' element={<Dashboard/>} /> */}
            <Route path='/dashboard' element={<Dashboard/>} />
            {/* <Route path='view-note/:id' element={< />} /> */}
            {/* // <Route path='edit-note/:id' element={< />} /> */}
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;

