import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

export default function AdminLayout() {

  return (
    <div className="min-h-screen bg-slate-100 flex">

      {/* Sidebar */}
      <Sidebar />


      {/* Area kanan */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Header */}
        <header className="bg-white border-b px-6 py-4">

          <h1 className="text-xl font-semibold text-slate-800">
            Admin Panel
          </h1>

          <p className="text-sm text-slate-500">
            Kelola informasi dan produk NusaMart
          </p>

        </header>


        {/* Isi halaman */}
        <main className="flex-1 p-6 overflow-y-auto">

          <Outlet />

        </main>


        {/* Footer */}
        <footer className="bg-white border-t px-6 py-4 text-center">

          <p className="text-sm text-slate-500">
            © 2026 NusaMart Admin
          </p>

        </footer>

      </div>

    </div>
  );
}