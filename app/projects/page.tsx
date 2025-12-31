import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        <header className="mb-8 text-center">
          <h1 
            className="
              text-5xl md:text-6xl font-extrabold tracking-tight text-white
            "
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}>
              Projects
          </h1>
          <p 
            className="
              mx-auto mt-3 max-w-3xl text-lg text-white
            "
            style={{ textShadow: "0 3px 8px rgba(0,0,0,0.6)" }}>
            A selection of projects showcasing my skills and experience.
           </p>
        </header>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/projects/${p.slug}`}
            className="group block rounded-2xl border border-slate-200/80 bg-white/50 p-5 shadow-sm backdrop-blur-md transition-all duration-300 hover:shadow-lg dark:border-slate-700 dark:bg-slate-900/50"
          >
            {p.logo && (
              <div className="relative mb-4 h-32 w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900">
                <Image
                  src={p.logo}
                  alt={`${p.title} logo`}
                  fill
                  sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 90vw"
                  className={`object-contain p-2 ${p.slug === "python" ? "scale-110" : ""}`}
                />
              </div>
            )}
            <div className="text-sm text-slate-500 dark:text-slate-400">{p.year}</div>
            <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
            <p className="mt-2 text-sm text-slate-600 line-clamp-3 dark:text-slate-300">{p.presentation}</p>
            <div className="mt-4 text-sm font-medium text-slate-600 underline-offset-4 group-hover:underline dark:text-slate-300">Read more →</div>
          </Link>
        ))}
      </div>
      </div>
    </div>
  );
}
