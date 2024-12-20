
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Calendar } from "lucide-react";
import TagsArrayInput from "./TagsArrayInput";

export interface PostItemType {
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  readingTime:number;
  // published: boolean;
}

export default function PostItem({ slug, date, title, description, tags,readingTime } : PostItemType) {
  // console.log("readingTime >> ",readingTime);
  
    return (
        // <article className="flex max-w-[30rem] md:min-w-[40rem] flex-col gap-2 border-border border  py-3 hover:border-[2px] hover:border-blue-600 rounded-lg p-3 m-2  hover:transition hover:duration-500 duration-500 hover:-translate-y-3">
        <article className="flex flex-col gap-2 border-border border  py-3 hover:border-[2px] hover:border-blue-600 rounded-lg p-3 m-2  hover:transition hover:duration-500 duration-500 hover:-translate-y-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
          {/* <Link href={`/${slug}`}>{title}</Link> */}
        </h2>
      </div>

      <TagsArrayInput tags={tags}/>

      {/* <div className="max-w-none text-muted-foreground">{description}</div> */}
      <div className="text-muted-foreground text-sm sm:text-lg my-2">{description}</div>
      <div className="flex justify-between items-center">

        <div className="sm:flex text-xs sm:text-base font-medium">
       
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="  flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)} </time>
          </dd>
        </dl>

          <div className="mt-2 ml-1 sm:mt-0 ">
               -- {" "}{readingTime} min read
          </div>

          </div>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0 text-xs sm:text-base")}
        >
          Read more →
        </Link>


      </div>
    </article>
    )
}