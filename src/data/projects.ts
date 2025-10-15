import { Project } from "../utils/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Second Brain - AI-Powered Knowledge Hub",
    description:
      "A MERN-based app where users upload PDFs, videos, and other content, and interact with an AI-powered bot that answers questions based on the uploaded material.",
    githubUrl: "https://github.com/arafatmansuri/second-brain", // update with actual link
    techs: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    status: "completed",
    features: [
      "Upload and categorize documents, videos, PDFs",
      "AI-powered chatbot for answering queries",
      "Search and summarization features",
      "Backend content management system",
    ],
  },
  {
    id: 2,
    title: "Bookmark Manager",
    description:
      "A web application for organizing and managing bookmarks with features like categorization, search",
    githubUrl: "https://github.com/arafatmansuri/Bookmark-manager",
    techs: ["React", "TypeScript", "Node.js", "Express", "MongoDB"],
    status: "completed",
    features: [
      "Bookmark organization with tags",
      "Search and filter functionality",
      "User authentication",
    ],
  },
  {
    id: 3,
    title: "Draw Board - Collaborative Drawing App",
    description:
      "A collaborative drawing application where multiple users can draw on a shared canvas in real-time, with session management and interactive tools.",
    githubUrl: "https://github.com/arafatmansuri/DrawBoard",
    techs: [
      "TypeScript",
      "Next.js",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "WebSocket",
    ],
    status: "in-progress",
    features: [
      "Real-time collaborative drawing using WebSocket",
      "Backend APIs for session management and user interactions",
      "Smooth communication between client and server",
      "Scalable architecture for multiple simultaneous users",
    ],
  },
  {
    id: 4,
    title: "Course Selling Backend",
    description:
      "A comprehensive platform for enrolling and managing online courses, featuring user authentication, course catalog.",
    githubUrl: "https://github.com/arafatmansuri/coursera",
    techs: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    features: [
      "User authentication and authorization",
      "Course catalog with search and filter",
      "Backend API with Express.js",
    ],
  },
  {
    id: 5,
    title: "Smart Campus Backend",
    description:
      "A comprehensive campus management backend that digitizes various campus activities including schedules, notifications, and resources for students and faculty.",
    githubUrl: "https://github.com/NOBISSS/SMART-CAMPUS",
    techs: ["JavaScript", "React", "Node.js", "Express", "MongoDB"],
    status: "completed",
    features: [
      "Student portal",
      "Course schedule management",
      "Resource sharing",
      "Notification system",
    ],
  },
];
