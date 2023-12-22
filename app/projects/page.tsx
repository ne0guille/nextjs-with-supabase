import Link from "next/link";
import { headers, cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { Container } from "rsuite";

import getProjectMetadata from "@/components/getProjectMetadata";
import { ProjectPreviewList } from "@/components/ProjectPreviewList";
import { ProjectPreview } from "../project/types";
import { ProjectHeader } from "@/components/ProjectHeader";

export default async function Page({
  searchParams,
}: {
  searchParams: { task: string };
}) {
  const postMetadata = getProjectMetadata();

  const mappedProjects = postMetadata.map((project) => {
    return {
      id: project.slug,
      name: project.title,
      description: project.subtitle,
      level: project.level,
    } as ProjectPreview;
  });
  return (
    <Container className="gap-4">
      <Link
        href="/"
        className="absolute left-8 top-8 py-2 px-4 rounded-md no-underline text-foreground bg-btn-background hover:bg-btn-background-hover flex items-center group text-sm"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>{" "}
        Back
      </Link>
      <ProjectHeader title={"Project & Challenge list"} />
      <ProjectPreviewList projects={mappedProjects} />
    </Container>
  );
}
