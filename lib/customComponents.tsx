import type { MDXComponents } from "mdx/types";
import React, { Children, DetailedHTMLProps, HTMLAttributes } from "react";



//dynamically  importing
import dynamic from "next/dynamic";
const CodeComponent = dynamic(() => import("../components/CopyCode"), { ssr: false, })

export const customComponents: MDXComponents = {
  pre: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <pre {...props} className=" p-0 rounded-lg border border-gray-500 m-0">
     <CodeComponent>{children}</CodeComponent>
    </pre>
  ),
  // code: ({children } : DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) =>(
  //   <code className="">{children}</code>
  // ),
};