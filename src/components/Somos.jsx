const Somos = () => {
  return (
    <section
      id="quienes-somos"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Decoración de fondo */}
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Columna izquierda */}
          <div>
            <span className="mb-5 inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-bold text-yellow-300">
              Quiénes somos
            </span>

            <h2 className="text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Experiencia técnica para mantener tu operación{" "}
              <span className="text-orange-500">siempre activa</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              Somos una empresa especializada en ofrecer soluciones técnicas
              integrales para la reparación y el mantenimiento preventivo y
              correctivo de maquinarias y flotas, orientada al sector logístico,
              industrial y agroindustrial.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              Contamos con servicio de soporte las 24 horas, equipamiento de
              última generación y personal especializado para asistir imprevistos
              en ruta, con un rango operacional de hasta 100 km a la redonda,
              extensible por adicional.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5492984230704?text=Hola,%20quiero%20consultar%20por%20soluciones%20técnicas%20integrales"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-black text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
              >
                Consultar por soporte
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400/60 px-8 py-4 text-base font-black text-yellow-300 transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-3xl border border-orange-500/30 bg-zinc-900 p-6 shadow-lg shadow-orange-500/10 transition duration-300 hover:-translate-y-1 hover:border-orange-500/70">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20 text-2xl">
                🔧
              </div>
              <h3 className="text-xl font-black text-yellow-300">
                Mantenimiento integral
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Reparación, prevención y corrección de fallas en flotas,
                camiones, autoelevadores y maquinaria.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-400/30 bg-zinc-900 p-6 shadow-lg shadow-yellow-500/10 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/70">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/20 text-2xl">
                🚛
              </div>
              <h3 className="text-xl font-black text-orange-400">
                Asistencia en ruta
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Soporte técnico ante imprevistos operativos dentro de un rango
                de hasta 100 km a la redonda.
              </p>
            </div>

            <div className="rounded-3xl border border-yellow-400/30 bg-zinc-900 p-6 shadow-lg shadow-yellow-500/10 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/70">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-yellow-400/20 text-2xl">
                ⏱️
              </div>
              <h3 className="text-xl font-black text-orange-400">
                Soporte 24 hs
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Disponibilidad para responder rápidamente cuando tu operación
                necesita continuidad.
              </p>
            </div>

            <div className="rounded-3xl border border-orange-500/30 bg-zinc-900 p-6 shadow-lg shadow-orange-500/10 transition duration-300 hover:-translate-y-1 hover:border-orange-500/70">
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500/20 text-2xl">
                ⚙️
              </div>
              <h3 className="text-xl font-black text-yellow-300">
                Personal especializado
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-300">
                Técnicos capacitados y equipamiento de última generación para
                diagnósticos precisos.
              </p>
            </div>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-16 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black p-6 shadow-2xl shadow-orange-500/10 sm:p-8">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <p className="text-3xl font-black text-orange-500">24 hs</p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Soporte técnico
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-yellow-300">100 km</p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Rango operacional
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-orange-500">
                Integral
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Preventivo y correctivo
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Somos;