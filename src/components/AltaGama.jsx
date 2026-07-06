import altagama from "../images/altagama.png";

const serviciosAltaGama = [
  "Inyección electrónica",
  "Escaneo computarizado",
  "Diagnóstico computarizado",
  "Embragues",
  "Tren delantero",
  "Cambio de rulemanes",
  "Sistema de frenos",
  "Suspensión",
  "Distribución",
  "Cambio de aceite y filtros",
  "Revisión eléctrica",
  "Detección de fallas",
];

const AltaGama = () => {
  return (
    <section
      id="alta-gama"
      className="relative overflow-hidden bg-black py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Decoración de fondo */}
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Imagen */}
          <div className="order-1">
            <div className="relative overflow-hidden rounded-3xl border border-orange-500/30 bg-zinc-950 shadow-2xl shadow-orange-500/10">
              <img
                src={altagama}
                alt="Reparación y mantenimiento de vehículos de alta gama y vehículos de pasajeros"
                className="h-[280px] w-full object-cover object-center sm:h-[380px] md:h-[460px] lg:h-[560px]"
              />

              {/* Overlay suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>

              {/* Etiqueta sobre imagen */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-yellow-400/30 bg-black/70 p-4 backdrop-blur-md">
                <p className="text-sm font-bold uppercase tracking-wide text-yellow-300">
                  Servicio técnico especializado
                </p>
                <h3 className="mt-1 text-xl font-black text-white">
                  Alta gama y vehículos de pasajeros
                </h3>
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="order-2">
            <span className="inline-flex rounded-full border border-orange-500/50 bg-orange-500/10 px-4 py-2 text-sm font-bold text-yellow-300">
              Vehículos de alta gama
            </span>

            <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              Diagnóstico, reparación y mantenimiento para autos{" "}
              <span className="text-orange-500">exigentes</span>
            </h2>

            <p className="mt-6 text-base leading-8 text-gray-300 sm:text-lg">
              Brindamos soluciones técnicas para vehículos de alta gama y
              vehículos de pasajeros, combinando diagnóstico computarizado,
              equipamiento profesional y mano de obra especializada para
              asegurar rendimiento, seguridad y confiabilidad.
            </p>

            <p className="mt-4 text-base leading-8 text-gray-300 sm:text-lg">
              Realizamos mantenimiento preventivo y correctivo para detectar
              fallas a tiempo, optimizar el funcionamiento del vehículo y evitar
              reparaciones mayores.
            </p>

            {/* Servicios */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {serviciosAltaGama.map((servicio, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 rounded-2xl border border-orange-500/20 bg-zinc-950 px-4 py-3 shadow-lg shadow-orange-500/5 transition duration-300 hover:border-orange-500/60 hover:bg-zinc-900"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-orange-500 text-sm font-black text-black">
                    ✓
                  </span>
                  <p className="text-sm font-semibold text-gray-200">
                    {servicio}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5492984230704?text=Hola,%20quiero%20consultar%20por%20reparaci%C3%B3n%20y%20mantenimiento%20de%20veh%C3%ADculos"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center text-base font-black text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
              >
                Consultar por mi vehículo
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400/60 px-8 py-4 text-center text-base font-black text-yellow-300 transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Ver más servicios
              </a>
            </div>
          </div>
        </div>

        {/* Franja inferior */}
        <div className="mt-16 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black p-6 shadow-2xl shadow-orange-500/10 sm:p-8">
          <div className="grid gap-6 text-center sm:grid-cols-3">
            <div>
              <p className="text-3xl font-black text-orange-500">
                Scanner
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Diagnóstico computarizado
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-yellow-300">
                Mecánica
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Reparación integral
              </p>
            </div>

            <div>
              <p className="text-3xl font-black text-orange-500">
                Precisión
              </p>
              <p className="mt-2 text-sm font-semibold text-gray-300">
                Servicio especializado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AltaGama;