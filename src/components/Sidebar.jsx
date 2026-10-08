import { NavLink } from "react-router-dom";

export default function Sidebar() {

  const menuStyle = ({ isActive }) =>
    `block px-4 py-3 rounded-lg transition ${
      isActive
        ? "bg-slate-800 text-white"
        : "text-slate-600 hover:bg-slate-100"
    }`;


  return (
    <aside className="w-64 min-h-screen bg-white border-r hidden md:block">

      {/* Logo */}
      <div className="p-6 border-b">

        <h1 className="text-xl font-bold text-slate-800">
          NusaMart
        </h1>

        <p className="text-xs text-slate-500 mt-1">
          Administration
        </p>

      </div>


      {/* Menu */}
      <nav className="p-4 space-y-2">

        <NavLink
          to="/admin/dashboard"
          className={menuStyle}
        >
          📊 Dashboard
        </NavLink>


        <NavLink
          to="/admin/about"
          className={menuStyle}
        >
          ℹ️ Tentang Aplikasi
        </NavLink>


        <NavLink
          to="/"
          className={menuStyle}
        >
          🏠 Kembali ke Toko
        </NavLink>

      </nav>

    </aside>
  );
}