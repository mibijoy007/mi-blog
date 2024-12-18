
import { TableOfContents } from "@/components/Toc";
import compileMDXFunc from "@/lib/compileMDX";
import { extractTOCFromSource } from "@/lib/extractTOC";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";


export async function generateStaticParams() {
  // Get the list of all MDX files from the docs folder
  const docsDir = path.join(process.cwd(), "content", "docs");
  const files = await fs.promises.readdir(docsDir);
  const paths = files.map((slug) => {
    return {
      slug: slug.split("/"),
    };
  });
  // console.log("static params (paths) >> " , paths);

  return paths;
}




export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string[] };
}) {
  // console.log("FULL PARAMS:", params);
  try {
    const slugPath = params.slug.join("/");
    const filePath = path.join(
      process.cwd(),
      "content",
      "docs",
      slugPath,
      "page.mdx"
    );

    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const toc = extractTOCFromSource(fileContent)

    const compiledMDX = await compileMDXFunc(fileContent)

    if (!compiledMDX || !compiledMDX.frontmatter.published) {
      notFound()
    }

    return (
      <div className="min-h-dvh">

        {/* main content */}
        <div className="lg:flex  mx-auto max-w-3xl prose dark:prose-invert ">
          <div className="">
            {/* Frontmatter Title : {compiledMDX.frontmatter.title as string} */}
            <article className="w-[28rem] md:w-[35rem] lg:w-[50rem] max-w-3xl mx-auto md:text-xl">{compiledMDX.content}</article>
          </div>

          {/* <div className="flex  ml-44 "> */}
          <div className="hidden lg:flex ml-5  ">
            <aside className="">
              <TableOfContents headings={toc} />
            </aside>
          </div>

        </div>

      </div>
    );
  } catch (error) {
    console.error("FULL ERROR:", error);
    return (
      <div>
        Error processing page:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }
}
