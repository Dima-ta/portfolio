// app/timeline/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { timeline } from "@/data/timeline";
import { Award, Briefcase, GraduationCap } from "lucide-react";

// Filter tabs
const FILTERS = [
  { key: "all", label: "All" },
  { key: "work", label: "Work" },
  { key: "education", label: "Education" },
  { key: "certificate", label: "Certificates" },
] as const;

const typeIcons: Record<string, React.ElementType> = {
  work: Briefcase,
  education: GraduationCap,
  certificate: Award,
};

const typeColors: Record<string, string> = {
  work: "text-violet-600 dark:text-violet-400",
  education: "text-fuchsia-600 dark:text-fuchsia-400",
  certificate: "text-purple-600 dark:text-purple-400",
};

export default function TimelinePage() {
  const [active, setActive] = useState<(typeof FILTERS)[number]["key"]>("all");

  // Filter items according to the active tab, keep reverse chronological order
  const items = useMemo(() => {
    if (active === "all") return timeline;
    return timeline.filter((t) => t.type === active);
  }, [active]);

  const counts = useMemo(
    () => ({
      all: timeline.length,
      work: timeline.filter((t) => t.type === "work").length,
      education: timeline.filter((t) => t.type === "education").length,
      certificate: timeline.filter((t) => t.type === "certificate").length,
    }),
    []
  );

  return (
    <div className="relative isolate">
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 -z-10 bg-black/35" />

      <div className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
        <header className="mb-8 text-center">
          <h1 
          className="
            text-5xl md:text-6xl font-extrabold tracking-tight text-white
          "
          style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}>
            Timeline
          </h1>
          <p 
            className="
              mx-auto mt-3 max-w-3xl text-lg text-white
            "
            style={{ textShadow: "0 3px 8px rgba(0,0,0,0.6)" }}>
            A reverse-chronological overview of my professional journey and key milestones.
          </p>
          <a
            href="/DIMA-TALLAACV-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-900 px-4 py-2 font-medium text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200"
          >
            Download CV
          </a>

          {/* Filter tabs */}
          <div className="mt-4 inline-flex overflow-hidden rounded-xl border border-slate-200 bg-white/80 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`px-3 py-2 text-sm transition ${
                  active === f.key
                    ? "bg-slate-900 text-white dark:bg-white dark:text-black font-medium"
                    : "hover:bg-slate-100 dark:hover:bg-slate-800/40"
                }`}
                aria-pressed={active === f.key}
              >
                {f.label}{" "}
                <span className="ml-1 text-[11px] opacity-70">
                  ({counts[f.key as keyof typeof counts] ?? 0})
                </span>
              </button>
            ))}
          </div>
        </header>

        {/* Timeline line */}
        <ol className="relative">
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-slate-200 via-slate-300 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 md:left-1/2 md:-translate-x-1/2" />

          <div className="flex flex-col gap-6">
            {items.map((item, idx) => (
              <TimelineBlock key={item.id} item={item} index={idx} />
            ))}
          </div>
        </ol>
      </div>
    </div>
  );
}

function TimelineBlock({ item, index }: { item: (typeof timeline)[number]; index: number }) {
  const Icon = typeIcons[item.type];
  const color = typeColors[item.type];

  const side = index % 2 === 0 ? "md:justify-start" : "md:justify-end";

  return (
    <li id={item.id} className="scroll-mt-32">
      <div className={`group/item relative flex ${side}`}>
        {/* Center dot */}
        <span
          className="absolute left-4 top-5 z-10 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-white/30 bg-white/70 shadow-md backdrop-blur dark:border-slate-700 dark:bg-slate-800/70 md:left-1/2"
          aria-hidden
        >
          <Icon className={`h-6 w-6 transition-transform duration-300 group-hover/item:rotate-12 ${color}`} />
        </span>

        {/* Block that expands on hover/focus */}
        <div
          tabIndex={0}
          aria-label={`Timeline item: ${item.title}`}
          className={`
            group relative z-0 mt-2 w-full rounded-2xl border border-slate-200/70 bg-slate-50/80 p-5
            shadow-sm backdrop-blur transition-transform duration-300 ease-out hover:-translate-y-1 hover:shadow-xl focus-within:-translate-y-1 focus-within:shadow-xl
            dark:border-slate-700 dark:bg-slate-900/70
            md:w-[calc(50%-2.5rem)]
            ${index % 2 === 0 ? "md:ml-[calc(50%+2.5rem)]" : "md:mr-[calc(50%+2.5rem)]"}
          `}
        >
          {/* Block header */}
          <div className="relative mb-4 h-48 w-full shrink-0 overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-slate-700">
            {!item.logo ? (
              <div className="grid h-full w-full place-items-center bg-slate-100 text-3xl dark:bg-slate-800">
                <Icon className="h-12 w-12 text-slate-400 dark:text-slate-500" />
              </div>
            ) : item.links?.[0]?.href ? (
              <a
                href={item.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 p-3 dark:from-slate-800 dark:to-slate-900"
              >
                <Image
                  src={item.logo}
                  alt={`${item.title} logo`}
                  width={240}
                  height={144}
                  className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </a>
            ) : (
              <Image
                src={item.logo}
                alt={`${item.title} logo`}
                fill
                className="object-contain bg-gradient-to-br from-slate-50 to-slate-100 p-3 dark:from-slate-800 dark:to-slate-900"
              />
            )}
          </div>

          <div className="min-w-0 text-center md:text-left">
            <time className="text-xs uppercase tracking-wide text-slate-500">{item.period}</time>
            <h3 className="text-base font-semibold leading-snug break-words">{item.title}</h3>
            <p className="truncate text-sm text-slate-600 dark:text-slate-300">
              {item.place.replace("—", " • ")}
            </p>
            {item.summary && (
              <p className="mt-1 text-sm text-slate-700 dark:text-slate-300">{item.summary}</p>
            )}
          </div>

          {/* Expanded details inside block */}
          {(item.bullets?.length || item.links?.length) && (
            <div
              className="
                mt-3 max-h-0 overflow-hidden opacity-0
                transition-all duration-500 ease-out
                group-hover:max-h-[700px] group-hover:opacity-100
                group-focus-within:max-h-[700px] group-focus-within:opacity-100
              "
            >
              <div className="rounded-xl border border-slate-200/70 bg-white/90 p-4 dark:border-slate-700 dark:bg-slate-900/80">
                {item.bullets?.length ? (
                  <ul className="list-disc space-y-1 pl-5 text-sm">
                    {item.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                ) : null}

                {item.links?.length ? (
                  <div className="mt-3 flex flex-wrap gap-3">
                    {item.links.map((l, i) => (
                      <a
                        key={i}
                        href={l.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-lg border border-slate-200 bg-white/80 px-3 py-1.5 text-xs underline underline-offset-4 hover:no-underline dark:border-slate-700 dark:bg-slate-800"
                      >
                        {l.label} →
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
