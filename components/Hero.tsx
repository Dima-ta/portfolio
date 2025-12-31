"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { profile } from "@/data/profile";

export function Hero() {
  const {
    avatar = "/avatar1.png",
    name = "Dima TALLAA",
    titleTop = "Software Engineer",
    titleBottom = "Full-stack",
    ctaPrimary = { label: "View projects", href: "/projects" },
    ctaSecondary = { label: "Explore skills", href: "/skills" },
  } = profile ?? {};

  const pathname = usePathname();

  return (
    <section
      className="
        relative flex items-center min-h-[80vh] md:min-h-[90vh]
        bg-[url('/bg.jpg')] bg-cover bg-center
      "
    >
      <div
        className="absolute inset-0 bg-black/50"
        aria-hidden="true"
      />

      <div className="relative container">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-[auto,1fr] md:items-center">
          <motion.div
            className="flex justify-center md:justify-start"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative h-40 w-40 overflow-hidden rounded-2xl shadow-lg ring-4 ring-white/70 md:h-48 md:w-48 bg-white/10 backdrop-blur-sm">
              <Image
                src={avatar}
                alt={`${name} portrait`}
                fill
                sizes="(max-width: 768px) 10rem, 12rem"
                className="object-cover"
                priority={pathname === "/"}
              />
            </div>
          </motion.div>

          <div className="text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                font-poppins font-extrabold leading-tight text-white
              "
              style={{ textShadow: "0 4px 10px rgba(0,0,0,0.8)" }}
            >
              <span className="block text-5xl md:text-6xl">{name}</span>
              <span className="mt-2 block text-3xl font-semibold md:text-4xl">
                {titleTop} / {titleBottom}
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-6 flex gap-4 justify-center md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/about"
                  className="px-5 py-3 rounded-xl bg-white/90 hover:bg-white transition shadow text-black font-medium"
                >
                  About Me
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={ctaPrimary.href}
                  className="px-5 py-3 rounded-xl bg-white/90 hover:bg-white transition shadow text-black font-medium"
                >
                  {ctaPrimary.label}
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={ctaSecondary.href}
                  className="px-5 py-3 rounded-xl bg-black/60 hover:bg-black transition shadow text-white font-medium"
                >
                  {ctaSecondary.label}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
