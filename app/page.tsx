import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/lib/siteConfig";
import { cn } from "@/lib/utils";
// import { posts } from "#site/content";
import Link from "next/link";
// import { PostItem } from "@/components/post-item";

export default function Home() {
  // const latestPosts = sortPosts(posts).slice(0, 5);
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:mt-10 lg:py-32">
        <div className="container flex flex-col gap-4 text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-balance">
            Hello, I&apos;m Maksudul Islam
          </h1>
          {/* max-w-[42rem] */}
          <p className="max-w-[55rem] mx-auto text-muted-foreground sm:text-xl text-balance">
            A Full-Stack Developer with over 3 years of hands-on experience in building dynamic web applications specialized
            in MERN stack with Typescript. 
            {/* Committed to delivering better user experiences through innovative solutions and a problem
            solving mindset. Eager to secure a full-time position where I can contribute my skills to a fast-paced development environment.           */}
            </p>
          <div className="flex flex-col gap-4 justify-center sm:flex-row">
            <Link
              href="/docs"
              className={cn(buttonVariants({ size: "lg" }), "w-full sm:w-fit")}
            >
               Blogs
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "w-full sm:w-fit"
              )}
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
     
    </>
  );
}
