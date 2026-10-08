export default function AboutPage() {

  return (
    <section className="max-w-3xl">

      <div className="mb-8">

        <p className="text-sm text-slate-500">
          Informasi aplikasi
        </p>

        <h1 className="text-3xl font-bold text-slate-800">
          Tentang NusaMart
        </h1>

      </div>


      <div className="bg-white border rounded-xl p-6 shadow-sm">

        <h2 className="text-xl font-semibold text-slate-800">
          NusaMart Web Project
        </h2>


        <p className="text-slate-600 mt-4 leading-relaxed">
          NusaMart merupakan aplikasi e-commerce sederhana
          yang dibuat sebagai latihan pengembangan antarmuka
          menggunakan React dan Tailwind CSS.
        </p>


        <div className="mt-6">

          <h3 className="font-semibold text-slate-800">
            Teknologi yang digunakan
          </h3>


          <ul className="mt-3 space-y-2 text-slate-600">

            <li>• React JS</li>
            <li>• Vite</li>
            <li>• React Router DOM</li>
            <li>• Tailwind CSS</li>

          </ul>

        </div>


        <div className="mt-6 p-4 bg-slate-50 rounded-lg">

          <p className="text-sm text-slate-500">
            Versi aplikasi
          </p>

          <p className="font-semibold text-slate-800">
            NusaMart v1.0
          </p>

        </div>

      </div>

    </section>
  );
}