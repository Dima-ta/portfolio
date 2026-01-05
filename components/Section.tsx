import { cn } from "@/lib/utils";

export function Section({
  id,
  title,
  subtitle,
  background = "default",
  children,
}: {
  id?: string;
  title: string;
  subtitle?: string;
  background?: "default" | "none";
  children: React.ReactNode;
}) {
  return (
    <section id={id} className={cn("py-16", background === "default" && "bg-white")}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 text-center">
          <h2 className="text-2xl font-bold">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-slate-600">{subtitle}</p>}
        </div>
        {children}
        {id && (
          <div className="mt-12 text-center">
            <a href="#" className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-500 shadow-soft transition hover:bg-slate-200 hover:shadow-md">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-up">
                <path d="m5 12 7-7 7 7" />
                <path d="M12 19V5" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
