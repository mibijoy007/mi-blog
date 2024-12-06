import { TocItem } from "./types";
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import { visit } from 'unist-util-visit'
import rehypeStringify from 'rehype-stringify'

type HeadingNode = {
    type: 'element';
    tagName: string; // e.g., "h1", "h2", etc.
    properties?: { [key: string]: string }; // e.g., { id: "some-id" }
    children: { type: string; value?: string }[]; // Text or nested elements
  };

  
export function extractTOCFromSource(source: string): TocItem[] {
    const headings: TocItem[] = [];
  
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(rehypeStringify)
      .use(() => (tree) => {
        visit(tree, 'element', (node: HeadingNode) => {
          if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(node.tagName)) {
            // console.log('node >> ',node);
  
            const level = parseInt(node.tagName.charAt(1));
            const text = node.children[0]?.value || '';
            const id = node.properties?.id ||
              text.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  
            headings.push({ id, text: text.trim(), level });
          }
        });
      })
      .processSync(source);
  
    return headings;
  }