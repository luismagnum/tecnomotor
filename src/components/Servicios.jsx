const servicios = [
  {
    icon: "🚛",
    titulo: "Camiones y vehículos pesados",
    descripcion:
      "Mantenimiento preventivo y correctivo integral para flotas de transporte de carga.",
    items: [
      "Diagnóstico técnico especializado",
      "Control de fluidos, frenos y embrague",
      "Revisión de correas y componentes críticos",
      "Seguimiento técnico individual por unidad",
      "Registro de kilometraje e historial",
      "Asistencia mecánica y soporte 24 hs",
      "Atención de imprevistos en ruta",
      "Prioridad de atención en plan mensual",
    ],
  },
  {
    icon: "🚐",
    titulo: "Flota liviana",
    descripcion:
      "Mantenimiento preventivo y correctivo integral para vehículos livianos, garantizando disponibilidad, seguridad y correcto funcionamiento.",
    items: [
      "Cambio de aceite y lubricantes",
      "Escaneo y análisis de la unidad de control electrónico ECU",
      "Lectura e interpretación de códigos de falla DTC",
      "Detección temprana de anomalías electrónicas y mecánicas",
      "Inspecciones preventivas generales",
      "Control de componentes mecánicos esenciales",
      "Monitoreo de parámetros operativos",
      "Seguimiento periódico del estado de las unidades",
      "20% de descuento en reparaciones correctivas",
    ],
  },
  {
    icon: "🏗️",
    titulo: "Zamping / Autoelevadores",
    descripcion:
      "Mantenimiento técnico y operativo completo para equipos de depósito e industria.",
    items: [
      "Mano de obra integral de mantenimiento",
      "Cambio completo de fluidos y lubricantes",
      "Reemplazo y control de filtros",
      "Inspección de sistemas mecánicos e hidráulicos",
      "Control de movimientos operativos",
      "Revisión y ajuste de frenos",
      "Diagnóstico preventivo y correctivo",
      "Atención prioritaria de fallas",
    ],
  },
  {
    icon: "🚜",
    titulo: "Maquinaria agroindustrial",
    descripcion:
      "Servicio especializado en tractores y maquinarias del sector agropecuario e industrial.",
    items: [
      "Tractores agrícolas de todas las marcas",
      "Maquinaria vehicular del sector",
      "Presupuesto personalizado por equipo",
      "Evaluación técnica específica",
      "Solución eficiente y adecuada para cada caso",
    ],
  },
  {
    icon: "⚙️",
    titulo: "Sistemas hidráulicos",
    descripcion:
      "Diagnóstico y reparación completa de sistemas hidráulicos en todo tipo de equipos.",
    items: [
      "Diagnóstico completo del sistema",
      "Reparación de bombas hidráulicas",
      "Cilindros, válvulas y acumuladores",
      "Detección de pérdidas y fallas",
      "Equipamiento de última generación",
    ],
  },
  {
    icon: "🛠️",
    titulo: "Asistencia en ruta 24 hs",
    descripcion:
      "Personal especializado para atender imprevistos mecánicos en carretera con cobertura hasta 100 km a la redonda.",
    items: [
      "Cobertura hasta 100 km a la redonda",
      "Extensible por costo adicional",
      "Respuesta rápida ante emergencias",
      "Equipamiento móvil de punta",
      "Disponibilidad telefónica permanente",
    ],
  },
  {
    icon: "📋",
    titulo: "Planes corporativos mensuales",
    descripcion:
      "Servicio continuo de mantenimiento con cobertura técnica integral por unidad.",
    items: [
      "Plan mensual para camiones",
      "Plan mensual para autoelevadores",
      "Control técnico periódico programado",
      "Registro individual por vehículo",
      "Prioridad absoluta de atención",
      "Cotización personalizada a través del contacto",
    ],
  },
];

const Servicios = () => {
  return (
    <section
      id="servicios"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Fondos decorativos */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -right-20 bottom-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Encabezado */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-bold text-yellow-300">
            Nuestros servicios
          </span>

          <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            Cobertura técnica completa para los equipos que{" "}
            <span className="text-orange-500">impulsan tu operación</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
            Soluciones integrales de mantenimiento preventivo y correctivo para
            flotas, camiones, vehículos livianos, autoelevadores, maquinaria
            agroindustrial y sistemas hidráulicos.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {servicios.map((servicio, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl border border-orange-500/20 bg-zinc-950 p-6 shadow-xl shadow-orange-500/5 transition duration-300 hover:-translate-y-2 hover:border-orange-500/70 hover:shadow-orange-500/20"
            >
              {/* Efecto superior */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-orange-500"></div>

              <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-orange-500/20 to-yellow-400/10 text-3xl shadow-lg shadow-orange-500/10">
                {servicio.icon}
              </div>

              <h3 className="text-xl font-black uppercase leading-snug text-white group-hover:text-yellow-300 sm:text-2xl">
                {servicio.titulo}
              </h3>

              <p className="mt-4 text-sm leading-7 text-gray-300">
                {servicio.descripcion}
              </p>

              <ul className="mt-6 space-y-3">
                {servicio.items.map((item, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm leading-6 text-gray-300"
                  >
                    <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-orange-500 text-xs font-black text-black">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="mt-16 overflow-hidden rounded-3xl border border-orange-500/30 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black p-6 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                Atención técnica especializada
              </span>

              <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                ¿Tu flota necesita mantenimiento, soporte o asistencia urgente?
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-8 text-gray-300">
                Solicitá una evaluación técnica y recibí una propuesta adaptada
                a tus equipos, frecuencia de uso y necesidad operativa.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5491158023306?text=Hola,%20quiero%20consultar%20por%20los%20servicios%20de%20Tecno%20Motor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center text-base font-black text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
              >
                Consultar por WhatsApp
              </a>

              <a
                href="#somos"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400/60 px-8 py-4 text-center text-base font-black text-yellow-300 transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Conocer la empresa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicios;