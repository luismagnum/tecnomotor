import hero from "../images/hero.png";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Fondos decorativos */}
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -right-28 bottom-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid min-h-[calc(100vh-80px)] items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Contenido */}
          <div data-aos="zoom-in-down" className="order-2 lg:order-1 lg:pt-4">
            <span className="inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-bold text-yellow-300">
              Mecánica especializada
            </span>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
              Reparación y mantenimiento para autos{" "}
              <span className="text-orange-500">de alta gama</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              En TecnoMotorVR ofrecemos soluciones técnicas para vehículos de alta
              gama, vehículos de pasajeros y autos particulares. Realizamos
              diagnóstico computarizado, mantenimiento preventivo y reparación
              integral con equipamiento profesional.
            </p>

            {/* Servicios destacados */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-orange-500/30 bg-zinc-950 p-4 shadow-lg shadow-orange-500/10">
                <h3 className="font-black text-yellow-300">
                  Diagnóstico preciso
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Escaneo computarizado, inyección electrónica y detección de
                  fallas.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/30 bg-zinc-950 p-4 shadow-lg shadow-yellow-500/10">
                <h3 className="font-black text-orange-400">
                  Reparación integral
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Embragues, tren delantero, frenos, rulemanes, suspensión y
                  mantenimiento general.
                </p>
              </div>
            </div>

            {/* Lista rápida */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-gray-300">
              <span className="rounded-full border border-orange-500/30 bg-zinc-950 px-4 py-2">
                Inyección electrónica
              </span>

              <span className="rounded-full border border-orange-500/30 bg-zinc-950 px-4 py-2">
                Escaneo computarizado
              </span>

              <span className="rounded-full border border-orange-500/30 bg-zinc-950 px-4 py-2">
                Tren delantero
              </span>

              <span className="rounded-full border border-orange-500/30 bg-zinc-950 px-4 py-2">
                Embragues
              </span>
            </div>

            {/* Botones */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/549XXXXXXXXXX?text=Hola,%20quiero%20consultar%20por%20reparaci%C3%B3n%20de%20mi%20veh%C3%ADculo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center text-base font-black text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
              >
                Consultar por WhatsApp
              </a>

              <a
                href="#ubicacion"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400/60 px-8 py-4 text-center text-base font-black text-yellow-300 transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Ver ubicacion
              </a>
            </div>

            {/* Franja de confianza */}
            <div className="mt-10 grid grid-cols-3 gap-4 border-t border-orange-500/20 pt-6 text-center sm:max-w-xl">
              <div>
                <p className="text-xl font-black text-orange-500 sm:text-2xl">
                  Scanner
                </p>
                <p className="mt-1 text-xs font-semibold text-gray-400">
                  Diagnóstico
                </p>
              </div>

              <div>
                <p className="text-xl font-black text-yellow-300 sm:text-2xl">
                  Alta gama
                </p>
                <p className="mt-1 text-xs font-semibold text-gray-400">
                  Especializado
                </p>
              </div>

              <div>
                <p className="text-xl font-black text-orange-500 sm:text-2xl">
                  Integral
                </p>
                <p className="mt-1 text-xs font-semibold text-gray-400">
                  Mecánica
                </p>
              </div>
            </div>
          </div>

          {/* Imagen */}
          <div className="order-1 lg:order-2 lg:pt-20">
            <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-zinc-950 shadow-2xl shadow-orange-500/10">
              <img
                src={hero}
                alt="Taller mecánico TecnoMotorvr especializado en reparación de autos de alta gama y vehículos particulares"
                className="h-70 w-full object-cover object-center sm:h-107.5 md:h-130 lg:h-140 xl:h-155"
              />

              {/* Overlay suave */}
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/5 to-transparent md:from-black/70 md:via-black/10"></div>

              {/* Tarjeta sobre imagen - oculta en celular */}
              <div className="absolute bottom-5 left-5 right-5 hidden rounded-2xl border border-yellow-400/30 bg-black/75 p-5 backdrop-blur-md md:block">
                <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                  TecnoMotorVR
                </p>

                <h2 className="mt-1 text-2xl font-black text-white">
                  Servicio técnico automotor especializado
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Diagnóstico, reparación y mantenimiento para vehículos
                  particulares y de alta gama.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;