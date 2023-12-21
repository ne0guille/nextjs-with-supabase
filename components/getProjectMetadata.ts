import fs from "fs";
import matter from "gray-matter";

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  slug: string;
  level?: string;
}
export const getProjectContent = (slug: string) => {
  const folder = "documentation/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

const getProjectMetadata = (): PostMetadata[] => {
  const folder = "documentation/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  const documentations = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`${folder}/${fileName}`, "utf8");
    const matterResult = matter(fileContents);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      level: matterResult.data.level,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  return documentations;
};

export default getProjectMetadata;
