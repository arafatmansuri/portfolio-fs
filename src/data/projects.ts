import { Project } from "../utils/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Course Selling Web App",
    description:
      "A comprehensive platform for selling and managing online courses, featuring user authentication, course catalog, payment integration, and admin dashboard.",
    githubUrl: "https://github.com/arafatmansuri/coursera",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    status: "in-progress",
    features: [
      "User authentication and authorization",
      "Course catalog with search and filter",
      "Payment processing",
      "Admin dashboard for content management",
      "Backend API with Express.js",
    ],
  },
  {
    id: 2,
    title: "Smart Campus Web App",
    description:
      "A comprehensive campus management system that digitizes various campus activities including attendance, schedules, notifications, and resources for students and faculty.",
    githubUrl: "https://github.com/NOBISSS/CLG_WEB",
    techs: ["React", "Node.js", "Express", "MongoDB"],
    status: "in-progress",
    features: [
      "Student and faculty portals",
      "Real-time attendance tracking",
      "Course schedule management",
      "Resource sharing",
      "Notification system",
    ],
  },
  {
    id: 3,
    title: "Bookmark Manager",
    description:
      "A web application for organizing and managing bookmarks with features like categorization, tagging, search, and browser integration.",
    githubUrl: "https://github.com/arafatmansuri/Bookmark-manager",
    techs: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    status: "in-progress",
    features: [
      "Bookmark organization with folders and tags",
      "Search and filter functionality",
      "Browser extension integration",
      "User authentication",
      "Bookmark import/export",
    ],
  },
];
