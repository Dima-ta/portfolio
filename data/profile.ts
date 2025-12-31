// src/data/profile.ts
export const profile = {
  name: "Dima TALLAA",
  title: "Software Engineer / Full-stack",

  titleTop: "Software Engineer",
  titleBottom: "Full-stack",

  ctaPrimary: { label: "View projects", href: "#projects" },
  ctaSecondary: { label: "Explore skills", href: "#skills" },

  avatar: "/avatar1.png",
  background: "/background1.jpg",

  email: "dematallaa@gmail.com",  
  phone: "07 83 44 77 61",
  location: "Belfort, France",

  summary:
    "Detail-oriented, solution-driven engineer with hands-on experience in Python automation, data quality, and full-stack delivery. Available from Dec 2025.",

  links: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/dima-tallaa-79a67b1bb" },
    { label: "GitHub", href: "https://github.com/Dima-Tallaa" },
    { label: "Resume", href: "/DIMA-TALLAACV-Resume.pdf" }
  ],
} as const;
