import { profile } from "@/data/profile";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

const iconMap = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Resume: FileText,
};

export function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white/50 backdrop-blur-sm dark:border-slate-800 dark:bg-slate-900/50">
      <div className="container mx-auto grid w-full grid-cols-2 gap-6 px-4 py-8">
        <div>
          <div className="font-semibold text-slate-900 dark:text-slate-100">{profile.name}</div>
          <div className="text-sm text-slate-600 dark:text-slate-400">{profile.title}</div>
        </div>
        <div className="flex items-center justify-self-end">
          <div className="flex items-center gap-4">
            <a href={`mailto:${profile.email}`} aria-label="Email" className="text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300">
              <Mail className="h-6 w-6" />
            </a>
            {profile.links.map((link) => {
              const Icon = iconMap[link.label as keyof typeof iconMap];
              return (
                <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.label} className="text-violet-600 transition-colors hover:text-violet-500 dark:text-violet-400 dark:hover:text-violet-300">
                  {Icon && <Icon className="h-6 w-6" />}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}