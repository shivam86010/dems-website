import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../pages/Login"; 
import DashboardLayout from '../layout/Index'
import NotFound from "../pages/NotFound";
import Case from '../pages/Cases'
import CaseDashboard from '../pages/CaseDashboard'
import CaseDetailView from '../components/caseEvidence/CaseDetailView' 
import Dashboard from "../pages/DigitalChainofCustody/Dashboard";
import CosCase from '../pages/DigitalChainofCustody/Cases';
import CosCaseDetails from '../pages/DigitalChainofCustody/CaseDetails'
import CosCreateCase from '../pages/DigitalChainofCustody/CreateCase' 
import EvidenceVault from "../pages/DigitalChainofCustody/EvidenceVault"; 
import EvidenceDetails from "../pages/DigitalChainofCustody/EvidenceDetails";
import UsersRoles from "../pages/DigitalChainofCustody/UsersRoles";
import AuditLogs from "../pages/DigitalChainofCustody/AuditLogs"; 
import Reports from "../pages/DigitalChainofCustody/Reports";

const Index = () => {
  const isAuthenticated = false; // replace with real auth logic

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
        {/* Use relative paths (no leading slash) */}
        <Route path="case" element={<Case />} />
        <Route path="cases/view/:id" element={<CaseDetailView />} />
        <Route index element={<CaseDashboard />} /> 
        <Route path="cos" element={<Dashboard/>}/>
        <Route path="cos-case" element={<CosCase/>}/>
        <Route path="cos-create-case" element={<CosCreateCase/>} />
        <Route  path="cos-case-details/:id" element={<CosCaseDetails/>} /> 
        <Route  path="evidence-vault" element={<EvidenceVault/>} />
        <Route  path="evidence-details/:id" element={<EvidenceDetails/>} /> 
         <Route path="users" element={<UsersRoles />} />
         <Route path="audit-logs" element={<AuditLogs />} /> 
         <Route path="reports" element={<Reports />} />

      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default Index;