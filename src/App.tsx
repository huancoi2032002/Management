
import Login from './View/Login/Login';
import Dashboard from './View/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Device from './View/Device/Device';

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/device" element={<Device />} />
      </Routes>
    </>
  )
}

export default App
