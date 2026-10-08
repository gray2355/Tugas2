import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cart() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = localStorage.getItem("nusamart_cart");

    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const updateCart = (id, quantity) => {
    let updatedCart = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);

    localStorage.setItem(
      "nusamart_cart",
      JSON.stringify(updatedCart)
    );
  };

  const removeProduct = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);

    localStorage.setItem(
      "nusamart_cart",
      JSON.stringify(updatedCart)
    );
  };

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );

  return (
    <section>
      {/* HEADER */}
      <div className="mb-7">
        <p className="text-sm text-slate-500">
          NusaMart
        </p>

        <h1 className="text-3xl font-bold text-slate-800">
          Keranjang Belanja
        </h1>
      </div>

      {cart.length === 0 ? (
        /* EMPTY CART */
        <div className="bg-white border rounded-xl p-10 text-center">
          <div className="text-5xl mb-4">
            🛒
          </div>

          <h2 className="text-xl font-semibold text-slate-800">
            Keranjang masih kosong
          </h2>

          <p className="text-slate-500 mt-2">
            Silakan pilih produk terlebih dahulu.
          </p>

          <Link
            to="/"
            className="inline-block mt-5 bg-slate-800 text-white px-5 py-2.5 rounded-lg hover:bg-slate-700"
          >
            Belanja Sekarang
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* PRODUCT CART */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border rounded-xl p-4 flex flex-col sm:flex-row gap-4"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-28 h-28 object-cover rounded-lg"
                />

                {/* INFO */}
                <div className="flex-1">
                  <p className="text-xs text-slate-500">
                    {item.category}
                  </p>

                  <h2 className="font-semibold text-lg text-slate-800">
                    {item.name}
                  </h2>

                  <p className="font-bold text-slate-800 mt-1">
                    Rp{item.price.toLocaleString("id-ID")}
                  </p>

                  {/* QUANTITY */}
                  <div className="flex items-center gap-3 mt-4">
                    <button
                      onClick={() =>
                        updateCart(
                          item.id,
                          item.quantity - 1
                        )
                      }
                      className="w-8 h-8 border rounded-lg hover:bg-slate-100"
                    >
                      −
                    </button>

                    <span className="font-medium">
                      {item.quantity}
                    </span>

                    <button
                      onClick={() =>
                        updateCart(
                          item.id,
                          item.quantity + 1
                        )
                      }
                      className="w-8 h-8 border rounded-lg hover:bg-slate-100"
                    >
                      +
                    </button>

                    <button
                      onClick={() =>
                        removeProduct(item.id)
                      }
                      className="ml-3 text-sm text-red-500 hover:underline"
                    >
                      Hapus
                    </button>
                  </div>
                </div>

                {/* SUBTOTAL */}
                <div className="sm:text-right">
                  <p className="text-sm text-slate-500">
                    Subtotal
                  </p>

                  <p className="font-bold text-lg text-slate-800">
                    Rp
                    {(
                      item.price * item.quantity
                    ).toLocaleString("id-ID")}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="bg-white border rounded-xl p-6 h-fit">
            <h2 className="text-lg font-bold text-slate-800">
              Ringkasan Pesanan
            </h2>

            <div className="flex justify-between mt-5 text-slate-600">
              <span>Total Produk</span>

              <span>
                {cart.reduce(
                  (sum, item) =>
                    sum + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="border-t mt-5 pt-5 flex justify-between">
              <span className="font-semibold">
                Total
              </span>

              <span className="font-bold text-xl">
                Rp{total.toLocaleString("id-ID")}
              </span>
            </div>

            <Link
              to="/checkout"
              className="block text-center mt-6 bg-slate-800 text-white py-3 rounded-lg hover:bg-slate-700"
            >
              Lanjut ke Checkout
            </Link>
          </div>
        </div>
      )}
    </section>
  );
}