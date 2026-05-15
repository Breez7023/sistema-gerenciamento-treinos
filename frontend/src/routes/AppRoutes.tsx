import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "../layouts/MainLayout";

import { Dashboard } from "../pages/Dashboard/index";
import { Workout } from "../pages/Workout/index";
import { Community } from "../pages/Community/index";
import { Goals } from "../pages/Goals/index";
import { Settings } from "../pages/Settings/index";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/workout" element={<Workout />} />
          <Route path="/community" element={<Community />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}
