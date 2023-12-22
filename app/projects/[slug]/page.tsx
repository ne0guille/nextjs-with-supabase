import fs from "fs";
import Markdown from "markdown-to-jsx";
import matter from "gray-matter";
import getProjectMetadata from "@/components/getProjectMetadata";
import { ProjectHeader } from "@/components/ProjectHeader";

const getProjectContent = (slug: string) => {
  const folder = "documentation/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  const project = getProjectMetadata();
  return project.map(({ slug }) => ({ slug }));
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const post = getProjectContent(slug);
  return (
    <div>
      <ProjectHeader title={post.data.title} />
      <article className="prose">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  );
};

export default PostPage;
