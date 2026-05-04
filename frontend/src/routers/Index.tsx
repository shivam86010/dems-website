import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login"; 
import DashboardLayout from '../layout/Index'
const Index = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/" element={<Navigate to="/dashboard" replace />} />
      

        <Route path="/dashboard" element={<DashboardLayout />}>
          
        </Route>
    </Routes>
  );
}

export default Index