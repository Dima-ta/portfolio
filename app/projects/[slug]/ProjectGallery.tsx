"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

type GalleryItem = {
  src: string;
  description: string;
};

export function ProjectGallery({ gallery }: { gallery: GalleryItem[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextImage = useCallback(() => {
    setDirection(1);
    setIndex(prev => (prev + 1) % gallery.length);
  }, [gallery.length]);

  const prevImage = useCallback(() => {
    setDirection(-1);
    setIndex(prev => (prev - 1 + gallery.length) % gallery.length);
  }, [gallery.length]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <div className="not-prose group relative mt-4 h-[32rem] w-full overflow-hidden rounded-xl ring-1 ring-slate-200 dark:ring-slate-700">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
          className="absolute inset-0"
        >
          <Image
            src={gallery[index].src}
            alt={gallery[index].description}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button onClick={prevImage} className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white opacity-0 transition hover:bg-black/40 group-hover:opacity-100" aria-label="Previous image"><ChevronLeft /></button>
      <button onClick={nextImage} className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/20 p-2 text-white opacity-0 transition hover:bg-black/40 group-hover:opacity-100" aria-label="Next image"><ChevronRight /></button>

      {/* Caption */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/60 via-black/30 to-transparent p-4 pt-12 text-white">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="flex items-end justify-between"
          >
            <p className="text-sm">{gallery[index].description}</p>
            <p className="shrink-0 text-xs opacity-70">{index + 1} / {gallery.length}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}