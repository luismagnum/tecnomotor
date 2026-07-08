const valores = [
  {
    icon: "🔧",
    title: "Reparación integral",
    text: "Trabajamos en diagnóstico, mantenimiento y reparación de vehículos particulares, alta gama, camiones, autoelevadores y maquinaria.",
  },
  {
    icon: "✅",
    title: "Trabajo garantizado",
    text: "Cada servicio se realiza con responsabilidad técnica, control de calidad y compromiso con el correcto funcionamiento de cada unidad.",
  },
  {
    icon: "⚙️",
    title: "Diagnóstico preciso",
    text: "Utilizamos herramientas de diagnóstico y equipamiento profesional para detectar fallas mecánicas, electrónicas e hidráulicas.",
  },
  {
    icon: "🚗",
    title: "Atención profesional",
    text: "Cuidamos cada vehículo como una herramienta clave para tu trabajo, tu movilidad o tu operación diaria.",
  },
];

const Somos = () => {
  return (
    <section
      id="somos"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Fondos decorativos */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Contenido principal */}
          <div>
            <span className="inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-bold text-yellow-300">
              Quiénes somos
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Un taller mecánico especializado en{" "}
              <span className="text-orange-500">
                calidad, confianza y soluciones reales
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              En <strong className="text-white">TecnoMotor</strong> ofrecemos
              servicios de reparación y mantenimiento para vehículos
              particulares, autos de alta gama, camiones, autoelevadores,
              tractores y maquinaria de trabajo.
            </p>

            <p className="mt-5 text-base leading-8 text-gray-300 sm:text-lg">
              Nuestro objetivo es brindar un servicio mecánico confiable, con
              diagnóstico preciso, atención profesional y trabajos realizados con
              calidad. Nos enfocamos en resolver cada problema de forma
              eficiente para que tu vehículo vuelva a funcionar correctamente y
              con seguridad.
            </p>

            <div className="mt-8 rounded-3xl border border-orange-500/30 bg-zinc-950 p-6 shadow-xl shadow-orange-500/10">
              <p className="text-lg font-black text-yellow-300">
                Reparaciones con respaldo técnico
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-300 sm:text-base">
                Cada trabajo se realiza con revisión, control y compromiso,
                buscando siempre una solución duradera y adecuada para cada
                vehículo o equipo.
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/549XXXXXXXXXX?text=Hola,%20quiero%20consultar%20por%20los%20servicios%20del%20taller%20TecnoMotor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center text-base font-black text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
              >
                Consultar por WhatsApp
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400/60 px-8 py-4 text-center text-base font-black text-yellow-300 transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Ver servicios
              </a>
            </div>
          </div>

          {/* Tarjetas */}
          <div className="grid gap-5 sm:grid-cols-2">
            {valores.map((item, index) => (
              <article
                key={index}
                className="group rounded-3xl border border-orange-500/20 bg-zinc-950 p-6 shadow-xl shadow-orange-500/5 transition duration-300 hover:-translate-y-2 hover:border-orange-500/70 hover:shadow-orange-500/20"
              >
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-yellow-400/30 bg-gradient-to-br from-orange-500/20 to-yellow-400/10 text-3xl">
                  {item.icon}
                </div>

                <h3 className="text-xl font-black text-white group-hover:text-yellow-300">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-300">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-16 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black p-6 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-10">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <p className="text-3xl font-black text-orange-500">Calidad</p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                En cada reparación
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-yellow-300">Garantía</p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Trabajo con respaldo
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-orange-500">Precisión</p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Diagnóstico profesional
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Somos;