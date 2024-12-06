import fs from "node:fs";
import { compileMDX } from "next-mdx-remote/rsc";
import path from "node:path";
import type { MDXComponents } from "mdx/types";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import { extractTOCFromSource } from "@/lib/extractTOC";
import rehypeSlug from "rehype-slug";
import { TableOfContents } from "@/components/Toc";

export async function generateStaticParams() {
  // Get the list of all MDX files from the docs folder
  const docsDir = path.join(process.cwd(), "content", "docs");
  const files = await fs.promises.readdir(docsDir);
  const paths = files.map((slug) => {
    return {
      slug: slug.split("/"),
    };
  });
  return paths;
}

//dynamically  importing
import dynamic from "next/dynamic";
const CodeComponent = dynamic(() => import("../../../components/CopyCode"), { ssr: false, })

const customComponents: MDXComponents = {
  pre: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <pre {...props} className=" p-0 rounded-lg border border-gray-500 ">
      <CodeComponent>{children}</CodeComponent>
    </pre>
  ),
};


export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string[] };
}) {
  // console.log("FULL PARAMS:", params);

  const slugPath = params.slug.join("/");
  const filePath = path.join(
    process.cwd(),
    "content",
    "docs",
    slugPath,
    "page.mdx"
  );

  try {
    const fileContent = await fs.promises.readFile(filePath, "utf-8");

    const compiledMDX = await compileMDX({
      source: fileContent,
      components: customComponents,
      options: {
        parseFrontmatter: true,
        mdxOptions: {
          remarkPlugins: [remarkGfm],
          rehypePlugins: [
            [rehypeHighlight],
            rehypeSlug,
          ],
        },
      },
    });

    const toc = extractTOCFromSource(fileContent)

    return (
      <div className="top-10 min-h-dvh ">
       
        {/* main content */}
        <div className="flex ">
          <div className=" ml-5  prose dark:prose-invert ">
            {/* Frontmatter Title : {compiledMDX.frontmatter.title as string} */}
            <article className="w-[42rem]">{compiledMDX.content}</article>
          </div>

          {/* toc */}
          <div className="ml-40 flex  ">
            <aside>
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
