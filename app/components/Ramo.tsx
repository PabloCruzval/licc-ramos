import { RamoInterface } from "../page";

import { Chip } from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MenuBookIcon from "@mui/icons-material/MenuBook";

import { formatDate, isToday } from "../utils";

export default function Ramo({
  ramo,
  onBack,
}: {
  ramo: RamoInterface;
  onBack: () => void;
}) {
  return (
    <section className="w-full">
      <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900 sm:p-8">
        <div className="mb-6 flex flex-col gap-4 sm:mb-8">
          <button
            onClick={onBack}
            className="inline-flex w-fit items-center gap-2 rounded-xl border border-zinc-200 bg-zinc-50 px-3 py-2 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
          >
            <ArrowBackIcon sx={{ fontSize: 18 }} />
            Volver
          </button>

          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
              Repositorio del ramo
            </p>
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {ramo.nombre} - {ramo.sigla}
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {ramo.info_clases.map((item) => (
            <a
              key={item.clase}
              href={`${ramo.url}Clase${item.clase}.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group rounded-3xl border border-zinc-200  p-5 text-left shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-400 hover:shadow-xl dark:border-zinc-800  ${isToday(item.fecha) ? "ring-2 ring-blue-400 bg-blue-100 dark:bg-blue-900/30" : "bg-zinc-50 dark:bg-zinc-950/40"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold leading-tight">
                    Clase {item.clase} -{" "}
                    {isToday(item.fecha) ? "Hoy" : formatDate(item.fecha)}
                  </h3>
                </div>
              </div>

              {item.texto_guia && (
                <div className="mt-3">
                  <Chip
                    icon={<MenuBookIcon />}
                    label={item.texto_guia}
                    size="small"
                    color="primary"
                    variant="outlined"
                  />
                </div>
              )}

              <p className="mt-4 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                {item.contenido}
              </p>

              <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200">
                  Objetivo:
                </span>{" "}
                {item.objetivo}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
