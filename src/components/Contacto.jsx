const Contacto = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="relative overflow-hidden bg-black text-white"
    >
      {/* Fondos decorativos */}
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl"></div>
      <div className="absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-yellow-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">
        {/* CTA superior */}
        <div className="mb-12 rounded-3xl border border-orange-500/30 bg-linear-to-r from-zinc-950 via-zinc-900 to-black p-6 shadow-2xl shadow-orange-500/10 sm:p-8 lg:p-10">
          <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            <div>
              <span className="text-sm font-bold uppercase tracking-widest text-yellow-300">
                Mecánica especializada
              </span>

              <h3 className="mt-3 text-2xl font-black leading-tight sm:text-3xl lg:text-4xl">
                ¿Necesitás reparar o mantener tu vehículo?
              </h3>

              <p className="mt-4 max-w-3xl text-base leading-8 text-gray-300">
                En TecnoMotorVR brindamos diagnóstico, reparación y mantenimiento
                para autos de alta gama, vehículos particulares, camiones,
                autoelevadores y tractores.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="https://wa.me/549XXXXXXXXXX?text=Hola,%20quiero%20consultar%20por%20los%20servicios%20de%20TecnoMotorVR"
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
                Ver ubicación
              </a>
            </div>
          </div>
        </div>

        {/* Contenido principal */}
        <div className="grid gap-10 border-b border-orange-500/20 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Marca */}
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight sm:text-4xl">
              Tecno<span className="text-orange-500">MotorVR</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              Taller mecánico especializado en reparación, mantenimiento
              preventivo, diagnóstico computarizado y soluciones técnicas para
              vehículos particulares, alta gama y equipos de trabajo pesado.
            </p>

            <div className="mt-5 inline-flex rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm font-bold text-yellow-300">
              Trabajo garantizado y de calidad
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-lg font-black text-yellow-300">
              Servicios principales
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li>
                <a href="#hero" className="transition hover:text-orange-400">
                  Reparación de autos
                </a>
              </li>

              <li>
                <a href="#hero" className="transition hover:text-orange-400">
                  Vehículos de alta gama
                </a>
              </li>

              <li>
                <a href="#hero" className="transition hover:text-orange-400">
                  Vehículos particulares
                </a>
              </li>

              <li>
                <a href="#servicios" className="transition hover:text-orange-400">
                  Camiones
                </a>
              </li>

              <li>
                <a href="#servicios" className="transition hover:text-orange-400">
                  Autoelevadores y tractores
                </a>
              </li>
            </ul>
          </div>

          {/* Reparaciones */}
          <div>
            <h3 className="text-lg font-black text-yellow-300">
              Reparaciones
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Inyección electrónica</span>
              </li>

              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Escaneo computarizado</span>
              </li>

              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Diagnóstico computarizado</span>
              </li>

              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Embragues y tren delantero</span>
              </li>

              <li className="flex gap-2">
                <span className="text-orange-500">✓</span>
                <span>Rulemanes, frenos y suspensión</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
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
                    href="tel:+549XXXXXXXXXX"
                    className="block transition hover:text-yellow-300"
                  >
                    +54 9 XXX XXX XXXX
                  </a>

                  <a
                    href="tel:+549XXXXXXXXXX"
                    className="block transition hover:text-yellow-300"
                  >
                    +54 9 XXX XXX XXXX
                  </a>
                </div>
              </div>

              <div>
                <p className="font-bold text-orange-400">Atención</p>
                <p className="mt-2 leading-7">
                  Reparación, mantenimiento preventivo y correctivo para autos,
                  flotas y maquinaria.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Franja de confianza */}
        <div className="grid gap-4 border-b border-orange-500/20 py-8 text-center sm:grid-cols-3">
          <div className="rounded-2xl border border-orange-500/20 bg-zinc-950 p-5">
            <p className="text-2xl font-black text-orange-500">Scanner</p>
            <p className="mt-2 text-sm font-semibold text-gray-400">
              Diagnóstico preciso
            </p>
          </div>

          <div className="rounded-2xl border border-yellow-400/20 bg-zinc-950 p-5">
            <p className="text-2xl font-black text-yellow-300">Garantía</p>
            <p className="mt-2 text-sm font-semibold text-gray-400">
              Trabajo con respaldo
            </p>
          </div>

          <div className="rounded-2xl border border-orange-500/20 bg-zinc-950 p-5">
            <p className="text-2xl font-black text-orange-500">Calidad</p>
            <p className="mt-2 text-sm font-semibold text-gray-400">
              Servicio profesional
            </p>
          </div>
        </div>

        {/* Parte inferior */}
        <div className="flex flex-col gap-4 pt-8 text-center text-sm text-gray-400 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {currentYear}{" "}
            <span className="font-bold text-white">TecnoMotorVR</span>. Todos
            los derechos reservados.
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