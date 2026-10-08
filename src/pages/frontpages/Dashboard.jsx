import { Link, useOutletContext } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headset",
    price: "Rp249.000",
    category: "Elektronik",
    image: "/products/headset.jpg",
  },
  {
    id: 2,
    name: "Canvas Backpack",
    price: "Rp179.000",
    category: "Fashion",
    image: "/products/backpack.jpg",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: "Rp399.000",
    category: "Aksesoris",
    image: "/products/smartwatch.jpg",
  },
];

export default function Dashboard() {
  const { search, category } = useOutletContext();

  const filteredProducts = products.filter((product) => {
    const matchSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchCategory =
      category === "Semua Kategori" ||
      product.category === category;

    return matchSearch && matchCategory;
  });

  return (
    <section>
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-7">
        <div>
          <p className="text-sm text-slate-500">
            Produk pilihan
          </p>

          <h2 className="text-3xl font-bold text-slate-800 mt-1">
            Produk Terpopuler
          </h2>
        </div>

        <p className="text-sm text-slate-500 mt-2 md:mt-0">
          {filteredProducts.length} produk ditemukan
        </p>
      </div>

      {/* PRODUCT LIST */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white border rounded-xl p-10 text-center">
          <p className="text-slate-500">
            Produk yang kamu cari tidak ditemukan.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300"
            >
              {/* IMAGE */}
              <div className="h-52 bg-slate-100 overflow-hidden relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />

                <span className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-xs font-medium text-slate-700">
                  {product.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-800">
                  {product.name}
                </h3>

                <p className="text-xl font-bold text-slate-800 mt-2">
                  {product.price}
                </p>

                <p className="text-sm text-slate-500 mt-2">
                  Produk berkualitas dengan harga terjangkau.
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="mt-5 block text-center bg-slate-800 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-slate-700 transition"
                >
                  Lihat Detail →
                </Link>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}