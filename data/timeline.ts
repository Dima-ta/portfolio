// src/data/timeline.ts
export type TimelineItem = {
  id: string;
  type: "work" | "education" | "certificate";
  period: string;              // e.g. "2023 _ Present"
  title: string;               // e.g. "Python Developer Apprentice"
  place: string;               // e.g. "GE Vernova _ Belfort, France"
  logo?: string;               // optional /public logos
  summary?: string;            // short one-liner (1st-level reading)
  programDescription?: string;
  bullets?: string[];          // detailed points (2nd-level reading on hover/focus)
  links?: { label: string; href: string }[];
  relatedProjectSlugs?: string[];
  skills?: string[];
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
    programDescription: "This apprenticeship immerses me in a high-stakes industrial environment where precision and efficiency are paramount. I am responsible for developing software solutions that automate complex data verification processes and provide real-time visibility into project KPIs, fostering a proactive approach to quality management.",
    bullets: [
      "Built a Python tool to automate interconnect cabling checks: improved data quality, FPY, efficiency, and OTD.",
      "Automated dashboards + weekly reports for error rates & trends across projects.",
      "Defined/Tracked KPIs: data quality improvement rate; weekly error rates per project.",
      "Developed a PLM task-tracking tool with a Sankey graph; delivered Excel reports; real-time online monitoring linked to PLM.",
      "Handled user issues, implemented fixes, ensured timely deliveries."
    ],
    relatedProjectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
    skills: ["Python", "Data Analysis", "Excel Integration", "PLM", "Visualization"],
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
    programDescription: "This program follows a professional and project-oriented pedagogy, closely aligned with real-world practices. Learning is structured around real-world use cases, software architecture, and quality standards. I particularly value this approach, as it develops autonomy, responsibility, and the ability to design scalable and maintainable software solutions.",
    bullets: [
      "Advanced: Angular, Spring, Kotlin, Docker, Kubernetes",
      "Architecture & Testing: SOLID, UML, Security, Big Data, NoSQL, DevOps",
      "Project management: Agile/Scrum, Design Thinking, Team leadership"
    ],
    relatedProjectSlugs: ["pmt-project-management-tool", "innotechfusion", "portfolio-website"],
    skills: ["Angular", "Spring Boot", "Docker", "Kubernetes", "CI/CD", "Architecture"],
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
    programDescription: "The academic approach of this program emphasizes strong theoretical foundations in computer science, supported by practical work and structured projects. This balance between theory and practice helped me develop rigorous analytical thinking and a solid understanding of core computer science concepts.",
    bullets: [
      "Projects: MIPS; Web programming (HTML, CSS, JavaScript, PHP)",
      "Databases: UML, Oracle PL/SQL",
      "CS: Data structures & algorithms (C), OOP (Java), Git"
    ],
    skills: ["Java", "C", "PHP", "SQL", "Git", "UML"],
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
    skills: ["Teamwork", "Communication"],
    links: [{ label: "Website", href: "https://www.uniscite.fr/" }],
  },
  {
    id: "driving-license",
    type: "certificate",
    period: "2019",
    title: "Driving License (Permis B)",
    place: "France",
    logo: "/logos/driving-licence.jpg",
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
    programDescription: "This engineering program is based on a project-centered pedagogy, encouraging experimentation, teamwork, and problem-solving. The learning approach combines technical courses with concrete projects, promoting autonomy, adaptability, and an engineering mindset focused on practical solutions.",
    bullets: ["Projects in C & C++", "Databases (SQL)", "Project: Crunch Time"],
    skills: ["C", "C++", "SQL"],
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
    skills: ["Networking", "Cisco IOS", "Routing & Switching"],
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
    programDescription: "The Faculty of Engineering at Shoubra provided me with a solid foundation in electrical engineering, with a focus on electronics and telecommunications. The program combined theoretical principles with practical coursework, fostering analytical thinking and technical rigor that later supported my transition toward software and systems engineering.",
    bullets: [
      "HTML & JavaScript programming",
      "Power source & Robot projects",
      "Circuit drawing with PROTEUS",
      "MATLAB simulations"
    ],
    skills: ["MATLAB", "Proteus", "HTML", "JavaScript", "Electronics"],
    links: [{ label: "University", href: "https://en.feng.bu.edu.eg" }],
  },
];
