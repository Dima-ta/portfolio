"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { type Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative rounded-2xl border border-slate-200/80 bg-white/50 p-10 shadow-sm backdrop-blur-sm transition hover:shadow-md dark:border-slate-700 dark:bg-slate-900/50">
      {/* Front of the card */}
      <div className="transition-opacity group-hover:opacity-0">
        {project.logo && (
          <div
            className={`
              relative mb-4 w-full overflow-hidden rounded-xl
              ${project.logoFit === "wide" ? "h-56" : "h-52"}
              bg-gradient-to-br from-slate-50 to-slate-100
              dark:from-slate-800 dark:to-slate-900
            `}
          >
            <Image
            src={project.logo}
            alt={`${project.title} logo`}
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className={`
              object-contain
              transition-all duration-300
              group-hover:drop-shadow-xl
              ${project.logoFit === "wide" ? "scale-140 p-0" : "scale-100 p-3"}
            `}
          />
          </div>
        )}
        <div className="text-sm text-slate-500 dark:text-slate-400">{project.year}</div>
        <h3 className="mt-1 text-lg font-semibold text-slate-900 dark:text-slate-100">{project.title}</h3>
        <p className="mt-2 text-sm text-slate-600 line-clamp-3 dark:text-slate-300">{project.presentation}</p>
        <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-slate-600 dark:text-slate-300">
          Show details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

      {/* Back of the card (visible on hover) */}
      <div className="absolute inset-0 flex flex-col rounded-2xl p-10 opacity-0 transition-opacity group-hover:opacity-100">
        <div>
          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Key Features</h4>
          <ul className="mt-1 list-disc pl-4 text-xs text-slate-600 dark:text-slate-400">
            {project.features.slice(0, 3).map(obj => <li key={obj}>{obj}</li>)}
          </ul>
        </div>
        <div className="mt-3">
          <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200">Technologies</h4>
          <ul className="mt-1 list-disc pl-4 text-xs text-slate-600 dark:text-slate-400">
            {project.stack.slice(0, 3).map(step => <li key={step}>{step}</li>)}
          </ul>
        </div>
        <div className="mt-auto pt-4">
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white">
            Read more <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}