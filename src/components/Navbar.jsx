import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-slate-800 text-white rounded-lg flex items-center justify-center font-bold">
            N
          </div>

          <div>
            <h1 className="text-xl font-bold text-slate-800">
              NusaMart
            </h1>

            <p className="text-[10px] text-slate-400">
              Simple Online Store
            </p>
          </div>
        </Link>

        {/* Menu */}
        <div className="flex items-center gap-2">

          <Link
            to="/"
            className="px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
          >
            Beranda
          </Link>

          <Link
            to="/cart"
            className="px-4 py-2 rounded-lg text-sm text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition"
          >
            🛒 Keranjang
          </Link>

          <Link
            to="/checkout"
            className="bg-slate-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-700 transition"
          >
            Checkout
          </Link>

        </div>

      </div>
    </nav>
  );
}