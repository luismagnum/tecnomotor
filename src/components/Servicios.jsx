import tractor from "../images/tractor.png";

const serviciosIndustriales = [
  {
    icon: "🚛",
    title: "Camiones",
    description:
      "Mantenimiento preventivo y correctivo para camiones y flotas de transporte.",
    items: [
      "Diagnóstico mecánico",
      "Control de frenos y embrague",
      "Revisión de fluidos",
      "Asistencia en ruta",
    ],
  },
  {
    icon: "🏗️",
    title: "Autoelevadores",
    description:
      "Servicio técnico para equipos de depósito, logística e industria.",
    items: [
      "Sistemas hidráulicos",
      "Cambio de fluidos",
      "Control de filtros",
      "Revisión de frenos",
    ],
  },
  {
    icon: "🚜",
    title: "Tractores",
    description:
      "Reparación y mantenimiento para maquinaria agrícola e industrial.",
    items: [
      "Diagnóstico técnico",
      "Revisión de motor",
      "Sistema hidráulico",
      "Mantenimiento integral",
    ],
  },
];

const Servicios = () => {
  return (
    <section
      id="industriales"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Fondos decorativos */}
      <div className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div data-aos="zoom-in" className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Contenido */}
          <div>
            <span className="inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-bold text-yellow-300">
              Vehículos industriales y maquinaria
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Reparación y mantenimiento para{" "}
              <span className="text-orange-500">
                camiones, autoelevadores y tractores
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              En TecnoMotorVR brindamos soluciones técnicas integrales para
              equipos de trabajo pesado. Realizamos mantenimiento preventivo,
              correctivo, diagnóstico técnico y asistencia para que tu operación
              no se detenga.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
              Trabajamos con flotas de transporte, equipos de depósito,
              maquinaria agroindustrial y unidades de trabajo que necesitan
              disponibilidad, seguridad y respuesta rápida.
            </p>

            {/* Beneficios rápidos */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-orange-500/30 bg-zinc-950 p-5 shadow-lg shadow-orange-500/10">
                <h3 className="text-lg font-black text-yellow-300">
                  Mantenimiento preventivo
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Evitá fallas, paradas inesperadas y costos mayores en tus
                  equipos.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/30 bg-zinc-950 p-5 shadow-lg shadow-yellow-500/10">
                <h3 className="text-lg font-black text-orange-400">
                  Reparación correctiva
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Solucionamos averías mecánicas para que tu unidad vuelva a
                  trabajar.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5492984513306?text=Hola,%20quiero%20consultar%20por%20reparaci%C3%B3n%20de%20camiones,%20autoelevadores%20o%20tractores"
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
          </div>

          {/* Imagen */}
<div>
  <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-zinc-950 shadow-2xl shadow-orange-500/10">
    <img
      src={tractor}
      alt="Reparación y mantenimiento de camiones, autoelevadores y tractores"
      className="h-70 w-full object-cover object-center sm:h-100 md:h-130 lg:h-155"
    />

    {/* Overlay más suave en celular */}
    <div className="absolute inset-0 bg-linear-to-t from-black/35 via-black/5 to-transparent md:from-black/75 md:via-black/10"></div>

    {/* Tarjeta sobre imagen - solo tablet y escritorio */}
    <div className="absolute bottom-5 left-5 right-5 hidden rounded-2xl border border-yellow-400/30 bg-black/75 p-5 backdrop-blur-md md:block">
      <p className="text-sm font-bold uppercase tracking-widest text-yellow-300">
        Servicio técnico pesado
      </p>

      <h3 className="mt-1 text-2xl font-black text-white">
        Flotas, maquinaria y equipos industriales
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-300">
        Diagnóstico, mantenimiento y reparación para unidades de alto trabajo.
      </p>
    </div>
  </div>
</div>
        </div>

        {/* Tarjetas de servicios */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {serviciosIndustriales.map((servicio, index) => (
            <article
              key={index}
              className="group rounded-3xl border border-orange-500/20 bg-zinc-950 p-6 shadow-xl shadow-orange-500/5 transition duration-300 hover:-translate-y-2 hover:border-orange-500/70 hover:shadow-orange-500/20"
            >
              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-linear-to-br from-orange-500/20 to-yellow-400/10 text-3xl">
                {servicio.icon}
              </div>

              <h3 className="text-2xl font-black text-white group-hover:text-yellow-300">
                {servicio.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300">
                {servicio.description}
              </p>

              <ul className="mt-6 space-y-3">
                {servicio.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-gray-300"
                  >
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-black">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* Franja inferior */}
        <div className="mt-16 rounded-3xl border border-orange-500/30 bg-linear-to-r from-zinc-950 via-zinc-900 to-black p-6 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-10">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <p className="text-3xl font-black text-orange-500">24 hs</p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Soporte y asistencia
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-yellow-300">100 km</p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Cobertura operativa
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-orange-500">Integral</p>
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

export default Servicios;