"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { skills, type Skill } from "@/data/skills";
import { Star } from "lucide-react";

const FILTERS = [
  { key: "all", label: "Toutes les compétences" },
  { key: "technical", label: "Techniques" },
  { key: "human", label: "Humaines" },
] as const;

export default function SkillsPage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]["key"]>("all");
  const [q, setQ] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const tags = useMemo(() => {
    const t = new Set<string>();
    skills.forEach(s => s.tags?.forEach(tag => t.add(tag)));
    return Array.from(t).sort();
  }, []);

  const filtered = useMemo(() => {
    let items = skills.slice();
    if (active !== "all") items = items.filter(s => s.domain === active);
    if (selectedTag) items = items.filter(s => s.tags?.includes(selectedTag));
    if (q.trim()) {
      const k = q.toLowerCase();
      items = items.filter(
        s =>
          s.name.toLowerCase().includes(k) ||
          s.tags?.some(t => t.toLowerCase().includes(k))
      );
    }
    return items.sort((a, b) => (b.level - a.level) || a.name.localeCompare(b.name));
  }, [active, q, selectedTag]);

  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-6xl px-6 py-12 lg:py-16">
        {/* Header */}
        <header className="mb-8 text-center">
            <h1
              className="
                text-5xl md:text-6xl font-extrabold tracking-tight text-white
              "
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
            >
              Skills
            </h1>
            <p
              className="
                mx-auto mt-3 max-w-3xl text-lg text-white
              "
              style={{ textShadow: "0 3px 8px rgba(0,0,0,0.6)" }}
            >
              A synthetic overview of my technical and human skills, compared by proficiency level and detailed through concrete professional and personal experiences.
            </p>

            <a
            href="/DIMA-TALLAACV-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200">
              Download CV
            </a>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            {/* Tabs */}
            <div className="inline-flex overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
              {FILTERS.map(f => (
                <button
                  key={f.key}
                  onClick={() => setActive(f.key)}
                  className={`px-3 py-2 text-sm transition ${
                    active === f.key
                      ? "bg-slate-100 dark:bg-slate-800/60 font-medium"
                      : "hover:bg-slate-50 dark:hover:bg-slate-800/40"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>

            {/* Search */}
            <input
              value={q}
              onChange={e => setQ(e.target.value)}
              placeholder="Search skill or tag…"
              className="w-full rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm shadow-sm backdrop-blur placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-300 dark:border-slate-700 dark:bg-slate-900/70 sm:w-80"
            />
          </div>
        </header>

        {/* Tag chips */}
        {tags.length > 0 && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedTag(null)}
              className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                selectedTag === null
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
              }`}
            >
              All tags
            </button>
            {tags.map(tag => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                className={`rounded px-2.5 py-1 text-xs font-medium transition-colors ${
                  selectedTag === tag
                    ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                    : "bg-slate-100 text-slate-500 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400 dark:hover:bg-slate-700"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map(s => (
            <SkillCard key={s.slug} skill={s} />
          ))}
        </div>
      </div>
    </div>
  );
}

function SkillCard({ skill }: { skill: Skill }) {
  return (
    <Link
      href={`/skills/${skill.slug}`}
      className="group block h-full"
      aria-label={`Open skill: ${skill.name}`}
    >
      <article className="h-full rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5 shadow-sm backdrop-blur-md transition hover:-translate-y-1 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70">
        <div className="flex items-start gap-4">
          <div className="relative flex h-16 w-16 items-center justify-center rounded-xl bg-slate-50 ring-1 ring-slate-200 shadow-md dark:bg-slate-800 dark:ring-slate-700">
            {skill.logo ? (
              <Image
                src={skill.logo}
                alt={skill.name}
                width={48}
                height={48}
                className="h-auto w-12 object-contain"
              />
            ) : skill.icon ? (
              <skill.icon className="h-12 w-12 text-indigo-500" />
            ) : (
              <span className="text-lg font-medium text-slate-500">
                {skill.name[0]}
              </span>
            )}
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="text-lg font-bold leading-tight text-slate-900 group-hover:underline dark:text-slate-100">
              {skill.name}
            </h3>

            <p className="mt-1 line-clamp-2 text-sm text-slate-600 dark:text-slate-400">
              {skill.tagline}
            </p>

            <div className="mt-2 flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
              <Stars value={skill.level} />
              {skill.status && (
                <span className="rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
                  {skill.status}
                </span>
              )}
              <span className="rounded-full border border-slate-200 bg-white/70 px-2 py-0.5 text-[11px] capitalize dark:border-slate-700 dark:bg-slate-800/60">
                {skill.domain === "technical" ? "technique" : "humaine"}
              </span>
            </div>

            {!!skill.tags?.length && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {skill.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-slate-100 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-slate-800 dark:text-slate-400"
                  >
                    #{t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}


function Stars({ value }: { value: number }) {
  return (
    <span className="inline-flex items-center">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < value
              ? "fill-yellow-400 text-slate-400 dark:text-slate-500"
              : "fill-slate-100 text-slate-400 dark:fill-slate-800 dark:text-slate-500"
          }`}
        />
      ))}
    </span>
  );
}
