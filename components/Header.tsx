"use client";
import Link from "next/link";
import Image from "next/image";
import { type Route } from "next";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

const avatar = profile.avatar ?? "/avatar.jpg";
const nav: { href: Route; label: string }[] = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/timeline", label: "Timeline" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-50 border-b bg-white/70 backdrop-blur">
      <div className="container mx-auto w-full flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 rounded-full overflow-hidden">
            <Image
              src="/DT Logo/DT_logo_original.png" 
              alt="Logo"
              fill
              sizes="40px"
              className="object-contain"
              priority
            />
            </div>
          <div className="hidden sm:block">
            <div className="font-semibold leading-tight">{profile.name}</div>
            <div className="text-xs text-slate-500">{profile.title}</div>
          </div>
        </Link>
        <nav className="flex items-center gap-2">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link key={item.href} href={item.href}
                className={`rounded-full px-3 py-2 text-sm ${active ? "bg-slate-900 text-white" : "hover:bg-slate-100"}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
