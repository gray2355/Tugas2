import { Link, useParams, useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Wireless Headset",
    price: 249000,
    category: "Elektronik",
    image: "/products/headset.jpg",
    description:
      "Headset wireless dengan desain ringan dan nyaman digunakan untuk mendengarkan musik maupun mengikuti meeting.",
  },
  {
    id: 2,
    name: "Canvas Backpack",
    price: 179000,
    category: "Fashion",
    image: "/products/backpack.jpg",
    description:
      "Tas backpack berbahan canvas yang cocok digunakan untuk kuliah, bekerja, maupun aktivitas sehari-hari.",
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 399000,
    category: "Aksesoris",
    image: "/products/smartwatch.jpg",
    description:
      "Smartwatch dengan desain sederhana untuk membantu memantau aktivitas sehari-hari.",
  },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const addToCart = () => {
    const savedCart = localStorage.getItem("nusamart_cart");

    const cart = savedCart
      ? JSON.parse(savedCart)
      : [];

    const existingProduct = cart.find(
      (item) => item.id === product.id
    );

    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({
        ...product,
        quantity: 1,
      });
    }

    localStorage.setItem(
      "nusamart_cart",
      JSON.stringify(cart)
    );

    alert(`${product.name} berhasil ditambahkan ke keranjang!`);

    navigate("/cart");
  };

  if (!product) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">
          Produk tidak ditemukan
        </h1>

        <Link
          to="/"
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <section className="max-w-5xl mx-auto">
      <Link
        to="/"
        className="text-sm text-slate-500 hover:text-slate-800"
      >
        ← Kembali ke produk
      </Link>

      <div className="mt-5 bg-white border rounded-2xl overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2">
          
          {/* IMAGE */}
          <div className="bg-slate-100 min-h-80">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* DETAIL */}
          <div className="p-7">
            <p className="text-sm text-slate-500">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold text-slate-800 mt-2">
              {product.name}
            </h1>

            <p className="text-2xl font-semibold text-slate-800 mt-5">
              Rp{product.price.toLocaleString("id-ID")}
            </p>

            <p className="text-slate-600 leading-relaxed mt-5">
              {product.description}
            </p>

            <button
              onClick={addToCart}
              className="w-full mt-7 bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700"
            >
              🛒 Tambah ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}