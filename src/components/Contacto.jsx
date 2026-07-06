const Contacto = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* Decoración de fondo */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        {/* CTA superior */}
        <div className="mb-12 rounded-3xl border border-orange-500/30 bg-gradient-to-r from-zinc-950 via-zinc-900 to-black p-6 shadow-2xl shadow-orange-500/10 sm:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                Soporte técnico especializado
              </span>

              <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl">
                ¿Necesitás asistencia para tu flota, maquinaria o vehículo?
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-300">
                Contactanos y recibí asesoramiento técnico para mantenimiento
                preventivo, correctivo y asistencia en ruta.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/5492984230704?text=Hola,%20quiero%20consultar%20por%20los%20servicios%20de%20Tecno%20Motor"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-4 text-center text-base font-black text-white shadow-xl shadow-orange-500/30 transition duration-300 hover:scale-105 hover:bg-yellow-400 hover:text-black"
              >
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Contenido principal del footer */}
        <div className="grid gap-10 border-b border-orange-500/20 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight">
              Tecno<span className="text-orange-500">MotorVR</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              Soluciones técnicas integrales para mantenimiento preventivo y
              correctivo de flotas, camiones, autoelevadores, maquinaria
              agroindustrial y vehículos.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              Servicio técnico integral
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-black text-yellow-300">Servicios</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <a href="#servicios" className="transition hover:text-orange-400">
                  Camiones y vehículos pesados
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition hover:text-orange-400">
                  Flota liviana
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition hover:text-orange-400">
                  Autoelevadores
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition hover:text-orange-400">
                  Maquinaria agroindustrial
                </a>
              </li>
              <li>
                <a href="#alta-gama" className="transition hover:text-orange-400">
                  Vehículos de alta gama
                </a>
              </li>
            </ul>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-lg font-black text-yellow-300">Navegación</h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <a href="#navar" className="transition hover:text-orange-400">
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#somos"
                  className="transition hover:text-orange-400"
                >
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#servicios" className="transition hover:text-orange-400">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#alta-gama" className="transition hover:text-orange-400">
                  Alta gama
                </a>
              </li>
              <li>
                <a href="#contacto" className="transition hover:text-orange-400">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div id="contacto">
            <h3 className="text-lg font-black text-yellow-300">Contacto</h3>

            <div className="mt-5 space-y-5 text-sm text-gray-300">
              <div>
                <p className="font-bold text-orange-400">Dirección</p>
                <p className="mt-2 leading-7">
                  Juan Moreira 582 <br />
                  Villa Regina, Río Negro
                </p>
              </div>

              <div>
                <p className="font-bold text-orange-400">Teléfonos</p>

                <div className="mt-2 space-y-2">
                  <a
                    href="tel:+5492984230704"
                    className="block transition hover:text-yellow-300"
                  >
                    +54 9 2984230704
                  </a>

                  <a
                    href="tel:+5492984230704"
                    className="block transition hover:text-yellow-300"
                  >
                    +54 9 2984230704
                  </a>
                </div>
              </div>

              <div>
                <p className="font-bold text-orange-400">Zona de cobertura</p>
                <p className="mt-2 leading-7">
                  Villa Regina y alrededores. Asistencia en ruta hasta 100 km a
                  la redonda.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="flex flex-col gap-4 pt-8 text-center text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {currentYear}{" "}
            <span className="font-bold text-white">Tecno Motor</span>. Todos los
            derechos reservados.
          </p>

          <p>
            Desarrollado por{" "}
            <span className="font-bold text-orange-400">
              Luis Díaz Marketing
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contacto;