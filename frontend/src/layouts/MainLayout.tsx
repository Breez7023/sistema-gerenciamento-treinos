import type { ReactNode } from "react";
import { Sidebar } from "../components/sidebar";

interface Props {
  children: ReactNode;
}

export function MainLayout({ children }: Props) {
  return (
    <div className="bg-[#09090b] min-h-screen text-white">
      <Sidebar />

      <main className="ml-[280px] p-10">{children}</main>
    </div>
  );
}
