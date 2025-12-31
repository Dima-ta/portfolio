"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const backgrounds = [
  "/background0.jpg",
  "/background1.jpg",
  "/background2.jpg",
];

export function BackgroundManager() {
  const [index, setIndex] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 7000); // Change background every 7 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        key={index}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <Image
          src={backgrounds[index]}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority={index === 0 && pathname === "/"}
        />
        <div
          className={`absolute inset-0 ${
            pathname === "/" ? "bg-black/50 dark:bg-slate-900/50" : "bg-black/50 dark:bg-slate-900/90"
          }`}
        />
      </motion.div>
    </AnimatePresence>
  );
}