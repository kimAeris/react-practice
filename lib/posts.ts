import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "/post"); // react-practice/posts

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postDirectory); // /posts 파일 이름
  // ['pre-rendering.md', ...]

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postDirectory, fileName); // 파일의 full path
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    };
  });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return 0;
    }
  });
}
