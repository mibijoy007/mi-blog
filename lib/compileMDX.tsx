

import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import 'highlight.js/styles/atom-one-dark-reasonable.css'
import rehypeSlug from "rehype-slug";
import { customComponents } from "./customComponents";




export default async function compileMDXFunc(fileContent:string) {
  console.log("MDX is processing...")
  
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
  
    return compiledMDX
}