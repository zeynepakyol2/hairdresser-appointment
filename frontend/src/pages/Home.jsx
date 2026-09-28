import { Link } from "react-router-dom";
import "../index.css";
import { HiScissors } from "react-icons/hi2";
import { PiHairDryerDuotone } from "react-icons/pi";
import { PiPaintBrushHouseholdFill } from "react-icons/pi";
import { GiFingernail } from "react-icons/gi";
function Home() {
  const services = [
    {
      title: "Saç Kesimi",
      description: "Tarzınıza ve yüz hatlarınıza uygun profesyonel saç kesimi.",
      icon: HiScissors,
    },
    {
      title: "Saç Boyama",
      description: "Modern renkler, ombre, balyaj ve profesyonel renklendirme.",
      icon: PiPaintBrushHouseholdFill,
    },
    {
      title: "Saç Bakımı",
      description: "Saçınıza ihtiyacı olan bakımı ve canlılığı kazandırın.",
      icon: PiHairDryerDuotone,
    },
    {
      title: "Manikür & Pedikür",
      description: "Bakımlı ve zarif eller için profesyonel uygulamalar.",
      icon: GiFingernail,
    },
  ];

  const gallery = [
    "../public/images/hair-1.jpeg",
    "../public/images/hair-2.jpeg",
    "../public/images/hair-3.jpeg",
    "../public/images/hair-4.jpeg",
    "../public/images/hair-5.jpeg",
    "../public/images/hair-6.jpeg",
  ];

  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen w-full overflow-x-hidden">
      {/* NAVBAR */}
      <nav className="absolute top-0 z-20 w-full">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-8">
          <h1 className="text-2xl font-semibold tracking-widest text-white">
            SZA
          </h1>

          <div className="hidden items-center gap-8 text-sm text-white md:flex">
            <a href="#home" className="transition hover:text-stone-300">
              Ana Sayfa
            </a>

            <a href="#services" className="transition hover:text-stone-300">
              Hizmetler
            </a>

            <a href="#gallery" className="transition hover:text-stone-300">
              Çalışmalarımız
            </a>

            <a href="#contact" className="transition hover:text-stone-300">
              İletişim
            </a>
          </div>

          <Link
            to="/randevu"
            className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-stone-200"
          >
            Randevu Al
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="relative flex min-h-screen items-center justify-center bg-[url('/images/hero.jpg')] bg-cover bg-center"
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">
          <p className="mb-5 p-10 text-sm uppercase tracking-[0.55em] font-extrabold">
            Beauty • Hair • Style
          </p>

          <p className="mx-auto p-10 mb-10 max-w-2xl text-lg text-stone-200">
            Profesyonel dokunuşlarla tarzınızı yeniden keşfedin. Size özel
            güzellik ve bakım deneyimi.
          </p>

          <Link
            to="/randevu"
            className="inline-block rounded-full bg-white px-9 py-4 font-medium text-black transition duration-300 hover:scale-105 hover:bg-stone-200"
          >
            Randevu Oluştur
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-500">
            Hizmetlerimiz
          </p>

          <h2 className="text-4xl font-semibold">
            Güzelliğinize Özel Dokunuşlar
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-5 text-4xl">
                  <Icon className="text-4xl text-stone-700" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{service.title}</h3>

                <p className="leading-7 text-stone-500">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="mx-auto px-6 py-24 ">
        <div className="mb-14 text-center">
          <div className="mb-14 text-center flex flex-col justify-between gap-5 ">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-400">
                Galeri
              </p>

              <h2 className="text-4xl font-semibold mx-auto">Çalışmalarımız</h2>
            </div>
          </div>

          <div className="mx-auto grid w-[1400px] grid-cols-3 gap-4">
            {gallery.map((image, index) => (
              <div
                key={index}
                className="group aspect overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`Kuaför çalışması ${index + 1}`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-5xl rounded-3xl px-8 py-16 text-center bg-stone-200">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-stone-500">
            Yeni Tarzına Hazır Mısın?
          </p>

          <h2 className="mb-5 text-4xl font-semibold text-stone-900">
            Randevunu Hemen Oluştur
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-stone-600">
            Size uygun hizmeti, tarihi ve saati seçerek birkaç adımda
            randevunuzu oluşturabilirsiniz.
          </p>

          <Link
            to="/randevu"
            className="inline-block rounded-full bg-stone-900 px-8 py-4 font-medium text-white transition hover:bg-stone-700"
          >
            Randevu Al
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-black px-6 py-12 text-stone-400">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
          <div>
            <h2 className="mb-3 text-xl font-semibold tracking-widest text-white">
              SZA
            </h2>

            <p className="max-w-sm">Profesyonel saç ve güzellik hizmetleri.</p>
          </div>

          <div>
            <p>Telefon: 05XX XXX XX XX</p>
            <p>Instagram: @szahair</p>
            <p>09:00 - 20:00</p>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-stone-800 pt-6 text-sm">
          © 2026 SZA Hair Studio
        </div>
      </footer>
    </div>
  );
}

export default Home;
