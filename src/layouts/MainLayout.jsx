import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Semua Kategori");
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = () => {
    setSearch(searchValue);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />

      {/* HERO */}
      <section className="bg-slate-800 text-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="max-w-2xl">
            <p className="text-slate-300 text-sm mb-2">
              Selamat datang di NusaMart 👋
            </p>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Temukan produk favoritmu
            </h1>

            <p className="text-slate-300 mt-4 leading-relaxed">
              Belanja berbagai kebutuhan dengan mudah, sederhana, dan nyaman.
            </p>
          </div>

          {/* SEARCH */}
          <div className="mt-8 flex flex-col md:flex-row gap-3">
            <input
              type="text"
              placeholder="Cari produk..."
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  handleSearch();
                }
              }}
              className="flex-1 bg-white text-slate-800 rounded-lg px-4 py-3 outline-none"
            />

            <select
              value={category}
              onChange={(event) => setCategory(event.target.value)}
              className="bg-white text-slate-800 rounded-lg px-4 py-3"
            >
              <option>Semua Kategori</option>
              <option>Elektronik</option>
              <option>Fashion</option>
              <option>Aksesoris</option>
            </select>

            <button
              onClick={handleSearch}
              className="bg-white text-slate-800 px-6 py-3 rounded-lg font-medium hover:bg-slate-100"
            >
              Cari
            </button>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-1 max-w-6xl w-full mx-auto px-6 py-10">
        <Outlet
          context={{
            search,
            category,
          }}
        />
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-800 text-white mt-auto">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between gap-5">
            <div>
              <h2 className="font-bold text-lg">NusaMart</h2>
              <p className="text-slate-400 text-sm mt-2">
                Simple online store project.
              </p>
            </div>

            <div className="text-sm text-slate-400">
              <p>React • Vite • Tailwind CSS</p>
              <p className="mt-1">© 2026 NusaMart</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}