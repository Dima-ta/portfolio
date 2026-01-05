// src/data/timeline.ts
export type TimelineItem = {
  id: string;
  type: "work" | "education" | "certificate";
  period: string;              // e.g. "2023 _ Present"
  title: string;               // e.g. "Python Developer Apprentice"
  place: string;               // e.g. "GE Vernova _ Belfort, France"
  logo?: string;               // optional /public logos
  summary?: string;            // short one-liner (1st-level reading)
  bullets?: string[];          // detailed points (2nd-level reading on hover/focus)
  links?: { label: string; href: string }[];
};

export const timeline: TimelineItem[] = [
  // 2023 - Present
  {
    id: "ge-vernova-apprentice",
    type: "work",
    period: "2023 _ Present",
    title: "Python Developer Apprentice (Interconnections Team)",
    place: "GE Vernova — Belfort, France",
    logo: "/logos/ge-vernova.jpg",
    summary: "Automation & data quality tools, dashboards, KPIs, and PLM tracking.",
    bullets: [
      "Built a Python tool to automate interconnect cabling checks: improved data quality, FPY, efficiency, and OTD.",
      "Automated dashboards + weekly reports for error rates & trends across projects.",
      "Defined/Tracked KPIs: data quality improvement rate; weekly error rates per project.",
      "Developed a PLM task-tracking tool with a Sankey graph; delivered Excel reports; real-time online monitoring linked to PLM.",
      "Handled user issues, implemented fixes, ensured timely deliveries."
    ],
    links: [{ label: "Company", href: "https://www.gevernova.com" }],
  },
  {
    id: "iscod-master",
    type: "education",
    period: "2023 _ 2025",
    title: "Mastère _ Expert en Ingénierie Logicielle",
    place: "ISCOD — France",
    logo: "/logos/iscod.jpg",
    summary: "Advanced dev, architecture & testing, DevOps, Agile leadership.",
    bullets: [
      "Advanced: Angular, Spring, Kotlin, Docker, Kubernetes",
      "Architecture & Testing: SOLID, UML, Security, Big Data, NoSQL, DevOps",
      "Project management: Agile/Scrum, Design Thinking, Team leadership"
    ],
    links: [{ label: "University", href: "https://www.iscod.fr/" }],
  },
  // 2019 - 2023
  {
    id: "strasbourg-bachelor",
    type: "education",
    period: "2019 _ 2023",
    title: "Bachelor's in Computer Science",
    place: "University of Strasbourg — France",
    logo: "/logos/unistra.png",
    summary: "MIPS, Web, DB (UML/PLSQL), DS & Algorithms, OOP, Git.",
    bullets: [
      "Projects: MIPS; Web programming (HTML, CSS, JavaScript, PHP)",
      "Databases: UML, Oracle PL/SQL",
      "CS: Data structures & algorithms (C), OOP (Java), Git"
    ],
    links: [{ label: "University", href: "https://www.unistra.fr" }],
  },
  // 2018 - 2019
  {
    id: "uniscite",
    type: "work",
    period: "2018 _ 2019",
    title: "Civic Service — Association Unis-Cité",
    place: "Belfort, France",
    logo: "/logos/uniscite.jpg",
    summary: "Young Digital Citizens; Cinema & Citizenship programs.",
    bullets: [
      "Programs: Young Digital Citizens, Cinema & Citizenship",
      "Community engagement & teamwork"
    ],
    links: [{ label: "Website", href: "https://www.uniscite.fr/" }],
  },
  {
    id: "driving-license",
    type: "certificate",
    period: "2019",
    title: "Driving License (Permis B)",
    place: "France",
    logo: "/logos/driving-license.jpg",
    summary: "Obtained European driving license.",
  },
  {
    id: "psc1",
    type: "certificate",
    period: "2018 _ 2019",
    title: "PSC1 — First Aid Certification",
    place: "France",
    logo: "/logos/PSC1.jpg",
    summary: "Essential first aid training.",
  },
  // 2017 - 2018
  {
    id: "utbm-cycle",
    type: "education",
    period: "2017 _ 2018",
    title: "Engineering Cycle — Computer Science (1st year)",
    place: "UTBM — Belfort, France",
    logo: "/logos/utbm.png",
    summary: "C/C++ and SQL projects (Crunch Time).",
    bullets: ["Projects in C & C++", "Databases (SQL)", "Project: Crunch Time"],
    links: [{ label: "UTBM", href: "https://www.utbm.fr" }],
  },
  {
    id: "cisco-ccna",
    type: "certificate",
    period: "2017 _ 2018",
    title: "Cisco CCNA 1 & CCNA 2",
    place: "Cisco Networking",
    logo: "/logos/cisco.jpg",
    summary: "Foundations in networking (routing/switching).",
    links: [{ label: "Website", href: "https://www.cisco.com/site/fr/fr/index.html" }],
  },
  // 2013 - 2016
  {
    id: "shoubra-electrical",
    type: "education",
    period: "2013 _ 2016",
    title: "Electrical Engineering — Electronics & Telecom",
    place: "Faculty of Engineering at Shoubra — Cairo, Egypt",
    logo: "/logos/shoubra.jpg",
    summary: "Electronics/Comms; MATLAB, Proteus; Robotics; HTML/JS.",
    bullets: [
      "HTML & JavaScript programming",
      "Power source & Robot projects",
      "Circuit drawing with PROTEUS",
      "MATLAB simulations"
    ],
    links: [{ label: "University", href: "https://en.feng.bu.edu.eg" }],
  },
];
