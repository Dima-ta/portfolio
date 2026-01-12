export type Project = {
  slug: string;
  title: string;
  year: string;
  presentation: string; 
  logo?: string; 
  logoFit?: "normal" | "wide";
  gallery?: { src: string; description: string }[];
  context: string;
  objectives: string[];
  features: string[]; 
  outcomes: string[];
  criticalReflection?: string;
  links?: { label: string; href: string }[];
  stack: string[];
};

export const projects: Project[] = [
  {
    slug: "interconnect-error-checker",
    title: "Interconnect Cabling Error Checker",
    year: "2024",
    presentation: "An advanced tool to automatically detect interconnect cabling errors by processing Excel files, generating detailed reports, and producing visual dashboards of error rates and quality metrics.",
    logo: "/projects/gallery/logo1.png",
    context:
      "This project was initiated at GE Vernova as an improvement over an older Access-based tool that was slow and limited. I took ownership of analyzing the existing process, researching error-checking approaches, and developing a faster, more comprehensive solution. My role covered requirements gathering, Python development, Excel integration, and KPI dashboard design.",
    objectives: [
      "Improve data quality checks and reduce manual review time.",
      "Enhance accuracy by expanding the number of detectable error cases.",
      "Provide an accessible tool for non-technical users.",
    ],
    features: [
      "Allow users to upload interconnect databases and comparison files in Excel format.",
      "Perform 13 distinct validation checks to identify mismatches and wiring errors.",
      "Provide detailed reports pinpointing the exact cable error, including the current vs. expected value according to company standards.",
      "Offer a document reformatting module to restructure internal company documents into well-organized Excel files.",
      "Automatically store results in the company database for recurring quality and sanity reports.",
      "Deliver visual dashboards (graphs and KPIs) showing project counts, cables analyzed, and error distributions over time.",
    ],
    outcomes: [
      "Improved data quality checks, reducing manual review time and increasing efficiency.",
      "Enhanced accuracy by expanding the number of detectable error cases.",
      "Learned how to combine Python data analysis with a simple user interface to make technical tools accessible to non-technical users.",
      "Strengthened experience in automation, reporting, and KPI tracking for real-world engineering workflows.",
    ],
    criticalReflection: "One limitation of this project was the tight coupling between validation rules and data formats. \nIn future iterations, I would externalize business rules to improve maintainability and adaptability. \nThis project taught me the importance of balancing technical robustness with long-term evolvability.",
    stack: ["Python", "Excel Integration", "Data Analysis & Visualization", "Git", "MySQL", "Data Modeling", "Documentation", "Clean Architecture", "Continuous Learning & Adaptability", "Teamwork & Communication", "Problem Solving & Analytical Thinking"],
    gallery: [
      {
        src: "/projects/gallery/interface1.1.png",
        description: "Main user interface to perform the check.",
      },
      {
        src: "/projects/gallery/interface1.2.png",
        description: "Process and convert an Excel document into another form.",
      },
      {
        src: "/projects/gallery/interface1.3.png",
        description: "Generate a sanity check report for the requested period.",
      },
      {
        src: "/projects/gallery/detailed report1.png",
        description: "Detailed report with the selected tests.",
      },
      {
        src: "/projects/gallery/detailed report2.png",
        description: "Sub-tests under a main test category.",
      },
      {
        src: "/projects/gallery/detailed report3.png",
        description: "Shows the detailed error, specifying the cable and wire, and suggests the correct value.",
      },
      {
        src: "/projects/gallery/graphs report1.png",
        description: "Graph report showing project informations and error percentages for each test.",
      },
      {
        src: "/projects/gallery/sanity report.png",
        description: "Automated sanity report for quality and KPI tracking.",
      },
    ],
  },
  {
    slug: "plm-task-tracking",
    title: "Predecessor / Task Tracking Tool",
    year: "2025",
    presentation:
      "Python-based application integrated with the PLM system to track tasks and their predecessors, visualize them in Sankey graphs, and generate comprehensive Excel reports across multiple projects.",
    logo: "/projects/gallery/logo2.png",
    context:
      "Developed during my apprenticeship at GE Vernova (Belfort, France) as part of process digitalization. The company manages a very large PLM database with thousands of tasks and dependencies. Manual monitoring was inefficient and often missed deadlines. My role was to design and implement a tool that fetches real-time tasks from the PLM system, generates interactive visualizations for managers, and provides structured Excel reports for multi-project oversight. I also collaborated with managers to refine requirements and ensure usability.",
    objectives: [
      "Enable managers to enter a project ID and instantly see a Sankey graph of all tasks and predecessors.",
      "Display complete task details: status, description, assignee, planned vs actual dates, reasons for delay, remarks, and direct PLM link.",
      "Allow monitoring of multiple project IDs at once, generating consolidated Excel reports.",
      "Respect the chronological sequence of tasks in both visualization and reporting.",
    ],
    features: [
      "Sankey Graphs: Green for completed tasks, red for active/assigned/not found.",
      "Interactive Task Details: Hover or click on a node to view full task metadata.",
      "Excel Reports: Export multi-project summaries with task details, deadlines, and delays.",
      "Integration with PLM: Fetch real-time data directly from PLM system.",
      "Online Monitoring: Live visualization of progress and backlog forecasts.",
    ],
    outcomes: [
      "Greatly improved visibility for managers, allowing quick identification of late tasks and their causes.",
      "Reduced reliance on manual tracking methods (emails, spreadsheets).",
      "Strengthened skills in Python, data visualization, PLM integration, and effective communication with stakeholders.",
      "Delivered a reusable tool that integrates seamlessly into daily workflows.",
    ],
    criticalReflection: "One limitation of this tool is that task dependencies are manually defined, which may introduce human error. \nIn future versions, I would integrate automated consistency checks and a more interactive visualization. \nThis project helped me better understand the complexity of dependency management in real-world systems.",
    stack: ["Python", "Sankey Visualization (Plotly/Matplotlib)", "Data Modeling", "Documentation", "Clean Architecture", "Continuous Learning & Adaptability", "Teamwork & Communication", "Problem Solving & Analytical Thinking"],
    gallery: [
      {
        src: "/projects/gallery/interface2.png",
        description: "Main user interface for entering a project ID to generate tasks visualizations.",
      },
      {
        src: "/projects/gallery/sankey1.png",
        description: "Sankey graph showing task dependencies, with colors indicating status.",
      },
      {
        src: "/projects/gallery/sankey2.png",
        description: "Detailed view of a task node in the Sankey graph, showing assignee, dates, and status.",
      },
      { src: "/projects/gallery/projects report.png", description: "Consolidated Excel report for tracking multiple projects at once." },
    ],
  },
  {
    slug: "pmt-project-management-tool",
    title: "PMT (Project Management Tool)",
    year: "2025",
  
    logo: "/projects/gallery/pmt logo1.png",
    presentation: 
      "A full-stack project management platform enabling teams to create projects, track tasks, visualize progress, and collaborate efficiently across the development lifecycle.",
  
    context:
      "Developed as part of a professional engineering pipeline, the PMT platform combines Angular and Spring Boot to deliver a scalable project and task management system. The work included designing the full database schema, building REST APIs, developing a modular Angular frontend, and implementing DevOps automation through Docker and a complete CI/CD workflow.",
  
    objectives: [
      "Provide a collaborative environment for project and task management.",
      "Manage projects and tasks while visualizing progress in real time.",
      "Ensure industrial-grade code quality through automated tests and CI/CD pipelines."
    ],
  
    features: [
      "User Management: invitations and role-based permissions.",
      "Project Management: create, update, and structure projects.",
      "Task Management: priorities, deadlines, assignees, and status progression.",
      "Dashboards: real-time visualization of task distribution by status."
    ],
  
    outcomes: [
      "A fully operational full-stack platform meeting professional engineering standards.",
      "CI/CD automation ensuring reliable builds, tests, and deployments.",
      "Strong code quality with backend & frontend test coverage ≥ 60%."
    ],
    criticalReflection: "One challenge in this project was balancing flexibility with data integrity, especially when designing task relationships.\nIf I were to continue this project, I would add role-based access control, advanced reporting, and deployment automation.\nThis project strengthened my understanding of backend architecture and long-term maintainability.",
  
    stack: [
      "Angular",
      "Spring Boot",
      "Docker",
      "MySQL",
      "CI/CD",
      "Testing",
      "Clean Architecture"
    ],
    links: [
      { label: "Repository (GitLab)", href: "https://gitlab.com/dematallaa/pmt_etude-de-cas" },
    ],
  },
  {
    slug: "innotechfusion",
    title: "InnotechFusion / Electronic Voting & Attendance Web Application",
    year: "2025",
    logo: "/projects/gallery/innotech logo.png",
    logoFit: "wide",
  
    presentation:
      "A full-stack web application for associations to manage attendance before voting events, ensuring one-member-one-vote with real-time status visualization.",
  
    context:
      "Built as a case study (étude de cas) during the Mastère “Expert en Ingénierie Logicielle”. The goal was to demonstrate end-to-end software engineering: requirements, architecture, implementation, testing, CI/CD, containerization, and documentation. I contributed across frontend and backend, implemented core business rules (one-time voting), helped design the architecture/data model, and participated in deployment and documentation deliverables.",
  
    objectives: [
      "Digitize attendance verification before voting sessions.",
      "Provide a clear real-time view of voting status (voted / not voted).",
      "Guarantee voting integrity with one-member-one-vote logic.",
      "Deliver a clean, scalable architecture ready for V2 evolutions.",
      "Industrialize delivery with Docker and GitLab CI/CD.",
    ],
    features: [
      "MVP (V1): Members list with personal details and real-time voting status.",
      "MVP (V1): One-time voting workflow preventing duplicate votes after validation.",
      "MVP (V1): REST API consumed by the Angular frontend for all voting operations.",
      "MVP (V1): MySQL persistence with an SQL seed script for test members.",
  
      "Planned (V2): Multiple voting sessions (scrutins).",
      "Planned (V2): Anonymous voting via secure UUIDs.",
      "Planned (V2): Admin dashboard with statistics and voting analytics.",
  
      "Engineering: Clear separation between Angular frontend and Spring Boot backend.",
      "Engineering: Docker Compose stack (frontend + API + MySQL) for reproducible runs.",
      "Engineering: GitLab CI pipeline for automated build and tests.",
    ],
  
    outcomes: [
      "Delivered a complete full-stack solution with clear domain rules and persistence.",
      "Strengthened Angular + Spring Boot integration skills (REST, services, data flow).",
      "Improved delivery maturity through Docker Compose and CI automation (GitLab CI).",
      "Produced professional documentation (architecture + README + SQL seed), making the project easy to run and assess.",
    ],
    criticalReflection: "One challenge in this project was ensuring strict voting integrity while maintaining usability.\nDesigning database constraints and backend validation required careful trade-offs between flexibility and security.\nIf redesigned, I would introduce event-based auditing and more granular role management.",
  
    stack: [
      "Angular",
      "TypeScript",
      "Spring Boot",
      "Java",
      "MySQL",
      "REST APIs",
      "Docker",
      "Docker Compose",
      "GitLab CI",
      "JUnit",
    ],
  
    links: [
      { label: "Repository (GitLab)", href: "https://gitlab.com/dematallaa/etude-de-cas-c.git" },
      { label: "Architecture document (PDF)", href: "/Document_Architecture_InnotechFusion.pdf" },
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    year: "2025",
    presentation:
      "A modern personal portfolio built with Next.js to showcase projects, skills, and a reverse-chronological timeline. The site is designed with a strong focus on clarity, structure, and long-term maintainability, making it suitable for both academic evaluation and professional interviews.",
    logo: "/DT-Logo/DT_logo_original.png",
    context:
      "This portfolio was developed as my capstone project for the ISCOD Mastère 2 _ Expert en Ingénierie Logicielle. \nI designed and implemented the entire website end-to-end, from architecture and content structure to UI, navigation, and component design, using Next.js, TypeScript, and Tailwind CSS.\n\n A key goal of this project was to create a portfolio that is not only visually clean, but also engineered as a scalable application: projects, timeline entries, and skills can be extended easily without breaking the overall structure.",
    objectives: [
      "Design a clean, professional, and easy-to-navigate user interface",
      "Present projects with dedicated pages including context, objectives, features, outcomes, and links",
      "Build a structured and scalable content model for long-term updates (projects, skills, timeline)",
      "Provide a reverse-chronological timeline for education and professional experience",
      "Ensure a maintainable codebase suitable for technical review and interviews",  
    ],
    features: [
      "Hero section with avatar, title, and clear CTAs.",
      "Skills page with filtering, tags, and level indicators.",
      "Dedicated skill pages: each skill is fully documented in its own page with a structured format (definition, evidence, self-assessment, future development, and related projects)",
      "Projects list + individual project pages (Presentation, context, objectives, features, outcomes, links, gallery, reports).",
      "Timeline section showing education, professional experience, and certifications, presented in reverse chronological order for better clarity and readability.",
      "Contact section with form and external links (LinkedIn, GitHub, Resume).",
    ],
    outcomes: [
      "Strengthened my skills in Next.js, TypeScript, and Tailwind CSS through a real end-to-end project",
      "Improved my ability to structure a codebase with reusable components and clear separation of concerns",
      "Built a scalable architecture that allows new projects and skills to be added quickly without refactoring",
      "Delivered a professional portfolio aligned with academic requirements and ready for real-world review",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Software Engineering & Clean Architecture",
      "Vercel",
    ],
    criticalReflection: "This project helped me consolidate my frontend architecture skills. One limitation was the initial lack of automated testing, which I plan to address in future iterations. If I were to restart the project, I would define a clearer content schema earlier to reduce refactoring.",
    links: [
      { label: "Live", href: "https://dima-tallaa.vercel.app/" },
      { label: "GitHub", href: "https://github.com/Dima-ta/portfolio/" },
    ],
  },
];
