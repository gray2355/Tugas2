export default function Checkout() {
  return (
    <section className="max-w-2xl mx-auto">

      <div className="mb-7">

        <p className="text-sm text-slate-500">
          NusaMart
        </p>

        <h1 className="text-3xl font-bold text-slate-800">
          Pembayaran
        </h1>

      </div>


      <div className="bg-white border rounded-xl p-6">

        <label className="block text-sm font-medium mb-2">
          Nama Lengkap
        </label>

        <input
          type="text"
          placeholder="Masukkan nama"
          className="w-full border rounded-lg px-4 py-2 mb-5"
        />


        <label className="block text-sm font-medium mb-2">
          Alamat Pengiriman
        </label>

        <textarea
          placeholder="Masukkan alamat"
          className="w-full border rounded-lg px-4 py-2"
          rows="4"
        />


        <button className="mt-5 bg-slate-800 text-white px-5 py-2 rounded-lg hover:bg-slate-700">
          Konfirmasi Pesanan
        </button>

      </div>

    </section>
  );
}