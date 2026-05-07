import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login"; 
import DashboardLayout from '../layout/Index'
import NotFound from "../pages/NotFound";
import Case from '../pages/Cases'
import CaseDashboard from '../pages/CaseDashboard'
import CaseDetailView from '../components/caseEvidence/CaseDetailView'

const Index = () => {
  const isAuthenticated = true; 

  return (
    <Routes>
      {/* Root Route */}
      <Route 
        path="/" 
        element={
          isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
        } 
      />

      {/* Dashboard Routes */}
      <Route 
        path="/dashboard" 
        element={
          isAuthenticated ? <DashboardLayout /> : <Navigate to="/" replace />
        }
      >
        <Route path="case" element={<Case />} />
        <Route path="cases/view/:id" element={<CaseDetailView />} />
        <Route index element={<CaseDashboard />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Index;