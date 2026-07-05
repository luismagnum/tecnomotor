import hero from "../images/hero.png";

const Hero = () => {
  return (
    <section className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <div className="mb-5 inline-block rounded-full border border-orange-500/60 bg-orange-500/10 px-4 py-2">
              <span className="text-sm font-bold text-yellow-300">
                Mantenimiento preventivo y correctivo
              </span>
            </div>

            <h1 className="max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Soluciones técnicas para que tu operación{" "}
              <span className="text-orange-500">nunca se detenga</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-gray-300 sm:text-lg">
              Servicio integral de mantenimiento para flotas, camiones,
              autoelevadores, maquinaria agroindustrial y vehículos livianos.
              Diagnóstico profesional, respuesta rápida y soluciones confiables
              para mantener tus equipos siempre activos.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-orange-500/30 bg-zinc-900 p-5 shadow-lg shadow-orange-500/10">
                <h3 className="text-lg font-bold text-yellow-300">
                  Preventivo
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Evitá fallas inesperadas y reducí tiempos muertos en tu
                  operación.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/30 bg-zinc-900 p-5 shadow-lg shadow-yellow-500/10">
                <h3 className="text-lg font-bold text-orange-400">
                  Correctivo
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-300">
                  Solucionamos averías para que tus equipos vuelvan a trabajar
                  cuanto antes.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="https://wa.me/5491158023306?text=Hola,%20quiero%20consultar%20por%20mantenimiento%20de%20flotas"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-base font-bold text-white transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Solicitar asesoramiento
              </a>

              <a
                href="#servicios"
                className="inline-flex items-center justify-center rounded-full border border-yellow-400/60 bg-transparent px-8 py-4 text-base font-bold text-yellow-300 transition duration-300 hover:bg-yellow-400 hover:text-black"
              >
                Ver servicios
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-3 gap-y-2 text-sm font-medium text-gray-400">
              <span>Camiones</span>
              <span className="text-orange-500">•</span>
              <span>Autoelevadores</span>
              <span className="text-orange-500">•</span>
              <span>Maquinaria agroindustrial</span>
              <span className="text-orange-500">•</span>
              <span>Vehículos livianos</span>
            </div>
          </div>

          {/* Imagen */}
          <div className="order-1 lg:order-2">
            <div className="relative overflow-hidden rounded-3xl border border-orange-500/20 bg-zinc-900 shadow-2xl shadow-orange-500/10">
              <img
                src={hero}
                alt="Soluciones técnicas integrales para flotas, camiones, autoelevadores, maquinaria agroindustrial y vehículos livianos"
                className="h-[260px] w-full object-cover object-center sm:h-[340px] md:h-[420px] lg:h-[520px]"
              />

              {/* Overlay suave */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;