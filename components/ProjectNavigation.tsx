"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { projects } from "@/data/projects";

export function ProjectNavigation({ currentSlug }: { currentSlug: string }) {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);

  if (currentIndex === -1) {
    return null; // Should not happen if slug is valid
  }

  // Determine next project, wrapping around to the start if at the end
  const nextIndex = (currentIndex + 1) % projects.length;
  const nextProject = projects[nextIndex];

  // Determine previous project, wrapping around to the end if at the start
  const previousIndex = (currentIndex - 1 + projects.length) % projects.length;
  const previousProject = projects[previousIndex];

  const buttonClasses = "inline-flex items-center justify-center gap-2 rounded-md border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-700 shadow-sm transition-all duration-200 ease-in-out hover:bg-teal-100 hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 dark:border-teal-800 dark:bg-teal-950 dark:text-teal-300 dark:hover:bg-teal-900 dark:hover:shadow-lg dark:focus:ring-teal-400 dark:focus:ring-offset-slate-900";

  return (
    <div className="mt-12 flex items-center justify-between border-t border-slate-200 pt-8 dark:border-slate-700">
      <Link
        href={`/projects/${previousProject.slug}`}
        className={buttonClasses}
      >
        <ChevronLeft className="h-5 w-5 text-teal-600 dark:text-teal-400" />
        <span>Previous Project</span>
      </Link>

      <Link
        href={`/projects/${nextProject.slug}`}
        className={buttonClasses}
      >
        <span>Next Project</span>
        <ChevronRight className="h-5 w-5 text-teal-600 dark:text-teal-400" />
      </Link>
    </div>
  );
}