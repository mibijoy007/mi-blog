

import type { MDXComponents } from "mdx/types";
import React, {  DetailedHTMLProps, HTMLAttributes } from "react";



import { ImageComponentForMDX } from "@/components/ImageComponentForMDX";
import CodeComponent from "../components/CopyCode";

//dynamically  importing
// import dynamic from "next/dynamic";
// // Components relying on browser APIs like "window", "localStorage", or "document" like code editors, charts .
// const CodeComponent = dynamic(() => import("../components/CopyCode"), { ssr: false, })

export const customComponents: MDXComponents = {
  pre: ({ children, ...props }: DetailedHTMLProps<HTMLAttributes<HTMLPreElement>, HTMLPreElement>) => (
    <pre {...props} className=" p-0 rounded-lg border border-gray-500 m-0">
     <CodeComponent {...props}>{children}</CodeComponent>
    </pre>
  ),
  Image: ({ alt, width, height, src, ...props }) => (
    <ImageComponentForMDX alt={alt} width={width} height={height} src={src} {...props} />
  ),
  // code: ({children } : DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>) =>(
  //   <code className="">{children}</code>
  // ),
};