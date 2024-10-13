
import Login from './View/Login/Login';
import Dashboard from './View/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Device from './View/Device/Device';
import Service from './View/Service/Service';
import Reports from './View/Reports/Reports';

function App() {

  return (
    <div className="font-nunito">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/device/*" element={<Device />} />
        <Route path="/service/*" element={<Service />} />
        <Route path="/reports/*" element={<Reports />} />
      </Routes>
    </div>
  )
}

export default App
