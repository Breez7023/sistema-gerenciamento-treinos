import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { Dashboard } from "../pages/Dashboard";
import { Workout } from "../pages/Workout";
import { Community } from "../pages/Community";
import { Goals } from "../pages/Goals";
import { Settings } from "../pages/Settings";

import LoginPage from "../pages/Login/AuthPage";

import { PrivateRoute } from "./PrivateRoute";

function ProtectedLayout() {
  return (
    <PrivateRoute>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </PrivateRoute>
  );
}

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route path="/login" element={<LoginPage />} />

        <Route element={<ProtectedLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/community" element={<Community />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
