import type { MDXComponents } from "mdx/types";
import React, { DetailedHTMLProps, HTMLAttributes } from "react";



//dynamically  importing
import dynamic from "next/dynamic";
const CodeComponent = dynamic(() => import("../components/CopyCode"), { ssr: false, })

export const customComponents: MDXComponents = {
  pre: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <pre {...props} className=" p-0 rounded-lg border border-gray-500 ">
     <CodeComponent>{children}</CodeComponent>
    </pre>
  ),
};