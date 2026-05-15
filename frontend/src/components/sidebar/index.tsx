import {
  FaFire,
  FaUsers,
  FaBullseye,
  FaCog,
  FaDumbbell,
  FaChevronLeft,
} from "react-icons/fa";

import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <aside className="w-[280px] h-screen bg-[#09090b] border-r border-[#18181b] fixed left-0 top-0 flex flex-col justify-between">
      {/* TOPO */}
      <div>
        {/* LOGO */}
        <div className="h-[90px] border-b border-[#18181b] flex items-center justify-between px-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-600 flex items-center justify-center shadow-[0_0_25px_rgba(139,92,246,0.45)]">
              <span className="font-black text-white text-lg">LV</span>
            </div>

            <div>
              <h1 className="text-white font-black leading-none text-lg">
                Leveling
              </h1>

              <span className="text-violet-400 text-sm font-semibold">Up</span>
            </div>
          </div>

          <button className="text-zinc-500 hover:text-white transition">
            <FaChevronLeft />
          </button>
        </div>

        {/* MENU */}
        <nav className="p-4 flex flex-col gap-2">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
              flex items-center gap-4
              px-5 py-4
              rounded-2xl
              transition-all duration-300
              group

              ${
                isActive
                  ? "bg-violet-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                  : "text-zinc-400 hover:bg-[#151518] hover:text-white"
              }
            `
            }
          >
            <FaFire className="text-lg" />

            <span className="font-medium">Dashboard</span>
          </NavLink>

          <NavLink
            to="/workout"
            className={({ isActive }) =>
              `
              flex items-center gap-4
              px-5 py-4
              rounded-2xl
              transition-all duration-300

              ${
                isActive
                  ? "bg-violet-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                  : "text-zinc-400 hover:bg-[#151518] hover:text-white"
              }
            `
            }
          >
            <FaDumbbell className="text-lg" />

            <span className="font-medium">Treino</span>
          </NavLink>

          <NavLink
            to="/community"
            className={({ isActive }) =>
              `
              flex items-center gap-4
              px-5 py-4
              rounded-2xl
              transition-all duration-300

              ${
                isActive
                  ? "bg-violet-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                  : "text-zinc-400 hover:bg-[#151518] hover:text-white"
              }
            `
            }
          >
            <FaUsers className="text-lg" />

            <span className="font-medium">Comunidade</span>
          </NavLink>

          <NavLink
            to="/goals"
            className={({ isActive }) =>
              `
              flex items-center gap-4
              px-5 py-4
              rounded-2xl
              transition-all duration-300

              ${
                isActive
                  ? "bg-violet-600 text-white shadow-[0_0_30px_rgba(139,92,246,0.35)]"
                  : "text-zinc-400 hover:bg-[#151518] hover:text-white"
              }
            `
            }
          >
            <FaBullseye className="text-lg" />

            <span className="font-medium">Metas</span>
          </NavLink>
        </nav>
      </div>

      {/* FOOTER */}
      <div className="border-t border-[#18181b] p-5">
        <div className="bg-[#121216] rounded-3xl p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-violet-600 flex items-center justify-center font-bold text-white text-lg">
                D
              </div>

              <div>
                <h2 className="text-white font-semibold leading-none">
                  Daniel
                </h2>

                <span className="text-zinc-500 text-sm">Level 12</span>
              </div>
            </div>

            <button
              className="
          w-14 h-14
          rounded-2xl
          bg-[#1a1a1f]
          hover:bg-violet-600
          transition-all duration-300
          flex items-center justify-center
          text-zinc-400 hover:text-white
        "
            >
              <FaCog size={20} />
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
