interface Project {
  id: string;
  title: string;
  date: string;
  description: string;
  longDescription?: string;
  links?: {
    github?: string;
    demo?: string;
    api?: string;
    swagger?: string;
  };
  tags: string[];
  features?: string[];
  technologies?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Breezy",
    date: "July 2025",
    description: "Twitter like built with Next.js, Tailwind CSS.",
    longDescription:
      "A Twitter-like web application built with Next.js and Tailwind CSS, featuring real-time updates, user authentication, and a responsive design. The project showcases my skills in modern web development and UI/UX design.",
    links: {
      github: "https://github.com/Nej-ma/Breezy",
      demo: "https://breezy.website",
      swagger: "https://docs.breezy.website/docs/",
    },
    tags: [
      "Web",
      "NextJS",
      "NextJS",
      "ExpressJS",
      "MongoDB",
      "Traefik",
      "FISA INFO A3",
    ],
    features: [
      "User authentication and registration",
      "Create, like, and delete posts",
      "Real-time feed updates",
      "Responsive design",
      "Secure API interactions via middleware",
      "Integrated with a fully containerized backend (Docker + Traefik)",
    ],
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Docker",
      "Traefik",
    ],
  },
  {
    id: "2",
    title: "EasySave",
    date: "February 2025",
    description:
      "EasySave is a data backup software developed to let users easily create, manage, and execute up to 5 backup jobs, either full or differential.",
    longDescription:
      "EasySave is a backup application developed by ProSoft that enables users to create up to five backup jobs—full or differential—for secure data management. Backups can be executed one at a time or in parallel, giving flexible options for workflow. The solution offers daily and real-time logging, available in JSON or XML formats, and is built as a C# console application with .NET 8 using an MVVM-inspired layered architecture to ensure modularity and maintainability. EasySave supports both French and English, allows comprehensive configuration (log format, language, encrypted file extensions), and can pause backups automatically when specified business applications are running. Users can set file size limits for backups, helping ensure optimal storage use and performance.",
    tags: [".NET8", "C#", "FISA INFO A3"],
    features: [
      "Create up to 5 backup jobs (full or differential)",
      "Run backups in parallel or sequentially",
      "Detailed daily and real-time logging (JSON or XML format)",
      "Console application built with C#/.NET 8 (MVVM architecture)",
      "Bilingual support (English and French)",
      "Customizable configuration: log format, language, encrypted file extensions",
      "Business application management (pause backups when specific apps are running)",
      "Maximum file size limits for backups and parallel jobs",
    ],
    technologies: [".NET 8", "C#", "WPF", "MVVM", "SQLite"],
  },
  {
    id: "3",
    title: "GSBStock",
    date: "June 2024",
    description:
      "It enables users—administrators, employees, and clients—to track, order, and control stock levels through a secure interface, with access levels tailored to each user role.",
    longDescription:
      "GSBStock uses an MVC architecture in PHP, backed by a relational MySQL database. User accounts are managed with multiple security measures—including password hashing and status validation. The system supports automated inventory updates via triggers after order completion and restricts user actions based on role and access level. Deployment is streamlined with Docker for easy setup on any machine, and role-based interfaces optimize user workflow. The application aims not only to digitize stock management for GSB but also to allow developers to learn professional practices: mastering C#, deepening SQL/database skills, and building robust, secure web apps. Testing is facilitated via multiple demo accounts, and user experiences differ depending on their permissions.",
    tags: ["Web", "PHP Vanilla", "BTS SIO A2"],
    links: {
      github: "https://github.com/iKagnana/ap4-GSBStock",
    },
    features: [
      "User Roles: Administrator, Employee, and Client, each with specific permissions and access levels​",
      "Stock Management: Track and manage product inventory for pharmaceutical sales​",
      "Order Handling: Create incoming (positive) and outgoing (negative) orders, with order validation​",
      "Role-Based Interfaces: Users see tailored navigation and controls based on their role",
      "Account Management: Registration, admin approval, and enterprise affiliation for clients​",
      "Access Level Control: Three-tier access to restrict product operations by user level",
      "Automated Stock Updates: Trigger updates inventory after order validation​",
      "Password Security: Passwords hashed and verified before account access​",
      "Input Validation: Strict checks on user inputs (e.g., emails, password strength)",
      "Error Management: Inform users of failed operations, with SGBD error handling",
      "Data Protection: Sensitive credentials kept in environment files",
      "Deployment via Docker: Fast setup and multi-container support on any machine",
    ],
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    id: "4",
    title: "eMeds",
    date: "May 2024",
    description:
      "eMEDS is a desktop application for doctors to manage patient prescriptions, including allergies, medical history, and medication compatibility checks.",
    longDescription:
      "eMEDS enables doctors to create, consult, and generate PDF prescriptions, handling allergic and medication incompatibilities with real-time alerts. The C# software uses a MySQL database, features admin/user role separation, secure password encryption, and robust error handling to ensure safe prescription management",
    links: {
      github: "https://github.com/iKagnana/AP3-eMEDS",
    },
    tags: ["WinForms", "C#", "BTS SIO A2"],
    features: [
      "Medication management: add, modify, delete, search, and handle incompatibilities",
      "Doctor management: add, modify, delete, search; admin/user roles with specific rights",
      "Allergy and medical history management: create, modify, delete, consult; admin-only access",
      "Patient management: add, modify, delete; manage medical records, allergies, and histories",
      "Prescription management: create, consult, generate PDF; real-time compatibility checks",
      "Password security: encryption with BCrypt, secure authentication",
      "Error handling: try/catch blocks, ErrorHandler and RequestStatus classes for user feedback",
      "SQL queries: parameterized to prevent injections",
      "User input sanitation and comprehensive form validation",
      "Secure storage of database connection in app.config",
      "Interface adapts to doctor role (admin/user)",
    ],
    technologies: ["C#", ".NET Framework", "WinForms", "SQLite"],
  },
  {
    id: "5",
    title: "Taskies",
    date: "September 2023",
    description: "Task management application.",
    longDescription:
      "Taskies centralizes task management and communication for employees, allowing administrators to create users and assign roles, directors and referents to distribute tasks, and employees to view and update their own work. It utilizes a modern tech stack including TypeScript, React, Node.js, Docker, and MongoDB, with user authentication and role-based access control for security and flexibility.",
    links: {
      github: "https://github.com/iKagnana/AP3-eMEDS",
      api: "https://github.com/iKagnana/AP2-Taskies-API",
    },
    tags: [
      "Web",
      "React",
      "Typescript",
      "ExpressJS",
      "MongoDB",
      "MERN",
      "BTS SIO A1",
    ],
    features: [
      "User authentication and role management",
      "Admin dashboard: add, edit, and delete users",
      "Password security with random generation and email delivery",
      "Forgot password and reset via email link",
      "Task creation, assignment, editing, and deletion by role",
      "Role-based views for admin, director, referent, employee",
      "Statistics and personal dashboard for users and teams",
      "Protected routes and API endpoints with token and role checks",
      "Comment and file attachment on tasks",
      "Modern UI using React and TypeScript",
      "Frontend deployed via Vercel, backend via Docker",
      "Secure database and environment variable management",
    ],
    technologies: ["React", "TypeScript", "Node.js", "Express.js", "MongoDB"],
  },
  {
    id: "6",
    title: "Plenty",
    date: "February 2023",
    description:
      "Plenty is a mobile app designed to help users optimize their grocery shopping by finding the best deals, creating custom shopping lists, and saving their favorite products.",
    longDescription:
      "The app provides a platform for users—especially students and budget-conscious individuals—to discover, compare, and report food bargains across stores. Plenty allows product search by name or category, price tracking, and community reporting of price changes or product availability, with options for saving favorites and building personal grocery lists. The project is built in React Native with a PostgreSQL backend, using modern tools including Docker and GitHub.",
    tags: [
      "Mobile",
      "React Native",
      "Javascript",
      "ExpressJS",
      "MongoDB",
      "MERN",
      "BTS SIO A1",
    ],
    links: {
      github: "https://github.com/MarineRcher/plenty",
      api: "https://github.com/MarineRcher/Plenty-API",
    },
    features: [
      "Add grocery products with price, store, photo, and category",
      "Sort and filter products by category",
      "Search for products by name",
      "Report price changes or discontinued products",
      "Save products as favorites",
      "Create and manage custom shopping lists",
      "User account creation for saving favorites, reviews, and shopping lists",
      "Community rating and review system",
      "React Native front-end for Android/iOS compatibility",
      "PostgreSQL database backend",
      "REST API with Node.js and Express.js",
      "Docker-based deployment",
      "Image upload from device gallery",
      "Barcode scanning for fast input (future feature)",
      "Password encryption and Google login (future features)",
    ],
    technologies: [
      "React Native",
      "JavaScript",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
  },
];