// app/contact/page.tsx
"use client";

import { useState } from "react";
import { profile } from "@/data/profile";
import Link from "next/link";
import {
  Mail, Phone, MapPin, Linkedin, Github, Globe, FileDown, CheckCircle2, AlertCircle, Copy
} from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", robot: "" }); // robot = honeypot
  const [status, setStatus] = useState<"idle"|"ok"|"err">("idle");
  const [errors, setErrors] = useState<{name?:string; email?:string; message?:string}>({});

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Please enter a valid email.";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (form.robot) return; // spam
    if (!validate()) return;

    try {
      
      setStatus("ok");
      setForm({ name: "", email: "", message: "", robot: "" });
    } catch {
      setStatus("err");
    }
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {}
  };

  return (
    <div className="relative isolate">
      <div className="mx-auto max-w-5xl px-6 py-12 lg:py-16">
        <header className="mb-8 text-center">
          <h1 
            className="
              text-5xl md:text-6xl font-extrabold tracking-tight text-white
            "
            style={{ textShadow: "0 4px 12px rgba(0,0,0,0.8)" }}>
              Contact Me
          </h1>
          <p 
            className="
              mx-auto mt-3 max-w-3xl text-lg text-white
            "
            style={{ textShadow: "0 3px 8px rgba(0,0,0,0.6)" }}>
              Let's get in touch. I'm always open to discussing new projects and opportunities.
          </p>
        </header>

        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-2">
        {/* FORM CARD */}
        <div className="rounded-2xl border bg-white/80 p-8 shadow-soft backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="mb-4 text-lg font-semibold">Send me a message</h2>

          {/* status banners */}
          {status === "ok" && (
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
              <CheckCircle2 className="h-4 w-4" /> Message sent successfully. I’ll get back to you soon.
            </div>
          )}
          {status === "err" && (
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:border-rose-800 dark:bg-rose-900/40 dark:text-rose-200">
              <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again or use the email on the right.
            </div>
          )}

          <form onSubmit={onSubmit} noValidate>
            {/* honeypot */}
            <input
              type="text"
              name="robot"
              value={form.robot}
              onChange={e => setForm({ ...form, robot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="space-y-5">
              <Field
                label="Full Name"
                id="name"
        name="name"
                value={form.name}
                onChange={(v) => setForm({...form, name: v})}
                error={errors.name}
                autoComplete="name"
              />
              <Field
                label="Email Address"
                id="email"
                type="email"
                name="email"
                value={form.email}
                onChange={(v) => setForm({...form, email: v})}
                error={errors.email}
                autoComplete="email"
              />
              <FieldTextarea
                label="Message"
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={(v) => setForm({...form, message: v})}
                error={errors.message}
              />
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-indigo-500 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* INFO CARD */}
        <div className="flex flex-col justify-center rounded-2xl border bg-white/80 p-8 shadow-soft backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/70">
          <h2 className="mb-4 text-lg font-semibold">Contact details</h2>

          <ul className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
            <li className="flex items-center gap-3">
              <Mail className="h-4 w-4 opacity-70" />
              <a className="underline underline-offset-4" href={`mailto:${profile.email}`}>{profile.email}</a>
              <button
                type="button"
                onClick={copyEmail}
                className="ml-2 inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white/70 px-2 py-1 text-[11px] text-slate-600 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                title="Copy email"
              >
                <Copy className="h-3.5 w-3.5" /> Copy
              </button>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-4 w-4 opacity-70" />
              <span className="tabular-nums">{profile.phone}</span>
            </li>
            <li className="flex items-center gap-3">
              <MapPin className="h-4 w-4 opacity-70" />
              <span>{profile.location}</span>
            </li>
          </ul>

          {/* social / links */}
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {profile.links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-3 py-2 text-sm font-medium text-slate-700 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
              >
                {iconFor(l.label)}
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

/* ---------- tiny UI helpers ---------- */
function Field({
  label, id, type = "text", value, onChange, error, autoComplete
}: {
  label: string; id: string; name?: string; type?: string; value: string; onChange: (v: string) => void; error?: string; autoComplete?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <input
        id={id}
        name={id} // Use id as name if name prop is not provided
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        autoComplete={autoComplete}
        aria-invalid={Boolean(error)}
        className={`mt-1 block w-full rounded-xl border bg-white/80 px-3 py-2 text-sm shadow-sm backdrop-blur transition dark:bg-slate-800 dark:text-slate-100
        ${error ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500" : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600"}`}
      />
      {error && <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">{error}</p>}
    </div>
  );
}

function FieldTextarea({
  label, id, value, onChange, rows = 4, error
}: {
  label: string; id: string; name?: string; value: string; onChange: (v: string) => void; rows?: number; error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 dark:text-slate-300">
        {label}
      </label>
      <textarea
        id={id}
        name={id} // Use id as name if name prop is not provided
        rows={rows}
        value={value}
        onChange={e => onChange(e.target.value)}
        aria-invalid={Boolean(error)}
        className={`mt-1 block w-full rounded-xl border bg-white/80 px-3 py-2 text-sm shadow-sm backdrop-blur transition dark:bg-slate-800 dark:text-slate-100
        ${error ? "border-rose-400 focus:border-rose-500 focus:ring-rose-500" : "border-slate-300 focus:border-indigo-500 focus:ring-indigo-500 dark:border-slate-600"}`}
      />
      {error && <p className="mt-1 text-xs text-rose-600 dark:text-rose-400">{error}</p>}
    </div>
  );
}

function iconFor(label?: string) {
  const k = (label || "").toLowerCase();
  if (k.includes("linkedin")) return <Linkedin className="h-4 w-4" />;
  if (k.includes("github")) return <Github className="h-4 w-4" />;
  if (k.includes("resume")) return <FileDown className="h-4 w-4" />;
  if (k.includes("website") || k.includes("portfolio")) return <Globe className="h-4 w-4" />;
  return <Globe className="h-4 w-4" />;
}
