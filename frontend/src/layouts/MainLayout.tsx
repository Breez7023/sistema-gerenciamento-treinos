import { Outlet } from "react-router-dom";

import { Sidebar } from "../components/sidebar";

export function MainLayout(props: any) {
  return (
    <div
      style={{
        display: "flex",
        background: "#06060a",
        minHeight: "100vh",
      }}
    >
      <Sidebar />

      <main
        style={{
          flex: 1,
          padding: "32px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}
