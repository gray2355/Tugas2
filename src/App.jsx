import { Routes, Route, Navigate } from "react-router-dom";

// ==============================
// FRONT PAGE
// ==============================
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import ProductDetail from "./pages/frontpages/ProductDetail";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";

// ==============================
// ADMIN PAGE
// ==============================
import AdminLayout from "./layouts/AdminLayout";
import AdminDashboard from "./pages/AdminPages/AdminDashboard";
import AboutPage from "./pages/AdminPages/AboutPage";

export default function App() {
  return (
    <Routes>

      {/* =========================
          FRONT PAGE
      ========================== */}
      <Route path="/" element={<MainLayout />}>

        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="product/:id"
          element={<ProductDetail />}
        />

        <Route
          path="cart"
          element={<Cart />}
        />

        <Route
          path="checkout"
          element={<Checkout />}
        />

      </Route>


      {/* =========================
          ADMIN PAGE
      ========================== */}
      <Route path="/admin" element={<AdminLayout />}>

        {/* /admin otomatis ke /admin/dashboard */}
        <Route
          index
          element={
            <Navigate
              to="dashboard"
              replace
            />
          }
        />

        <Route
          path="dashboard"
          element={<AdminDashboard />}
        />

        <Route
          path="about"
          element={<AboutPage />}
        />

      </Route>

    </Routes>
  );
}