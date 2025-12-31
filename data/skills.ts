import {
  Code2,
  Server,
  Layout,
  Database,
  Container,
  BrainCircuit,
  Users,
  BookOpen,
  FileText,
  HeartHandshake,
} from "lucide-react";

export type Skill = {
  slug: string;
  name: string;
  domain: "technical" | "human";
  level: number;
  tagline: string;
  definition: string;
  proofs: { text: string; projectSlug?: string; projectSlugs?: string[] }[];
  selfCritique: string;
  nextSteps: string;
  relatedProjects?: string;
  tags?: string[];
  icon?: any;
  logo?: string;
  status?: string;
  keywords?: string[];
};

export const skills: Skill[] = [
  // Technical
  {
    slug: "software-engineering",
    name: "Software Engineering & Clean Architecture",
    domain: "technical",
    level: 3,
    tagline: "Designing reliable, maintainable, and evolvable software systems through Clean Architecture and SOLID principles.",
    definition:
      "Software Engineering is a comprehensive discipline focused on designing, developing, and testing software systems that are reliable, maintainable, and evolvable over time.\nWithin this discipline, Clean Architecture is a key approach that emphasizes separation of concerns, low coupling between components, and clear boundaries between technical details and business logic. This allows technologies to evolve without impacting core domain rules.\n\nIn today's professional context-especially in complex systems-architectural quality has a direct impact on development cost, delivery speed, system stability, and long-term maintainability.",
    proofs: [
      {
        text: "**Example 1: InnotechFusion _ Clear Architectural Design**\n\nIn the InnotechFusion project, software engineering principles were applied from the earliest design phases.\nThe objective was to build an application that could evolve safely while remaining easy to test and maintain.\n\n**My contributions:**\n- Clear separation between application layers (Presentation / Business / Data)\n- Application of SOLID principles\n- Use of DTOs to reduce coupling between layers\n- Code organization focused on readability and maintainability\n\n**Results and added value:**\n- Well-structured and readable codebase\n- New features could be added without breaking existing functionality\n- Improved overall code quality and team collaboration",
        projectSlug: "innotechfusion",
      },
      {
        text: "**Example 2: PMT _ Project Management Tool (Architectural Structuring)**\n\nIn the PMT (Project Management Tool) project, I applied software engineering and clean architecture principles to structure both the backend and frontend logic in a coherent and scalable way.\n\nThe goal was to design a system capable of handling project and task management while remaining easy to extend as functional requirements evolved.\n\n**My contributions:**\n- Clear separation between domain logic, application services, and technical layers\n- Definition of consistent data models shared between backend and frontend\n- Architectural decisions aimed at minimizing coupling and improving evolvability\n- Anticipation of future features during initial design phases\n\n**Results and added value:**\n- A codebase that can evolve without major refactoring\n- Clear architectural structure facilitating maintenance and onboarding\n- Better alignment between technical implementation and functional requirements",
        projectSlug: "pmt-project-management-tool",
      },
      {
        text: "**Example 3: Backend Tools _ GE Vernova (Industrial Perspective)**\n\nDuring my professional experience at GE Vernova, the objective was not only to make the code work, but to ensure it was:\n- Reliable\n- Maintainable\n- Understandable and auditable by other teams\n\n**My contributions:**\n- Writing clear and evolvable code\n- Documenting business logic and architectural choices\n- Designing tools with reuse in mind\n- Continuously improving tool architecture as requirements evolved\n\n**Results and added value:**\n- Tools that could be reused and understood by other teams\n- Reduced dependency on individual knowledge\n- Improved overall engineering quality within the team",
        projectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
      },
      {
        text: "**Example 4: Personal Projects and Self-Learning**\n\nIn my personal projects, I consistently apply software engineering principles by:\n- Avoiding the mixing of business logic with technical details\n- Thinking about long-term evolution before writing code\n- Applying simple and appropriate design patterns when relevant\n\n**Results:**\n- More stable and maintainable projects\n- Easier rework and extension after long periods of inactivity",
      },
    ],
    selfCritique:
      "I consider my level in software engineering and clean architecture to be very good and continuously improving.\nI am able to:\n\n- Make justified architectural decisions\n- Understand the long-term impact of technical choices\n- Refactor and improve existing application structures\n\nAt the same time, I am aware that true expertise in this area requires:\n\n- Exposure to larger-scale systems\n- Reviewing complex real-world architectures\n- Learning from practical mistakes and constraints",
    nextSteps:
      "As part of my professional goal to become an Expert in Software Engineering, I aim to:\n\n- Deepen my understanding of complex and large-scale architectures\n- Improve my ability to make strategic design decisions\n- Work on systems with industrial-level constraints and scale\n\nI actively pursue these objectives through:\n\n- Analysis of existing systems\n- Reading architectural references and best practices\n- Applying these principles in real projects",
    relatedProjects: "- [InnotechFusion](/projects/innotechfusion) _ Architecture & Design\n\n- [PMT _ Project Management Tool](/projects/pmt-project-management-tool) _ Software Architecture\n\n- GE Vernova _ Software Tools Engineering \n\n  - [Interconnect Error Checker](/projects/interconnect-error-checker) _ Industrial Tooling\n\n  - [PLM Task Tracking](/projects/plm-task-tracking) _ Data Automation\n\n- Personal projects built with clear software engineering principles",
    tags: ["Clean Architecture", "SOLID", "Design Principles"],
    keywords: ["Testing", "JUnit"],
    icon: Code2,
    status: "Proficient",
  },
  {
    slug: "backend-development",
    name: "Backend Development (Java / Python / APIs)",
    domain: "technical",
    level: 4,
    tagline: "Designing reliable, scalable, and secure backend systems.",
    definition: "Backend Development is a fundamental domain of software engineering focused on implementing application business logic, data processing, database management, and secure, efficient communication with frontend interfaces through APIs.\n\nIn today's professional environment, software engineers are expected to design backend systems that are reliable, scalable, maintainable, and secure, while meeting performance and data-integrity requirements.\n\nWithin this scope, I work primarily with Java and Python, designing RESTful APIs that are clear, structured, and easily consumable by different frontend applications.",
    proofs: [
      {
        text: "**Example 1: InnotechFusion _ Backend Development (Spring Boot)**\n\nIn the InnotechFusion project, I participated in the development of the backend using Spring Boot.\nThe main challenge was to guarantee the integrity of the electronic voting process and prevent any form of duplicate voting, while providing accurate and consistent data to the frontend.\n\n**My contributions:**\n- Designed structured and well-documented REST APIs\n- Implemented business logic enforcing voting rules\n- Connected the application to a MySQL database using JPA / Hibernate\n- Implemented data validation and consistency checks\n\n**Results and added value:**\n- Reliable and secure voting system\n- Reduction of logical and human errors\n- Backend architecture that is easy to maintain and evolve",
        projectSlug: "innotechfusion",
      },
      {
        text: "**Example 2: PMT _ Project Management Tool (Backend)**\n\nIn the PMT (Project Management Tool) project, I worked on the backend layer responsible for managing projects, tasks, and their associated states in a professional workflow.\n\nThe backend was designed to expose clean and reusable APIs that could support a structured frontend while remaining flexible for future extensions.\n\n**My contributions:**\n- Designed REST APIs for project and task management (CRUD operations)\n- Implemented business rules related to project status and task progression\n- Ensured consistency between backend logic and frontend expectations\n- Structured the backend codebase for readability and long-term maintainability\n\n**Results and added value:**\n- Backend that supports clear project tracking and decision-making\n- Improved separation of concerns between frontend and backend\n- Codebase that can be extended without breaking existing features",
        projectSlug: "pmt-project-management-tool",
      },
      {
        text: "**Example 3: GE Vernova _ Python Backend Tools (Professional Experience)**\n\nDuring my work as a Python Developer Apprentice at GE Vernova, I developed backend tools dedicated to data analysis and data-quality improvement in a real industrial context.\n\nThese tools were designed to automate checks, process large datasets, and provide actionable insights to engineering teams.\n\n**My contributions:**\n- Developed Python backend scripts for data processing\n- Implemented automated validation logic for cabling error detection\n- Generated reports and dashboards used by engineering teams\n- Integrated tools with internal systems such as PLM platforms\n\n**Results and added value:**\n- Significant improvement in data quality\n- Better visibility on production indicators (FPY, OTD)\n- Reduced time required to detect and correct errors",
        projectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
      },
      {
        text: "**Example 4: API Design and Frontend-Backend Integration**\n\nAcross several academic and personal projects, I was responsible for ensuring a clean and reliable integration between frontend applications and backend services.\n\n**Focus areas:**\n- Clear API contracts\n- Separation of concerns between layers\n- Backend testability and evolvability\n\n**Results:**\n- More stable frontend applications\n- Backend systems that can evolve without breaking client applications",
      },
    ],
    selfCritique: "I consider my level in backend development to be advanced.\nI am able to:\n\n- Design clean and reusable APIs\n- Understand performance and security constraints\n- Choose the most appropriate language or framework depending on the project context\n\nAt the same time, I continue to deepen my expertise in:\n\n- Performance optimization for large-scale systems\n- Designing more complex and highly scalable backend architectures\n\nI consistently prioritize clarity, documentation, and maintainability over solutions that merely “work.”",
    nextSteps:
      "As part of my professional goal to become an Expert in Software Engineering, I aim to:\n\n- Strengthen my expertise in designing complex backend systems\n- Improve my understanding of advanced security considerations\n- Integrate DevOps practices more deeply into backend development\n\nI plan to achieve this through:\n\n- More complex professional projects\n- Analysis of real-world backend architectures\n- Continuous, practice-driven learning",
    relatedProjects: "- [InnotechFusion](/projects/innotechfusion) - Backend Development (Spring Boot)\n\n- [PMT - Project Management Tool](/projects/pmt-project-management-tool) - Backend APIs\n\n- GE Vernova :\n\n  - [Cabling Error Detection Backend Tool](/projects/interconnect-error-checker) (Python)\n\n  - [PLM Task Tracking & Data Automation Tool](/projects/plm-task-tracking) (Python)\n\n- Additional academic and personal backend projects",
    tags: ["Java", "Python", "REST APIs"],
    keywords: ["Excel Integration", "Spring Boot"],
    icon: Server,
    status: "Advanced",
  },
  {
    slug: "frontend-development",
    name: "Frontend Development (Angular / React / TypeScript)",
    domain: "technical",
    level: 4,
    tagline: "Crafting responsive and intuitive user experiences.",
    definition:
      "Frontend Development is a core software engineering discipline focused on designing and implementing the visual and interactive layers of web applications, while ensuring usability, performance, maintainability, and scalability.\n\nIn today's professional context, frontend development goes far beyond visual design. It requires a solid understanding of application architecture, state management, performance optimization, and seamless integration with backend APIs.\n \nWithin this scope, I use modern frameworks such as Angular and React, supported by TypeScript, to build structured, reliable, and testable web applications in both academic and professional projects.",
    proofs: [
      {
        text: "**Example 1: InnotechFusion _ Electronic Voting Web Application**\n\nIn the InnotechFusion project, I was responsible for developing the frontend of an electronic attendance and voting system using Angular.\nThe objective was to provide association members with a clear interface for attendance validation prior to electronic voting, including a transparent visualization of voting status (voted / not voted).\n\n**My contributions:**\n- Designed well-structured and reusable Angular components\n- Connected the frontend to REST APIs\n- Managed application state to ensure a smooth and reliable user experience\n\n**Results and added value:**\n- Clear and intuitive user interface\n- Reduction of user errors during the voting process\n- Improved overall reliability of the system",
        projectSlug: "innotechfusion",
      },
      {
        text: "**Example 2: PMT _ Project Management Tool**\n\nIn the PMT (Project Management Tool) project, I developed a frontend interface dedicated to project and task management, with a strong focus on clarity, usability, and professional workflows.\n\nThe application was built using Angular and TypeScript, enabling users to manage projects, track tasks, and monitor progress through a structured and consistent interface.\n\n**My contributions:**\n- Implemented CRUD interfaces for projects and tasks\n- Structured the UI around functional domains (projects, tasks, status)\n- Integrated REST APIs for data synchronization\n- Used TypeScript to enforce strong data models and reduce runtime errors\n\n**Results and added value:**\n- Improved visibility of project progress\n- Enhanced user experience for task management\n- Frontend codebase that is organized, maintainable, and scalable",
        projectSlug: "pmt-project-management-tool",
      },
      {
        text: "**Example 3: Personal Portfolio – Next.js (React-based) / TypeScript**\n\nI designed and developed my personal portfolio using Next.js, a React-based framework, and TypeScript to present my skills, projects, and professional journey in a structured and extensible way.\n\nThis project goes beyond a static showcase: it is a frontend application built with a clear engineering mindset, enabling dynamic content management (projects, skills, timeline) and easy long-term evolution.\n\n**My contributions**\n- Designed and implemented reusable React components within a Next.js architecture\n- Structured the frontend architecture (components, data layer, routing)\n- Applied TypeScript to enforce consistency across data models\n- Designed a scalable Skills section, linking each skill to a dedicated detail page\n- Improved navigation and overall user experience\n\n**Results and added value**\n- Professional and maintainable frontend architecture\n- Portfolio that can evolve without structural refactoring\n- Direct alignment with academic evaluation requirements",
        projectSlug: "portfolio-website",
      },
    ],
    selfCritique: "I assess my level in frontend development as advanced.\nI am able to design and implement complete frontend applications independently, choose appropriate frameworks depending on project constraints, and structure codebases for long-term maintainability.\n\n However, I remain aware that frontend engineering is a rapidly evolving field. Key areas I continue to strengthen include performance optimization, advanced state management strategies, and architectural consistency in large-scale applications.",
    nextSteps:
      "As part of my professional goal to become an Expert in Software Engineering, I aim to:\n\n- Deepen my use of TypeScript across all frontend projects\n- Improve frontend architecture for large and complex applications\n- Strengthen testing, performance, and maintainability practices\n\nI actively work toward these objectives through continuous practice, technical documentation, and the analysis of real-world frontend architectures.",
    relatedProjects: "- [InnotechFusion](/projects/innotechfusion) (Angular)\n\n- [PMT _ Project Management Tool](/projects/pmt-project-management-tool) (Angular / TypeScript)\n\n- [Personal Portfolio](/projects/portfolio-website) (React / TypeScript)",
    tags: ["Angular", "React", "TypeScript"],
    keywords: ["Next.js", "Tailwind CSS"],
    icon: Layout,
    status: "Advanced",
  },
  {
    slug: "databases-data-modeling",
    name: "Databases & Data Modeling (MySQL / SQL / PostgreSQL)",
    domain: "technical",
    level: 3,
    tagline: "Structuring data for integrity and efficiency.",
    definition:
      "Databases and Data Modeling are fundamental components of software engineering, focused on storing, organizing, and securing data while enabling applications to access it efficiently and reliably.\nIn modern professional contexts, the role of a software engineer goes far beyond writing SQL queries: it includes designing logical data models, understanding relationships between entities, and ensuring data consistency with business rules.\n\nWithin this scope, I work primarily with relational databases such as MySQL and PostgreSQL, integrating them into backend applications through ORMs like JPA / Hibernate.",
    proofs: [
      {
        text: "**Example 1: InnotechFusion _ Electronic Voting Database Design**\n\nIn the InnotechFusion project, database design was a critical element in guaranteeing the integrity of the electronic voting process.\nEach member had to be able to vote only once, with their voting status accurately tracked.\n\n**My contributions:**\n- Designed a relational data model (Users, Votes, Sessions, etc.)\n- Defined relationships between tables (One-to-Many, Many-to-One)\n- Enforced data integrity through database constraints\n- Integrated the database with Spring Boot using JPA / Hibernate\n\n**Results and added value:**\n- Prevention of duplicate votes and logical inconsistencies\n- Stable system behavior during voting sessions\n- Easier data analysis and reporting afterward",
        projectSlug: "innotechfusion",
      },
      {
        text: "**Example 2: PMT _ Project Management Tool (Data Modeling & Persistence)**\n\nIn the PMT (Project Management Tool) project, database design played a key role in structuring project and task management features.\n\nThe objective was to model projects, tasks, statuses, and relationships in a way that would support both backend business logic and frontend visualization.\n\n**My contributions:**\n- Designed relational schemas for projects, tasks, and status tracking\n- Ensured consistency between database models and backend APIs\n- Used SQL queries and ORM mappings to manage CRUD operations\n- Anticipated future feature evolution during the data modeling phase\n\n**Results and added value:**\n- Clear and coherent data structures supporting project tracking\n- Backend logic closely aligned with database design\n- Database model that can evolve without major refactoring",
        projectSlug: "pmt-project-management-tool",
      },
      {
        text: "**Example 3: GE Vernova _ Industrial Data Analysis**\n\nDuring my professional experience at GE Vernova, I worked with sensitive technical data related to cabling quality in industrial projects.\n\n**My contributions:**\n- Exploited data stored in internal systems\n- Processed and analyzed data using Python\n- Generated reports based on structured and validated datasets\n- Verified data consistency before analysis\n\n**Results and added value:**\n- Improved overall data quality\n- Reduced errors in engineering reports\n- Supported technical decision-making through reliable data",
        projectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
      },
      {
        text: "**Example 4: Additional Backend Projects**\n\nIn other backend projects, I worked extensively with databases through:\n- Writing SQL queries\n- Connecting data to REST APIs\n- Ensuring acceptable read/write performance\n\n**Results:**\n- Stable backend services\n- Frontend applications relying on consistent and trustworthy data",
      },
    ],
    selfCritique:
      "I assess my level in databases and data modeling as good to advanced.\nI am able to:\n\n- Design logical and coherent data models\n- Understand the impact of database design on performance\n- Align database structures with business logic\n\nAt the same time, I continue to improve my expertise in:\n\n- Optimizing complex SQL queries\n- Deepening my understanding of performance mechanisms such as indexing and query optimization",
    nextSteps:
      "As part of my professional development, I aim to:\n\n- Deepen my understanding of database design in large-scale systems\n- Improve my performance optimization skills\n- Explore more complex data models depending on system context\n\nI actively pursue these goals through:\n\n- Analysis of real project databases\n- Continuous hands-on practice\n- Review of professional data modeling patterns",
    relatedProjects: "- [InnotechFusion](/projects/innotechfusion) _ Data Model & Database Design\n\n- [PMT _ Project Management Tool](/projects/pmt-project-management-tool) _ Database Modeling & Persistence\n\n- GE Vernova _ Industrial Data Analysis :\n\n  - [Cabling Error Detection Backend Tool](/projects/interconnect-error-checker) \n\n- Additional backend projects relying on SQL-based databases",
    tags: ["MySQL", "PostgreSQL", "Data Modeling"],
    icon: Database,
    status: "Proficient",
  },
  {
    slug: "devops-tooling",
    name: "DevOps & Tooling (Docker / Git / CI/CD)",
    domain: "technical",
    level: 2,
    tagline: "Improving software lifecycle and collaboration through Docker, Git, and CI/CD.",
    definition:
      "DevOps & Tooling refers to a set of practices and tools aimed at improving the software application lifecycle from development to deployment while strengthening collaboration between development and operations.\n\nIn today's professional context, it is no longer sufficient for an application to work only on a local machine. It must be deployable, reproducible, and maintainable across multiple environments in a reliable and consistent way.\n\nWithin this scope, I work with tools such as Docker to standardize runtime environments, Git for version control and collaborative development, and CI/CD principles to ensure code quality and continuous delivery.",
    proofs: [
      {
        text: "**Example 1: InnotechFusion _ Containerization & Environment Standardization**\n\nIn the InnotechFusion project, Docker was used to standardize development and runtime environments across the team.\n\n**My contributions:**\n- Created Dockerfiles to run the application\n- Used Docker Compose to orchestrate services (backend, database)\n- Documented the local execution and setup process\n\n**Results and added value:**\n- Reduced “works on my machine” issues\n- Faster onboarding of new team members\n- Fully reproducible and consistent environments",
        projectSlug: "innotechfusion",
      },
      {
        text: "**Example 2: PMT _ Project Management Tool (DevOps Practices)**\n\nIn the PMT (Project Management Tool) project, I applied DevOps and tooling practices to ensure reliable execution and collaboration throughout development.\n\n**My contributions:**\n- Containerized application components to simplify setup and execution\n- Used Git to manage feature development and code integration\n- Ensured consistency between development environments and application behavior\n\n**Results and added value:**\n- Easier project setup for contributors\n- More reliable development workflow\n- Reduced configuration-related issues during development",
        projectSlug: "pmt-project-management-tool",
      },
      {
        text: "**Example 3: Git & Collaborative Development**\n\nAcross all collaborative projects, I relied on Git as the backbone of version control and teamwork.\n\n**My contributions:**\n- Organized branches according to features and fixes\n- Reviewed changes and resolved merge conflicts\n- Maintained a clear and traceable commit history\n\n**Results and added value:**\n- Smoother collaboration within teams\n- Reduced integration errors\n- Improved overall code quality",
      },
      {
        text: "**Example 4: CI/CD Awareness and Delivery Quality**\n\nIn academic projects, I became familiar with CI/CD principles by:\n- Running automated tests\n- Checking code quality before delivery\n- Ensuring version stability prior to release\n\n**Results:**\n- Stronger awareness of delivery quality\n- Fewer errors at release time\n- Increased project reliability",
      },
    ],
    selfCritique:
      "I assess my level in DevOps & Tooling as good, with a clear awareness of my current limits.\nI am able to:\n\n- Set up reproducible execution environments\n- Use Git effectively in team-based projects\n- Understand CI/CD concepts and their impact on software quality\n\nAt the same time, I recognize that this domain requires deeper expertise in large-scale and industrial environments, which I aim to acquire progressively.",
    nextSteps:
      "As part of my professional growth, I aim to:\n\n- Deepen my use of CI/CD in real-world projects\n- Improve test and deployment automation\n- Integrate DevOps practices more tightly with backend development\n\nI pursue these goals through:\n\n- Hands-on experimentation\n- Analysis of existing pipelines\n- Continuous self-directed learning",
    relatedProjects: "- [InnotechFusion](/projects/innotechfusion) _ Docker & Environment Standardization\n\n- [PMT _ Project Management Tool](/projects/pmt-project-management-tool) _ DevOps & Tooling Practices\n\n- Collaborative projects relying on Git\n\n- Academic projects applying CI/CD principles",
    tags: ["Docker", "Git", "CI/CD"],
    keywords: ["Docker Compose", "GitLab CI", "Vercel"],
    icon: Container,
    status: "Basic",
  },

  // Human Skills
  {
    slug: "problem-solving",
    name: "Problem Solving & Analytical Thinking",
    domain: "human",
    level: 4,
    tagline: "Turning complex challenges into logical solutions.",
    definition:
      "Problem Solving and Analytical Thinking are core competencies for a software engineer. The role goes beyond implementing requirements and includes analyzing complex problems, identifying their root causes, and designing effective and sustainable technical solutions.\n\nIn a professional context, this skill is used daily when dealing with unexpected defects, unclear requirements, or complex systems that require a deep understanding of interactions between components.",
    proofs: [
      {
        text: "**Example 1: GE Vernova _ Cabling Error Analysis**\n\nDuring my work at GE Vernova, I encountered recurring issues related to cabling data errors in complex engineering projects.\nThe problem was not immediately visible and usually appeared at advanced stages of the project lifecycle.\n\n**My contributions:**\n- Analyzed available datasets to identify recurring error patterns\n- Broke down the problem into smaller, manageable parts\n- Designed automated validation logic using Python\n- Tested the solution against multiple datasets\n\n**Results and added value:**\n- Earlier detection of cabling errors\n- Improved overall data quality\n- Reduced time lost on late-stage corrections",
        projectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
      },
      {
        text: "**Example 2: InnotechFusion _ Preventing Duplicate Voting**\n\nIn the InnotechFusion project, it was essential to ensure that each user could vote only once, which represented a logical challenge before being a technical one.\n\n**My contributions:**\n- Analyzed possible scenarios (duplicate attempts, page refreshes, network latency)\n- Implemented validation logic at the backend level\n- Enforced consistency through database constraints\n\n**Results and added value:**\n- Reliable and trustworthy voting system\n- Reduced logical errors\n- Increased user confidence in the application",
        projectSlug: "innotechfusion",
      },
      {
        text: "**Example 3: Debugging in Frontend Projects**\n\nAcross several frontend projects, I encountered issues with unclear origins, such as asynchronous state inconsistencies or rendering problems.\n\n**My contributions:**\n- Isolated the source of the issue\n- Used debugging tools and logs to validate hypotheses\n- Reworked state management logic where necessary\n\n**Results:**\n- Improved application stability\n- Better user experience and reliability",
      },
    ],
    selfCritique:
      "I consider problem solving and analytical thinking to be among my strongest skills.\nI am able to:\n\n- Analyze complex problems calmly and methodically\n- Avoid rushing into solutions\n- Test assumptions before implementing changes\n\nAt the same time, I continuously work on:\n\n- Improving decision-making speed without sacrificing analysis quality\n- Communicating my reasoning more clearly to teammates",
    nextSteps:
      "As part of my professional development, I aim to:\n\n- Tackle larger-scale and more complex problems\n- Improve my ability to make technical decisions under pressure\n- Strengthen analytical skills in industrial and large-scale systems\n\nI work toward these goals through:\n\n- Hands-on experience\n- Reviewing past issues and learning from them\n- Actively seeking new technical challenges",
    relatedProjects: "- GE Vernova _ Data Quality & Error Detection:\n\n  - [Cabling Error Detection Backend Tool](/projects/interconnect-error-checker) \n\n  - [PLM Task Tracking & Data Automation Tool](/projects/plm-task-tracking)\n\n- [InnotechFusion](/projects/innotechfusion) _ Business Logic & Validation\n\n- Additional frontend and backend projects",
    tags: ["Root Cause Analysis", "Debugging", "Decision Making"],
    keywords: ["Data Analysis & Visualization", "Sankey Visualization (Plotly/Matplotlib)"],
    icon: BrainCircuit,
    status: "Advanced",
  },
  {
    slug: "teamwork-communication",
    name: "Teamwork & Communication",
    domain: "human",
    level: 4,
    tagline: "Collaborating effectively to achieve common goals.",
    definition:
      "Teamwork and Communication are essential skills for a software engineer, especially in professional environments where technical and non-technical roles closely interact.\nAn engineer's role goes beyond writing code and includes the ability to communicate clearly with team members, understand their needs, share progress, and coordinate continuously to ensure project success.\n\nIn industrial and professional contexts, effective communication is a key factor in preventing misunderstandings, accelerating decision-making, and maintaining alignment within teams.",
    proofs: [
      {
        text: "**Example 1: GE Vernova _ Multidisciplinary Team Collaboration**\n\nDuring my work as a Python Developer Apprentice at GE Vernova, I was part of a multidisciplinary team including electrical engineers, system engineers, and members from various departments.\n\n**My contributions:**\n- Used Microsoft Teams for daily communication\n- Participated in regular virtual meetings\n- Communicated directly with colleagues to clarify technical needs\n- Reported progress and issues in a clear and structured way\n\n**Results and added value:**\n- Faster problem resolution\n- Reduced misunderstandings between teams\n- Improved quality of proposed solutions",
        projectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
      },
      {
        text: "**Example 2: Direct Communication with Internal Users**\n\nWhile developing Python tools at GE Vernova, communication extended beyond the technical team to include internal users of the tools.\n\n**My contributions:**\n- Actively listened to user feedback\n- Analyzed real usage needs\n- Adapted tools based on actual workflows\n- Provided simplified explanations and guidance when needed\n\n**Results and added value:**\n- Tools better aligned with real operational needs\n- Increased user adoption and trust\n- Higher overall satisfaction",
      },
    ],
    selfCritique:
      "I consider my teamwork and communication skills to be strong and continuously improving.\nI am able to:\n\n- Communicate clearly with both technical and non-technical stakeholders\n- Ask the right questions at the right time\n- Receive and integrate feedback constructively\n\nAt the same time, I continuously work on:\n\n- Simplifying complex technical concepts\n- Strengthening proactive communication to anticipate issues before they arise",
    nextSteps:
      "As part of my professional development, I aim to:\n\n- Play a more active role within technical teams\n- Improve my technical communication skills\n- Contribute more effectively to collective decision-making\n\nI work toward these goals through:\n\n- Ongoing professional experience\n- Active participation in meetings and technical discussions\n- Learning from daily interactions within teams",
    relatedProjects: "- GE Vernova _ Team Collaboration & Communication:\n\n  - [Cabling Error Detection Backend Tool](/projects/interconnect-error-checker) \n\n  - [PLM Task Tracking & Data Automation Tool](/projects/plm-task-tracking)",
    tags: ["Collaboration", "Stakeholder Communication", "Team Coordination"],
    icon: Users,
    status: "Advanced",
  },
  {
    slug: "continuous-learning",
    name: "Continuous Learning & Adaptability",
    domain: "human",
    level: 4,
    tagline: "Thriving in an ever-evolving technological landscape.",
    definition:
      "Continuous Learning and Adaptability are fundamental competencies for a software engineer, given the rapid evolution of technologies, tools, and working environments.\nAn engineer cannot rely solely on knowledge acquired at a single point in time; instead, they must be able to learn autonomously, adapt to new requirements, and adjust technical approaches depending on context and constraints.\n\nIn professional environments, this competency is demonstrated when switching between technologies, adopting new tools, or responding effectively to changing project requirements within short timeframes.",
    proofs: [
      {
        text: "**Example 1: GE Vernova _ Rapid Learning in an Industrial Environment**\n\nWhen I joined GE Vernova as a Python Developer Apprentice, I had to adapt quickly to:\n- A complex industrial environment\n- Proprietary internal tools\n- Sensitive technical data\n\n**My contributions:**\n- Rapid self-learning to understand existing systems\n- Analyzing existing codebases before adding new features\n- Asking relevant questions to fully understand the industrial context\n\n**Results and added value:**\n- Fast integration into the team\n- Delivery of effective tools within a short time\n- Reduced errors caused by misunderstanding the context",
        projectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
      },
      {
        text: "**Example 2: Transition Between Frontend Technologies**\n\nThroughout my academic and professional journey, I transitioned between multiple frontend technologies such as Angular and React, while progressively adopting TypeScript.\n\n**My contributions:**\n- Self-learning through official documentation\n- Comparing technical approaches across frameworks\n- Adapting development practices based on project size and constraints\n\n**Results and added value:**\n- Increased technical flexibility\n- Better selection of tools for each project\n- Improved code quality and maintainability",
      },
      {
        text: "**Example 3: Adapting to Changing Requirements at GE Vernova**\n\nDuring my work at GE Vernova, project requirements were not fixed from the beginning. They evolved as projects progressed and as new needs emerged from internal users and engineering teams.\nThis context required rapid adaptation to changing objectives, datasets, and sometimes even usage patterns of the developed tools.\n\n**My contributions:**\n- Reanalyzing requirements when new needs appeared\n- Adjusting tool logic without impacting existing results\n- Adapting technical solutions to real operational usage\n- Maintaining tool stability despite frequent changes\n\n**Results and added value:**\n- Tools better aligned with industrial realities\n- Increased adoption by end users\n- Deadlines respected despite changing requirements\n- Reduced need for complete rework",
        projectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
      },
    ],
    selfCritique:
      "I consider continuous learning and adaptability to be among my core strengths.\nI am able to:\n\n- Learn autonomously when required\n- Adapt to new environments and technologies\n- Reconsider technical solutions when they are no longer appropriate\n\nAt the same time, I actively work on:\n\n- Better structuring my learning time\n- Deepening knowledge rather than remaining at a superficial level for certain topics",
    nextSteps:
      "As part of my professional development, I aim to:\n\n- Maintain a consistent and sustainable learning pace\n- Deepen expertise in technologies I use daily\n- Stay prepared to adapt to future technological shifts\n\nI pursue these objectives through:\n\n- Regular reading of technical documentation\n- Hands-on practice in real projects\n- Critical analysis of technologies before adoption",
    relatedProjects: "- GE Vernova _ Adaptation to an Industrial Environment:\n\n  - [Cabling Error Detection Backend Tool](/projects/interconnect-error-checker) \n\n  - [PLM Task Tracking & Data Automation Tool](/projects/plm-task-tracking)\n\n- Multi-technology frontend and backend projects",
    tags: ["Self-Learning", "Technology Watch", "Adaptability"],
    icon: BookOpen,
    status: "Advanced",
  },
  {
    slug: "technical-documentation",
    name: "Technical Documentation & Knowledge Sharing",
    domain: "human",
    level: 4,
    tagline: "Creating clear documentation to ensure project continuity and empower teams.",
    definition:
      "Technical Documentation and Knowledge Sharing are essential components of software engineering, especially in professional and industrial environments where tools are used by multiple stakeholders and projects must remain maintainable over time.\n\nDocumentation is not limited to explaining how to use a tool. It also involves:\n\n- Clarifying technical and domain rules\n- Explaining system logic and design choices\n- Ensuring long-term maintainability\n- Facilitating knowledge transfer within teams\n\nIn professional contexts, high-quality documentation is a critical factor in project continuity and in reducing dependency on individual contributors.",
    proofs: [
      {
        text: "**Example 1: GE Vernova _ Python Tools Documentation (Step-by-Step Guides)**\n\nDuring my work at GE Vernova, I developed several Python tools used by different engineering teams.\nGiven the sensitivity of the industrial context and the diversity of users, clear and detailed documentation was essential for each tool.\n\n**My contributions:**\n- Wrote step-by-step documentation for each tool\n- Explained how to run and use the tools correctly\n- Described inputs, outputs, and usage scenarios\n- Adapted explanations for non-developer users\n\n**Results and added value:**\n- Easier adoption of tools by end users\n- Reduced recurring questions and manual support\n- Consistent and correct use of the tools",
        projectSlugs: ["interconnect-error-checker", "plm-task-tracking"],
      },
      {
        text: "**Example 2: GE Vernova _ Technical Rules Documentation (Electrical Logic)**\n\nIn the cabling error detection project, the challenge was not only technical but also knowledge-based, as validation logic relied on precise electrical rules.\n\n**My contributions:**\n- Documented the electrical rules implemented in the backend\n- Linked each engineering rule to its corresponding programmatic validation\n- Explained the rationale and impact of each rule on results\n- Ensured that backend logic accurately reflected real engineering constraints\n\n**Results and added value:**\n- Full transparency of validation logic\n- Easier review and future modification of rules\n- Enabled other engineers to understand and extend the system\n- Reduced risk of logical or domain-level errors",
        projectSlug: "interconnect-error-checker",
      },
      {
        text: "**Example 3: Knowledge Sharing Within the Team**\n\nBeyond written documentation, I actively contributed to knowledge sharing within the team.\n\n**My contributions:**\n- Explained how tools worked during meetings\n- Answered technical questions from colleagues\n- Helped team members understand backend logic and applied rules\n\n**Results:**\n- Reduced dependency on a single contributor\n- Improved collective understanding of the tools\n- Better continuity of work within the team",
      },
      {
        text: "**Example 4: GE Vernova _ Code Structure Documentation**\n\nIn addition to usage and rule documentation, I produced code structure documentation to ensure tool continuity after my departure from the team.\n\nThe objective was to enable any future developer or engineer to:\n- Understand the internal organization of the codebase\n- Identify where and how to apply modifications\n- Extend or maintain the tools without relying on implicit knowledge\n\n**My contributions:**\n- Explained the overall project structure (folders and modules)\n- Clarified the role of each major component or file\n- Documented separation between logic, data, and validation layers\n- Identified extension and modification points\n- Documented key architectural and technical decisions\n\n**Results and added value:**\n- Long-term maintainability of the tools\n- Reduced risk of development blockage after the original developer's departure\n- Enabled confident modification and extension by other team members\n- Improved overall engineering quality of the project",
      },
    ],
    selfCritique:
      "I consider my skills in technical documentation and knowledge sharing to be strong and professional.\nI am able to:\n\n- Document complex tools clearly and effectively\n- Translate technical or engineering logic into understandable explanations\n- Adapt documentation depth to the target audience\n\nAt the same time, I continue to work on:\n\n- Improving documentation structure through standardized formats\n- Increasing the use of diagrams and visual representations when relevant",
    nextSteps:
      "As part of my professional growth, I aim to:\n\n- Improve documentation quality in large-scale projects\n- Adopt more formal and industry-standard documentation practices\n- Further strengthen knowledge sharing within technical teams\n\nI work toward these goals through:\n\n- Reviewing industrial documentation standards\n- Improving presentation and organization techniques\n- Applying documentation systematically in every project",
    relatedProjects: "- GE Vernova _ Python Tools Documentation :\n\n  - [Cabling Error Detection Backend Tool](/projects/interconnect-error-checker) \n\n  - [PLM Task Tracking & Data Automation Tool](/projects/plm-task-tracking)\n\n- Backend projects requiring structured technical documentation",
    tags: ["Technical Writing", "Knowledge Transfer", "Documentation"],
    icon: FileText,
    status: "Advanced",
  },
  {
    slug: "leadership-volunteering",
    name: "Leadership & Volunteering Engagement",
    domain: "human",
    level: 3,
    tagline: "Taking responsibility and acting for the common good through civic and social engagement.",
    definition:
      "Leadership and Volunteering Engagement reflect an individual's ability to take responsibility, act for the common good, and have a positive impact on their environment—both within a professional context and beyond it.\n\nFrom my perspective, software engineering cannot be disconnected from its human dimension. Beyond technical expertise, an engineer should be aware of their role in society, able to contribute meaningfully, collaborate with others, and engage in initiatives that serve people and communities.",
    proofs: [
      {
        text: "**Example 1: Civic Service _ Unis-Cité**\n\nDuring my Service Civique with Unis-Cité, I participated in socially and civically oriented programs, including:\n- Jeunes Citoyens du Numérique\n- Cinéma & Citoyenneté\n\n**My contributions:**\n- Took part in awareness and educational activities\n- Worked within teams composed of diverse backgrounds\n- Assumed on-field responsibilities\n- Contributed to the organization and execution of initiatives\n\n**Results and added value:**\n- Strengthened sense of responsibility\n- Development of field-based leadership skills\n- Increased civic and social awareness\n\n [Civic Service _ Unis-Cité](/timeline#uniscite)",
      },
      {
        text: "**Example 2: Volunteering in Retirement Homes**\n\nI participated in volunteering activities in retirement homes, where the main objective was to provide human and social support.\n\n**My contributions:**\n- Accompanied elderly residents\n- Provided daily assistance and support\n- Created positive and respectful human interactions\n\n**Results:**\n- Improved quality of social interaction\n- Reinforced values of empathy, respect, and solidarity",
      },
      {
        text: "**Example 3: Red Cross _ Field Interventions**\n\nAs part of my involvement with the Red Cross, I contributed to several field operations, including:\n- Food distribution initiatives\n- Support during the COVID-19 vaccination campaign (2020), particularly on the technical and digital assistance side\n\n**My contributions:**\n- Organized and distributed essential supplies\n- Assisted individuals with digital tools and procedures\n- Supported field teams in high-pressure situations\n\n**Results and added value:**\n- Effective response to emergency and crisis situations\n- Application of technical skills for social impact\n- Ability to take responsibility in sensitive contexts",
      },
      {
        text: "**Example 4: Community Centers & CCAS**\n\nI also volunteered in local community organizations, including:\n- Community centers (Maison de quartier), working with children\n- CCAS (local social action centers)\n\n**My contributions:**\n- Organized educational and recreational activities\n- Worked collaboratively with children and volunteers\n- Supported local social initiatives\n\n**Results:**\n- Development of communication and leadership skills\n- Contribution to social cohesion and community well-being",
      },
    ],
    selfCritique:
      "I consider my leadership and volunteering engagement to be deeply rooted in my personal and professional journey.\nI am able to:\n\n- Take responsibility in diverse contexts\n- Work with people from different social and cultural backgrounds\n- Take initiative and contribute actively\n\nAt the same time, I aim to:\n\n- Connect these values more closely with my professional career\n- Leverage my technical expertise more effectively in socially impactful projects",
    nextSteps:
      "As part of my professional goal as an Expert in SoftwaJUnitre Engineering, I aim to:\n\n- Continue long-term community engagement\n- Support projects with both social and technical impact\n- Contribute to digital initiatives that serve the public interest",
    tags: ["Volunteering", "Social Engagement", "Responsibility"],
    icon: HeartHandshake,
    status: "Proficient",
  },
];