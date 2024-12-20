
import TagsArrayInput from "@/components/TagsArrayInput";
// import { TableOfContents } from "@/components/Toc";
import compileMDXFunc from "@/lib/compileMDX";
// import { extractTOCFromSource } from "@/lib/extractTOC";
import { siteConfig } from "@/lib/siteConfig";
import { formatDate } from "@/lib/utils";
import { Metadata } from "next";
// import Image from "next/image";
import { notFound } from "next/navigation";
import fs, { statSync } from "node:fs";
import path from "node:path";

// The data returned from the generateStaticParams() function will be an array of objects, where each object contains the dynamic parameter (slug) that corresponds to a route. Each object in the array represents one static path to be generated at build time.
// [
//   { slug: "post-1" },
//   { slug: "post-2" },
//   { slug: "post-3" }
// ]

export async function generateStaticParams() {
  // Get the list of all MDX files from the docs folder
  const docsDir = path.join(process.cwd(), "content", "docs");
  // const docsDir = path.join( "content", "docs");
  const files = await fs.promises.readdir(docsDir);
  const paths = files.map((slug) => {

    if(slug != '.gitkeep'){
     
      return {
        slug: slug.split("/"),
      };
    }

  });
  // console.log("static params (paths) >> " , paths);
  return paths;
}

interface PagePropsType {
  params: {
    slug:string[]
  }
}


export async function generateMetadata({params}:PagePropsType
): Promise<Metadata> {

  
  const slugPath = params.slug.join("/");
  // console.log("slugPath   >>>",`/docs/${slugPath}`);
  
  let filePath = ''

  if(slugPath != '.gitkeep'){
     filePath = path.join(
      process.cwd(),
      "content",
      "docs",
      slugPath,
      "page.mdx"
    );
  }

    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    const compiledMDX = await compileMDXFunc(fileContent)

    if(!compiledMDX.content){
      return {};
    }

    const openGraphImageSearchParams = new URLSearchParams();

    openGraphImageSearchParams.set("title",compiledMDX.frontmatter.title as string)
    
  return {
    title: compiledMDX.frontmatter.title as string,
    description : compiledMDX.frontmatter.description as string,
    authors : {name : siteConfig.author},
    openGraph:{
      title: compiledMDX.frontmatter.title as string,
      description : compiledMDX.frontmatter.description as string,
      type : "article",
      url : `/docs/${slugPath}`,
      images : [
        {
          url : `/api/opengraph-image?${openGraphImageSearchParams.toString()}`,
          width: 1200,
          height: 630,
          alt: compiledMDX.frontmatter.title as string,
        }
      ]
    },
    twitter : {
      card : "summary_large_image",
      title: compiledMDX.frontmatter.title as string,
      description: compiledMDX.frontmatter.description as string,
      // images : [`/api/opengraph-image?${openGraphImageSearchParams.toString()}`]
      images : [
        {
          url : `/api/opengraph-image?${openGraphImageSearchParams.toString()}`,
          // we won't specify width for twitter OG image
          alt: compiledMDX.frontmatter.title as string,
        }
      ]
    }


  }
}




export default async function SingleBlogPage({
  params,
}: {
  params: { slug: string[] };
}) {
  // console.log("FULL PARAMS:", params);
  try {
    const slugPath = params.slug.join("/");
    // console.log(slugPath);
    let filePath = ''

    if(slugPath != '.gitkeep'){
       filePath = path.join(
        process.cwd(),
        "content",
        "docs",
        slugPath,
        "page.mdx"
      );
    }
    

    const fileContent = await fs.promises.readFile(filePath, "utf-8");
    // const toc = extractTOCFromSource(fileContent)

    
    const compiledMDX = await compileMDXFunc(fileContent)
    let date = ''
    const frontmatterDate = typeof compiledMDX.frontmatter.date === 'string' ? compiledMDX.frontmatter.date : '' 
    const fileStats = statSync(filePath); 
    const fileDate = fileStats.birthtime.toISOString()
    // frontmatterDate ?  date = frontmatterDate : date = fileDate
    if (frontmatterDate) {
      date = frontmatterDate;
    } else {
      date = fileDate;
    }
   
    const wordsCount = fileContent.split(/\s+/).length
    const wordsPerMinute = 200;
    const readingTime = Math.ceil(wordsCount /wordsPerMinute)


    if (!compiledMDX || !compiledMDX.frontmatter.published) {
      notFound()
    }

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      "headline": compiledMDX.frontmatter.title as string,
      "description" : compiledMDX.frontmatter.description as string,
      "image": [
        // "https://example.com/photos/1x1/photo.jpg",
        // "https://example.com/photos/4x3/photo.jpg",
        // "https://example.com/photos/16x9/photo.jpg"
       ],
      "datePublished": date,
      "dateModified": date,
      "author": [{
          "@type": "Person",
          "name": siteConfig.author,
          "url": siteConfig.links.github
        }
    ]
    }


    return (
      <div className="min-h-dvh">

        {/* jsonLd */}
        <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

        {/* main content */}
        <div className="lg:flex  mx-auto   max-w-3xl prose dark:prose-invert ">
          
          <div className="">
            {/* Frontmatter Title  */}
            <h1 className=" font-bold text-3xl lg:text-5xl mb-3 md:mb-5 pb-0 capitalize">
            {compiledMDX.frontmatter.title as string}
            </h1>
            <div>

            <TagsArrayInput tags={compiledMDX.frontmatter.tags as string[]}  />
            </div>
              <div className="m-2">
              {/* <Image alt="github-avatar" width={80} height={80} src={'/icon.png'}/> */}
            {formatDate(date)} -- {readingTime} min read
              </div>
            <hr className="my-2 p-0"/>
            
            <article className="w-[28rem] md:w-[40rem] lg:w-[50rem] max-w-3xl mx-auto md:text-xl">{compiledMDX.content}</article>
          </div>

          {/* <div className="flex  ml-44 "> */}
          {/* <div className=" hidden lg:flex ml-5  ">
            <aside className="">
              <TableOfContents headings={toc} />
            </aside>
          </div> */}

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
