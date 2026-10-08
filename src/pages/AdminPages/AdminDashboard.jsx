import { useState } from "react";

export default function AdminDashboard() {

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headset",
      category: "Elektronik",
      price: "249000",
    },
    {
      id: 2,
      name: "Canvas Backpack",
      category: "Fashion",
      price: "179000",
    },
  ]);


  const [form, setForm] = useState({
    name: "",
    category: "Elektronik",
    price: "",
  });


  const handleChange = (event) => {

    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    if (!form.name || !form.price) {
      alert("Nama produk dan harga harus diisi.");
      return;
    }


    const newProduct = {
      id: Date.now(),
      name: form.name,
      category: form.category,
      price: form.price,
    };


    setProducts([
      ...products,
      newProduct,
    ]);


    setForm({
      name: "",
      category: "Elektronik",
      price: "",
    });

  };


  return (
    <section>

      {/* Judul */}
      <div className="mb-8">

        <p className="text-sm text-slate-500">
          Ringkasan toko
        </p>

        <h1 className="text-3xl font-bold text-slate-800">
          Dashboard Admin
        </h1>

      </div>


      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">

        <div className="bg-white border rounded-xl p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Total Produk
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            {products.length}
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Produk tersedia
          </p>

        </div>


        <div className="bg-white border rounded-xl p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Pesanan
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            18
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Bulan ini
          </p>

        </div>


        <div className="bg-white border rounded-xl p-6 shadow-sm">

          <p className="text-sm text-slate-500">
            Pelanggan
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-2">
            42
          </h2>

          <p className="text-xs text-slate-500 mt-1">
            Pengguna terdaftar
          </p>

        </div>

      </div>


      {/* Form input */}
      <div className="bg-white border rounded-xl p-6 shadow-sm mb-8">

        <h2 className="text-xl font-semibold text-slate-800">
          Tambah Produk
        </h2>

        <p className="text-sm text-slate-500 mt-1 mb-6">
          Data hanya disimpan sementara selama aplikasi berjalan.
        </p>


        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >

          {/* Nama */}
          <div>

            <label className="block text-sm font-medium mb-2">
              Nama Produk
            </label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Contoh: Keyboard"
              className="w-full border rounded-lg px-4 py-2"
            />

          </div>


          {/* Kategori */}
          <div>

            <label className="block text-sm font-medium mb-2">
              Kategori
            </label>

            <select
              name="category"
              value={form.category}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-2 bg-white"
            >

              <option>Elektronik</option>
              <option>Fashion</option>
              <option>Aksesoris</option>

            </select>

          </div>


          {/* Harga */}
          <div>

            <label className="block text-sm font-medium mb-2">
              Harga
            </label>

            <input
              type="number"
              name="price"
              value={form.price}
              onChange={handleChange}
              placeholder="Contoh: 250000"
              className="w-full border rounded-lg px-4 py-2"
            />

          </div>


          <div className="md:col-span-3">

            <button
              type="submit"
              className="bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-slate-700"
            >
              + Tambahkan Produk
            </button>

          </div>

        </form>

      </div>


      {/* Daftar produk */}
      <div className="bg-white border rounded-xl shadow-sm overflow-hidden">

        <div className="p-6 border-b">

          <h2 className="text-xl font-semibold text-slate-800">
            Daftar Produk
          </h2>

        </div>


        <div className="overflow-x-auto">

          <table className="w-full text-sm">

            <thead className="bg-slate-50">

              <tr>

                <th className="text-left px-6 py-3">
                  Nama
                </th>

                <th className="text-left px-6 py-3">
                  Kategori
                </th>

                <th className="text-left px-6 py-3">
                  Harga
                </th>

              </tr>

            </thead>


            <tbody>

              {products.map((product) => (

                <tr
                  key={product.id}
                  className="border-t"
                >

                  <td className="px-6 py-4 font-medium">
                    {product.name}
                  </td>

                  <td className="px-6 py-4">
                    {product.category}
                  </td>

                  <td className="px-6 py-4">
                    Rp{Number(product.price).toLocaleString("id-ID")}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </section>
  );
}