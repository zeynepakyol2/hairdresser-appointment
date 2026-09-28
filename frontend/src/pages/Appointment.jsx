import { useState } from "react";
import { Link } from "react-router-dom";

function Appointment() {
  const [form, setForm] = useState({
    customerName: "",
    phone: "",
    serviceName: "",
    appointmentDate: "",
    appointmentTime: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setMessage("Randevunuz başarıyla oluşturuldu.");

        setForm({
          customerName: "",
          phone: "",
          serviceName: "",
          appointmentDate: "",
          appointmentTime: "",
        });
      } else {
        setMessage("Randevu oluşturulamadı. Lütfen tekrar deneyin.");
      }
    } catch (error) {
      console.error(error);
      setMessage("Sunucuya bağlanılamadı.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-stone-100">
      {/* NAVBAR */}
      <nav className="bg-stone-950 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
          <Link to="/" className="text-2xl font-semibold tracking-widest">
            SZA
          </Link>

          <div className="flex items-center gap-6">
            <Link
              to="/"
              className="text-sm text-stone-300 transition hover:text-white"
            >
              Ana Sayfa
            </Link>

            <span className="text-sm font-medium">Randevu</span>
          </div>
        </div>
      </nav>

      <main className="mx-auto grid min-h-[calc(100vh-72px)] lg:grid-cols-2">
        {/* SOL TARAF */}
        <div className="relative hidden overflow-hidden lg:block">
          <img
            src="../images/appointment.jpg"
            alt="Kuaför salonu"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/50"></div>

          <div className="relative z-10 flex h-full flex-col justify-end p-14 text-white">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-300">
              SZA Hair Studio
            </p>

            <h1 className="max-w-lg text-5xl font-light leading-tight">
              Kendine Biraz
              <span className="block font-semibold">Zaman Ayır.</span>
            </h1>

            <p className="mt-6 max-w-md leading-7 text-stone-300">
              Hizmetinizi, size uygun tarihi ve saati seçerek randevunuzu birkaç
              adımda oluşturun.
            </p>
          </div>
        </div>

        {/* FORM TARAFI */}
        <div className="flex items-center justify-center px-6 py-14 sm:px-12">
          <div className="w-full max-w-lg">
            <div className="mb-10">
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-500">
                Online Randevu
              </p>

              <h2 className="text-4xl font-semibold text-stone-900">
                Randevu Oluştur
              </h2>

              <p className="mt-3 text-stone-500">
                Bilgilerinizi girerek randevunuzu kolayca oluşturabilirsiniz.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* AD SOYAD */}
              <div>
                <label
                  htmlFor="customerName"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Ad Soyad
                </label>

                <input
                  id="customerName"
                  type="text"
                  name="customerName"
                  value={form.customerName}
                  onChange={handleChange}
                  placeholder="Adınız ve soyadınız"
                  required
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                />
              </div>

              {/* TELEFON */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Telefon
                </label>

                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={(e) => {
                    const value = e.target.value.replace(/\D/g, "");

                    if (value.length <= 11) {
                      setForm({
                        ...form,
                        phone: value,
                      });
                    }
                  }}
                  maxLength={11}
                  pattern="0[0-9]{10}"
                  placeholder="05XX XXX XX XX"
                  required
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                />
              </div>

              {/* HİZMET */}
              <div>
                <label
                  htmlFor="serviceName"
                  className="mb-2 block text-sm font-medium text-stone-700"
                >
                  Hizmet
                </label>

                <select
                  id="serviceName"
                  name="serviceName"
                  value={form.serviceName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                >
                  <option value="">Hizmet seçiniz</option>

                  <option value="Saç Kesimi">Saç Kesimi</option>

                  <option value="Saç Boyama">Saç Boyama</option>

                  <option value="Fön">Fön</option>

                  <option value="Saç Bakımı">Saç Bakımı</option>

                  <option value="Manikür & Pedikür">Manikür & Pedikür</option>
                </select>
              </div>

              {/* TARİH + SAAT */}
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="appointmentDate"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Tarih
                  </label>

                  <input
                    id="appointmentDate"
                    type="date"
                    name="appointmentDate"
                    value={form.appointmentDate}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                  />
                </div>

                <div>
                  <label
                    htmlFor="appointmentTime"
                    className="mb-2 block text-sm font-medium text-stone-700"
                  >
                    Saat
                  </label>

                  <input
                    id="appointmentTime"
                    type="time"
                    name="appointmentTime"
                    value={form.appointmentTime}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 outline-none transition focus:border-stone-900 focus:ring-1 focus:ring-stone-900"
                  />
                </div>
              </div>

              {/* MESAJ */}
              {message && (
                <div className="rounded-xl bg-stone-200 px-4 py-3 text-sm text-stone-700">
                  {message}
                </div>
              )}

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full bg-stone-950 px-6 py-4 font-medium text-white transition duration-300 hover:bg-stone-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Randevu Oluşturuluyor..." : "Randevu Oluştur"}
              </button>
            </form>

            <div className="mt-8 text-center">
              <Link
                to="/"
                className="text-sm text-stone-500 transition hover:text-black"
              >
                ← Ana Sayfaya Dön
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Appointment;
