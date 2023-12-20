import { DrawerContextWrapper } from "@/context/DrawerContext";

import "./project.css";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="body-wrap project-layout ">
      <DrawerContextWrapper>{children} </DrawerContextWrapper>
    </div>
  );
}
