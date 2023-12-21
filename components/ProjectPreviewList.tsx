import { ProjectPreview } from "@/app/project/types";
import Link from "next/link";

type ProjectPreviewProps = {
  projects: ProjectPreview[];
};

const ProjectPreviewItem = ({
  id: slug,
  name,
  description,
  level,
}: ProjectPreview) => {
  return (
    <div
      className="border border-blue-500 p-4 rounded-md shadow-sm
    bg-white hover:scale-105 transform transition-all duration-200"
    >
      <Link href={`/projects/${slug}`}>
        <h2 className="text-blue-600 hover:underline mb-1 capitalize">
          {name}
        </h2>
      </Link>
      <p className="text-slate-700">{description}</p>
      <p>{level}</p>
    </div>
  );
};

export const ProjectPreviewList = ({ projects }: ProjectPreviewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {projects.map((project: ProjectPreview) => (
        <ProjectPreviewItem key={project.id} {...project} />
      ))}
    </div>
  );
};
