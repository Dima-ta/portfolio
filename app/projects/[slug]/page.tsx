import { notFound } from "next/navigation";
import Link from "next/link";
import { Section } from "@/components/Section";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { ProjectNavigation } from "@/components/ProjectNavigation";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";

export default function ProjectDetail({ params }: { params: { slug: string }}) {
  const project = projects.find(p => p.slug === params.slug);
  if (!project) return notFound();

  const relatedSkills = skills.filter(s => project.stack.includes(s.slug));

  return (
    <Section title={project.title}>
      <div className="prose max-w-none dark:prose-invert prose-headings:border-b prose-headings:border-slate-200 prose-headings:pb-2 dark:prose-headings:border-slate-700">
        {project.logo && (
          <div className="not-prose group relative mb-8 h-64 w-full overflow-hidden rounded-xl bg-gradient-to-br from-slate-50 to-slate-100 ring-1 ring-slate-200/50 dark:from-slate-800 dark:to-slate-900 dark:ring-slate-700/50">
            <Image
              src={project.logo}
              alt={`${project.title} logo`}
              fill
              sizes="(min-width:1024px) 768px, 100vw"
              className="object-contain p-4 transition-all duration-300 group-hover:scale-105 group-hover:drop-shadow-xl"
            />
          </div>
        )}

        <h3 className="text-xl font-semibold">Presentation</h3>
        <p className="whitespace-pre-line leading-relaxed">{project.presentation}</p>

        <h3 className="mt-8 text-xl font-semibold">Context & Role</h3>
        <p className="whitespace-pre-line leading-relaxed">{project.context}</p>

        <h3 className="mt-8 text-xl font-semibold">Objectives</h3>
        <p className="whitespace-pre-line leading-relaxed">
          {project.objectives}
        </p>

        <h3 className="mt-8 text-xl font-semibold">Key Features</h3>
        <p className="whitespace-pre-line leading-relaxed">
          {project.features}
        </p>

        <h3 className="mt-8 text-xl font-semibold">Outcomes & Learnings</h3>
        <p className="whitespace-pre-line leading-relaxed">
          {project.outcomes}
        </p>

        {project.collaboration && (
          <>
            <h3 className="mt-8 text-xl font-semibold">
              Collaboration & Interactions
            </h3>

            <p className="whitespace-pre-line leading-relaxed">
              {project.collaboration}
            </p>
          </>
        )}

        {project.criticalReflection && (
          <>
            <h3 className="mt-8 text-xl font-semibold">Critical Reflection</h3>
            <p className="whitespace-pre-line leading-relaxed">{project.criticalReflection}</p>
          </>
        )}

        {project.gallery && (
          <>
            <h3 className="mt-8 text-xl font-semibold">Gallery</h3>
            <div className="not-prose mt-6 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4">
              {project.gallery.map((img, idx) => (
                <figure key={idx} className="group relative flex w-[85vw] shrink-0 snap-center flex-col gap-2 sm:w-[480px]">
                  <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-slate-100 ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
                    <Image
                      src={img.src}
                      alt={img.description}
                      fill
                      className="object-contain transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 85vw, 480px"
                    />
                  </div>
                  <figcaption className="text-center text-sm text-slate-600 dark:text-slate-400">
                    {img.description}
                  </figcaption>
                </figure>
              ))}
            </div>
          </>
        )}

        {project.links && (
          <>
            <h3 className="mt-8 text-xl font-semibold">Links</h3>
            <ul className="not-prose mt-4 list-disc space-y-2 pl-5 leading-relaxed">
              {project.links.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </>
        )}

        <div className="mt-12">
          <h3 className="text-xl font-semibold">Technologies</h3>
          <div className="not-prose mt-4 flex flex-wrap gap-3">
            {project.stack.map(tech => {
              const skill = skills.find(s => s.slug === tech || s.name === tech || s.tags?.includes(tech) || s.keywords?.includes(tech));
              if (skill) {
                const hasProof = skill.proofs.some(
                  p => p.projectSlug === project.slug || p.projectSlugs?.includes(project.slug)
                );

                return (
                  <a
                    key={tech}
                    href={(hasProof ? `/skills/${skill.slug}#${project.slug}` : `/skills/${skill.slug}`) as string}
                    className="group flex items-center gap-2 rounded-lg border border-slate-200 bg-slate-50/50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:bg-white hover:shadow-sm hover:ring-1 hover:ring-slate-200 dark:border-slate-700 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:ring-slate-700"
                  >
                    {skill.icon && (
                      <skill.icon className="h-4 w-4 text-slate-400 transition-colors group-hover:text-indigo-500 dark:text-slate-500 dark:group-hover:text-indigo-400" />
                    )}
                    <span>{tech}</span>
                  </a>
                );
              }
              return (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400"
                >
                  {tech}
                </span>
              );
            })}
          </div>
        </div>

        <ProjectNavigation currentSlug={project.slug} />
      </div>
    </Section>
  );
}
