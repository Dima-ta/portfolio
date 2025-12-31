import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/Section";
import { skills } from "@/data/skills";
import { projects } from "@/data/projects";
import { BookOpen, CheckCircle2, TrendingUp, Link as LinkIcon, ArrowRight, Target, Star, Tag } from "lucide-react";

function norm(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "");
}

export default function SkillDetail({ params }: { params: { slug: string } }) {
  const skill = skills.find((s) => s.slug === params.slug);
  if (!skill) return notFound();

  const related = projects.filter((p) => {
    const stackNorm = p.stack.map(norm);
    return stackNorm.includes(norm(skill.slug)) || stackNorm.includes(norm(skill.name));
  });

  const techSkills = skills.filter((s) => s.domain === "technical");
  const humanSkills = skills.filter((s) => s.domain === "human");

  const renderText = (text: string) => {
    const parts = text.split(/(\[.*?\]\(.*?\))/g);
    return parts.map((part, i) => {
      const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
      if (linkMatch) {
        return (
          <Link key={i} href={linkMatch[2] as string} className="font-medium text-indigo-600 hover:underline dark:text-indigo-400">
            {linkMatch[1]}
          </Link>
        );
      }
      return part.split(/(\*\*.*?\*\*)/g).map((subPart, j) => {
        if (subPart.startsWith("**") && subPart.endsWith("**")) {
          return (
            <strong key={`${i}-${j}`} className="font-semibold text-slate-900 dark:text-white">
              {subPart.slice(2, -2)}
            </strong>
          );
        }
        return subPart;
      });
    });
  };

  const renderMarkdown = (text: string) => {
    const lines = text.split("\n");
    const elements: React.ReactNode[] = [];
    let listItems: React.ReactNode[] = [];

    lines.forEach((line, i) => {
      const trimmed = line.trim();
      const indent = line.search(/\S/); 

      if (trimmed.startsWith("- ")) {
        const isNested = indent >= 2;
        listItems.push(
          <li key={i} className={`${isNested ? "ml-10 list-[circle]" : "ml-4 list-disc marker:text-indigo-500"} pl-1`}>
            {renderText(trimmed.substring(2))}
          </li>
        );
      } else if (/^\d+[-.]\s/.test(trimmed)) {
        listItems.push(
          <li key={i} className="ml-10 list-decimal marker:text-indigo-500 pl-1">
            {renderText(trimmed.replace(/^\d+[-.]\s/, ""))}
          </li>
        );
      } else {
        if (listItems.length > 0) {
          elements.push(
            <ul key={`ul-${i}`} className="mb-4 list-outside space-y-1 pl-4">
              {listItems}
            </ul>
          );
          listItems = [];
        }

        if (trimmed === "") {
          elements.push(<div key={i} className="h-4" />);
        } else {
          elements.push(
            <div key={i} className="mb-1">
              {renderText(line)}
            </div>
          );
        }
      }
    });

    if (listItems.length > 0) {
      elements.push(
        <ul key="ul-end" className="mb-4 list-outside space-y-1 pl-4">
          {listItems}
        </ul>
      );
    }

    return elements;
  };

  return (
    <Section title={skill.name} subtitle={skill.tagline}>
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-12">
          {/* Definition */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                <BookOpen className="h-5 w-5" />
              </div>
              Definition
            </h3>
            <div className="prose max-w-none text-slate-600 dark:text-slate-300 dark:prose-invert">
              <p className="whitespace-pre-line leading-relaxed">{skill.definition}</p>
            </div>
          </div>

          {/* Evidence */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                <CheckCircle2 className="h-5 w-5" />
              </div>
              Evidence and Practical Experience
            </h3>
            <div className="grid gap-6">
              {skill.proofs.map((p, i) => (
                <div key={i} className="relative rounded-2xl border border-slate-200 bg-slate-50/50 p-6 transition-all hover:bg-slate-50 hover:shadow-sm dark:border-slate-700 dark:bg-slate-800/30 dark:hover:bg-slate-800/50">
                  {p.projectSlug && (
                    <span id={p.projectSlug} className="absolute -top-28 block h-0 w-0 opacity-0" />
                  )}
                  {p.projectSlugs?.map((slug) => (
                    <span key={slug} id={slug} className="absolute -top-28 block h-0 w-0 opacity-0" />
                  ))}
                  <div className="prose max-w-none text-slate-600 dark:text-slate-300 dark:prose-invert">
                    <div className="text-slate-600 dark:text-slate-300">{renderMarkdown(p.text)}</div>
                  </div>
                  {p.projectSlug && (
                    <Link
                      href={`/projects/${p.projectSlug}`}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      {projects.find((proj) => proj.slug === p.projectSlug)?.title || "View Project"} <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                  {p.projectSlugs && (
                    <div className="mt-4 flex flex-wrap gap-4">
                      {p.projectSlugs.map((slug) => {
                        const project = projects.find((proj) => proj.slug === slug);
                        return (
                          <Link key={slug} href={`/projects/${slug}`} className="inline-flex items-center gap-1 text-sm font-medium text-indigo-600 hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300">
                            {project ? project.title : "View Project"} <ArrowRight className="h-4 w-4" />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Self Assessment */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                <TrendingUp className="h-5 w-5" />
              </div>
              Self-Assessment
            </h3>
            <div className="rounded-2xl border border-indigo-100 bg-indigo-50/50 p-6 dark:border-indigo-500/10 dark:bg-indigo-500/5">
              <div className="text-slate-700 dark:text-slate-300">{renderMarkdown(skill.selfCritique)}</div>
            </div>
          </div>

          {/* Future Development */}
          <div className="space-y-4">
            <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                <Target className="h-5 w-5" />
              </div>
              Future Development
            </h3>
            <div className="text-slate-600 dark:text-slate-300">{renderMarkdown(skill.nextSteps)}</div>
          </div>

          {/* Related Projects (Text) */}
          {skill.relatedProjects && (
            <div className="space-y-4">
              <h3 className="flex items-center gap-3 text-xl font-bold text-slate-900 dark:text-white">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400">
                  <LinkIcon className="h-5 w-5" />
                </div>
                Related Projects
              </h3>
              <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-700">
                <div className="text-slate-600 dark:text-slate-300">{renderMarkdown(skill.relatedProjects)}</div>
              </div>
            </div>
          )}

          {/* Sub-menu Navigation */}
          <div className="flex flex-col gap-3 border-t border-slate-200 pt-8 dark:border-slate-800">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">
              Navigate to another skill
            </div>
            <div className="flex flex-wrap gap-2">
              {techSkills.map((s) => (
                <Link
                  key={s.slug}
                  href={`/skills/${s.slug}`}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    s.slug === skill.slug
                      ? "border-indigo-500/50 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                      : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                  }`}
                >
                  {s.name}
                </Link>
              ))}
            </div>
            <div className="flex flex-wrap gap-2">
              {humanSkills.map((s) => (
                <Link
                  key={s.slug}
                  href={`/skills/${s.slug}`}
                  className={`rounded-full border px-3 py-1 text-sm ${
                    s.slug === skill.slug
                      ? "border-indigo-500/50 bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-300"
                      : "border-slate-200 bg-white hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-slate-800"
                  }`}
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-8 lg:sticky lg:top-24 h-fit">
          {/* Skill Info Card */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800/50">
            <div className="mb-6 flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
                {skill.logo ? (
                  <Image
                    src={skill.logo}
                    alt={skill.name}
                    width={48}
                    height={48}
                    className="h-auto w-12 object-contain"
                  />
                ) : skill.icon ? (
                  <skill.icon className="h-10 w-10 text-indigo-500" />
                ) : (
                  <span className="text-2xl font-bold text-slate-400">
                    {skill.name[0]}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-6 text-center">
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                {skill.name}
              </h2>
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Niveau
                </div>
                <div className="mt-1 flex items-center gap-2">
                  <Stars value={skill.level} />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {skill.level}/5
                  </span>
                </div>
              </div>

              <div>
                <div className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Domaine
                </div>
                <div className="mt-1 text-sm font-medium capitalize text-slate-900 dark:text-white">
                  {skill.domain === "technical" ? "Technique" : "Humain"}
                </div>
              </div>

              {skill.status && (
                <div>
                  <div className="text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Statut
                  </div>
                  <div className="mt-1 inline-flex rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-xs font-medium text-indigo-700 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-300">
                    {skill.status}
                  </div>
                </div>
              )}

              {skill.tags && skill.tags.length > 0 && (
                <div>
                  <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    <Tag className="h-3 w-3" /> Tags
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {skill.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-slate-200 bg-white px-2 py-1 text-xs text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Related Projects */}
          {related.length > 0 && (
            <div>
              <h3 className="mb-4 flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
                <LinkIcon className="h-5 w-5 text-indigo-500" />
                Réalisations rattachées
              </h3>
              <div className="flex flex-col gap-4">
                {related.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/projects/${p.slug}`}
                    className="group block"
                  >
                    <div className="rounded-xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-800">
                      <h4 className="font-bold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
                        {p.title}
                      </h4>
                      <p className="mt-2 text-xs text-slate-500 line-clamp-2 dark:text-slate-400">
                        {p.presentation}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
}

function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < value
              ? "fill-yellow-400 text-yellow-400"
              : "text-slate-300 dark:text-slate-600"
          }`}
        />
      ))}
    </span>
  );
}
