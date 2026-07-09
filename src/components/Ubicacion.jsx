const Ubicacion = () => {
  const direccion = "Juan Moreira 582, Villa Regina, Río Negro";
  const mapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Juan%20Moreira%20582%2C%20Villa%20Regina%2C%20Rio%20Negro";

  return (
    <section
      id="ubicacion"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Decoración de fondo */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div data-aos="zoom-out" className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-bold text-yellow-300">
            Nuestra ubicación
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Encontranos en{" "}
            <span className="text-orange-500">Villa Regina</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
            Estamos ubicados en Juan Moreira 582, Villa Regina, Río Negro.
            Visitá nuestro taller o contactanos para coordinar asistencia técnica,
            mantenimiento o diagnóstico de tu unidad.
          </p>
        </div>

        {/* Contenido */}
        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Datos */}
          <div className="rounded-3xl border border-orange-500/30 bg-zinc-950 p-6 shadow-2xl shadow-orange-500/10 sm:p-8">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-linear-to-br from-orange-500/20 to-yellow-400/10 text-3xl">
              📍
            </div>

            <h3 className="text-2xl font-black text-white">
              Tecno<span className="text-orange-500">MotorVR</span>
            </h3>

            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                  Dirección
                </p>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  {direccion}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                  Atención técnica
                </p>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  Mantenimiento preventivo y correctivo para flotas, camiones,
                  autoelevadores, maquinaria agroindustrial y vehículos de alta
                  gama.
                </p>
              </div>

              <div>
                <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                  Cobertura
                </p>
                <p className="mt-2 text-base leading-7 text-gray-300">
                  Villa Regina y alrededores. Asistencia en ruta hasta 100 km a
                  la redonda.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center text-base font-black text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
              >
                Abrir en Google Maps
              </a>

              <a
                href="https://wa.me/5492984230704?text=Hola,%20quiero%20consultar%20por%20los%20servicios%20de%20Tecno%20Motor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400/60 px-8 py-4 text-center text-base font-black text-yellow-300 transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Consultar por WhatsApp
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className="overflow-hidden rounded-3xl border border-orange-500/30 bg-zinc-950 p-2 shadow-2xl shadow-orange-500/10">
            <div className="h-80 overflow-hidden rounded-2xl sm:h-105 lg:h-full lg:min-h-130">
              <iframe
                title="Ubicación Tecno Motor en Google Maps"
                src="https://www.google.com/maps?q=Juan%20Moreira%20582%2C%20Villa%20Regina%2C%20Rio%20Negro&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ubicacion;