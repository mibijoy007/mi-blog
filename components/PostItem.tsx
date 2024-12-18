
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { Calendar } from "lucide-react";
import { badgeVariants } from "./ui/badge";

export interface PostItemType {
  slug: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  // published: boolean;
}

export default function PostItem({ slug, date, title, description, tags } : PostItemType) {

    return (
        <article className="flex flex-col gap-2 border-border border-b py-3 hover:border-[2px] hover:border-blue-600 rounded-lg p-2 m-2  hover:transition hover:duration-500 hover:-translate-y-3">
      <div>
        <h2 className="text-2xl font-bold">
          <Link href={slug}>{title}</Link>
          {/* <Link href={`/${slug}`}>{title}</Link> */}
        </h2>
      </div>
      <div className="flex gap-2">
        {tags?.map((tag,index) => (
            <div key={tag+index}>
              <Link href={`/tags/${tag}`}
               className={badgeVariants({
                // variant: current ? "default" : "secondary",
                variant: "secondary",
                className: " rounded-lg text-sm md:text-base m-1 my-1.5 text-center px-2 hover:bg-gray-400/40 dark:hover:bg-gray-600",
              })}
              >
                {tag}
              </Link>
            </div>
            // <Tags  key={`tags-${index}`}/>
        //   <Tag tag={tag} key={tag} />
        ))}
      </div>
      <div className="max-w-none text-muted-foreground">{description}</div>
      <div className="flex justify-between items-center">
        <dl>
          <dt className="sr-only">Published On</dt>
          <dd className="text-sm sm:text-base font-medium flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </dd>
        </dl>
        <Link
          href={slug}
          className={cn(buttonVariants({ variant: "link" }), "py-0")}
        >
          Read more →
        </Link>
      </div>
    </article>
    )
}