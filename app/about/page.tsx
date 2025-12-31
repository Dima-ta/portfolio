// app/about/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import { Heart, Target, Sparkles, BookOpen, ArrowRight } from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Background */}
      <div className="relative isolate pt-16">
        <div className="mx-auto max-w-3xl px-6 py-16 lg:py-24">
          {/* Header */}
          <div className="mb-10 text-center">
            <h1
              className="
                mb-4 text-5xl md:text-6xl font-extrabold 
                tracking-tight text-white
              "
              style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}
            >
              About Me
            </h1>

            {/* Avatar */}
            <div className="relative mx-auto mt-8 h-32 w-32 rounded-full shadow-lg ring-4 ring-white/70 dark:ring-slate-800/70">
              <Image
                src={profile.avatar ?? "/avatar1.png"}
                alt={profile.name ?? ""}
                fill
                sizes="128px"
                className="rounded-full object-cover"
                priority
              />
            </div>
            <h2
              className="
                mt-8 text-3xl md:text-4xl font-bold 
                text-white
              "
              style={{ textShadow: "0 3px 10px rgba(0,0,0,0.8)" }}
            >
              {profile.name}
            </h2>
          </div>

          {/* Stacked blocks */}
          <div className="flex flex-col gap-6">
            <Card>
              <p className="text-center leading-8 text-slate-500 dark:text-slate-400">
                Software engineer focused on designing reliable, scalable, and human-centered systems. I work across the full development lifecycle, from understanding needs and designing architectures to building, testing, and delivering web applications.
                I value clean architecture, maintainable code, and collaborative teamwork to continuously improve both product quality and delivery.
              </p>
            </Card>
            <Card>
              <SectionTitle icon={<Heart className="h-5 w-5" />} title="My Values" />
              <p className="leading-8 text-slate-700 dark:text-slate-300">
                I believe in a responsible and human-centered approach to software
                engineering. For me, technology is not only about performance, but
                also about ethics, sustainability, and collaboration. I aim to
                contribute to projects that create meaningful value for both people and
                organizations.
              </p>
              <CardFooter href="/skills">See the skills I build on</CardFooter>
            </Card>

            <Card>
              <SectionTitle
                icon={<Target className="h-5 w-5" />}
                title="My Professional and Personal Project"
              />
              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Currently pursuing a Mastère Expert en Ingénierie Logicielle, my goal is to grow into a versatile software engineer capable of managing complex projects, designing scalable architectures, and ensuring high standards of quality and innovation.
                On a personal level, I aim to combine strong technical expertise with collaboration and initiative, and to progressively take on greater responsibilities within software development teams.
              </p>
              <CardFooter href="/projects">View related projects</CardFooter>
            </Card>

            <Card>
              <SectionTitle icon={<Sparkles className="h-5 w-5" />} title="My Key Strengths" />
              <ul className="mt-3 flex flex-wrap gap-x-2 gap-y-3">
                {skills
                  .filter(s => s.domain === "human" && s.level >= 4)
                  .slice(0, 4)
                  .map(skill => (
                  <li
                    key={skill.slug}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                  >
                    {skill.icon && <skill.icon className="h-5 w-5 text-slate-500" />}
                    {skill.name}
                  </li>
                ))}
              </ul>
              <CardFooter href="/skills">Explore all skills</CardFooter>
            </Card>

            <Card>
              <SectionTitle icon={<BookOpen className="h-5 w-5" />} title="My Interests" />
              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Outside of professional life, I am passionate about new technologies, AI and automation, and UI/UX design.
                I have also been involved in volunteer activities, both technical and non-technical, aimed at supporting people and contributing to community-oriented initiatives.
                In addition, I enjoy activities that encourage creativity and balance, such as photography and traveling.
              </p>
            </Card>

            {/* CTA row */}
            <div className="mt-2 flex flex-col items-center justify-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-3">
              <LinkButton href={"/DIMA-TALLAACV-Resume.pdf" as Route}> Download CV </LinkButton>
              <LinkButton href="/contact">Contact me</LinkButton>
              </div>
              <LinkButton href={"/" as Route}>Return to Home Page</LinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- Small UI primitives (no external deps) ---------- */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70">
      {children}
    </section>
  );
}

function SectionTitle({ title, icon }: { title: string; icon?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3">
      {icon && <span className="text-slate-500 dark:text-slate-400">{icon}</span>}
      <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>
    </div>
  );
}

function CardFooter({ href, children }: { href: Route; children: React.ReactNode }) {
  return (
    <div className="mt-4">
      <Link
        href={href}
        className="inline-flex items-center gap-1 text-sm underline underline-offset-4 hover:no-underline"
      >
        {children} <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}

function LinkButton({ href, children }: { href: Route; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
    >
      {children}
    </Link>
  );
}
