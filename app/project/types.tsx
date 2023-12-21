export type Project = {
  id: string;
  name: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  level: ProjectLevel;
  diagramUrl: string;
  demoUrl?: string;
  videoUrl?: string;
  tasks?: string[];
};
export type ProjectPreview = Pick<
  Project,
  "id" | "name" | "description" | "level"
>;

export type ProjectLevel = "beginner" | "intermediate" | "advanced";

export type ProjectTask = {
  id: string;
  name: string;
  description: string;
  isComplete: boolean;
  documentation: string[];
  createdAt: string;
  startedAt?: string;
  completedAt?: string;
};
// example
// const project: Project = {
//     id: "1",
//     name: "Next.js with Supabase",
//     description: "A simple Next.js app with Supabase",
//     image: "/images/nextjs-with-supabase.png",
//     technologies: ["Next.js", "Supabase"],
//     github: "
//     level: "beginner",
//     diagramUrl: "/images/nextjs-with-supabase.png",
//     demoUrl: "https://nextjs-with-supabase.vercel.app/",
//     videoUrl: "https://www.youtube.com/watch?v=9Qzmri1WaaE",
// }
// const project: Project = {
//     id: "1",
//     name: "Todo App",
//     description: "A simple Todo app to get started",
//     image: "/images/nextjs-with-supabase.png",
//     technologies: ["React", "Vuejs"],
//     github: "",
//     level: "beginner",
//     diagramUrl: "/images/nextjs-with-supabase.png",
//     demoUrl: "https://nextjs-with-supabase.vercel.app/",
//     videoUrl: "https://www.youtube.com/watch?v=9Qzmri1WaaE",
// }
