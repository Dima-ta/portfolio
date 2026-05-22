// app/about/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Route } from "next";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";
import {
  Heart,
  Target,
  Sparkles,
  BookOpen,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <>
      {/* Background */}
      <div className="relative isolate pt-16">
        <div className="mx-auto max-w-4xl px-6 py-16 lg:py-24">
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

          {/* Content */}
          <div className="flex flex-col gap-6">
            <Card>
              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Software engineer specialized in full-stack development, with a
                strong interest in designing reliable, scalable, and
                user-centered digital solutions. My approach to software
                engineering goes beyond technical implementation: I consider
                software development as a discipline that combines problem
                solving, communication, organization, and continuous adaptation
                to evolving technologies and user needs.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                Throughout my academic and professional experiences, I have
                worked on various web development projects involving application
                design, frontend and backend development, database management,
                testing, and deployment. These experiences allowed me to
                understand the importance of building maintainable architectures
                and writing clean, structured, and sustainable code. I also
                progressively developed the ability to collaborate effectively
                within multidisciplinary teams and to adapt to different project
                environments and constraints.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                Rather than focusing only on technical performance, I pay
                particular attention to the long-term quality of software
                products. For me, a successful application is not only
                functional, but also understandable, maintainable, accessible,
                and aligned with the real needs of its users. This perspective
                has progressively shaped my vision of software engineering and
                reinforced my interest in software architecture, quality
                assurance, and collaborative development practices.
              </p>
            </Card>

            <Card>
              <SectionTitle
                icon={<Heart className="h-5 w-5" />}
                title="My Values"
              />

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                I strongly believe in a responsible and human-centered vision of
                software engineering. Technology has an important impact on
                everyday life, organizations, and communication, which is why I
                consider that developers also carry a form of responsibility in
                the way digital solutions are designed and maintained.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                In my view, technical expertise should always be combined with
                ethics, collaboration, and continuous improvement. Working on a
                project is not only about delivering features, but also about
                understanding users, communicating efficiently with teams,
                documenting decisions, and building solutions that remain
                sustainable over time.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                I also value curiosity and adaptability. The software
                engineering field evolves rapidly, and remaining open to
                learning is essential to continue progressing both technically
                and professionally. For this reason, I regularly explore new
                technologies, development methodologies, and best practices in
                order to improve my skills and broaden my perspective on
                software development.
              </p>

              <CardFooter href="/skills">
                See the skills I build on
              </CardFooter>
            </Card>

            <Card>
              <SectionTitle
                icon={<Target className="h-5 w-5" />}
                title="My Professional and Personal Project"
              />

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Currently pursuing a Mastère Expert en Ingénierie Logicielle,
                my objective is to progressively evolve toward a role combining
                strong technical expertise with project involvement and
                architectural decision-making. I aim to become a versatile
                software engineer capable of designing scalable systems,
                contributing to complex development projects, and ensuring high
                standards of software quality.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                Beyond the technical dimension, I also wish to strengthen my
                ability to work within collaborative environments, participate
                in technical discussions, and contribute actively to project
                organization and continuous improvement processes. In the long
                term, I would like to take on responsibilities involving
                software architecture, technical leadership, or project
                coordination.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                On a personal level, I continuously seek opportunities to
                improve both my technical and interpersonal skills. I believe
                that professional growth also depends on communication,
                adaptability, autonomy, and the ability to learn from
                experience and feedback.
              </p>

              <CardFooter href="/projects">
                View related projects
              </CardFooter>
            </Card>

            <Card>
              <SectionTitle
                icon={<Sparkles className="h-5 w-5" />}
                title="My Key Strengths"
              />

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                One of my main strengths is analytical thinking and problem
                solving. I enjoy understanding complex situations, identifying
                technical constraints, and progressively building effective and
                structured solutions. During my projects, I learned how to
                approach problems methodically while maintaining attention to
                both technical quality and user needs.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                I also developed strong teamwork and communication skills
                through collaborative academic and professional projects.
                Working with other developers, sharing knowledge, and discussing
                technical choices helped me improve my ability to communicate
                clearly and contribute positively within a team environment.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                Another important aspect of my profile is adaptability and
                continuous learning. Because technologies evolve rapidly, I
                regularly explore new tools, frameworks, and development
                practices in order to strengthen my technical versatility and
                remain up to date with industry standards.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                Finally, I pay particular attention to documentation and
                knowledge sharing. I consider that clear communication and
                proper documentation are essential elements for maintaining
                project quality, facilitating collaboration, and ensuring
                long-term maintainability.
              </p>

              <div className="mt-6 flex flex-wrap gap-x-2 gap-y-3">
                {skills
                  .filter((s) => s.domain === "human" && s.level >= 4)
                  .slice(0, 4)
                  .map((skill) => (
                    <div
                      key={skill.slug}
                      className="flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                    >
                      {skill.icon && (
                        <skill.icon className="h-5 w-5 text-slate-500" />
                      )}
                      {skill.name}
                    </div>
                  ))}
              </div>

              <CardFooter href="/skills">Explore all skills</CardFooter>
            </Card>

            <Card>
              <SectionTitle
                icon={<BookOpen className="h-5 w-5" />}
                title="My Interests"
              />

              <p className="leading-8 text-slate-700 dark:text-slate-300">
                Outside of software engineering, I am particularly interested in
                emerging technologies, artificial intelligence, automation, and
                UI/UX design. These areas allow me to better understand how
                technology can improve user experiences and optimize processes
                in different contexts.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                I have also participated in volunteer and community-oriented
                activities, both technical and non-technical, which helped me
                develop organizational skills, communication abilities, and a
                stronger awareness of collaboration and social contribution.
              </p>

              <p className="mt-5 leading-8 text-slate-700 dark:text-slate-300">
                In addition, I enjoy activities that encourage creativity and
                balance, such as photography and traveling. These experiences
                help me maintain curiosity, discover new perspectives, and
                develop a more open and adaptable mindset that also positively
                influences my professional approach.
              </p>
            </Card>

            {/* CTA */}
            <div className="mt-2 flex flex-col items-center justify-center gap-3">
              <div className="flex flex-wrap items-center justify-center gap-3">
                <LinkButton href={"/DIMA-TALLAACV-Resume.pdf" as Route}>
                  Download CV
                </LinkButton>

                <LinkButton href="/contact">Contact me</LinkButton>
              </div>

              <LinkButton href={"/" as Route}>
                Return to Home Page
              </LinkButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

/* ---------- UI Components ---------- */
function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200/70 bg-white/80 p-6 shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md dark:border-slate-800 dark:bg-slate-900/70">
      {children}
    </section>
  );
}

function SectionTitle({
  title,
  icon,
}: {
  title: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="mb-4 flex items-center gap-3">
      {icon && (
        <span className="text-slate-500 dark:text-slate-400">{icon}</span>
      )}

      <h2 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        {title}
      </h2>
    </div>
  );
}

function CardFooter({
  href,
  children,
}: {
  href: Route;
  children: React.ReactNode;
}) {
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

function LinkButton({
  href,
  children,
}: {
  href: Route;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur-md transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
    >
      {children}
    </Link>
  );
}
