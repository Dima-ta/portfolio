import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Section } from "@/components/Section";
import { SkillsRadar } from "@/components/SkillsRadar";
import { projects } from "@/data/projects";
import { skills } from "@/data/skills";
import Hero from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section id="projects" title="Featured Projects" subtitle="A curated selection of my most impactful work.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map(p => <ProjectCard key={p.slug} project={p} />)}
        </div>
        <div className="mt-8">
          <Button asChild>
            <Link href="/projects">View all projects</Link>
          </Button>
        </div>
      </Section>

      <Section id="skills" title="Skills Overview" subtitle="This radar chart provides a visual representation of my proficiency across key technical and human skills, offering a quick overview of my core competencies.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200/80 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Proficiency Radar</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">A visual breakdown of my skill levels.</p>
            <SkillsRadar />
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/50 p-6 shadow-sm backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/50">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Top skills</h3>
            <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">My most frequently used technologies and strengths.</p>
            <ul className="mt-3 space-y-2 text-sm">
              {skills
                .sort((a, b) => b.level - a.level)
                .slice(0, 5)
                .map(s => (
                  <li key={s.slug} className="flex items-center justify-between gap-4">
                    <span className="flex items-center gap-3 text-slate-800 dark:text-slate-200">
                      {s.icon && <s.icon className="h-5 w-5 text-slate-500 dark:text-slate-400" />}
                      <span className="font-medium">{s.name}</span>
                    </span>
                    <span className="text-slate-500 dark:text-slate-400">{s.level} / 5</span>
                  </li>
                ))}
            </ul>
            <div className="mt-6 text-sm">
              <Link className="font-medium text-slate-700 underline underline-offset-4 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white" href="/skills">See all skills →</Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
