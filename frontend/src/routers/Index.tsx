import  { Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";

const Login = lazy(() => import("../pages/Login"));
const DashboardLayout = lazy(() => import("../layout/Index"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Case = lazy(() => import("../pages/Cases"));
const CaseDashboard = lazy(() => import("../pages/CaseDashboard"));
const CaseDetailView = lazy(
  () => import("../components/caseEvidence/CaseDetailView"),
);

const Index = () => {
  const isAuthenticated = true;

  return (
    <Suspense
      fallback={
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          Loading...
        </div>
      }
    >
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? <Navigate to="/dashboard" replace /> : <Login />
          }
        />

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

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default Index;
